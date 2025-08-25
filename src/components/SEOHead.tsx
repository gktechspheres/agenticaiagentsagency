import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://agenticaiagentsagency.com/#organization",
        "name": "AgenticAI Agents Agency",
        "url": "https://agenticaiagentsagency.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://agenticaiagentsagency.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Leading AI automation agency specializing in custom AI agents, intelligent chatbots, and workflow automation solutions for businesses worldwide.",
        "email": "gktechspheres@gmail.com",
        "telephone": ["+91-9392576089", "+91-8309341150"],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://github.com/gktechspheres"
        ],
        "foundingDate": "2024",
        "numberOfEmployees": "10-50"
      },
      {
        "@type": "WebSite",
        "@id": "https://agenticaiagentsagency.com/#website",
        "url": "https://agenticaiagentsagency.com",
        "name": "AgenticAI Agents Agency - Custom AI Automation Solutions",
        "description": "Transform your business with custom AI agents, intelligent automation, and workflow solutions. We build AI employees that work 24/7.",
        "publisher": {
          "@id": "https://agenticaiagentsagency.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://agenticaiagentsagency.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://agenticaiagentsagency.com/#service",
        "name": "Custom AI Agent Development",
        "description": "We build intelligent AI agents that automate business processes, handle customer support 24/7, manage data entry, generate leads, and streamline workflows.",
        "provider": {
          "@id": "https://agenticaiagentsagency.com/#organization"
        },
        "serviceType": "AI Automation Services",
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenticaiagentsagency.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of AI agents do you build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build custom AI agents for data entry automation, customer support chatbots, lead generation systems, workflow automation, and intelligent business process automation."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you deliver an AI solution?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deliver working AI prototypes within 24-48 hours and complete custom solutions typically within 1-2 weeks, depending on complexity."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Enhanced Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Industry Specific Keywords */}
      <meta name="industry" content="AI, Automation, Technology, Software Development" />
      <meta name="target_audience" content="Business Owners, CTOs, IT Managers, Entrepreneurs" />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/src/index.css" as="style" />
      <link rel="preload" href="/assets/hero-ai-automation.jpg" as="image" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.emailjs.com" />
      
      {/* Alternative Languages */}
      <link rel="alternate" hrefLang="en" href="https://agenticaiagentsagency.com" />
    </Helmet>
  );
};

export default SEOHead;
