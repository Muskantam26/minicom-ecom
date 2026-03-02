import React from 'react';

const TeamSection = ({ subtitle, title, teamMembers }) => {
  return (
    <div className="flex-col text-center mt-10 w-full mb-10  ">
      <p className="text-sm font-medium text-gray-500 tracking-widest mb-4 uppercase">{subtitle}</p>
      <h2 className="text-3xl font-bold text-black mb-10">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  px-10 mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow cursor-pointer h-[400px] ">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-hover/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
