import ContactForm from './components/ContactForm';
import CloudinaryImage from './components/CloudinaryImage';

export default function Home() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const accountId = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cloudflare Stream Background Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {videoId && accountId && (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={`https://customer-${accountId}.cloudflarestream.com/${videoId}/iframe?muted=true&loop=true&autoplay=true&controls=false&defaultTextTrack=false`}
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              style={{
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen={false}
            />
          </div>
        )}

        {/* Fallback gradient background if no video */}
        {(!videoId || !accountId) && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600"></div>
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Experience a unique accommodation experience in Levi, in the enchanting nature of Lapland
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Glass igloos, Northern Lights, and unforgettable moments under the Arctic sky
          </p>
          <a
            href="#accommodation"
            className="inline-block bg-[#204ce5] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Check Out OloResort
          </a>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Glass Igloos in Levi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <CloudinaryImage
                src="oloresort/glass-igloo"
                alt="Luxury glass igloo with Northern Lights view"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Unique Lapland Experiences</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our luxury glass igloos offer you a front-row seat to one of nature&apos;s most spectacular shows -
                the Northern Lights. Wake up to pristine winter landscapes and fall asleep under the stars.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#204ce5] mr-2">✓</span>
                  <span>Panoramic glass ceiling for Northern Lights viewing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#204ce5] mr-2">✓</span>
                  <span>Heated comfort even in Arctic temperatures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#204ce5] mr-2">✓</span>
                  <span>Private and intimate setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#204ce5] mr-2">✓</span>
                  <span>Located in the heart of Levi ski resort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Snowmobile Safari */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <CloudinaryImage
                src="oloresort/snowmobile-safari"
                alt="Snowmobile safari in Lapland"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Snowmobile Safari</h3>
                <p className="text-gray-700">
                  Experience the thrill of driving through snowy landscapes on a guided snowmobile adventure.
                </p>
              </div>
            </div>

            {/* Dog Sled Rides */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <CloudinaryImage
                src="oloresort/dog-sled"
                alt="Husky dog sled ride in Arctic wilderness"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Dog Sled Rides</h3>
                <p className="text-gray-700">
                  Glide through the Arctic wilderness pulled by a team of enthusiastic huskies.
                </p>
              </div>
            </div>

            {/* Snowshoeing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <CloudinaryImage
                src="oloresort/snowshoeing"
                alt="Snowshoeing through winter forest"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Snowshoeing</h3>
                <p className="text-gray-700">
                  Explore the peaceful winter forest at your own pace with traditional snowshoes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section id="itineraries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Discover Levi</h2>
              <p className="text-lg text-gray-700 mb-6">
                Near the village of Sirkka rises Levi – a well-known winter sports destination,
                where you can find things to see and do all year round.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From world-class skiing to summer hiking, from Northern Lights to midnight sun,
                Levi offers unique experiences in every season.
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#204ce5] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Explore our travel itineraries
              </a>
            </div>
            <div>
              <CloudinaryImage
                src="oloresort/levi-landscape"
                alt="Levi ski resort and landscape"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <ContactForm />
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-2">Or reach us directly:</p>
            <p className="text-gray-900 font-medium">Email: levi@oloresort.fi</p>
            <p className="text-gray-900 font-medium">Sales: +358 44 901 4162</p>
            <p className="text-gray-900 font-medium">Reception: +358 44 901 4164</p>
          </div>
        </div>
      </section>
    </div>
  );
}
