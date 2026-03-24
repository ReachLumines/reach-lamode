import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Clear Garment Communication",
      description: "Create clean garment flats and construction diagrams that help designers, technicians, and factories clearly understand design intent."
    },
    {
      icon: Users,
      title: "Faster Collection Development",
      description: "Use reusable blocks, trims, and design libraries to build complete ranges and quickly update styles when changes are needed."
    },
    {
      icon: TrendingUp,
      title: "Stronger Collection Presentation",
      description: "Design professional collection boards and line sheets that visually connect garments, fabrics, prints, and branding."
    },
    {
      icon: Star,
      title: "Reduced Sampling Errors",
      description: "Accurate technical visuals reduce factory misinterpretation and minimize costly sample revisions."
    },
        {
      icon: Clock,
      title: "Consistent Brand Visuals",
      description: "Maintain the same visual identity across garment design, marketing visuals, and retail communication."
    },
    {
      icon: Users,
      title: "Improved Design Productivity",
      description: "Organized layers and reusable design elements help teams create multiple garment variations faster."
    },
    {
      icon: TrendingUp,
      title: "Multi-Channel Design Assets",
      description: "Export visuals for tech packs, e-commerce pages, and marketing materials from the same design files."
    },
    {
      icon: Star,
      title: "Future-Ready Digital Design",
      description: "Vector garment assets support integration with modern digital fashion and virtual sampling workflows."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-teal-700">
          Benefits of REACH Lamode
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Vector Software for Fashion Design
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-400 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;