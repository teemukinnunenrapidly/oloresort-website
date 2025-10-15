import { Calendar, MapPin } from 'lucide-react';

export default function TravelItinerariesPage() {
  const itineraries = [
    {
      title: 'Winter Wonderland Experience',
      duration: '3 days',
      season: 'Winter',
      highlights: ['Northern Lights Viewing', 'Snowmobile Safari', 'Dog Sled Ride', 'Lappish Sauna'],
      description: 'Perfect for first-time visitors to experience the magic of Lapland winter'
    },
    {
      title: 'Autumn Colors Adventure',
      duration: '4 days',
      season: 'Autumn',
      highlights: ['Fell Hiking', 'Photography Tour', 'Berry Picking', 'Local Cuisine'],
      description: 'Experience the stunning autumn colors and ruska season in Lapland'
    },
    {
      title: 'Luxury Lapland Escape',
      duration: '5 days',
      season: 'All Year',
      highlights: ['Glass Igloo Stay', 'Private Tours', 'Fine Dining', 'Spa Experience'],
      description: 'Ultimate luxury experience with premium accommodations and exclusive activities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Itineraries
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Discover our carefully crafted itineraries designed to give you the perfect Lapland experience
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{itinerary.title}</h3>
                  <p className="text-gray-600 mb-6">{itinerary.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-blue-600" size={20} />
                      <span className="text-gray-700">{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-green-600" size={20} />
                      <span className="text-gray-700">{itinerary.season}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {itinerary.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
