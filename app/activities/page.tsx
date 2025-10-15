import { Snowflake, Mountain, Camera, Utensils, Star } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    {
      icon: Snowflake,
      title: 'Snowmobile Safari',
      description: 'Experience the thrill of riding through Lapland\'s pristine wilderness on a guided snowmobile tour',
      duration: '2-4 hours',
      difficulty: 'Beginner to Advanced'
    },
    {
      icon: Mountain,
      title: 'Dog Sled Ride',
      description: 'Feel the magic of being pulled by huskies through snowy landscapes in a traditional sled',
      duration: '1-3 hours',
      difficulty: 'All levels'
    },
    {
      icon: Camera,
      title: 'Northern Lights Photography',
      description: 'Capture the stunning aurora borealis with professional photography guidance',
      duration: '2-3 hours',
      difficulty: 'All levels'
    },
    {
      icon: Utensils,
      title: 'Lappish Cuisine Experience',
      description: 'Taste authentic Lappish flavors and learn about traditional cooking methods',
      duration: '2-3 hours',
      difficulty: 'All levels'
    },
    {
      icon: Star,
      title: 'Snowshoeing Adventure',
      description: 'Explore the stunning nature on foot with traditional snowshoes and expert guides',
      duration: '2-4 hours',
      difficulty: 'Beginner to Intermediate'
    },
    {
      icon: Mountain,
      title: 'Fell Hiking',
      description: 'Trek to the fells and enjoy breathtaking views of the Lapland wilderness',
      duration: '3-6 hours',
      difficulty: 'Intermediate to Advanced'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unforgettable Activities in Levi
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Enhance your holiday with our carefully curated selection of activities and experiences
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From thrilling snowmobile safaris to peaceful northern lights viewing, we have something for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <activity.icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p><span className="font-medium">Duration:</span> {activity.duration}</p>
                    <p><span className="font-medium">Difficulty:</span> {activity.difficulty}</p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Lapland Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to create a personalized itinerary with the perfect combination of activities for your stay
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Get Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}
