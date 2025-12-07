import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AIMatchFinder from "@/components/home/AIMatchFinder";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryGrid from "@/components/home/CategoryGrid";
import AboutPreview from "@/components/home/AboutPreview";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* AI Match Finder */}
        <AIMatchFinder />

        {/* New Launches */}
        <FeaturedProducts
          title="🆕 New Launches"
          subtitle="Fresh arrivals to elevate your game"
          filter={(p) => p.isNew === true}
          limit={4}
          viewAllLink="/products?filter=new"
        />

        {/* Featured Badminton Products */}
        <FeaturedProducts
          title="🏸 Featured Badminton Products"
          subtitle="Top picks by our experts"
          filter={(p) => p.isFeatured === true && p.category === "Badminton"}
          limit={4}
          viewAllLink="/category/badminton"
        />

        {/* Shop by Category - Badminton */}
        <CategoryGrid type="badminton" title="Shop by Category" />

        {/* Explore Other Sports */}
        <CategoryGrid type="other" title="Explore Other Sports" />

        {/* About Preview & Benefits */}
        <AboutPreview />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Index;
