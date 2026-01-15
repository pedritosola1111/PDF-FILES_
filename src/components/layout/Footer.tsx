import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-cream">
      {/* Main Footer */}
      <div className="container-institutional section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">
              Santo Domingo Tepuxtepec
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed mb-4">
              "Tradición que vive, cultura que avanza"
            </p>
            <p className="text-cream/70 text-sm">
              Gobierno Municipal comprometido con el desarrollo integral de nuestra comunidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/historia", label: "Nuestra Historia" },
                { href: "/cultura", label: "Cultura y Tradiciones" },
                { href: "/servicios", label: "Servicios Públicos" },
                { href: "/turismo", label: "Turismo" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/80">
                  Palacio Municipal, Santo Domingo Tepuxtepec, Oaxaca, México
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/80">+52 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/80">contacto@tepuxtepec.gob.mx</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/80">
                  Lunes a Viernes<br />
                  9:00 AM - 3:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Nuestra Misión
            </h4>
            <p className="text-cream/70 text-sm leading-relaxed">
              Ser un gobierno comprometido con el desarrollo del municipio, 
              con una administración transparente de los recursos, aplicando 
              los valores de lealtad, unidad y transparencia.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20">
        <div className="container-institutional px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
            <p>
              © {new Date().getFullYear()} H. Ayuntamiento de Santo Domingo Tepuxtepec. 
              Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/referencia" className="hover:text-cream transition-colors">
                Aviso de Privacidad
              </Link>
              <Link to="/referencia" className="hover:text-cream transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
