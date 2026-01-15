import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink, FileText, Globe, BookOpen, Shield } from "lucide-react";
import municipio1 from "@/assets/municipio-1.jpg";

const officialLinks = [
  {
    title: "Sitio Oficial del Municipio",
    url: "https://www.santodomingotepuxtepec.com/",
    description: "Página oficial con información actualizada sobre el gobierno municipal, noticias y eventos.",
    icon: Globe,
  },
  {
    title: "Gobierno del Estado de Oaxaca",
    url: "https://www.oaxaca.gob.mx/",
    description: "Portal oficial del Gobierno del Estado de Oaxaca con información sobre programas y servicios estatales.",
    icon: Globe,
  },
  {
    title: "INEGI - Instituto Nacional de Estadística",
    url: "https://www.inegi.org.mx/",
    description: "Datos estadísticos oficiales sobre población, economía y geografía del municipio.",
    icon: FileText,
  },
  {
    title: "INALI - Instituto Nacional de Lenguas Indígenas",
    url: "https://www.inali.gob.mx/",
    description: "Información sobre la lengua mixe y programas de preservación lingüística.",
    icon: BookOpen,
  },
];

const resources = [
  {
    category: "Documentos Oficiales",
    items: [
      { title: "Plan Municipal de Desarrollo", description: "Documento rector que guía las acciones del gobierno municipal." },
      { title: "Bando de Policía y Gobierno", description: "Reglamento que establece las normas de convivencia en el municipio." },
      { title: "Transparencia Municipal", description: "Información pública sobre el ejercicio de recursos y obligaciones." },
    ],
  },
  {
    category: "Historia y Cultura",
    items: [
      { title: "Enciclopedia de los Municipios de Oaxaca", description: "Información histórica y geográfica detallada del municipio." },
      { title: "Comisión Nacional para el Desarrollo de los Pueblos Indígenas", description: "Recursos sobre pueblos originarios y programas de apoyo." },
      { title: "Archivo General de la Nación", description: "Documentos históricos relacionados con la región." },
    ],
  },
];

const legalNotices = [
  {
    title: "Aviso de Privacidad",
    content: "Este sitio web recopila información personal únicamente para fines de comunicación institucional. Los datos proporcionados a través del formulario de contacto serán tratados de manera confidencial y no serán compartidos con terceros sin consentimiento previo, salvo en los casos previstos por la ley.",
  },
  {
    title: "Términos de Uso",
    content: "El contenido de este sitio web es de carácter informativo y tiene como objetivo proporcionar información sobre Santo Domingo Tepuxtepec. Las imágenes y textos son propiedad del H. Ayuntamiento o se utilizan con autorización. Se permite la reproducción del contenido citando la fuente.",
  },
  {
    title: "Responsabilidad",
    content: "El H. Ayuntamiento de Santo Domingo Tepuxtepec no se hace responsable por la información contenida en sitios externos enlazados desde esta página. Se recomienda verificar la información directamente con las autoridades correspondientes.",
  },
];

export default function Referencia() {
  return (
    <Layout>
      <PageHero
        title="Referencias"
        subtitle="Fuentes oficiales y enlaces de interés"
        backgroundImage={municipio1}
      />

      {/* Official Links */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Enlaces Oficiales"
            subtitle="Recursos y páginas de instituciones gubernamentales relacionadas"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {officialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-institutional p-6 group hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <SectionTitle
            title="Recursos Adicionales"
            subtitle="Documentación y fuentes de información complementarias"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div key={index} className="card-institutional p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {resource.category}
                </h3>
                <ul className="space-y-4">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notices */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Avisos Legales"
            subtitle="Información sobre privacidad y términos de uso"
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {legalNotices.map((notice, index) => (
              <div key={index} className="card-institutional p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {notice.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {notice.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-earth text-cream">
        <div className="container-institutional text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Nota Importante
          </h2>
          <p className="text-cream/80 max-w-3xl mx-auto leading-relaxed">
            Esta página web tiene fines informativos y busca difundir información 
            sobre Santo Domingo Tepuxtepec, Oaxaca. Para información oficial y 
            actualizada, se recomienda consultar directamente con las autoridades 
            municipales o visitar el sitio web oficial del municipio.
          </p>
        </div>
      </section>
    </Layout>
  );
}
