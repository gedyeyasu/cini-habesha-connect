
const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Cultural Compatibility Matching",
      description: "Smart algorithm matches you based on region, language, traditions, and shared values",
      stat: "85% cultural match",
      highlight: "Find your perfect Habesha match"
    },
    {
      icon: "💝",
      title: "50 Daily Swipes",
      description: "5x more opportunities to connect than other apps that limit you to just 10",
      stat: "50 swipes remaining",
      highlight: "More chances, better connections"
    },
    {
      icon: "📱",
      title: "99.9% Uptime Guarantee", 
      description: "Built to work flawlessly, unlike apps that crash when you need them most",
      stat: "99.9% uptime",
      highlight: "Always reliable, never crashes"
    },
    {
      icon: "🌍",
      title: "Global Habesha Network",
      description: "Connect with Ethiopians in DC, Toronto, London, Dubai, Melbourne and beyond",
      stat: "50+ cities",
      highlight: "Worldwide diaspora connections"
    },
    {
      icon: "💬",
      title: "Rich Ethiopian Profiles",
      description: "Unlimited bios with cultural background, languages, interests, and traditions",
      stat: "Unlimited details",
      highlight: "Tell your full story"
    },
    {
      icon: "🔒",
      title: "Safe & Verified Community",
      description: "Every profile is verified to ensure authentic connections within our community",
      stat: "100% verified",
      highlight: "Trusted Ethiopian network"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ethiopian-cream to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ethiopian-dark mb-6">
            Why Cini is 
            <span className="text-gradient-ethiopian"> Different</span>
          </h2>
          <p className="text-xl text-ethiopian-brown max-w-3xl mx-auto">
            Built specifically for Ethiopian culture, values, and the unique needs of our diaspora community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-ethiopian-gold/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ethiopian-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-ethiopian-brown mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Stat Highlight */}
                <div className="bg-ethiopian-gold text-ethiopian-dark font-bold py-2 px-4 rounded-full text-sm mb-3 inline-block">
                  {feature.stat}
                </div>
                
                <p className="text-sm text-ethiopian-green font-semibold">
                  {feature.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-ethiopian-dark mb-12">
            Cini vs Other Ethiopian Dating Apps
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-ethiopian-gold/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-ethiopian-gold">
                  <tr>
                    <th className="text-left p-6 text-ethiopian-dark font-bold">Feature</th>
                    <th className="text-center p-6 text-ethiopian-dark font-bold">Cini</th>
                    <th className="text-center p-6 text-ethiopian-dark font-bold">Other Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'App Reliability', cini: '99.9% uptime ✅', others: 'Frequent crashes ❌' },
                    { feature: 'Daily Swipes', cini: '50 swipes ✅', others: '10 swipes ❌' },
                    { feature: 'Cultural Matching', cini: 'Smart AI matching ✅', others: 'Basic filters ❌' },
                    { feature: 'Profile Depth', cini: 'Unlimited details ✅', others: 'Limited space ❌' },
                    { feature: 'Global Network', cini: 'Worldwide diaspora ✅', others: 'Limited areas ❌' },
                    { feature: 'Verification', cini: '100% verified ✅', others: 'Minimal checks ❌' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-ethiopian-cream/30' : 'bg-white'}>
                      <td className="p-6 font-semibold text-ethiopian-dark">{row.feature}</td>
                      <td className="p-6 text-center font-medium text-ethiopian-green">{row.cini}</td>
                      <td className="p-6 text-center font-medium text-red-600">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
