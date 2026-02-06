import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    slug: "tips-umroh-pertama",
    title: "10 Tips Penting untuk Umroh Pertama Kali",
    excerpt: "Persiapan matang adalah kunci ibadah yang khusyuk. Berikut tips yang perlu Anda ketahui sebelum berangkat umroh pertama kali.",
    date: "15 Januari 2026",
    readTime: "5 menit",
    category: "Tips & Panduan",
  },
  {
    slug: "keutamaan-umroh",
    title: "Keutamaan Umroh di Bulan Ramadhan",
    excerpt: "Rasulullah SAW bersabda bahwa umroh di bulan Ramadhan setara dengan haji. Simak penjelasan lengkapnya.",
    date: "10 Januari 2026",
    readTime: "4 menit",
    category: "Islami",
  },
  {
    slug: "perlengkapan-umroh",
    title: "Daftar Perlengkapan Umroh yang Wajib Dibawa",
    excerpt: "Jangan sampai ada yang tertinggal! Ini checklist lengkap barang bawaan untuk perjalanan umroh Anda.",
    date: "5 Januari 2026",
    readTime: "6 menit",
    category: "Tips & Panduan",
  },
  {
    slug: "sejarah-kabah",
    title: "Sejarah Ka'bah: Dari Nabi Ibrahim Hingga Kini",
    excerpt: "Mengenal sejarah panjang Baitullah yang menjadi kiblat umat Islam seluruh dunia.",
    date: "28 Desember 2025",
    readTime: "8 menit",
    category: "Islami",
  },
  {
    slug: "manasik-penting",
    title: "Mengapa Manasik Umroh Sangat Penting?",
    excerpt: "Manasik bukan sekadar formalitas. Pahami pentingnya persiapan spiritual dan teknis sebelum berangkat.",
    date: "20 Desember 2025",
    readTime: "4 menit",
    category: "Edukasi",
  },
  {
    slug: "umroh-manula",
    title: "Panduan Umroh untuk Jamaah Lanjut Usia",
    excerpt: "Tips dan panduan khusus agar jamaah manula bisa menjalankan ibadah umroh dengan nyaman dan aman.",
    date: "15 Desember 2025",
    readTime: "5 menit",
    category: "Tips & Panduan",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Blog</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Artikel & <span className="text-primary">Panduan Umroh</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Informasi bermanfaat seputar ibadah umroh untuk persiapan perjalanan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Colored header bar */}
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary bg-secondary px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
