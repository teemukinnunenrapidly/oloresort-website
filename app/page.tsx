import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Calendar } from "lucide-react";
import { Stream } from "@cloudflare/stream-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen bg-black">
        {/* Cloudflare Stream Video */}
        <div className="absolute inset-0">
          {process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID ? (
            <Stream
              controls={false}
              src={process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID}
              autoplay
              muted
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            /* Placeholder gradient when video ID is not set */
            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900" />
          )}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Enjoy the unique nature, relax in quality accommodation
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white max-w-4xl mx-auto">
              Experience a unique accommodation experience in Levi, in the enchanting nature of Lapland
            </h2>
            <p className="text-lg md:text-xl mb-12 text-white max-w-3xl mx-auto">
              Your dream vacation awaits in Levi, Kittilä, in the embrace of the fells and under the blazing northern lights. 
              Stay in a wonderful OloResort Suite and choose unforgettable experiences from our carefully curated selection of activities.
            </p>
            <Link
              href="/accommodation"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Check Out OloResort
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider with overlay graphic */}
      <div className="relative w-full h-32 md:h-48 overflow-hidden">
        <Image
          src="/images/header-slider-overlay.webp"
          alt="Decorative divider"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Northern Lights Hut Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Northern lights hut
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Admire the blazing northern lights and golden sunsets right from your bed.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600">Premium Experience</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Northern Lights View
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Book an unforgettable adventure in Levi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your holiday with activities: spend a day on a snowmobile safari, have fun on a dog sled ride, 
              or go snowshoeing in the stunning nature. Fill out the form below to receive a tailored offer for activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Snowmobile Safari</h3>
              <p className="text-gray-600">Experience the thrill of riding through Lapland&apos;s pristine wilderness</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dog Sled Ride</h3>
              <p className="text-gray-600">Feel the magic of being pulled by huskies through snowy landscapes</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Snowshoeing</h3>
              <p className="text-gray-600">Explore the stunning nature on foot with traditional snowshoes</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/travel-itineraries"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Explore our travel itineraries
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Great adventures and unforgettable flavors – Levi as a holiday destination
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Near the village of Sirkka rises Levi – a well-known winter sports destination, where you can find things to see and do all year round. 
              Trek, hike or snowshoe to the fells, capture the most splendid moments in photos and enjoy authentic Lappish flavors. 
              Come and experience Lapland&apos;s enchanting nature!
            </p>
            <Link
              href="/activities"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get to know Levi
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
