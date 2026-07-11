import Image from "next/image";

export default function OurValues() {
  const values = [
    {
      title: "Team works.",
      icon: "/placeholder.svg?height=40&width=40",
      gradient: true,
    },
    {
      title: "Customer-Centric",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Pursue excellence.",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Create value.",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Go bravely.",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Finish well.",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 bg-gray-50">
      {/* Badge */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100">
          <svg
            className="w-4 h-4 text-blue-500 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L5 12L12 22L19 12L12 2Z" fill="currentColor" />
          </svg>
          <span className="font-medium text-blue-800 text-sm">OUR VALUE</span>
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-purple-600">We believe</span> the best work
          emerges from <br className="hidden md:block" />
          <span className="text-purple-600">collaboration</span> and
          communication. By following our <br className="hidden md:block" />
          curiosity,{" "}
          <span className="text-purple-600">we spark innovation</span>
        </h2>
      </div>

      {/* Value Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border border-gray-200 ${
              value.gradient
                ? "bg-gradient-to-r from-blue-300 to-blue-500 text-white"
                : "bg-white"
            }`}
          >
            <div className="mb-6">
              <Image
                src={value.icon || "/placeholder.svg"}
                alt={value.title}
                width={40}
                height={40}
                className="opacity-80"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p
              className={`text-sm ${
                value.gradient ? "text-blue-50" : "text-gray-600"
              }`}
            >
              Teamwork & collaboration create better results; clients & Lift.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
