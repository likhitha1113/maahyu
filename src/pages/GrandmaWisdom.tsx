import { useState } from "react";
import { Leaf, Volume2, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import ChatbotWidget from "@/components/chat/ChatbotWidget";

interface WisdomCard {
  id: string;
  title: string;
  traditional: string;
  scientific: string;
  region: string;
  stage: string;
  category: string;
}

const wisdomCards: WisdomCard[] = [
  {
    id: "1",
    title: "Ginger Tea for Nausea",
    traditional: "Adrak wali chai has been used for generations to ease morning sickness and calm the stomach during pregnancy.",
    scientific: "Gingerol compounds in ginger reduce nausea by affecting the digestive system and blocking serotonin receptors in the gut.",
    region: "North India",
    stage: "Pregnancy",
    category: "Digestion",
  },
  {
    id: "2",
    title: "Ajwain Water for Digestion",
    traditional: "Mothers have always given ajwain water post-delivery for digestive comfort and to boost milk production.",
    scientific: "Thymol in carom seeds has carminative properties that reduce bloating, gas, and may have galactagogue effects.",
    region: "Pan-India",
    stage: "Postpartum",
    category: "Digestion",
  },
  {
    id: "3",
    title: "Saffron Milk Tradition",
    traditional: "Kesar doodh is believed to give the baby a fair complexion and calm the mother's mind during pregnancy.",
    scientific: "Saffron contains crocin and safranal which may have mood-enhancing, anti-anxiety, and antioxidant properties.",
    region: "North India",
    stage: "Pregnancy",
    category: "Mental Health",
  },
  {
    id: "4",
    title: "Coconut Oil Massage",
    traditional: "Traditional malish with warm coconut oil strengthens baby's bones and helps mother recover faster.",
    scientific: "Coconut oil contains lauric acid with antimicrobial properties, and massage stimulates blood circulation and relaxation.",
    region: "South India",
    stage: "Postpartum",
    category: "Physical Care",
  },
  {
    id: "5",
    title: "Fennel Water for Lactation",
    traditional: "Saunf ka paani has been traditionally given to nursing mothers to increase milk supply.",
    scientific: "Fennel contains phytoestrogens and anethole that may help support prolactin levels and milk production.",
    region: "Pan-India",
    stage: "Postpartum",
    category: "Lactation",
  },
  {
    id: "6",
    title: "Turmeric in Warm Milk",
    traditional: "Haldi doodh is given to new mothers for healing and to boost immunity during recovery.",
    scientific: "Curcumin in turmeric has anti-inflammatory and antioxidant properties that support tissue healing.",
    region: "Pan-India",
    stage: "Postpartum",
    category: "Immunity",
  },
  {
    id: "7",
    title: "Dry Ginger Powder Massage",
    traditional: "Sunth (dry ginger) paste is applied on the abdomen to help reduce postpartum belly.",
    scientific: "Ginger has thermogenic properties that may increase blood flow and support metabolic activity.",
    region: "North India",
    stage: "Postpartum",
    category: "Physical Care",
  },
  {
    id: "8",
    title: "Methi Ladoo for Energy",
    traditional: "Fenugreek laddoos are given to new mothers for strength and to increase breast milk.",
    scientific: "Fenugreek seeds contain diosgenin, a phytoestrogen that may support lactation and provide iron and fiber.",
    region: "North India",
    stage: "Postpartum",
    category: "Lactation",
  },
];

const regions = ["All Regions", "North India", "South India", "Pan-India"];
const stages = ["All Stages", "Pregnancy", "Postpartum", "Toddler Care"];
const categories = ["All Categories", "Digestion", "Mental Health", "Physical Care", "Lactation", "Immunity"];

const GrandmaWisdom = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCards = wisdomCards.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.traditional.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All Regions" || card.region === selectedRegion;
    const matchesStage = selectedStage === "All Stages" || card.stage === selectedStage;
    const matchesCategory = selectedCategory === "All Categories" || card.category === selectedCategory;
    return matchesSearch && matchesRegion && matchesStage && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/20 text-sage text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            <span>Traditional Meets Modern</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Grandma's <span className="text-gradient">Wisdom</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Time-tested traditional knowledge paired with modern scientific explanations, tailored to your region and motherhood phase.
          </p>
        </div>

        {/* Filters */}
        <div className="card-elevated p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredCards.length} of {wisdomCards.length} tips
        </p>

        {/* Wisdom Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className="card-glow p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                    <span className="text-xl">👵</span>
                  </div>
                  <h3 className="font-display font-bold text-lg">{card.title}</h3>
                </div>
                <button className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0">
                  <Volume2 className="w-4 h-4 text-primary" />
                </button>
              </div>

              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-xl bg-muted/50">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Traditional:</span>{" "}
                    <span className="text-muted-foreground">{card.traditional}</span>
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm">
                    <span className="font-semibold text-primary">Scientific:</span>{" "}
                    <span className="text-muted-foreground">{card.scientific}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">{card.region}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {card.stage}
                </span>
                <span className="px-3 py-1 rounded-full bg-sage/20 text-sage text-xs font-medium">
                  {card.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCards.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">No tips found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
          </div>
        )}
      </main>

      <ChatbotWidget />
    </div>
  );
};

export default GrandmaWisdom;
