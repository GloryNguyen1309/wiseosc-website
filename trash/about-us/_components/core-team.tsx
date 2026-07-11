import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function CoreTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "William",
      role: "Founder, Director",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Noah Davis",
      role: "Technical Lead",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Emma Johnson",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Ava Wilson",
      role: "Web Developer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Sophia Brown",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Liam Miller",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Oliver Smith",
      role: "Backend Developer",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Isabella Garcia",
      role: "QA Engineer",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#050A18] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1E2A4A] mb-8">
          <span className="mr-2">😎</span>
          <span className="font-medium text-sm tracking-wide">
            MEET OUR TEAM
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          Our core <span className="text-[#3B82F6]">team</span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              {/* Background gradient overlay for the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#0F2350] to-transparent opacity-50 z-10"></div>

              {/* Image */}
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover grayscale"
              />

              {/* Name and role */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-white text-black px-2 py-1 inline-block mb-1">
                  <h3 className="font-bold">{member.name}</h3>
                </div>
                <div className="bg-white text-black px-2 py-1 inline-block">
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
