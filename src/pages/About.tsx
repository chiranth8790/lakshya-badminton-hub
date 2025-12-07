import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/AIAssistant";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { value: "14+", label: "Years Experience" },
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "15+", label: "Brand Partners" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We only stock 100% genuine products from authorized distributors. No compromises on quality."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team includes national-level players who understand your needs and can guide you to the perfect gear."
    },
    {
      icon: Target,
      title: "Player-Centric",
      description: "Every decision we make is centered around helping players perform at their best on the court."
    },
    {
      icon: Heart,
      title: "Passion for Sport",
      description: "We're not just sellers – we're players, coaches, and badminton enthusiasts who live and breathe the sport."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Lakshya Sports</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Founded by passionate badminton players, we've been serving the sporting 
                community with premium gear and expert advice since 2010.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Lakshya Sports was born out of frustration. As competitive badminton players, 
                    we struggled to find genuine, quality equipment at fair prices. Local shops 
                    often sold counterfeit products, and online options were unreliable.
                  </p>
                  <p>
                    In 2010, we decided to change that. Starting from a small shop in Bangalore, 
                    we built relationships directly with brands like Yonex, Victor, and Li-Ning 
                    to ensure every product we sell is 100% authentic.
                  </p>
                  <p>
                    Today, we've grown into one of India's most trusted badminton equipment 
                    retailers. But our mission remains the same: to help every player – from 
                    beginners to national champions – find the perfect gear for their game.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80"
                  alt="Badminton Court"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Lakshya Sports
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center group hover:neon-border transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Players helping players – that's who we are
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Rahul Sharma", role: "Founder & CEO", level: "Former National Player" },
                { name: "Priya Patel", role: "Head of Operations", level: "State Level Player" },
                { name: "Arjun Kumar", role: "Technical Expert", level: "Certified Coach" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default About;
