import React, { useState } from 'react';
import { ChevronDown, Mail, Linkedin, Twitter, Send, Code, Heart, Zap, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Scene3D from '../components/Scene3D';
import { ceoData, projects, stats } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Scene3D />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Avatar */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div
                className={`relative w-64 h-64 rounded-full overflow-hidden ring-4 ${
                  isDark ? 'ring-emerald-500/30' : 'ring-emerald-400/50'
                } shadow-2xl`}
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <img
                  src={ceoData.avatar}
                  alt={ceoData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight ${
                  isDark
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent'
                }`}
                style={{ animation: 'slideUp 0.8s ease-out' }}
              >
                {ceoData.name}
              </h1>
              <p
                className={`text-xl sm:text-2xl md:text-3xl font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                style={{ animation: 'slideUp 0.8s ease-out 0.1s backwards' }}
              >
                {ceoData.title}
              </p>
              <p
                className={`text-lg sm:text-xl ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
                style={{ animation: 'slideUp 0.8s ease-out 0.2s backwards' }}
              >
                {ceoData.company}
              </p>
            </div>

            {/* Tagline */}
            <div
              className={`inline-block px-6 py-3 rounded-full backdrop-blur-md ${
                isDark
                  ? 'bg-emerald-500/10 border border-emerald-500/30'
                  : 'bg-emerald-50 border border-emerald-200'
              }`}
              style={{ animation: 'slideUp 0.8s ease-out 0.3s backwards' }}
            >
              <p
                className={`text-lg sm:text-xl font-semibold ${
                  isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`}
              >
                {ceoData.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              style={{ animation: 'slideUp 0.8s ease-out 0.4s backwards' }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className={`group px-8 py-6 text-lg font-semibold rounded-full transition-all ${
                  isDark
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                } shadow-lg hover:shadow-xl hover:scale-105`}
              >
                Get In Touch
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                variant="outline"
                className={`px-8 py-6 text-lg font-semibold rounded-full transition-all ${
                  isDark
                    ? 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                } hover:scale-105`}
              >
                View Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown
            className={isDark ? 'text-emerald-400' : 'text-emerald-600'}
            size={32}
          />
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'
              }`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`relative p-8 rounded-3xl backdrop-blur-md ${
                isDark
                  ? 'bg-white/5 border border-emerald-500/20'
                  : 'bg-white border border-emerald-200 shadow-lg'
              }`}
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-20 blur-2xl" />
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {ceoData.bio}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Code className={isDark ? 'text-emerald-400' : 'text-emerald-600'} size={24} />
                <Heart className={isDark ? 'text-cyan-400' : 'text-cyan-600'} size={24} />
                <Zap className={isDark ? 'text-emerald-400' : 'text-emerald-600'} size={24} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`group hover:scale-105 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-white/5 border-emerald-500/20 hover:bg-white/10'
                      : 'bg-white border-emerald-200 hover:shadow-xl'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`text-3xl sm:text-4xl font-bold mb-2 ${
                        isDark
                          ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Work Experience
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'
              }`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group overflow-hidden transition-all hover:scale-[1.02] cursor-pointer ${
                  isDark
                    ? 'bg-white/5 border-emerald-500/20 hover:border-emerald-500/50'
                    : 'bg-white border-emerald-200 hover:border-emerald-400 shadow-lg hover:shadow-2xl'
                }`}
                style={{
                  transform: hoveredProject === project.id ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0) rotateY(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      isDark ? 'bg-emerald-500/90 text-black' : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={isDark ? 'border-emerald-500/30 text-emerald-400' : 'border-emerald-300 text-emerald-600'}
                      >
                        {tech}
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
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'
              }`}
            />
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind? Let's work together to make it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card
              className={`p-6 backdrop-blur-md ${
                isDark ? 'bg-white/5 border-emerald-500/20' : 'bg-white border-emerald-200 shadow-lg'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={isDark ? 'bg-white/5 border-emerald-500/20 text-white' : 'bg-white border-emerald-200'}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={isDark ? 'bg-white/5 border-emerald-500/20 text-white' : 'bg-white border-emerald-200'}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={isDark ? 'bg-white/5 border-emerald-500/20 text-white' : 'bg-white border-emerald-200'}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full py-6 text-lg font-semibold rounded-lg transition-all ${
                    isDark
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card
                className={`p-6 backdrop-blur-md hover:scale-105 transition-all cursor-pointer ${
                  isDark ? 'bg-white/5 border-emerald-500/20 hover:bg-white/10' : 'bg-white border-emerald-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-100'}`}>
                    <Mail className={isDark ? 'text-emerald-400' : 'text-emerald-600'} size={24} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                    <a
                      href={`mailto:${ceoData.email}`}
                      className={`${isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'}`}
                    >
                      {ceoData.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card
                className={`p-6 backdrop-blur-md hover:scale-105 transition-all cursor-pointer ${
                  isDark ? 'bg-white/5 border-emerald-500/20 hover:bg-white/10' : 'bg-white border-emerald-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-100'}`}>
                    <Linkedin className={isDark ? 'text-cyan-400' : 'text-cyan-600'} size={24} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
                    <a
                      href={ceoData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'bg-black border-emerald-500/20' : 'bg-white border-emerald-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 {ceoData.name}. Built with <Heart className="inline w-4 h-4 text-red-500" /> for animals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
