import { Card, CardContent } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    { name: "n8n", logo: "/src/assets/logos/n8n.png" },
    { name: "Zapier", logo: "/src/assets/logos/zapier.png" },
    { name: "ChatGPT", logo: "/src/assets/logos/chatgpt.png" },
    { name: "DeepSeek", logo: "/src/assets/logos/deepseek.png" },
    { name: "Gemini", logo: "/src/assets/logos/gemini.jpg" },
    { name: "Grok", logo: "/src/assets/logos/grok.png" },
    { name: "Meta AI", logo: "/src/assets/logos/meta.png" },
    { name: "Supabase", logo: "/src/assets/logos/supabase.jpg" },
    { name: "Pinecone", logo: "/src/assets/logos/pinecone.png" },
    { name: "WhatsApp", logo: "/src/assets/logos/whatsapp.jpg" },
    { name: "Telegram", logo: "/src/assets/logos/telegram.png" },
    { name: "Slack", logo: "/src/assets/logos/slack.png" },
    { name: "Google Drive", logo: "/src/assets/logos/google-drive.png" },
    { name: "Search API", logo: "/src/assets/logos/search.png" }
  ];

  return (
    <section className="py-8 md:py-12 bg-background/50 border-y border-border/20">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <p className="text-sm md:text-base text-muted-foreground font-medium">
          We integrate these tools into your AI workflows
        </p>
      </div>

      {/* Full-width scrolling logos */}
      <div className="w-full overflow-hidden">
        {/* Single row of floating logos */}
        <div className="flex animate-scroll-left">
          {/* First set of tools */}
          {tools.map((tool, index) => (
            <div
              key={`tools-first-${index}`}
              className="flex-shrink-0 mx-3 md:mx-6 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-8 h-8 md:w-12 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {tools.map((tool, index) => (
            <div
              key={`tools-second-${index}`}
              className="flex-shrink-0 mx-3 md:mx-6 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-8 h-8 md:w-12 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;