import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-display font-bold text-lg">U</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">Umroh Duta</span>
                <span className="block text-xs opacity-70 -mt-1">Persada</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Full Service dari Pintu Rumah ke Pintu Ka'bah. Biro perjalanan umroh terpercaya di Yogyakarta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigasi</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Beranda
              </Link>
              <Link to="/blog" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@umrohduta.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Instagram className="w-4 h-4 shrink-0" />
                <span>@umrohdutapersada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
          © 2026 Umroh Duta Persada. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
