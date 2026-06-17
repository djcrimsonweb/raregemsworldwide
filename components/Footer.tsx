export function Footer() {
  return (
    <footer className="border-t border-cultural-light-gray mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="text-caption font-modern font-semibold text-cultural-black mb-4 uppercase">
              About
            </h4>
            <p className="text-body font-modern text-cultural-gray">
              A cultural OS for internet discovery. Curating the most relevant global trends and underground movements.
            </p>
          </div>

          <div>
            <h4 className="text-caption font-modern font-semibold text-cultural-black mb-4 uppercase">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-body font-modern text-cultural-gray hover:text-cultural-black transition-colors">
                  Submit Content
                </a>
              </li>
              <li>
                <a href="#" className="text-body font-modern text-cultural-gray hover:text-cultural-black transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-body font-modern text-cultural-gray hover:text-cultural-black transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-caption font-modern font-semibold text-cultural-black mb-4 uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-body font-modern text-cultural-gray hover:text-cultural-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-body font-modern text-cultural-gray hover:text-cultural-black transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cultural-light-gray pt-8 flex items-center justify-between">
          <p className="text-caption font-modern text-cultural-gray">
            © 2024 Rare Gems Worldwide. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-caption font-modern text-cultural-gray hover:text-cultural-black transition-colors">
              Twitter
            </a>
            <a href="#" className="text-caption font-modern text-cultural-gray hover:text-cultural-black transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
