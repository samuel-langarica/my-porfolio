'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { personalInfo, experiences, projects, education, skills, socialLinks, interests } from '@/data/portfolio';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Duration in milliseconds
          let start: number | null = null;

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (easeInOutCubic)
            const easeProgress = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeProgress);

            if (progress < 1) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        }
      });
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl font-bold text-blue-600 mb-4">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl text-slate-700 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                {personalInfo.bio}
              </p>
              <div className="flex space-x-4 mb-8">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </a>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = require('react-icons/fa')[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <Image
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bio */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Professional Background
                </h3>
                <p className="text-slate-600">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Interests */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Interests & Passions
                </h3>
                <div className="space-y-6">
                  {interests.map((interestGroup, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium text-blue-600 mb-3">
                        {interestGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {interestGroup.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {exp.position}
                  </h3>
                  <p className="text-slate-700">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {project.imageUrl && (
                    <div className="relative h-48">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-700">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  {edu.description && (
                    <p className="text-slate-600">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
              Contact Me
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-4">
                <p className="flex items-center justify-center">
                  <FaEnvelope className="mr-2 text-blue-600" />
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-700">
                    {personalInfo.email}
                  </a>
                </p>
                <p className="flex items-center justify-center">
                  <FaPhone className="mr-2 text-blue-600" />
                  <a href={`tel:${personalInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                    {personalInfo.phone}
                  </a>
                </p>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                {socialLinks.map((link) => {
                  const Icon = require('react-icons/fa')[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Download FAB */}
      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 z-50 group"
      >
        <div className="flex items-center space-x-2">
          <FaFileDownload size={24} />
          <span className="absolute right-full mr-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Download Resume
          </span>
        </div>
      </motion.a>
    </Layout>
  );
}
