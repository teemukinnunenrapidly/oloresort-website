import { Star, Wifi, Car, Coffee, Snowflake } from 'lucide-react';

export default function AccommodationPage() {
  const features = [
    { icon: Star, title: 'Northern Lights View', description: 'Admire the blazing northern lights right from your bed' },
    { icon: Wifi, title: 'Free WiFi', description: 'Stay connected with complimentary high-speed internet' },
    { icon: Car, title: 'Parking', description: 'Convenient parking available for all guests' },
    { icon: Coffee, title: 'Breakfast', description: 'Start your day with a delicious breakfast' },
    { icon: Snowflake, title: 'Winter Activities', description: 'Easy access to skiing and winter sports' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unique Accommodation in Levi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Experience luxury in the heart of Lapland with our premium suites and glass igloos
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premium Features & Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every detail has been carefully designed to provide you with an unforgettable experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From cozy glass igloos to spacious suites, we have the perfect accommodation for your Lapland adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Northern Lights Glass Igloo</h3>
              <p className="text-gray-600 mb-6">
                Experience the magic of the northern lights from the comfort of your bed in our premium glass igloo. 
                Featuring panoramic views and luxury amenities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 360-degree glass ceiling</li>
                <li>• Private bathroom with sauna</li>
                <li>• Minibar and coffee machine</li>
                <li>• Heated floors</li>
                <li>• Northern lights alarm</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OloResort Suite</h3>
              <p className="text-gray-600 mb-6">
                Spacious and elegantly designed suites with modern amenities and stunning views of the Lapland wilderness.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• King-size bed</li>
                <li>• Private balcony</li>
                <li>• Luxury bathroom</li>
                <li>• Living area with fireplace</li>
                <li>• Kitchenette</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
