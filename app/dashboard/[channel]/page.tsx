import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, TrendingUp, Sparkles, BarChart3, ShoppingBag, Youtube, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage({ params }: { params: { channel: string } }) {
  const channelName = decodeURIComponent(params.channel);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 font-sans">
      
      {/* Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              {channelName}
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10 ml-2 hidden sm:inline-flex">
                <Sparkles className="w-3 h-3 mr-1" /> AI Analyzed
              </Badge>
            </h1>
            <p className="text-muted-foreground font-mono text-sm mt-1">OpenStar Intelligence Report</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top 10 Videos Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Youtube className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Top 10 Videos Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Generating 10 mock video cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Card key={i} className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm flex flex-col hover:border-primary/50 transition-colors">
                <div className="relative w-full aspect-video bg-muted flex items-center justify-center rounded-t-lg overflow-hidden group">
                  <PlayCircle className="w-10 h-10 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                    12:34
                  </div>
                </div>
                <CardHeader className="pb-2 flex-none">
                  <CardTitle className="text-base line-clamp-2 leading-tight">
                    {i === 1 ? "I Built a SECRET $100,000 PC... and hid it" : `Video Title Placeholder #${i}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm flex-1 flex flex-col gap-3 pb-3">
                  <div>
                    <span className="text-muted-foreground font-mono text-xs block mb-1">Style</span>
                    <Badge variant="secondary" className="font-normal text-xs">High-energy Vlog / Build</Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono text-xs block mb-1">Content</span>
                    <p className="text-xs leading-relaxed line-clamp-2">Extreme PC building, custom desk fabrication, and benchmark testing.</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono text-xs block mb-1">Intent</span>
                    <p className="text-xs leading-relaxed line-clamp-2">Entertain via absurd scale, showcase sponsor hardware discreetly.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Audience & Comment Overview Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-semibold">Audience & Comment Overview</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sentiment & Intent Column */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <Card className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <BarChart3 className="w-24 h-24 text-primary" />
                </div>
                <CardHeader className="pb-2">
                  <CardDescription>Overall Sentiment</CardDescription>
                  <CardTitle className="text-4xl font-mono text-primary mt-1">82% Positive</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-secondary h-3 rounded-full mt-4 overflow-hidden flex">
                    <div className="bg-primary h-full" style={{ width: '82%' }}></div>
                    <div className="bg-muted-foreground/30 h-full" style={{ width: '13%' }}></div>
                    <div className="bg-destructive h-full" style={{ width: '5%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                    <span>Positive</span>
                    <span>Neutral</span>
                    <span>Negative</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <ShoppingBag className="w-24 h-24 text-accent" />
                </div>
                <CardHeader className="pb-2">
                  <CardDescription>Purchase Intent Signals</CardDescription>
                  <CardTitle className="text-4xl font-mono text-accent mt-1">High</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mt-2">
                    Frequent mentions of "where to buy", "link in description", and "LTT store".
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Topics & Atmosphere Column */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <Card className="border-border/50 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Trending Discussion Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {[
                      { topic: "Value for Money / Pricing complaints", percentage: 45 },
                      { topic: "Performance Benchmarks vs Apple", percentage: 30 },
                      { topic: "Inside Jokes (Dropping things, Screwdrivers)", percentage: 25 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-foreground">{item.topic}</span>
                          <span className="text-muted-foreground font-mono">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                          <div className="bg-primary/80 h-full rounded-full transition-all duration-1000" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent border-border/50 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
                    "The community is highly engaged and loyal, frequently bonding over inside jokes while appreciating the honest, deep-dive technical evaluations, though there's notable friction regarding high hardware prices."
                  </p>
                  <p className="text-sm text-muted-foreground font-mono mt-4 text-right">— AI Atmosphere Summary</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
