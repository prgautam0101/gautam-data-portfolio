
import React from 'react';
import { Phone, Mail, MapPin, Download, Github, Linkedin, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Users, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const experiences = [
    {
      title: "Vice President",
      company: "Nepalese Student Association (NSA), USM",
      period: "May 2023 – June 2024",
      description: "Spearheaded event planning, student workshops, and digital engagement campaigns. Represented NSA in campus-wide programs.",
      type: "leadership"
    },
    {
      title: "Supervisor of Operations",
      company: "QFX Cinemas, Nepal",
      period: "10/2018 – 12/2021",
      description: "Led event logistics, trained staff, managed digital feedback systems.",
      type: "professional"
    },
    {
      title: "Hospitality Operations Analyst",
      company: "Eco Home Hotel, Kathmandu",
      period: "06/2021 – 12/2021",
      description: "Coordinated events and supported operations during high school internship.",
      type: "professional"
    }
  ];

  const projects = [
    {
      title: "Customer Service Data Optimization",
      company: "QFX Cinemas",
      description: "Built a digital tracking system to improve response time by 30%.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Leadership Onboarding Workshops",
      company: "NSA",
      description: "Designed and delivered training for new student leaders.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "California Housing Price Prediction Model",
      company: "Academic Project",
      description: "Built with Scikit-Learn, Pandas, and Seaborn; implemented a Linear Regression model.",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "MySQL", "Excel", "Tableau"] },
    { category: "Analysis", items: ["Data Analysis", "Data Visualization", "Statistical Modeling"] },
    { category: "Leadership", items: ["Team Leadership", "Communication", "Public Speaking"] },
    { category: "Management", items: ["Event Planning", "Student Engagement", "Project Management"] },
    { category: "Tools", items: ["Trello", "Notion", "Google Workspace", "Scikit-Learn"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Prakash Gautam
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-blue-100 animate-fade-in">
                Emerging Tech-Savvy Student Leader & Data Enthusiast
              </p>
              <p className="text-lg mb-8 text-blue-200 animate-fade-in">
                "Empowering Campus Engagement | Building Data-Driven Solutions"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-900">PG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Student-focused and collaborative professional with hands-on experience in campus programming, 
                leadership development, and event management. Passionate about student engagement, process improvement, 
                and using data to enhance services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adept in communication, teamwork, and delivering high-impact projects in tech and hospitality. 
                Currently pursuing my Computer Science degree while preparing for my MBA journey.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-teal-600" />
                <span className="text-lg">Hattiesburg, MS</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-teal-600" />
                <span className="text-lg">(601) 658 4717</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <span className="text-lg">prgautam592@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Education</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-teal-600" />
                  <div>
                    <CardTitle className="text-xl">MBA Candidate</CardTitle>
                    <CardDescription className="text-lg">The University of Southern Mississippi | Starting Fall 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-xl">B.S. in Computer Science</CardTitle>
                    <CardDescription className="text-lg">Expected May 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Relevant courses: Algorithms, Data Structures, Databases, Operating Systems, Robotics</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-gray-600" />
                  <div>
                    <CardTitle className="text-xl">Diploma in Hotel Management</CardTitle>
                    <CardDescription className="text-lg">Purbanchal Secondary School | Graduated 2021</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Experience</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {exp.type === 'leadership' ? 
                        <Users className="w-8 h-8 text-teal-600" /> : 
                        <Briefcase className="w-8 h-8 text-blue-600" />
                      }
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700">{exp.company}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Projects</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-teal-600" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover:bg-teal-100 hover:text-teal-800 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-12 text-blue-100">Ready to collaborate on your next project or discuss opportunities?</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-teal-300" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p>(601) 658 4717</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-teal-300" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p>prgautam592@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-teal-300" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p>Hattiesburg, MS</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300 text-center">
        <p>&copy; 2024 Prakash Gautam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
