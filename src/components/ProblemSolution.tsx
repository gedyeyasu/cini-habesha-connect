
import { CheckIcon } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Apps that crash 99% of the time",
    "Only 10 daily swipes (not enough!)",
    "No cultural compatibility matching",
    "Limited profile space for real connections", 
    "Matching with people hundreds of miles away"
  ];

  const solutions = [
    "99.9% uptime guarantee - it actually works",
    "50 daily swipes - 5x more opportunities",
    "Smart cultural matching by region & values",
    "Rich profiles with unlimited cultural details",
    "Global Habesha network across all continents"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ethiopian-dark mb-6">
            Tired of Dating Apps That Don't 
            <span className="text-gradient-ethiopian block">Understand Ethiopian Culture?</span>
          </h2>
          <p className="text-xl text-ethiopian-brown max-w-3xl mx-auto">
            We built Cini because we were frustrated with the same problems you face every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-lg">😞</span>
              Current Problems
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✗</span>
                </div>
                <p className="text-ethiopian-dark font-medium">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ethiopian-green mb-6 flex items-center">
              <span className="w-8 h-8 bg-ethiopian-green text-white rounded-full flex items-center justify-center mr-3 text-lg">✨</span>
              Cini Solutions
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-ethiopian-green/30">
                <div className="w-6 h-6 bg-ethiopian-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-ethiopian-dark font-medium">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ethiopian-gold to-ethiopian-yellow p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-ethiopian-dark mb-4">
              Ready for a Dating App That Actually Works?
            </h3>
            <p className="text-ethiopian-dark/80 mb-6 max-w-2xl mx-auto">
              Join thousands of Ethiopians who are tired of unreliable apps and ready for authentic connections.
            </p>
            <button className="btn-ethiopian bg-white text-ethiopian-gold hover:bg-ethiopian-cream">
              Get Early Access Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
