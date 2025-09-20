import React from 'react';

const teamMembers = [
  {
    name: 'ABDALLAH A ALI',
    role: 'ICT Manager & DBA',
    quote: 'Experienced in database management and ICT infrastructure leadership.',
    image: '',
  },
  {
    name: 'AISHA H BAKARI',
    role: 'Accountant & Cybersecurity',
    quote: 'Balancing financial systems with secure digital protection.',
    image: '',
  },
  {
    name: 'ALI H ALI',
    role: 'GIS & Environmental Expert',
    quote: 'Specialist in geospatial solutions and environmental management.',
    image: '',
  },
  {
    name: 'ASHURA S KHAMIS',
    role: 'Geospatial Developer',
    quote: 'Building innovative mapping and spatial analysis tools.',
    image: '',
  },
  {
    name: 'IQIRABIN A SAID',
    role: 'Network & Cybersecurity',
    quote: 'Ensuring reliable networks and safeguarding digital assets.',
    image: '',
  },
  {
    name: 'KASSIM M ZAHRAN',
    role: 'UI/UX Designer',
    quote: 'Crafting user-friendly and engaging digital experiences.',
    image: '',
  },
  {
    name: 'KHALID K MAJID',
    role: 'Mobile App Developer',
    quote: 'Transforming ideas into scalable mobile applications.',
    image: '',
  },
  {
    name: 'LUQMAN H MOHAMMED',
    role: 'Software Engineer',
    quote: 'Designing and developing robust software solutions.',
    image: '',
  },
  {
    name: 'MOHAMED N MOHAMED',
    role: 'Communication Officer',
    quote: 'Connecting people through clear and impactful communication.',
    image: '',
  },
  {
    name: 'MUDRIK M IDDI',
    role: 'IOT Developer',
    quote: 'Creating smart solutions through connected technologies.',
    image: '',
  },
  {
    name: 'MUHAMAD A MUHAMAD',
    role: 'Surveyor',
    quote: 'Delivering accurate land and spatial data services.',
    image: '',
  },
  {
    name: 'MUNDHIR M BAKAR',
    role: 'Cloud & DevOps Engineer',
    quote: 'Building secure and scalable cloud-based systems.',
    image: '',
  },
  {
    name: 'SHARIFA A KHAMIS',
    role: 'AI & ML Developer',
    quote: 'Designing intelligent systems powered by machine learning.',
    image: '',
  },
  {
    name: 'YUSSRA S ABDALLA',
    role: 'Quality Assurance Officer',
    quote: 'Ensuring reliability and excellence in every solution.',
    image: '',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our talented team combines local expertise with global best practices to deliver innovative solutions for Zanzibar and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-600">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-md">
                {/* Placeholder for profile image */}
                <span className="text-3xl text-blue-600 font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">{member.role}</p>
              <p className="text-gray-500 text-xs italic text-center">“{member.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
