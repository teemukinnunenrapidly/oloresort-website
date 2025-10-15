import { Leaf, Camera, Mountain, Coffee } from 'lucide-react';

export default function AutumnPage() {
  const autumnActivities = [
    {
      icon: Leaf,
      title: 'Ruska Season Photography',
      description: 'Capture the stunning autumn colors of Lapland during the famous ruska season',
      duration: '2-4 hours',
      bestTime: 'September - October'
    },
    {
      icon: Mountain,
      title: 'Fell Hiking',
      description: 'Explore the fells and enjoy breathtaking views of the autumn landscape',
      duration: '3-6 hours',
      bestTime: 'September - October'
    },
    {
      icon: Camera,
      title: 'Northern Lights Viewing',
      description: 'Experience the aurora borealis in the crisp autumn air',
      duration: '2-3 hours',
      bestTime: 'September - March'
    },
    {
      icon: Coffee,
      title: 'Lappish Cuisine',
      description: 'Taste seasonal local flavors and traditional autumn dishes',
      duration: '1-2 hours',
      bestTime: 'September - November'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autumn in Lapland
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Experience the magical ruska season when Lapland transforms into a canvas of golden and red colors
            </p>
          </div>
        </div>
      </section>

      {/* Ruska Season Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Famous Ruska Season
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Autumn in Lapland is a spectacular time when the landscape transforms into a breathtaking display of colors. 
                The ruska season typically occurs from mid-September to early October, when the birch and aspen trees 
                turn brilliant shades of yellow, orange, and red.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                This is the perfect time for photography, hiking, and experiencing the unique beauty of Lapland before 
                the winter snow arrives. The crisp air and stunning colors create an unforgettable atmosphere.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800 font-medium">
                  Best time to visit: Mid-September to early October
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-orange-400 via-red-500 to-yellow-400 flex items-center justify-center text-white text-2xl font-semibold">
                  Ruska Colors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autumn Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Autumn Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the best ways to experience autumn in Lapland with our curated selection of activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {autumnActivities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-medium">Duration:</span> {activity.duration}</p>
                  <p><span className="font-medium">Best Time:</span> {activity.bestTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Plan Your Autumn Adventure
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss the spectacular ruska season in Lapland. Book your autumn getaway now and experience 
            the magic of golden Lapland.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Book Autumn Package
          </button>
        </div>
      </section>
    </div>
  );
}


