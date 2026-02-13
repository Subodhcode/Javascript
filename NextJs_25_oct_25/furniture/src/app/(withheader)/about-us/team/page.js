import React from "react";

const team = [
  { name: "John Doe", role: "Frontend Dev", img: "/team1.jpg" },
  { name: "Sara", role: "UI Designer", img: "/team2.jpg" },
  { name: "John Doe", role: "Frontend Dev", img: "/team1.jpg" },
  { name: "Sara", role: "UI Designer", img: "/team2.jpg" },
  { name: "John Doe", role: "Frontend Dev", img: "/team1.jpg" },
  { name: "Sara", role: "UI Designer", img: "/team2.jpg" },
  { name: "John Doe", role: "Frontend Dev", img: "/team1.jpg" },
  { name: "Sara", role: "UI Designer", img: "/team2.jpg" },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden group">

              <div className="relative">
                <img src={member.img} className="w-full h-72 object-cover" />

                <div className="absolute inset-0 bg-black/60 flex justify-center items-center gap-4
                                opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white">F</span>
                  <span className="text-white">I</span>
                  <span className="text-white">T</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

