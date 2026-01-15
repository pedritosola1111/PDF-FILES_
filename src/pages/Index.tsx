import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { 
  History, 
  Music, 
  Building, 
  MapPin, 
  Phone,
  ArrowRight,
  Users,
  Target
} from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import municipio1 from "@/assets/municipio-1.jpg";
import municipio2 from "@/assets/municipio-2.jpg";
import iglesia from "@/assets/iglesia.jpg";

const quickLinks = [
  {
    icon: History,
    title: "Historia",
    description: "Conoce el origen y evolución de nuestro municipio",
    href: "/historia",
  },
  {
    icon: Music,
    title: "Cultura",
    description: "Tradiciones, festividades y costumbres locales",
    href: "/cultura",
  },
  {
    icon: Building,
    title: "Servicios",
    description: "Servicios públicos disponibles para ciudadanos",
    href: "/servicios",
  },
  {
    icon: MapPin,
    title: "Turismo",
    description: "Lugares de interés y actividades para visitantes",
    href: "/turismo",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Santo Domingo Tepuxtepec"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container-institutional flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-cream text-shadow animate-fade-in">
            Santo Domingo
            <span className="block mt-2">Tepuxtepec</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-cream/90 font-light italic animate-fade-in-up">
            "Tradición que vive, cultura que avanza"
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link to="/historia" className="btn-institutional">
              Conoce Nuestra Historia
            </Link>
            <Link to="/contacto" className="btn-institutional-outline bg-cream/10 border-cream text-cream hover:bg-cream hover:text-earth">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className="card-institutional p-6 group hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <link.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {link.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Municipality */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Nuestro Municipio"
            subtitle="Santo Domingo Tepuxtepec, un lugar de rica historia y tradiciones arraigadas en el corazón de Oaxaca"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Santo Domingo Tepuxtepec es un municipio del estado de Oaxaca, México, 
                ubicado en la región de la Sierra Norte. Su nombre proviene del náhuatl 
                y significa "Cerro de Cobre", haciendo referencia a la riqueza mineral 
                de la zona y a su geografía montañosa característica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestra comunidad se distingue por preservar sus tradiciones ancestrales, 
                su lengua mixe y sus formas de organización comunitaria basadas en el 
                sistema de usos y costumbres, donde la asamblea comunitaria es la máxima 
                autoridad de decisión.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-secondary rounded-sm">
                  <p className="text-2xl font-heading font-bold text-primary">2,500+</p>
                  <p className="text-sm text-muted-foreground">Habitantes</p>
                </div>
                <div className="p-4 bg-secondary rounded-sm">
                  <p className="text-2xl font-heading font-bold text-primary">1,800</p>
                  <p className="text-sm text-muted-foreground">msnm Altitud</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={municipio1}
                alt="Vista del municipio"
                className="rounded-sm shadow-md w-full h-48 md:h-64 object-cover"
              />
              <img
                src={iglesia}
                alt="Iglesia de Santo Domingo"
                className="rounded-sm shadow-md w-full h-48 md:h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-earth text-cream">
        <div className="container-institutional">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream/10 rounded-full mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Misión</h3>
              <p className="text-cream/80 leading-relaxed">
                Ser un gobierno comprometido con el desarrollo del municipio, con una 
                administración transparente de los recursos, aplicando los valores de 
                lealtad, unidad y transparencia que nos permita lograr el bienestar y 
                desarrollo incluyente e igualitario entre hombres y mujeres.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream/10 rounded-full mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Visión</h3>
              <p className="text-cream/80 leading-relaxed">
                Ser un municipio con sentido humano al servicio del pueblo con desarrollo 
                de infraestructura social, cultural y económico que fomenta la educación, 
                salud y bienestar para toda la población.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Galería del Municipio"
            subtitle="Imágenes que capturan la esencia de Santo Domingo Tepuxtepec"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={municipio1}
              alt="Paisaje del municipio"
              className="w-full h-64 object-cover rounded-sm shadow-md hover:shadow-lg transition-shadow"
            />
            <img
              src={municipio2}
              alt="Vista panorámica"
              className="w-full h-64 object-cover rounded-sm shadow-md hover:shadow-lg transition-shadow"
            />
            <img
              src={iglesia}
              alt="Arquitectura local"
              className="w-full h-64 object-cover rounded-sm shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            ¿Tienes preguntas o necesitas información?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos a tu disposición para atender tus dudas, consultas y trámites. 
            Visítanos en el Palacio Municipal o contáctanos por los medios disponibles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacto" className="btn-institutional">
              <Phone size={18} className="mr-2" />
              Contáctanos
            </Link>
            <Link to="/servicios" className="btn-institutional-outline">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
