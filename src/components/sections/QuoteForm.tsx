import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const extras = ["Erkély", "Terasz", "Garázs", "Tároló", "Kert", "Lift", "Központi fűtés", "Klíma"];

const schema = z.object({
  name: z.string().trim().min(2, "Adja meg a nevét").max(100),
  email: z.string().trim().email("Érvénytelen e-mail cím").max(255),
  phone: z.string().trim().min(6, "Adja meg a telefonszámát").max(30),
  address: z.string().trim().min(5, "Adja meg az ingatlan címét").max(255),
  type: z.enum(["lakas", "haz", "egyeb"]),
  floor: z.string().trim().max(20).optional(),
  area: z.string().trim().min(1, "Adja meg az alapterületet").max(10),
  condition: z.enum(["uj", "jo", "felujitando", "erosen"]),
});

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selExtras, setSelExtras] = useState<string[]>([]);
  const [type, setType] = useState("lakas");
  const [condition, setCondition] = useState("jo");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      address: String(fd.get("address") || ""),
      type,
      floor: String(fd.get("floor") || ""),
      area: String(fd.get("area") || ""),
      condition,
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message || "Hibás adatok");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="ajanlatkeres" className="py-24 bg-gradient-hero">
        <div className="container max-w-2xl text-center text-primary-foreground">
          <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">Köszönjük a jelentkezését!</h2>
          <p className="text-lg text-primary-foreground/85">24 órán belül felvesszük Önnel a kapcsolatot.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="ajanlatkeres" className="py-24 bg-gradient-hero">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 text-primary-foreground">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Ajánlatkérés</p>
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-3">Kérje ingyenes, kötelezettség nélküli ajánlatunkat</h2>
          <p className="text-primary-foreground/80">Töltse ki az űrlapot, és 24 órán belül felvesszük Önnel a kapcsolatot.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant space-y-8">
          <div>
            <h3 className="text-lg mb-4">Személyes adatok</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div><Label htmlFor="name">Név</Label><Input id="name" name="name" required maxLength={100} /></div>
              <div><Label htmlFor="email">E-mail cím</Label><Input id="email" name="email" type="email" required maxLength={255} /></div>
              <div><Label htmlFor="phone">Telefonszám</Label><Input id="phone" name="phone" required maxLength={30} /></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-4">Ingatlan adatai</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2"><Label htmlFor="address">Ingatlan címe</Label><Input id="address" name="address" required maxLength={255} /></div>
              <div>
                <Label>Ingatlan típusa</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lakas">Lakás</SelectItem>
                    <SelectItem value="haz">Ház</SelectItem>
                    <SelectItem value="egyeb">Egyéb</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label htmlFor="floor">Emelet</Label><Input id="floor" name="floor" maxLength={20} /></div>
              <div><Label htmlFor="area">Alapterület (m²)</Label><Input id="area" name="area" type="number" min={1} required /></div>
              <div>
                <Label>Állapot</Label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uj">Új</SelectItem>
                    <SelectItem value="jo">Jó</SelectItem>
                    <SelectItem value="felujitando">Felújítandó</SelectItem>
                    <SelectItem value="erosen">Erősen felújítandó</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-6">
              <Label className="mb-3 block">Extrák</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {extras.map((x) => (
                  <label key={x} className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox
                      checked={selExtras.includes(x)}
                      onCheckedChange={(c) =>
                        setSelExtras((p) => (c ? [...p, x] : p.filter((i) => i !== x)))
                      }
                    />
                    {x}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <Button type="submit" variant="hero" size="xl" className="w-full">
            Küldés – kérek ajánlatot
          </Button>
        </form>
      </div>
    </section>
  );
};
