import { ProductCard } from "./ProductCard";

export function ProductsSection() {
  const products = [
    {
      title: "FormEase",
      description: "Effortless form building and data collection",
      features: [
        "Drag & drop builder",
        "Real-time validation",
        "Custom styling",
        "Analytics dashboard"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6V6h12v13z"/>
          <rect x="8" y="8" width="8" height="1.5" rx="0.75"/>
          <rect x="8" y="11" width="6" height="1.5" rx="0.75"/>
          <rect x="8" y="14" width="4" height="1.5" rx="0.75"/>
        </svg>
      ),
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      title: "QRBee",
      description: "Smart QR code generation and management",
      features: [
        "Dynamic QR codes",
        "Analytics tracking",
        "Bulk generation",
        "Custom branding"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm6-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm8 0h2v2h-2v-2zm0-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 4h2v2h-2v-2zm2 0h2v2h-2v-2zm2-2h2v2h-2v-2z"/>
        </svg>
      ),
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500"
    },
    {
      title: "HackHire",
      description: "Revolutionary talent acquisition platform",
      features: [
        "AI-powered matching",
        "Skill assessments",
        "Video interviews",
        "Candidate pipeline"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H14L19 8V9H21ZM17 11C18.1 11 19 11.9 19 13V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V13C5 11.9 5.9 11 7 11H8V8C8 7.4 8.4 7 9 7H15C15.6 7 16 7.4 16 8V11H17ZM7 13V20H17V13H15V10H9V13H7Z"/>
        </svg>
      ),
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of powerful tools designed to enhance your productivity and streamline your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              icon={product.icon}
              gradient={product.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}