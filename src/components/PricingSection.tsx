import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Tiket pesawat PP",
    "Hotel bintang 3 (dekat Haram)",
    "Makan 3x sehari",
    "Visa umroh",
    "Antar jemput rumah",
    "Manasik privat",
    "Pendamping manula",
    "Mutawwif berpengalaman",
    "Ziarah Makkah & Madinah",
    "Air zamzam 5 liter",
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Paket Umroh</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Investasi untuk <span className="text-primary">Akhirat</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-2xl border-2 border-primary shadow-card-hover overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-8 text-center">
              <h3 className="font-display text-2xl font-bold">Paket Reguler 11 Hari</h3>
              <p className="text-primary-foreground/80 text-sm mt-1">Full service, full kenyamanan</p>
              <div className="mt-6">
                <span className="text-sm">Mulai dari</span>
                <div className="font-display text-5xl font-bold mt-1">
                  Rp 29<span className="text-2xl">jt</span>
                </div>
                <span className="text-sm text-primary-foreground/70">per jamaah</span>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full mt-8 gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                * Harga dapat berubah sewaktu-waktu
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
