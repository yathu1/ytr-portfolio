import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Book Nation - Book Selling Platform",
    description: "This is project-based learning as a mini-project in the 4th year. It’s an online platform designed to connect book lovers, students, and budget-conscious readers with sellers offering pre-owned books.",
    image: "/projects/booknation.jpg",
    tags: ["React", "TailwindCSS", "Node.js","Express.js","Cloudinary","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/yathu1/multivendor-backend",
  },
  {
    id: 2,
    title: "Individual Identification of Asian Elephants Based on Ear Patterns using Deep Learning – Research Project",
    description:
      "Developed a deep learning-based model for identifying individual wild Asian elephants using ear patterns, addressing challenges like poor image quality and environmental noise.",
    image: "/projects/cnn.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/yathu1/elephant-identification",
  },
  {
    id: 3,
    title: "OpenCart - Manual Testing",
    description:
      "OpenCart is an open-source e-commerce platform used to sell products. As part of the manual testing process, I designed comprehensive test scenarios and test cases to validate the functionality, usability, and reliability of the application.",
    image: "/projects/OpenCart.jpg",
    tags: ["Excel"],
    demoUrl: "#",
    githubUrl: "https://github.com/yathu1/Open-Cart-Project",
  },
  {
    id: 4,
    title: "Console Based Java Application(Student Management) - (Java)",
    description:
      "It's a console-based Java application with register and login functionality & allows the management of student records through CRUD operations.",
    image: "/projects/stu.webp",
    tags: ["Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/yathu1/Console_CRUD_Java"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/yathu1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
