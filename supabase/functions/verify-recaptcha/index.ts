const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { token, formData } = await req.json();

    if (!token || typeof token !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'Hiányzó captcha token' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const secret = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!secret) {
      return new Response(JSON.stringify({ success: false, error: 'Szerver konfigurációs hiba' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const params = new URLSearchParams({ secret, response: token });
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const verifyData = await verifyRes.json();

    console.log('reCAPTCHA verify response:', verifyData);

    // v3 returns success + score (0.0 - 1.0). Threshold 0.5 is standard.
    if (!verifyData.success || (typeof verifyData.score === 'number' && verifyData.score < 0.5)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Botgyanús kérés, kérjük próbálja újra', details: verifyData }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // TODO: itt lehet emailt küldeni / DB-be írni a formData-t
    console.log('Form beérkezett:', formData);

    return new Response(JSON.stringify({ success: true, score: verifyData.score }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('verify-recaptcha error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Szerver hiba' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});