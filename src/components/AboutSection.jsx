import { Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionated Tech Enthusiast
            </h3>


            <p className="text-muted-foreground">
              I&#39;m passionate about creating elegant solutions to complex
              problems, and I&#39;m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            {/* Work Experience */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Software Engineer Intern</span> at X-Venture <br />
                    <span >2024/01 - 2024/06</span><br />
                  - Assisted in the development of RESTful APIs using Spring Data JPA.
                  </p>
                 
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">B.Sc. (Hons) in Computing & Information Systems</span><br />
                   Sabaragamuwa University of Sri Lanka, 
                  </p>
              <h3>2020 – 2024</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};