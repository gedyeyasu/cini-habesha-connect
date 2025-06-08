
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ethiopian-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-ethiopian-gold mb-4">
              Cini <span className="text-lg">(ሲኒ)</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The first dating app built specifically for Ethiopian culture, values, and community. 
              Launching February 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-ethiopian-gold text-ethiopian-dark p-3 rounded-full hover:bg-ethiopian-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-ethiopian-gold text-ethiopian-dark p-3 rounded-full hover:bg-ethiopian-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-ethiopian-gold text-ethiopian-dark p-3 rounded-full hover:bg-ethiopian-yellow transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ethiopian-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-ethiopian-gold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-gold transition-colors">Safety Guidelines</a></li>
              <li><a href="mailto:hello@cini.app" className="text-gray-300 hover:text-ethiopian-gold transition-colors">hello@cini.app</a></li>
            </ul>
          </div>
        </div>

        {/* Cultural Note */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 mb-4">
            Made with ❤️ by the Ethiopian diaspora community
          </p>
          <p className="text-sm text-gray-400">
            Proudly connecting Ethiopian hearts across the globe since 2025
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Cini. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">🇪🇹 Ethiopian Owned</span>
            <span className="text-gray-400 text-sm">🌍 Global Reach</span>
            <span className="text-gray-400 text-sm">☕ Coffee Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
