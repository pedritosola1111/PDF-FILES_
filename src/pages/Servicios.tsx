import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { 
  Droplets, 
  Zap, 
  Trash2, 
  GraduationCap, 
  Heart, 
  Shield,
  Building,
  FileText,
  Phone,
  Clock
} from "lucide-react";
import municipio3 from "@/assets/municipio-3.jpg";

const publicServices = [
  {
    icon: Droplets,
    title: "Agua Potable",
    description: "Sistema de agua potable comunitario administrado por el comité del agua. El servicio incluye mantenimiento de la red y tanques de almacenamiento.",
    contact: "Comité de Agua Potable",
    schedule: "Atención: Lunes a Viernes 9:00 - 14:00",
  },
  {
    icon: Zap,
    title: "Energía Eléctrica",
    description: "Servicio proporcionado por CFE. Para reportar fallas o solicitar nuevas conexiones, acudir al módulo de atención.",
    contact: "CFE - Reportes: 071",
    schedule: "Atención telefónica 24 horas",
  },
  {
    icon: Trash2,
    title: "Recolección de Basura",
    description: "Servicio municipal de recolección de residuos sólidos. Se realiza separación de residuos orgánicos e inorgánicos.",
    contact: "Regidor de Ecología",
    schedule: "Recolección: Martes y Viernes",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description: "Escuelas de nivel preescolar, primaria y telesecundaria. Programas de educación bilingüe español-mixe.",
    contact: "Supervisión Escolar Zona 012",
    schedule: "Ciclo escolar: Agosto - Julio",
  },
  {
    icon: Heart,
    title: "Salud",
    description: "Centro de Salud con atención médica básica, consulta general, vacunación y programas de prevención.",
    contact: "Centro de Salud Tepuxtepec",
    schedule: "Lunes a Viernes 8:00 - 15:00",
  },
  {
    icon: Shield,
    title: "Seguridad Pública",
    description: "Policía municipal comunitaria que trabaja bajo el sistema de usos y costumbres para mantener el orden.",
    contact: "Síndico Municipal",
    schedule: "Emergencias: 24 horas",
  },
];

const municipalProcedures = [
  {
    title: "Constancia de Residencia",
    requirements: ["Identificación oficial", "Comprobante de domicilio", "2 fotografías"],
    time: "1 día hábil",
  },
  {
    title: "Constancia de Ingresos",
    requirements: ["Identificación oficial", "Solicitud por escrito"],
    time: "1-2 días hábiles",
  },
  {
    title: "Carta de Buena Conducta",
    requirements: ["Identificación oficial", "Estar al corriente con cooperaciones"],
    time: "1 día hábil",
  },
  {
    title: "Certificado de Origen",
    requirements: ["Acta de nacimiento", "Identificación oficial", "Solicitud"],
    time: "1-2 días hábiles",
  },
];

export default function Servicios() {
  return (
    <Layout>
      <PageHero
        title="Servicios Públicos"
        subtitle="Información sobre los servicios disponibles para nuestra comunidad"
        backgroundImage={municipio3}
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-institutional">
          <SectionTitle
            title="Servicios Disponibles"
            subtitle="Conoce los servicios públicos con los que cuenta nuestro municipio"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicServices.map((service, index) => (
              <div key={index} className="card-institutional p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} className="text-primary" />
                    <span className="text-foreground">{service.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={14} className="text-primary" />
                    <span className="text-muted-foreground">{service.schedule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Municipal Procedures */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <SectionTitle
            title="Trámites Municipales"
            subtitle="Documentos y constancias que puedes solicitar en el Palacio Municipal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {municipalProcedures.map((procedure, index) => (
              <div key={index} className="card-institutional p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {procedure.title}
                    </h3>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-foreground mb-1">Requisitos:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {procedure.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Tiempo de entrega: </span>
                      <span className="text-primary">{procedure.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Municipal Office Info */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="card-institutional p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    Palacio Municipal
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dirección</h4>
                      <p className="text-muted-foreground">
                        Centro, Santo Domingo Tepuxtepec,<br />
                        Oaxaca, México
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Horario de Atención</h4>
                      <p className="text-muted-foreground">
                        Lunes a Viernes<br />
                        9:00 AM - 3:00 PM
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Autoridades</h4>
                      <p className="text-muted-foreground">
                        Presidente Municipal<br />
                        Síndico Municipal<br />
                        Regidores
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sistema de Gobierno</h4>
                      <p className="text-muted-foreground">
                        Usos y Costumbres<br />
                        Asamblea Comunitaria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-earth text-cream">
        <div className="container-institutional text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
            Información Importante
          </h2>
          <p className="text-cream/80 max-w-3xl mx-auto leading-relaxed">
            Para cualquier trámite municipal, es necesario estar al corriente con las 
            cooperaciones y faenas comunitarias. Los ciudadanos que participan activamente 
            en el tequio y las actividades comunitarias tienen derecho a todos los 
            servicios y beneficios municipales.
          </p>
        </div>
      </section>
    </Layout>
  );
}
