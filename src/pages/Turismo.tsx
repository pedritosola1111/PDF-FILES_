import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MapPin, Mountain, Church, TreePine, Camera, Compass } from "lucide-react";
import municipio2 from "@/assets/municipio-2.jpg";
import municipio1 from "@/assets/municipio-1.jpg";
import iglesia from "@/assets/iglesia.jpg";
import municipio3 from "@/assets/municipio-3.jpg";

const attractions = [
  {
    icon: Church,
    title: "Templo de Santo Domingo de Guzmán",
    description: "Iglesia colonial que data del siglo XVII, centro espiritual de la comunidad y hogar de importantes celebraciones religiosas.",
    image: iglesia,
  },
  {
    icon: Mountain,
    title: "Miradores Naturales",
    description: "Puntos panorámicos que ofrecen vistas espectaculares de la Sierra Norte y los valles circundantes.",
    image: municipio2,
  },
  {
    icon: TreePine,
    title: "Bosques de Pino-Encino",
    description: "Extensas áreas forestales ideales para caminatas ecológicas y observación de flora y fauna regional.",
    image: municipio1,
  },
];

const activities = [
  {
    icon: Compass,
    title: "Senderismo",
    description: "Rutas de caminata por los senderos naturales que conectan con comunidades vecinas y sitios de interés natural.",
  },
  {
    icon: Camera,
    title: "Fotografía de Paisaje",
    description: "Los paisajes montañosos y la arquitectura tradicional ofrecen oportunidades únicas para la fotografía.",
  },
  {
    icon: Mountain,
    title: "Ecoturismo",
    description: "Contacto directo con la naturaleza, observación de aves y conocimiento de plantas medicinales tradicionales.",
  },
];

const travelTips = [
  {
    title: "Cómo Llegar",
    content: "Desde la ciudad de Oaxaca, tomar la carretera hacia la Sierra Norte. El trayecto dura aproximadamente 3-4 horas dependiendo de las condiciones del camino.",
  },
  {
    title: "Mejor Época para Visitar",
    content: "Los meses de octubre a abril ofrecen el mejor clima. Las fiestas patronales en agosto son una experiencia cultural imperdible.",
  },
  {
    title: "Recomendaciones",
    content: "Llevar ropa abrigada por las noches frías, calzado cómodo para caminar, y respetar las costumbres locales de la comunidad.",
  },
  {
    title: "Hospedaje",
    content: "Existen opciones de hospedaje familiar y pequeñas casas de huéspedes. Se recomienda coordinar con anticipación.",
  },
];

export default function Turismo() {
  return (
    <Layout>
      <PageHero
        title="Turismo"
        subtitle="Descubre la belleza natural y cultural de Tepuxtepec"
        backgroundImage={municipio2}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Bienvenidos a Tepuxtepec"
              subtitle="Un destino de turismo rural y comunitario en el corazón de la Sierra Norte de Oaxaca"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Santo Domingo Tepuxtepec te invita a descubrir sus paisajes montañosos, 
              su rica cultura mixe y la calidez de su gente. Aquí podrás experimentar 
              el turismo rural en su forma más auténtica, alejado del bullicio de las 
              ciudades y en contacto directo con la naturaleza y las tradiciones ancestrales.
            </p>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <SectionTitle
            title="Lugares de Interés"
            subtitle="Conoce los principales atractivos de nuestro municipio"
          />
          
          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className={`card-institutional overflow-hidden flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <attraction.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                      {attraction.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Actividades"
            subtitle="Experiencias que puedes disfrutar durante tu visita"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="card-institutional p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-earth text-cream">
        <div className="container-institutional">
          <SectionTitle
            title="Información para el Visitante"
            subtitle="Todo lo que necesitas saber para planear tu visita"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {travelTips.map((tip, index) => (
              <div key={index} className="bg-cream/10 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-heading text-lg font-semibold">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Galería Fotográfica"
            subtitle="Imágenes que capturan la esencia de nuestro municipio"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[municipio1, municipio2, iglesia, municipio3].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-sm shadow-md">
                <img
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            ¿Listo para visitarnos?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Te invitamos a conocer Santo Domingo Tepuxtepec y vivir una experiencia 
            única de turismo rural comunitario. Contáctanos para más información.
          </p>
          <a href="/contacto" className="btn-institutional inline-flex">
            Contáctanos
          </a>
        </div>
      </section>
    </Layout>
  );
}
