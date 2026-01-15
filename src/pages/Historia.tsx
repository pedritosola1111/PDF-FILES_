import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import municipio2 from "@/assets/municipio-2.jpg";
import municipio1 from "@/assets/municipio-1.jpg";

const timelineEvents = [
  {
    year: "Época Prehispánica",
    title: "Orígenes del Pueblo Mixe",
    description: "Los ancestros mixes habitaron estas tierras montañosas, estableciendo comunidades basadas en la agricultura y el comercio regional.",
  },
  {
    year: "Siglo XVI",
    title: "Llegada de los Españoles",
    description: "Con la conquista española, la comunidad fue evangelizada por los dominicos, quienes introdujeron la veneración a Santo Domingo de Guzmán.",
  },
  {
    year: "Época Colonial",
    title: "Consolidación de la Comunidad",
    description: "Se estableció formalmente el pueblo, adoptando el nombre de Santo Domingo Tepuxtepec, combinando la tradición católica con el nombre náhuatl del lugar.",
  },
  {
    year: "Siglo XIX",
    title: "Independencia y Reforma",
    description: "La comunidad participó en los movimientos de independencia y posteriormente en la defensa de la República durante la intervención francesa.",
  },
  {
    year: "Siglo XX",
    title: "Desarrollo Municipal",
    description: "Se consolida la organización municipal con el sistema de usos y costumbres, preservando las tradiciones ancestrales de gobierno comunitario.",
  },
  {
    year: "Actualidad",
    title: "Tepuxtepec Moderno",
    description: "La comunidad enfrenta los retos del siglo XXI manteniendo vivas sus tradiciones, lengua y formas de organización social.",
  },
];

export default function Historia() {
  return (
    <Layout>
      <PageHero
        title="Nuestra Historia"
        subtitle="Raíces profundas, tradiciones vivas"
        backgroundImage={municipio2}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Origen de Santo Domingo Tepuxtepec"
              subtitle="Un viaje a través del tiempo en la Sierra Norte de Oaxaca"
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Santo Domingo Tepuxtepec es un municipio de origen mixe ubicado en la 
                Sierra Norte del estado de Oaxaca, México. Su nombre proviene de la 
                combinación del santo patrono católico y del término náhuatl 
                <strong className="text-foreground"> "Tepuxtepec"</strong>, que significa 
                "Cerro de Cobre" (de <em>tepuztli</em>, cobre, y <em>tepetl</em>, cerro).
              </p>
              
              <p className="leading-relaxed mb-6">
                La comunidad forma parte de la nación Mixe, uno de los pueblos originarios 
                más antiguos de Mesoamérica. Los mixes se autodenominan 
                <strong className="text-foreground"> "Ayuujk"</strong>, que significa 
                "la gente de la palabra florida" o "la gente que habla el idioma de 
                la montaña".
              </p>
              
              <p className="leading-relaxed">
                A lo largo de los siglos, Tepuxtepec ha mantenido vivas sus tradiciones 
                ancestrales, su lengua y sus formas de organización comunitaria, 
                convirtiéndose en un ejemplo de resistencia cultural y adaptación 
                a los tiempos modernos sin perder su identidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <SectionTitle
            title="Línea del Tiempo"
            subtitle="Momentos clave en la historia de nuestro municipio"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
              
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <div className="card-institutional p-6">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-sm mb-3">
                        {event.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src={municipio1}
                alt="Patrimonio cultural"
                className="w-full h-80 md:h-96 object-cover rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                Patrimonio Cultural Vivo
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Sistema de Usos y Costumbres:</strong> La 
                  organización política y social de Tepuxtepec se rige por el sistema de 
                  usos y costumbres, donde la asamblea comunitaria es la máxima autoridad 
                  y los cargos se asignan como servicios a la comunidad.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Lengua Mixe:</strong> El idioma mixe 
                  (ayuujk) sigue siendo la lengua materna de gran parte de la población, 
                  transmitiéndose de generación en generación como parte fundamental 
                  de la identidad comunitaria.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Tequio:</strong> El trabajo comunitario 
                  no remunerado, conocido como tequio, es una práctica vigente que fortalece 
                  los lazos sociales y permite la realización de obras para el beneficio común.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
