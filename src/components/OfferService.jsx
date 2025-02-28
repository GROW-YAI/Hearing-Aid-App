import { Ear, Handshake, Lightbulb, Heart } from 'lucide-react';

const services = [
  {
    icon: <Ear size={40} />, 
    title: 'Affordable Hearing Aids',
    description: 'Developing cost-effective and locally-made hearing aids to improve accessibility for individuals with hearing impairments.',
  },
  {
    icon: <Handshake size={40} />, 
    title: 'Community Support & Inclusion',
    description: 'Fostering stronger communication between the deaf community and the public through innovative solutions.',
  },
  {
    icon: <Lightbulb size={40} />, 
    title: 'Innovation in Assistive Tech',
    description: 'Utilizing advanced yet affordable technology to create sustainable hearing solutions tailored to local needs.',
  },
  {
    icon: <Heart size={40} />, 
    title: 'Empowering Lives',
    description: 'Providing individuals with hearing impairments greater independence, confidence, and opportunities.',
  },
];

const OfferService = () => {
  return (
    <div className="text-black py-16 px-4 sm:px-8 lg:px-16 ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">Breaking Barriers in Communication</h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
            We are dedicated to enhancing communication accessibility for individuals with hearing impairments. 
            Our mission is to develop innovative, locally-made, and affordable hearing aids while fostering 
            a more inclusive society through technology and support services.
          </p>
          <div className="mt-12">
            <button className="px-6 py-3 bg-[#212542] text-white rounded-full transition-all duration-300 hover:bg-[#5bb450] text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex items-start border-l-4 border-[#1D1E22]">
                <div className="mr-4 text-blue-400">
                  <div className="bg-[#FF1B2A] text-white p-4 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#1D1E22]">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferService;
