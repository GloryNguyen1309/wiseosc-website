import Container from "@/components/container";
import { CTASection } from "@/app/(main)/sections/cta-section";

const jobDetailsData: { [key: string]: any } = {
  "senior-full-stack-developer": {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote in Sydney, Australia",
    description:
      "We are looking for an experienced Senior Full Stack Developer to join our team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies. The ideal candidate will have strong expertise in both frontend and backend development, with a passion for writing clean, efficient code and solving complex technical challenges.",
    responsibilities: [
      "Design and develop scalable, high-performance web applications from concept to deployment.",
      "Write clean, maintainable, and well-documented code following best practices and coding standards.",
      "Collaborate with cross-functional teams including designers, product managers, and other developers.",
      "Participate in code reviews, architecture discussions, and technical decision-making.",
      "Mentor junior developers and contribute to team knowledge sharing.",
      "Troubleshoot and debug applications, optimize performance, and ensure security best practices.",
    ],
    qualifications: [
      "5+ years of experience in full-stack web development.",
      "Strong proficiency in modern JavaScript/TypeScript, React, Node.js, and related frameworks.",
      "Experience with database design and optimization (PostgreSQL, MongoDB, or similar).",
      "Familiarity with cloud platforms (AWS, Azure, or GCP) and DevOps practices.",
      "Experience with RESTful APIs, GraphQL, and microservices architecture.",
      "Strong problem-solving skills and ability to work in an agile environment.",
      "Excellent communication skills and ability to work collaboratively in a team setting.",
    ],
  },
  "frontend-developer": {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote in Vietnam",
    description:
      "We are seeking a talented Frontend Developer to create exceptional user experiences for our web applications. You will work closely with our design and backend teams to build responsive, performant, and accessible user interfaces using modern frontend technologies.",
    responsibilities: [
      "Develop responsive and interactive user interfaces using React, Next.js, or similar frameworks.",
      "Implement pixel-perfect designs with attention to detail and user experience.",
      "Optimize applications for maximum speed and scalability.",
      "Collaborate with UI/UX designers to translate designs into functional components.",
      "Write reusable, maintainable code and participate in code reviews.",
      "Ensure cross-browser compatibility and accessibility standards (WCAG).",
      "Work with APIs and integrate frontend applications with backend services.",
    ],
    qualifications: [
      "3+ years of experience in frontend development.",
      "Strong proficiency in JavaScript/TypeScript, React, HTML5, CSS3, and modern CSS frameworks.",
      "Experience with state management libraries (Redux, Zustand, or similar).",
      "Knowledge of build tools (Webpack, Vite) and testing frameworks (Jest, React Testing Library).",
      "Understanding of responsive design principles and mobile-first development.",
      "Familiarity with version control systems (Git) and agile development methodologies.",
      "Strong attention to detail and passion for creating exceptional user experiences.",
    ],
  },
  "backend-developer": {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote in Sydney, Australia",
    description:
      "We are looking for a skilled Backend Developer to design and implement robust server-side applications and APIs. You will be responsible for building scalable backend systems, optimizing database performance, and ensuring the reliability and security of our applications.",
    responsibilities: [
      "Design and develop scalable backend services and RESTful/GraphQL APIs.",
      "Implement database schemas, optimize queries, and ensure data integrity.",
      "Build microservices and integrate with third-party APIs and services.",
      "Implement authentication, authorization, and security best practices.",
      "Write unit and integration tests to ensure code quality and reliability.",
      "Monitor application performance, identify bottlenecks, and implement optimizations.",
      "Collaborate with frontend developers to ensure seamless API integration.",
    ],
    qualifications: [
      "3+ years of experience in backend development.",
      "Strong proficiency in Node.js, Python, Go, or similar backend languages.",
      "Experience with database systems (PostgreSQL, MongoDB, Redis) and ORMs.",
      "Knowledge of API design principles, authentication mechanisms (JWT, OAuth), and security best practices.",
      "Experience with cloud services (AWS, Azure, GCP) and containerization (Docker, Kubernetes).",
      "Understanding of microservices architecture and distributed systems.",
      "Strong problem-solving skills and ability to write efficient, scalable code.",
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote in Vietnam",
    description:
      "We are seeking a DevOps Engineer to help build and maintain our infrastructure, CI/CD pipelines, and deployment processes. You will work closely with our development teams to ensure smooth deployments, monitor system health, and optimize our cloud infrastructure for performance and cost efficiency.",
    responsibilities: [
      "Design, implement, and maintain CI/CD pipelines for automated testing and deployment.",
      "Manage cloud infrastructure (AWS, Azure, or GCP) using Infrastructure as Code (IaC) tools.",
      "Monitor application and infrastructure performance, set up alerts, and troubleshoot issues.",
      "Implement and maintain containerization strategies using Docker and Kubernetes.",
      "Ensure system security, implement backup strategies, and disaster recovery plans.",
      "Collaborate with development teams to optimize application performance and scalability.",
      "Document infrastructure, processes, and procedures for team knowledge sharing.",
    ],
    qualifications: [
      "3+ years of experience in DevOps, SRE, or infrastructure engineering.",
      "Strong experience with cloud platforms (AWS, Azure, or GCP) and their services.",
      "Proficiency in Infrastructure as Code tools (Terraform, CloudFormation, or similar).",
      "Experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI, or similar).",
      "Strong knowledge of containerization (Docker) and orchestration (Kubernetes).",
      "Experience with monitoring and logging tools (Prometheus, Grafana, ELK stack, or similar).",
      "Knowledge of scripting languages (Bash, Python) and Linux/Unix systems.",
      "Strong problem-solving skills and ability to work in a fast-paced environment.",
    ],
  },
  "qa-engineer": {
    title: "QA Engineer",
    type: "Full-time",
    location: "Remote in Vietnam",
    description:
      "We are looking for a QA Engineer to ensure the quality and reliability of our software products. You will be responsible for designing and executing test plans, identifying bugs, and working closely with development teams to ensure high-quality releases. The ideal candidate will have experience with both manual and automated testing.",
    responsibilities: [
      "Design, develop, and execute comprehensive test plans and test cases.",
      "Perform manual testing of web and mobile applications across different browsers and devices.",
      "Develop and maintain automated test scripts using testing frameworks.",
      "Identify, document, and track bugs through their lifecycle using issue tracking tools.",
      "Collaborate with developers and product managers to understand requirements and acceptance criteria.",
      "Participate in agile ceremonies and contribute to quality improvement initiatives.",
      "Perform regression testing and ensure fixes are properly validated.",
      "Create and maintain test documentation and reports.",
    ],
    qualifications: [
      "3+ years of experience in QA/testing, preferably in web application testing.",
      "Strong understanding of software testing methodologies, test design techniques, and QA processes.",
      "Experience with test automation tools (Selenium, Cypress, Playwright, or similar).",
      "Knowledge of programming languages (JavaScript, Python, or Java) for test automation.",
      "Experience with API testing tools (Postman, REST Assured, or similar).",
      "Familiarity with version control systems (Git) and CI/CD pipelines.",
      "Strong analytical skills, attention to detail, and ability to think critically.",
      "Excellent communication skills and ability to work collaboratively in cross-functional teams.",
    ],
  },
};

const JobDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const job = jobDetailsData[slug];

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <main className="bg-[#01071A] text-white">
      <section className="bg-transparent bg-[radial-gradient(at_calc(75%)_0%,#004BAD_0%,#01071A_71%)]">
        <Container className="pt-40 pb-20 max-w-[1350px] px-4">
          <h1 className="text-[36px] md:text-[65px] font-medium mb-2 leading-[1.2]">
            {job.title}
          </h1>
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm mt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5"></span>
            <span className="text-black font-semibold">{job.type}</span>
          </div>
          <div className="inline-flex items-center bg-white/80 rounded-full px-4 py-2 text-sm mt-3 text-black">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2.5"></span>
            <span className="font-semibold">{job.location}</span>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-[1350px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                Job Description
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {job.description}
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mt-12 mb-6 bg-[linear-gradient(165deg,_#119CFF,_#97F8F4)] bg-clip-text text-transparent">
                Qualifications
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
                {job.qualifications.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-1">
              <div className="bg-[#0a1635] p-8 rounded-lg sticky top-36">
                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
                <p className="text-gray-400 mb-6">
                  Send your details to{" "}
                  <a
                    href="mailto:careers@wiseaccelerate.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    careers@wiseaccelerate.com
                  </a>
                </p>
                <a
                  href="mailto:careers@wiseaccelerate.com"
                  className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 block"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
};

export default JobDetailPage;
