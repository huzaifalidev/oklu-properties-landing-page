export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#03213d] mb-6 leading-tight">
              Your guide to United Kingdom's top real estate hotspots
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Backed by local connections and developer access, we make investing in properties smoother and more
              personal. Our team provides expert guidance to help you find the perfect investment opportunity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience, we've helped hundreds of investors navigate the real estate market with
              confidence and success.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100 text-center">
              <div className="text-4xl font-bold text-[#d5a86f] mb-2">11+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100 text-center">
              <div className="text-4xl font-bold text-[#d5a86f] mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Properties Listed</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100 text-center">
              <div className="text-4xl font-bold text-[#d5a86f] mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Active Investors</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#03213d] mb-3">Expert Guidance</h3>
            <p className="text-gray-700">
              Professional advice from industry veterans with deep market knowledge and connections.
            </p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#03213d] mb-3">Premium Access</h3>
            <p className="text-gray-700">
              Exclusive deals and properties not available on the open market through developer partnerships.
            </p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#03213d] mb-3">Personalized Service</h3>
            <p className="text-gray-700">
              Tailored solutions designed specifically for your investment goals and portfolio strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
