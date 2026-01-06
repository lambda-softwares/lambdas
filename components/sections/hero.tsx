import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Database, ArrowLeftRight, Brain, Zap, Shield, Clock, TrendingUp, Plug, Activity, Layers, Link2 } from "lucide-react"

// Enhanced Floating card components with larger sizes and more detail
function SystemIntegrationCard() {
  return (
    <Card className="absolute top-[8%] left-[2%] md:left-[3%] lg:left-[8%] xl:left-[8%] 2xl:left-[10%] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[320px] xl:w-[340px] 2xl:w-[360px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-2xl hover:shadow-[#324038]/10 hover:border-[#324038]/40 transition-all duration-300 animate-fade-in-float will-change-transform group">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#324038]/20 to-[#324038]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowLeftRight className="h-5 w-5 text-[#324038]" />
          </div>
          <h3 className="text-[1rem] font-semibold text-foreground">System Bridge</h3>
        </div>
        
        {/* Connection Flow Diagram */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-[0.8125rem]">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#324038] animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#324038]/30 animate-ping" />
            </div>
            <span className="text-foreground font-medium">ERP Connected</span>
          </div>
          <div className="ml-2.5 border-l-2 border-dashed border-[#324038]/30 h-4" />
          <div className="flex items-center gap-2 text-[0.8125rem]">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#324038]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#324038]/30 animate-ping" />
            </div>
            <span className="text-foreground font-medium">CRM Linked</span>
          </div>
          <div className="ml-2.5 border-l-2 border-dashed border-[#795953]/30 h-4" />
          <div className="flex items-center gap-2 text-[0.8125rem]">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#795953]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#795953]/30 animate-ping" />
            </div>
            <span className="text-foreground font-medium">AI Layer Active</span>
          </div>
          </div>

        <div className="pt-3 border-t border-border">
          <div className="flex items-center justify-between text-[0.75rem] text-muted-foreground">
            <span>Bridge Status</span>
            <span className="flex items-center gap-1 text-[#324038] font-semibold">
              <Activity className="h-3 w-3" />
              Live
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AICapabilitiesCard() {
  return (
    <Card className="absolute top-[8%] right-[2%] md:right-[3%] lg:right-[8%] xl:right-[8%] 2xl:right-[10%] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[320px] xl:w-[340px] 2xl:w-[360px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-2xl hover:shadow-[#324038]/10 hover:border-[#324038]/40 transition-all duration-300 animate-fade-in-float-delay will-change-transform group">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#324038]/20 to-[#795953]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Brain className="h-5 w-5 text-[#324038]" />
          </div>
          <h3 className="text-[1rem] font-semibold text-foreground">AI Features</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-[0.8125rem] mb-1.5">
              <span className="text-muted-foreground">Automation</span>
              <span className="text-[#324038] font-semibold">95%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#324038] to-[#324038]/80 rounded-full animate-progress" style={{ width: '95%' }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-[0.8125rem] mb-1.5">
              <span className="text-muted-foreground">Analytics</span>
              <span className="text-[#324038] font-semibold">88%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#795953] to-[#795953]/80 rounded-full animate-progress-delay" style={{ width: '88%' }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-[0.8125rem] mb-1.5">
              <span className="text-muted-foreground">Insights</span>
              <span className="text-[#324038] font-semibold">92%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#324038] to-[#795953] rounded-full animate-progress-delay-2" style={{ width: '92%' }} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ZeroDisruptionCard() {
  return (
    <Card className="absolute bottom-[10%] left-[2%] md:left-[3%] lg:left-[8%] xl:left-[8%] 2xl:left-[10%] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[320px] xl:w-[340px] 2xl:w-[360px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-2xl hover:shadow-[#324038]/10 hover:border-[#324038]/40 transition-all duration-300 animate-fade-in-float-delay-2 will-change-transform group">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#324038]/20 to-[#324038]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Clock className="h-5 w-5 text-[#324038]" />
          </div>
          <h3 className="text-[1rem] font-semibold text-foreground">Quick Wins</h3>
        </div>
        
        {/* Enhanced Timeline */}
        <div className="space-y-3 mb-4">
          <div className="relative">
            <div className="flex items-center gap-2 text-[0.8125rem]">
              <CheckCircle2 className="h-4 w-4 text-[#324038] flex-shrink-0" />
              <div className="flex-1">
                <span className="text-foreground font-medium">Week 1-2: Assessment</span>
                <div className="text-[0.75rem] text-muted-foreground mt-0.5">System analysis & strategy</div>
              </div>
            </div>
          </div>

          <div className="ml-2 border-l-2 border-[#324038] h-6" />
          
          <div className="relative">
            <div className="flex items-center gap-2 text-[0.8125rem]">
              <CheckCircle2 className="h-4 w-4 text-[#324038] flex-shrink-0" />
              <div className="flex-1">
                <span className="text-foreground font-medium">Week 3-4: First Win</span>
                <div className="text-[0.75rem] text-muted-foreground mt-0.5">Deploy initial capability</div>
              </div>
            </div>
          </div>

          <div className="ml-2 border-l-2 border-dashed border-[#324038]/50 h-6" />
          
          <div className="relative">
            <div className="flex items-center gap-2 text-[0.8125rem]">
              <div className="w-4 h-4 rounded-full border-2 border-[#324038] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#324038] animate-pulse" />
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground">Week 5+: Scale</span>
                <div className="text-[0.75rem] text-muted-foreground mt-0.5">Expand & optimize</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-3 border-t border-border">
          <div className="text-[2rem] font-bold text-[#324038] mb-1">0%</div>
          <div className="text-[0.8125rem] text-muted-foreground">Disruption</div>
        </div>
      </CardContent>
    </Card>
  )
}

function IntegrationIconsCard() {
  return (
    <Card className="absolute bottom-[10%] right-[2%] md:right-[3%] lg:right-[8%] xl:right-[8%] 2xl:right-[10%] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[320px] xl:w-[340px] 2xl:w-[360px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-2xl hover:shadow-[#324038]/10 hover:border-[#324038]/40 transition-all duration-300 animate-fade-in-float-delay-3 will-change-transform group">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#324038]/20 to-[#795953]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plug className="h-5 w-5 text-[#324038]" />
          </div>
          <h3 className="text-[1rem] font-semibold text-foreground">Integrations</h3>
        </div>
        
        {/* Expanded Icon Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#324038]/10 flex items-center justify-center hover:bg-[#324038]/20 transition-colors group/item">
            <Database className="h-6 w-6 text-[#324038] group-hover/item:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#795953]/10 flex items-center justify-center hover:bg-[#795953]/20 transition-colors group/item">
            <Zap className="h-6 w-6 text-[#795953] group-hover/item:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#324038]/10 flex items-center justify-center hover:bg-[#324038]/20 transition-colors group/item">
            <Shield className="h-6 w-6 text-[#324038] group-hover/item:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#795953]/10 flex items-center justify-center hover:bg-[#795953]/20 transition-colors group/item">
            <Layers className="h-6 w-6 text-[#795953] group-hover/item:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#324038]/10 flex items-center justify-center hover:bg-[#324038]/20 transition-colors group/item">
            <Link2 className="h-6 w-6 text-[#324038] group-hover/item:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#795953]/10 flex items-center justify-center hover:bg-[#795953]/20 transition-colors group/item">
            <Activity className="h-6 w-6 text-[#795953] group-hover/item:scale-110 transition-transform" />
          </div>
        </div>
        
        <div className="pt-3 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[1.5rem] font-bold text-[#324038]">100+</div>
              <div className="text-[0.75rem] text-muted-foreground">System connectors</div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#324038] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-[#324038] animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-[#324038] animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Connecting lines between cards (desktop only)
function ConnectingLines() {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Top horizontal line */}
      <svg className="absolute top-[12%] left-[20%] w-[60%] h-px opacity-20">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#324038" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
      </svg>
      
      {/* Bottom horizontal line */}
      <svg className="absolute bottom-[14%] left-[20%] w-[60%] h-px opacity-20">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#324038" strokeWidth="1" strokeDasharray="4 4" className="animate-dash-delay" />
      </svg>
      
      {/* Left vertical line */}
      <svg className="absolute left-[12%] top-[12%] h-[76%] w-px opacity-20">
        <line x1="0" y1="0" x2="0" y2="100%" stroke="#324038" strokeWidth="1" strokeDasharray="4 4" className="animate-dash-vertical" />
      </svg>
      
      {/* Right vertical line */}
      <svg className="absolute right-[12%] top-[12%] h-[76%] w-px opacity-20">
        <line x1="0" y1="0" x2="0" y2="100%" stroke="#324038" strokeWidth="1" strokeDasharray="4 4" className="animate-dash-vertical-delay" />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-3.5rem)] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Larger gradient orbs */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#324038]/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#795953]/10 to-transparent rounded-full blur-3xl animate-float-slow-delay" />
        <div className="absolute right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#324038]/8 to-transparent rounded-full blur-3xl animate-float-slow-delay-2" />
        
        {/* Enhanced bridge visual */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#324038]/30 to-transparent opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#324038]/20 to-transparent opacity-20 blur-sm" />
        
        {/* Enhanced dotted pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #324038 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#324038]/20 animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Lines */}
          <ConnectingLines />
          
          {/* Floating Cards - Desktop */}
          <div className="hidden lg:block">
            <SystemIntegrationCard />
            <AICapabilitiesCard />
            <ZeroDisruptionCard />
            <IntegrationIconsCard />
          </div>

          {/* Floating Cards - Tablet (reduced) */}
          <div className="hidden md:block lg:hidden">
            <Card className="absolute top-[10%] left-[3%] w-[200px] md:w-[220px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-xl animate-fade-in-float">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowLeftRight className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">System Bridge</h3>
                </div>
                <div className="text-[0.75rem] text-muted-foreground">ERP • CRM • AI</div>
              </CardContent>
            </Card>
            <Card className="absolute top-[10%] right-[3%] w-[200px] md:w-[220px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-xl animate-fade-in-float-delay">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">AI Features</h3>
                </div>
                <div className="text-[0.75rem] text-muted-foreground">Automation • Analytics</div>
              </CardContent>
            </Card>
            <Card className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[220px] md:w-[240px] bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-xl animate-fade-in-float-delay-2">
              <CardContent className="pt-4 pb-4 text-center">
                <div className="text-[2rem] font-bold text-[#324038] mb-1">0%</div>
                <div className="text-[0.75rem] text-muted-foreground">Disruption</div>
              </CardContent>
            </Card>
          </div>

          {/* Central Hero Content */}
          <div className="relative z-10 text-center px-4 py-8 md:py-12 lg:py-0">
            {/* Enhanced Headline with Larger Typography */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-semibold text-balance mb-4 md:mb-6 leading-[1.05] tracking-[-0.02em] animate-fade-in-up">
              Bridge from Traditional
              <br />
              <span className="text-[#324038]">to Intelligent Systems</span>
            </h1>

            {/* Enhanced Subheadline */}
            <p className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-medium text-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-[1.3] animate-fade-in-up-delay px-2">
              Zero-disruption integration. No vendor lock-in. Quick wins in weeks.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-10 animate-fade-in-up-delay-2">
              <Button asChild size="lg" className="bg-[#324038] hover:bg-[#3d4f45] text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
              <Button asChild variant="outline" size="lg" className="border-2 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 h-auto hover:bg-[#324038]/5 transition-all w-full sm:w-auto">
              <Link href="/solutions">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

            {/* Trust Indicators - Subtle Integration */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 md:mb-8 text-[0.9375rem] sm:text-[1rem] text-muted-foreground animate-fade-in-up-delay-3 px-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#324038]" />
                <span>Zero-disruption guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#324038]" />
                <span>Keep your existing systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#324038]" />
                <span>Quick wins in weeks</span>
              </div>
          </div>

          {/* Trust Badge */}
            <p className="text-[0.9375rem] sm:text-[1rem] text-muted-foreground animate-fade-in-up-delay-4 px-2">
            Trusted by forward-thinking enterprises across 14+ industries
          </p>
          </div>

          {/* Floating Cards - Mobile (stacked below) */}
          <div className="lg:hidden mt-16 grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <Card className="bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-lg animate-fade-in-up">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowLeftRight className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">System Bridge</h3>
                </div>
                <div className="text-[0.75rem] text-muted-foreground">ERP • CRM • AI</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-lg animate-fade-in-up-delay">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">AI Features</h3>
                </div>
                <div className="text-[0.75rem] text-muted-foreground">Automation • Analytics</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-lg animate-fade-in-up-delay-2">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">Quick Wins</h3>
                </div>
                <div className="text-[1.5rem] font-bold text-[#324038]">0%</div>
                <div className="text-[0.75rem] text-muted-foreground">Disruption</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-md border-2 border-[#324038]/20 shadow-lg animate-fade-in-up-delay-3">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Plug className="h-4 w-4 text-[#324038]" />
                  <h3 className="text-[0.875rem] font-semibold">Integrations</h3>
                </div>
                <div className="text-[0.75rem] text-muted-foreground">
                  <span className="font-semibold text-[#324038]">100+</span> connectors
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
