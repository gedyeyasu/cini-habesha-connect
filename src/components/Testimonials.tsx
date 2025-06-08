
const Testimonials = () => {
  const testimonials = [
    {
      name: "Meron",
      age: 28,
      location: "Washington DC",
      image: "👩🏾",
      quote: "Finally, an app that understands my culture! I love that I can share my full Ethiopian heritage and find someone who truly gets it.",
      highlight: "Found my match in 2 weeks"
    },
    {
      name: "Daniel", 
      age: 31,
      location: "Toronto",
      image: "👨🏾",
      quote: "50 swipes per day means real opportunities to connect. Other apps left me frustrated with only 10. Cini actually works!",
      highlight: "5x more matches than other apps"
    },
    {
      name: "Hanan",
      age: 26, 
      location: "London",
      image: "👩🏾",
      quote: "I found someone who shares my values and traditions. The cultural matching is incredible - 95% compatibility on our first match!",
      highlight: "95% cultural compatibility match"
    },
    {
      name: "Yonas",
      age: 29,
      location: "Dubai", 
      image: "👨🏾",
      quote: "Being able to connect with Ethiopians worldwide is amazing. I matched with someone from Australia who shares my exact cultural background.",
      highlight: "Global diaspora connections"
    },
    {
      name: "Sara",
      age: 25,
      location: "Melbourne",
      image: "👩🏾", 
      quote: "The app never crashes! I was so tired of other apps failing right when I wanted to message someone. Cini is reliable.",
      highlight: "99.9% uptime reliability"
    },
    {
      name: "Dawit",
      age: 33,
      location: "Los Angeles",
      image: "👨🏾",
      quote: "Rich profiles let me share my whole story - where I'm from in Ethiopia, my family traditions, everything that matters for real connection.",
      highlight: "Authentic Ethiopian connections"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ethiopian-dark mb-6">
            What Our Beta Users Are Saying
          </h2>
          <p className="text-xl text-ethiopian-brown max-w-3xl mx-auto">
            Real stories from Ethiopians who tested Cini early and found meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-ethiopian-cream p-6 rounded-2xl shadow-lg border border-ethiopian-gold/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-ethiopian-dark">
                    {testimonial.name}, {testimonial.age}
                  </h4>
                  <p className="text-sm text-ethiopian-brown">{testimonial.location}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-ethiopian-dark mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-ethiopian-gold text-ethiopian-dark text-sm font-semibold py-2 px-4 rounded-full text-center">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ethiopian-gold to-ethiopian-yellow p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-ethiopian-dark mb-4">
              Join the Growing Cini Community
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-ethiopian-dark">1,000+</div>
                <p className="text-ethiopian-dark/80">Early Access Signups</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ethiopian-dark">50+</div>
                <p className="text-ethiopian-dark/80">Cities Worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ethiopian-dark">95%</div>
                <p className="text-ethiopian-dark/80">User Satisfaction</p>
              </div>
            </div>
            <p className="text-ethiopian-dark/80 mb-6">
              Don't miss out on being part of the most reliable Ethiopian dating community.
            </p>
            <button className="btn-ethiopian bg-white text-ethiopian-gold hover:bg-ethiopian-cream">
              Get Early Access Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
