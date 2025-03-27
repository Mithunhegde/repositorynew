import ProjectCard from "@/components/ProjectCard";

// This would typically come from a database or CMS
const projectsData = [
  {
    id: "decentralized-storage",
    title: "Decentralized Storage Platform",
    description: "A system leveraging protocols like IPFS for distributed file storage with an incentive mechanism.",
    image: "/projects/decentralized-storage.jpg",
    tags: ["IPFS", "Web3", "React", "Node.js"],
    githubUrl: "https://github.com/username/decentralized-storage",
    liveUrl: "https://decentralized-storage-demo.vercel.app"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "Intelligent chat interface with natural language processing capabilities for customer support.",
    image: "/projects/ai-chatbot.jpg",
    tags: ["AI", "NLP", "React", "Python", "Flask"],
    githubUrl: "https://github.com/username/ai-chatbot"
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured online store with product management, cart functionality, and payment processing.",
    image: "/projects/e-commerce.jpg",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/username/e-commerce-platform",
    liveUrl: "https://e-commerce-demo.vercel.app"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with visualization.",
    image: "/projects/fitness-tracker.jpg",
    tags: ["React Native", "GraphQL", "Firebase", "D3.js"],
    githubUrl: "https://github.com/username/fitness-tracker"
  }
];

export const metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore my projects and applications'
};

export default function ProjectsPage() {
  return (
    <div className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents
            different challenges and learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 