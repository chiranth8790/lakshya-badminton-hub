import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, ShieldCheck } from "lucide-react";

const AboutPreview = () => {
  const features = [
    {
      icon: Award,
      title: "100% Genuine Products",
      description: "Every product is sourced directly from authorized distributors"
    },
    {
      icon: Users,
      title: "Expert Badminton Advice",
      description: "Our team includes national-level players to help you choose"
    },
    {
      icon: Clock,
      title: "Same-Day Local Delivery",
      description: "Order before 2 PM for same-day delivery in Bangalore"
    },
    {
      icon: ShieldCheck,
      title: "WhatsApp Ordering",
      description: "Easy ordering via WhatsApp with instant support"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Lakshya Sports</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded by passionate badminton players, Lakshya Sports has been serving 
              the sporting community since 2010. We believe in providing only genuine, 
              high-quality products that help athletes perform at their best.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience and partnerships with top brands like 
              Yonex, Victor, and Li-Ning, we've helped thousands of players find their 
              perfect gear – from beginners taking their first steps to national champions.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:neon-border transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
