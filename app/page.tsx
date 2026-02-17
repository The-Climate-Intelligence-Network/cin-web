export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-bold text-lg text-gray-800">The Climate Intelligence Network</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="text-gray-600 hover:text-gray-900">HOME</a>
            <a href="#" className="text-gray-300 ">ABOUT</a>
            <a href="#" className="text-gray-300 ">DEVELOPERS</a>
            <a href="#" className="text-gray-300 ">JOIN US</a>
            <a href="https://linktr.ee/climate.intelligence" className="text-gray-600 hover:text-gray-900">CONTACT US</a>
          </nav>
        </div>
      </header>

      {/* Maintenance Banner */}
      <section className="bg-yellow-50 border-b-2 border-yellow-300">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-yellow-900 mb-2">System Maintenance in Progress</h2>
          <p className="text-yellow-800 text-lg">
            We're currently upgrading our website to a more robust climate data visualization and analytics platform. Our ongoing projects continue and we're still welcoming new members to join our network!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Ongoing Campaigns Section */}
        
        {/* Join Network Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">JOIN OUR NETWORK!</h3>
              <p className="text-gray-700 text-lg mb-8">
                We're a network of passionate changemakers from every district – students, professionals, educators, and scientists – committed to climate action and biodiversity conservation nationwide. Join us for unique learning experiences, collaboration on impactful projects, access to funding and networking opportunities, and growth alongside like-minded individuals.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd58XvbvKkeGLJhpetiuJhJ6MeV5LIrwxCivZtl4wSdlYE-Yw/viewform?usp=dialog">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded transition-colors">
                JOIN
              </button>
              </a>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-200 to-green-200 rounded-lg p-8 text-center w-full max-w-sm">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-700 font-semibold">Nationwide Network</p>
                <p className="text-gray-600 mt-2">Connecting changemakers across Sri Lanka</p>
                <div className="mt-6 text-sm text-gray-600">
                  <p>Active in multiple districts</p>
                  <p>Diverse expertise & backgrounds</p>
                  <p>Growing daily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Notice */}
        <section className="mt-20 p-8 bg-blue-50 border-l-4 border-blue-600 rounded">
          <h4 className="font-bold text-blue-900 mb-2">📋 What's Happening</h4>
          <ul className="text-blue-800 space-y-2">
            <li>✅ Projects are active and continuing</li>
            <li>✅ New members can join our network</li>
            <li>⏳ Website features are being enhanced</li>
            <li>⏳ Full functionality will return shortly</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#" className="hover:text-gray-900">About Us</a>
              <a href="#" className="hover:text-gray-900">Developers</a>
              <a href="#" className="hover:text-gray-900">Contact Us</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </div>
            <p className="text-sm text-gray-600">©2025 Climate Intelligence Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
