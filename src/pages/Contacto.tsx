import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import municipio3 from "@/assets/municipio-3.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Palacio Municipal, Centro, Santo Domingo Tepuxtepec, Oaxaca, México",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+52 (XXX) XXX-XXXX",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    content: "contacto@tepuxtepec.gob.mx",
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    content: "Lunes a Viernes: 9:00 AM - 3:00 PM",
  },
];

export default function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Responderemos a la brevedad posible.",
    });
    
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHero
        title="Contacto"
        subtitle="Estamos a tu disposición para atender tus dudas y consultas"
        backgroundImage={municipio3}
      />

      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Información de Contacto"
                subtitle="Diversos canales para comunicarte con nosotros"
                centered={false}
              />
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Ubicación
                </h3>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Santo Domingo Tepuxtepec</p>
                    <p className="text-xs">Sierra Norte de Oaxaca, México</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Envíanos un Mensaje"
                subtitle="Completa el formulario y te responderemos lo antes posible"
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="asunto"
                    name="asunto"
                    type="text"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Motivo de tu consulta"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-institutional"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-institutional">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Atención Presencial
            </h2>
            <p className="text-muted-foreground mb-6">
              Para trámites que requieren presencia física, te invitamos a visitar 
              el Palacio Municipal en nuestros horarios de atención. Recuerda traer 
              tu identificación oficial y los documentos necesarios para tu trámite.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-sm">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Lunes a Viernes: 9:00 AM - 3:00 PM
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
