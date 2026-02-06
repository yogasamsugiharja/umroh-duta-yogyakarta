import { motion } from "framer-motion";
import { Car, BookOpen, HeartHandshake, Plane, Hotel, UtensilsCrossed } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Antar Jemput dari Rumah",
    description: "Kami menjemput & mengantar Anda dari dan ke rumah. Tidak perlu repot ke bandara sendiri.",
  },
  {
    icon: BookOpen,
    title: "Manasik Privat",
    description: "Bimbingan manasik secara private sehingga Anda lebih siap & percaya diri menjalankan ibadah.",
  },
  {
    icon: HeartHandshake,
    title: "Pendamping Manula",
    description: "Pendampingan khusus bagi jamaah lanjut usia agar ibadah nyaman dan aman.",
  },
  {
    icon: Plane,
    title: "Tiket Pesawat PP",
    description: "Penerbangan langsung pulang pergi sudah termasuk dalam paket umroh.",
  },
  {
    icon: Hotel,
    title: "Hotel Bintang 3",
    description: "Penginapan nyaman dekat Masjidil Haram & Masjid Nabawi.",
  },
  {
    icon: UtensilsCrossed,
    title: "Makan 3x Sehari",
    description: "Menu halal & bergizi selama perjalanan, termasuk masakan Indonesia.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Keunggulan Kami</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Kenapa Memilih <span className="text-primary">Umroh Duta?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Layanan lengkap dan personal untuk perjalanan ibadah yang tenang dan bermakna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <benefit.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
