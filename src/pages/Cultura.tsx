import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, Music, Utensils, Users } from "lucide-react";
import cultura1 from "@/assets/cultura-1.jpg";
import municipio1 from "@/assets/municipio-1.jpg";

const traditions = [
  {
    icon: Calendar,
    title: "Fiestas Patronales",
    description: "Las festividades en honor a Santo Domingo de Guzmán, patrono del pueblo, se celebran con misas, procesiones, danzas tradicionales y convivencia comunitaria.",
    date: "4 de agosto",
  },
  {
    icon: Music,
    title: "Música y Danza",
    description: "La banda de viento es fundamental en las celebraciones, acompañada de danzas tradicionales que cuentan historias ancestrales de la comunidad.",
    date: "Todo el año",
  },
  {
    icon: Utensils,
    title: "Gastronomía",
    description: "Platillos tradicionales como el mole negro, tamales de mole, caldo de chivo, y bebidas como el tepache y el mezcal artesanal.",
    date: "Todo el año",
  },
  {
    icon: Users,
    title: "Tequio",
    description: "El trabajo comunitario voluntario que une a los habitantes en la construcción y mantenimiento de obras públicas y espacios comunes.",
    date: "Todo el año",
  },
];

const festivities = [
  {
    name: "Fiesta de Santo Domingo de Guzmán",
    date: "4 de agosto",
    description: "Principal celebración del pueblo con calenda, misa solemne, jaripeo, baile y convivio comunitario.",
  },
  {
    name: "Semana Santa",
    date: "Marzo/Abril",
    description: "Procesiones, vía crucis y representaciones de la pasión de Cristo con participación de toda la comunidad.",
  },
  {
    name: "Día de Muertos",
    date: "1-2 de noviembre",
    description: "Elaboración de altares, visita a los cementerios, preparación de pan de muerto y chocolate caliente.",
  },
  {
    name: "Fiestas Decembrinas",
    date: "Diciembre",
    description: "Posadas, pastorelas y celebraciones de Navidad y Año Nuevo con tradiciones locales únicas.",
  },
];

export default function Cultura() {
  return (
    <Layout>
      <PageHero
        title="Cultura y Tradiciones"
        subtitle="La riqueza cultural que nos define como pueblo"
        backgroundImage={cultura1}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Patrimonio Cultural Vivo"
              subtitle="Las tradiciones de Santo Domingo Tepuxtepec son el corazón de nuestra identidad"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestra comunidad preserva con orgullo las tradiciones heredadas de nuestros 
              ancestros mixes, fusionadas con las influencias coloniales españolas. Esta 
              riqueza cultural se manifiesta en nuestras fiestas, música, gastronomía, 
              vestimenta y formas de organización social.
            </p>
          </div>
        </div>
      </section>

      {/* Traditions Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <SectionTitle
            title="Nuestras Tradiciones"
            subtitle="Expresiones culturales que fortalecen nuestra identidad"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions.map((tradition, index) => (
              <div key={index} className="card-institutional p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <tradition.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {tradition.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {tradition.date}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {tradition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivities Calendar */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Calendario de Festividades"
            subtitle="Las celebraciones más importantes de nuestro municipio"
          />
          
          <div className="max-w-4xl mx-auto space-y-4">
            {festivities.map((festivity, index) => (
              <div
                key={index}
                className="card-institutional p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="md:w-48 flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                    {festivity.date}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {festivity.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {festivity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section className="section-padding bg-earth text-cream">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                La Lengua Mixe (Ayuujk)
              </h2>
              <div className="space-y-4 text-cream/80">
                <p className="leading-relaxed">
                  El idioma mixe, conocido como <strong className="text-cream">Ayuujk</strong>, 
                  es el corazón de nuestra identidad cultural. Esta lengua ancestral 
                  conecta a nuestra comunidad con miles de años de historia y sabiduría.
                </p>
                <p className="leading-relaxed">
                  A pesar de los retos de la modernidad, en Tepuxtepec el mixe sigue 
                  siendo la lengua del hogar, de las ceremonias y de la vida cotidiana. 
                  Las nuevas generaciones aprenden tanto el mixe como el español, 
                  manteniendo vivo este invaluable patrimonio lingüístico.
                </p>
                <div className="pt-4">
                  <p className="text-gold font-medium mb-2">Algunas palabras en mixe:</p>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Jëts</strong> - Agua</li>
                    <li><strong>Tajk</strong> - Fuego</li>
                    <li><strong>Kopk</strong> - Cerro/Montaña</li>
                    <li><strong>Tsyëëjk</strong> - Gracias</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src={municipio1}
                alt="Comunidad de Tepuxtepec"
                className="w-full h-80 md:h-96 object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gastronomy */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Gastronomía Local"
            subtitle="Sabores tradicionales que deleitan el paladar"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Mole Negro",
                description: "El platillo ceremonial por excelencia, preparado con chiles secos, chocolate y especias.",
              },
              {
                name: "Tamales de Mole",
                description: "Envueltos en hoja de plátano, rellenos de pollo o cerdo bañados en mole.",
              },
              {
                name: "Caldo de Chivo",
                description: "Tradicional caldo preparado con hierbas locales y chivo de la región.",
              },
              {
                name: "Tepache",
                description: "Bebida fermentada de piña, refrescante y tradicional en festividades.",
              },
              {
                name: "Mezcal Artesanal",
                description: "Destilado tradicional de agave producido en la región.",
              },
              {
                name: "Pan de Yema",
                description: "Pan dulce tradicional preparado para fiestas y celebraciones especiales.",
              },
            ].map((dish, index) => (
              <div key={index} className="card-institutional p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
