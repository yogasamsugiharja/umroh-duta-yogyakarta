import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import madinahImage from "@/assets/madinah.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${madinahImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground max-w-2xl mx-auto leading-tight">
            Siap Mewujudkan Impian ke <span className="text-gradient-gold">Tanah Suci?</span>
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan informasi lengkap tentang paket umroh kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90 px-8">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Kami
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Phone className="w-4 h-4" />
              0812-3456-7890
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
