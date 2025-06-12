import { FaPaintBrush, FaSearch, FaPencilAlt, FaDesktop, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: <FaPaintBrush className="w-8 h-8" />,
    title: "Web Design",
    description: "Custom, responsive web designs that captivate your audience. I use modern tools like Figma, Adobe XD, and Canva to create stunning layouts.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Integration"]
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Boost your online presence with SEO-optimized websites that rank higher on search engines and attract more visitors.",
    features: ["Keyword Research", "Performance Optimization", "Analytics Setup"]
  },
  {
    icon: <FaPencilAlt className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that keep your customers coming back for more.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: "Web Development",
    description: "Full-stack development using modern technologies like React, Node.js, and Python to build scalable web applications.",
    features: ["Custom Development", "API Integration", "Database Design"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-theme-red text-xl font-medium tracking-wide mb-4">SERVICES</h5>
          <h2 className="text-4xl font-bold text-white mb-4">What I Can Do For You</h2>
          <div className="w-20 h-1 bg-theme-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-theme-red rounded-xl text-white mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <FaArrowRight className="w-4 h-4 text-theme-red mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-theme-red hover:text-white transition-colors"
              >
                Book a Session
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 