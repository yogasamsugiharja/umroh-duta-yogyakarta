import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Siti Aminah",
    location: "Sleman, Yogyakarta",
    text: "Alhamdulillah, pelayanannya sangat memuaskan. Dari jemput di rumah sampai pulang lagi ke rumah semua diurus. Saya yang sudah sepuh merasa sangat terbantu dengan adanya pendamping.",
    rating: 5,
  },
  {
    name: "Bapak Ahmad Fauzi",
    location: "Bantul, Yogyakarta",
    text: "Ini umroh kedua saya bersama Umroh Duta. Manasik privatnya sangat membantu kami sekeluarga memahami tata cara ibadah dengan baik. Hotel dekat Haram, sangat nyaman.",
    rating: 5,
  },
  {
    name: "Ibu Rahmawati",
    location: "Kota Yogyakarta",
    text: "Harganya terjangkau tapi pelayanannya luar biasa. Ibu saya yang berusia 75 tahun didampingi dengan sangat baik. Terima kasih Umroh Duta Persada!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimoni</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Kata <span className="text-primary">Jamaah Kami</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
