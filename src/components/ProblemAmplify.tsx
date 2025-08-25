import { AlertTriangle, Clock, MessageSquareX, TrendingDown, ArrowRight, Users } from "lucide-react";

const ProblemAmplify = () => {
  const problems = [
    {
      icon: Clock,
      text: "Endless data entry, reporting, and follow-ups",
      color: "text-red-500"
    },
    {
      icon: MessageSquareX,
      text: "Slow customer support draining your staff's energy",
      color: "text-orange-500"
    },
    {
      icon: TrendingDown,
      text: "Missed leads and wasted opportunities",
      color: "text-yellow-500"
    }
  ];

  return (
    <section id="problems" className="py-12 md:py-24 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Problem Section - Dark/Warning Theme */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 bg-red-500/10 px-6 py-3 rounded-full border border-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-red-500 font-semibold">Current Reality</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Right now, your team is{" "}
              <span className="text-red-500 relative inline-block">
                drowning
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M0 8 Q50 2 100 8 T200 8" stroke="rgb(239 68 68)" strokeWidth="2" fill="none" opacity="0.6"/>
                </svg>
              </span>{" "}
              in repetitive tasks
            </h2>
          </div>

          {/* Problems - Card Stack Style */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-6 md:p-8 mb-4 backdrop-blur-sm
                    transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
                    ${index === 1 ? 'md:-translate-x-8 md:translate-y-2' : ''}
                    ${index === 2 ? 'md:translate-x-8 md:translate-y-4' : ''}
                  `}
                  style={{
                    background: `linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30`}>
                      <problem.icon className={`w-7 h-7 ${problem.color}`} />
                    </div>
                    <p className="text-foreground font-medium text-lg flex-1">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amplify Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Every wasted hour{" "}
                <span className="text-red-500">compounds</span>
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-500" />
                  <span>Lost time = Lost revenue</span>
                </div>
                <div className="hidden md:block w-1 h-8 bg-border"></div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-6 h-6 text-orange-500" />
                  <span>Competitors are moving faster</span>
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Meanwhile, competitors are already adopting AI, cutting costs, and moving faster.
              </p>
            </div>
          </div>
        </div>

        {/* Transition Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">AI</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What if instead of tasks{" "}
                <span className="text-red-500">piling up</span>,{" "}
                <br className="hidden md:block" />
                you had an{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI teammate
                </span>{" "}
                that handled them for you?
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-primary font-semibold text-lg">
                <Clock className="w-6 h-6" />
                <span>24/7, never tired, always accurate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAmplify;
