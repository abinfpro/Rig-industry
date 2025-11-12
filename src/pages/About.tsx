import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import engineersImage from "@/assets/engineers-team.webp";
// import bgImg from "../assets/oil-rig-1.webp";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Integrity & Compliance",
      description: "We operate with transparency, adherence to global trade regulations, and ethical sourcing to ensure trust in every transaction.",
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description: "We maintain stringent quality standards, efficient logistics, and reliable supply chains for seamless import, export, and trading operations.",
    },
    {
      icon: Users,
      title: "Customer-Centric Commitment",
      description: "We deliver tailored fuel and petroleum solutions, ensuring timely delivery, product quality, and dedicated client support across markets.",
    },
    {
      icon: TrendingUp,
      title: "Innovation & Sustainable Growth",
      description: "We leverage modern trading strategies and focus on responsible energy practices to drive long-term value and industry sustainability.",
    },
  ];

  // const milestones = [
  //   { year: "1998", event: "Company Founded" },
  //   { year: "2005", event: "Expanded Operations Internationally" },
  //   { year: "2012", event: "Reached 250+ Completed Projects" },
  //   { year: "2018", event: "Implemented Advanced Safety Protocols" },
  //   { year: "2023", event: "Achieved 500+ Projects Milestone" },
  // ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
  {/* style={{ backgroundImage: `url(${bgImg})` }}> */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Golfoil Solutions</h1>
            <p className="text-xl text-primary-foreground/90">
            Global energy trading experts supplying diesel, fuels, petrochemicals, crude oil, tar, and asphalt with trusted sourcing and smooth international delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                Golfoil began with a clear vision — to establish a trusted global presence in energy trading through integrity, strategic sourcing, and consistent service excellence. From a focused trading initiative to a growing international supplier, our journey has been driven by reliability, market expertise, and strong global relationships.
                </p>
                <p>
                Our growth is built on efficient trade networks, compliance-driven operations, and long-term supplier and buyer partnerships across key energy markets. Today, we support clients across multiple regions, offering seamless import, export, and distribution of diesel, petroleum products, petrochemicals, crude oil, tar, and asphalt.                </p>
                <p>
                With deep market knowledge, a skilled trading team, and robust logistics capabilities, we deliver secure supply, competitive pricing, and timely execution. Golfoil continues to expand its global footprint, committed to transparent trade practices and delivering dependable energy solutions that power industries worldwide.                </p>
              </div>
            </div>
            <div>
              <img 
                src={engineersImage} 
                alt="Our Team" 
                className="rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-card text-center hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="w-24 flex-shrink-0">
                    <div className="text-3xl font-bold text-accent">{milestone.year}</div>
                  </div>
                  <div className="flex-1 p-6 bg-card rounded-lg shadow-card border border-border">
                    <p className="text-lg font-semibold text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Stats */}
      {/* <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team by Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg">Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">25</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-lg">Safety Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-lg">Support</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
