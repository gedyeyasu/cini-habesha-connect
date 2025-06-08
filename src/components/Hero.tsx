
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Cini family! 🎉",
        description: "You'll be among the first to know when we launch.",
      });
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-ethiopian-cream via-white to-ethiopian-cream flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-ethiopian-dark leading-tight">
              Cini
              <span className="text-2xl lg:text-3xl ml-4 text-ethiopian-brown font-normal">(ሲኒ)</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gradient-ethiopian">
              Where Ethiopian Hearts Connect
            </h2>
            <p className="text-xl text-ethiopian-brown max-w-lg">
              Finally, a dating app that actually works for Ethiopians. Built by the diaspora, for the diaspora.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-ethiopian-gold/20">
            <p className="text-sm text-ethiopian-brown mb-4 font-medium">Launching in:</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-ethiopian-gold text-ethiopian-dark font-bold text-2xl lg:text-3xl py-3 px-2 rounded-lg mb-2 animate-pulse-glow">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs text-ethiopian-brown font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-ethiopian-gold/20">
            <h3 className="text-xl font-semibold text-ethiopian-dark mb-4">
              Get Early Access 🎉
            </h3>
            <p className="text-ethiopian-brown mb-4">
              Join 1,000+ Ethiopians already signed up. Be first to find your match.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-ethiopian-gold/30 focus:border-ethiopian-gold"
                required
              />
              <Button type="submit" className="btn-ethiopian whitespace-nowrap">
                Get Notified
              </Button>
            </form>
            <p className="text-xs text-ethiopian-brown mt-2">
              First 1,000 users get 3 months premium free ✨
            </p>
          </div>
        </div>

        {/* Right Content - App Preview */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative bg-ethiopian-dark rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden w-72 h-[600px] relative">
                {/* App Interface Mockup */}
                <div className="bg-gradient-to-b from-ethiopian-gold to-ethiopian-yellow p-6 text-center">
                  <h4 className="text-ethiopian-dark font-bold text-lg mb-2">Cini</h4>
                  <p className="text-ethiopian-dark/80 text-sm">Find Your Habesha Match</p>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Profile Card Preview */}
                  <div className="bg-white rounded-xl shadow-lg p-4 border border-ethiopian-gold/20">
                    <div className="w-16 h-16 bg-ethiopian-gold rounded-full mb-3 mx-auto"></div>
                    <h5 className="font-semibold text-ethiopian-dark text-center">Meron, 28</h5>
                    <p className="text-sm text-ethiopian-brown text-center">Addis Ababa → DC</p>
                    <div className="flex justify-center mt-3">
                      <span className="bg-ethiopian-green text-white text-xs px-3 py-1 rounded-full">
                        95% Match
                      </span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-ethiopian-cream p-3 rounded-lg">
                      <span className="text-sm text-ethiopian-dark">Daily Swipes</span>
                      <span className="font-bold text-ethiopian-gold">50 ✨</span>
                    </div>
                    <div className="flex items-center justify-between bg-ethiopian-cream p-3 rounded-lg">
                      <span className="text-sm text-ethiopian-dark">Uptime</span>
                      <span className="font-bold text-ethiopian-green">99.9% ✅</span>
                    </div>
                    <div className="flex items-center justify-between bg-ethiopian-cream p-3 rounded-lg">
                      <span className="text-sm text-ethiopian-dark">Cultural Matching</span>
                      <span className="font-bold text-ethiopian-gold">Smart AI 🧠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-ethiopian-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              99.9% Uptime!
            </div>
            <div className="absolute -bottom-6 -right-6 bg-ethiopian-gold text-ethiopian-dark px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-1000">
              50 Daily Swipes!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
