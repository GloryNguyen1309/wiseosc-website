import Image from "next/image";

interface Award {
  year: string;
  institution: string;
  project: string;
  client: string;
}

export default function AwardsSection() {
  const awards: Award[] = [
    {
      year: "2019",
      institution: "Ace Awards",
      project: "Website",
      client: "Amaze Media Labs",
    },
    {
      year: "2020",
      institution: "Ember Awards",
      project: "User Experience",
      client: "Born Digital",
    },
    {
      year: "2021",
      institution: "Awwwards",
      project: "Website",
      client: "Vossemeren",
    },
    {
      year: "2022",
      institution: "Awwwards",
      project: "E-Commerce",
      client: "Oliver Apt",
    },
    {
      year: "2023",
      institution: "Awwwards",
      project: "Website",
      client: "Venture Beyond",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-gray-50">
      <div className="mb-16 flex items-center">
        <h2 className="text-5xl font-bold mr-4">AWARDS</h2>
        <span className="text-4xl">🏆</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Person working at computer"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Awards Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 text-left text-blue-500 font-medium">
                  Years
                </th>
                <th className="py-4 text-left text-blue-500 font-medium">
                  Institution
                </th>
                <th className="py-4 text-left text-blue-500 font-medium">
                  Project
                </th>
                <th className="py-4 text-left text-blue-500 font-medium">
                  Clients
                </th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award, index) => (
                <tr
                  key={index}
                  className={index % 2 === 1 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-6 px-2">{award.year}</td>
                  <td className="py-6 px-2">{award.institution}</td>
                  <td className="py-6 px-2">{award.project}</td>
                  <td className="py-6 px-2">{award.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
