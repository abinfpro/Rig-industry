import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Users, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-rig.jpg";
import drillingImage from "@/assets/drilling-equipment.jpg";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Drilling Operations",
      description: "Advanced drilling solutions with cutting-edge technology and experienced operators.",
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Comprehensive safety programs ensuring compliance and protecting your workforce.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Engineers" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-scale-in"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 animate-gradient" 
               style={{ backgroundSize: '200% 200%' }} />
        </div>
        
        {/* Floating orbs for visual effect */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0">
            Engineering Excellence
            <br />
            <span className="text-accent animate-pulse-glow inline-block">In Every Operation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 animate-slide-in-left opacity-0 stagger-1">
            Leading provider of comprehensive oil and rig solutions with unmatched expertise and reliability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in opacity-0 stagger-2">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 hover:scale-110 transition-all duration-500 text-primary font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-glow animate-pulse-glow group"
            >
              Get Started <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2" />
            </Button>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-all duration-500 hover:scale-110 hover:rotate-2"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default animate-bounce-in opacity-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 transition-all duration-500 group-hover:scale-125 group-hover:text-accent/80 animate-pulse-glow">{stat.number}</div>
                <div className="text-muted-foreground font-medium transition-all duration-500 group-hover:text-foreground group-hover:scale-110">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up opacity-0">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-slide-in-left">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
              Comprehensive solutions for all your oil and rig operational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-glow transition-all duration-700 hover:-translate-y-4 group cursor-pointer overflow-hidden bg-card animate-scale-in opacity-0 hover:border-accent/50 hover:border-2" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 animate-rotate-in shadow-lg group-hover:shadow-glow">
                    <service.icon className="w-8 h-8 text-primary transition-transform duration-700 group-hover:scale-125" />
                  </div>
                  <CardTitle className="text-2xl transition-all duration-500 group-hover:text-accent group-hover:scale-105">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base transition-all duration-500 group-hover:text-foreground group-hover:scale-105">{service.description}</CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-bounce-in opacity-0 stagger-3">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-110 hover:shadow-glow hover:rotate-1 group animate-pulse-glow">
                View All Services <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient" style={{ backgroundSize: '200% 200%', background: 'linear-gradient(135deg, hsl(215 45% 12%), hsl(215 45% 20%), hsl(215 45% 15%))' }} />
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left opacity-0">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Why Choose OilRig Solutions</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                With over 25 years of industry experience, we deliver exceptional results through innovation, expertise, and unwavering commitment to safety.
              </p>
              <ul className="space-y-4">
                {[
                  "Industry-leading safety standards",
                  "State-of-the-art equipment and technology",
                  "Highly experienced engineering team",
                  "24/7 operational support",
                  "Environmental compliance and sustainability",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 animate-slide-in-left opacity-0 hover:scale-105 transition-all duration-500 hover:translate-x-2" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 animate-rotate-in hover:rotate-180 transition-transform duration-700" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="mt-8 bg-accent hover:opacity-90 text-primary font-semibold transition-all duration-500 hover:scale-110 hover:shadow-glow animate-pulse-glow group hover:rotate-1"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative group animate-slide-in-right opacity-0 stagger-2">
              <div className="absolute inset-0 bg-gradient-accent opacity-30 rounded-lg blur-2xl group-hover:opacity-50 group-hover:blur-3xl transition-all duration-700 animate-pulse-glow" />
              <div className="absolute inset-0 border-2 border-accent/50 rounded-lg group-hover:border-accent transition-all duration-700 group-hover:scale-105" />
              <img 
                src={drillingImage} 
                alt="Drilling Equipment" 
                className="rounded-lg shadow-premium relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-bounce-in opacity-0">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0 stagger-1">
            Contact us today for a consultation and discover how we can support your operations
          </p>
          <Link to="/contact" className="animate-scale-in opacity-0 stagger-2 inline-block">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-primary font-semibold text-lg px-8 py-6 transition-all duration-700 hover:scale-125 hover:shadow-glow hover:rotate-2 animate-pulse-glow group">
              Get in Touch <ArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
