"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Youtube } from "lucide-react";

export default function Home() {
  const [channel, setChannel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!channel.trim()) return;
    
    setIsLoading(true);
    // Simulate a brief loading/transition state before routing
    setTimeout(() => {
      router.push(`/dashboard/${encodeURIComponent(channel.trim())}`);
    }, 400);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl px-6 flex flex-col items-center z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 animate-fade-in text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered YouTube Analytics</span>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground drop-shadow-sm">
          Analyze <span className="text-primary">Any</span> Creator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Deep dive into a YouTuber's top videos and audience sentiment. OpenStar uses Gemini AI to build comprehensive creator and audience profiles instantly.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </div>
            <Input 
              type="text" 
              placeholder="Enter YouTuber name (e.g., Linus Tech Tips)" 
              className="pl-12 h-14 text-lg bg-card border-2 border-border focus-visible:ring-0 focus-visible:border-primary shadow-lg rounded-xl transition-all"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit" 
            disabled={!channel.trim() || isLoading}
            className="h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Search className="w-5 h-5" />
                Analyze
              </>
            )}
          </Button>
        </form>

        {/* Example Chips */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-sm text-muted-foreground">Try:</span>
          {["Linus Tech Tips", "MrBeast", "Marques Brownlee"].map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setChannel(example)}
              className="text-sm px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
            >
              {example}
            </button>
          ))}
        </div>

      </div>
    </main>
  );
}
