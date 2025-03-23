import MissionImage from '../../assets/About/Mission.jpg';

const MissionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2 inline-block">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At FarmTech, we're committed to revolutionizing agriculture through sustainable practices
              and innovative technology. Our mission is to empower farmers with the tools and knowledge
              they need to succeed in modern farming.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe in creating a future where agriculture is both productive and environmentally
              conscious, ensuring food security for generations to come.
            </p>
            <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
          <div className="relative">
            <img
              src={MissionImage}
              alt="Farming Technology"
              className="rounded-lg shadow-2xl w-full object-cover h-full max-h-96"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-green-500 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-yellow-400 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;