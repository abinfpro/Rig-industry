import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  FlaskRound, 
  Fuel, 
  Droplets, 
  Layers,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Import & Export",
      description: "Reliable global sourcing and supply of energy products with seamless international trade execution.",
      features: [
        "End-to-end import & export operations",
        "Regulatory & customs compliance",
        "Secure logistics & documentation",
        "Global supplier & buyer network",
      ],
    },
    {
      icon: FlaskRound,
      title: "Petrochemicals Trading",
      description: "Specialized trading of high-quality petrochemical products for industrial and commercial needs.",
      features: [
        "Wide petrochemical product range",
        "Verified supplier partnerships",
        "Market-driven pricing",
        "Bulk & custom supply options",
      ],
    },
    {
      icon: Fuel,
      title: "Diesel Products Trading",
      description: "Trusted diesel trading services for industrial, commercial, and transportation sectors.",
      features: [
        "Premium grade diesel supply",
        "Bulk volume delivery",
        "Competitive pricing",
        "Efficient distribution network",
      ],
    },
    {
      icon: Droplets,
      title: "Petroleum Products Trading",
      description: "Reliable sourcing and supply of refined petroleum products across global markets.",
      features: [
        "Refined petroleum product sourcing",
        "Quality certification & standards",
        "Flexible contract terms",
        "Logistics & delivery management",
      ],
    },
    {
      icon: Globe,
      title: "International Crude Oil Trading",
      description: "Strategic global crude oil sourcing and trading backed by strong market intelligence.",
      features: [
        "Global crude oil procurement",
        "Supplier & buyer verification",
        "Secure contract execution",
        "Risk & compliance management",
      ],
    },
    {
      icon: Layers,
      title: "Tar & Asphalt Supply & Trading",
      description: "Supply and trading of tar and asphalt for industrial and infrastructure applications.",
      features: [
        "High-grade tar & asphalt",
        "Bulk & project-based supply",
        "Material quality assurance",
        "On-time project delivery",
      ],
    },
    
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
            Global energy sourcing and trading — delivering diesel, fuels, petrochemicals, crude oil, tar, and asphalt with efficiency, transparency, and worldwide reach.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Bitumen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We supply and distribute high-quality bitumen for road construction and infrastructure needs with reliable sourcing and timely delivery.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
               { "step": "01", "title": "Bitumen Performance Grade", "description": "Engineered bitumen designed for specific climate and traffic conditions." },
               { "step": "02", "title": "Penetration Grade Bitumen", "description": "Standard graded bitumen used for road construction and paving works." },
               { "step": "03", "title": "Viscosity Grade Bitumen", "description": "Bitumen classified by viscosity for consistent performance in hot climates." },
               { "step": "04", "title": "Oxidised Bitumen", "description": "Air-blown bitumen ideal for waterproofing, roofing, and industrial applications." },
               { "step": "05", "title": "Bitumen Cutback", "description": "Bitumen blended with solvents for easy application in cold or remote areas." },
               { "step": "06", "title": "Bitumen Emulsion", "description": "Water-based bitumen suitable for quick, safe, and eco-friendly roadwork applications." }
              ]
             .map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured global trading workflow ensuring reliability, compliance, and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Market & Client Requirement Analysis", description: "We analyze client needs and market trends for efficient sourcing." },
              { step: "02", title: "Sourcing & Compliance Verification", description: "We source from trusted suppliers and ensure full regulatory compliance." },
              { step: "03", title: "Logistics & Trade Execution", description: "We manage secure shipping, customs, and trade operations for smooth delivery." },
              { step: "04", title: "Delivery & Post-Trade Support", description: "We ensure timely delivery and ongoing client support for lasting partnerships." },              
             ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss how we can tailor our services to meet your specific needs.
            </p>
            <Link to="/contact">
              <Button
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="lg" className="bg-gradient-accent hover:opacity-90 text-primary font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover-glow group">
              Contact Our Team  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
