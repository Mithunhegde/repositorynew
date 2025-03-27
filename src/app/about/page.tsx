import { FiDownload } from "react-icons/fi";
import Skills from "@/components/Skills";
import Link from "next/link";

export const metadata = {
  title: 'About Me | My Portfolio',
  description: 'Learn more about my background, skills, and experience as a developer'
};

export default function AboutPage() {
  return (
    <div className="bg-gray-900">
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  I&apos;m a passionate full-stack developer with a focus on building innovative and 
                  user-friendly web applications. My journey in software development began 
                  over 5 years ago, and I&apos;ve been hooked ever since.
                </p>
                
                <p>
                  I specialize in developing modern web applications using JavaScript/TypeScript, 
                  React, Next.js, and Node.js. I&apos;m particularly interested in distributed systems, 
                  cloud architecture, and creating scalable and maintainable codebases.
                </p>
                
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing my knowledge through tech articles and tutorials.
                </p>
              </div>
              
              <div className="mt-8 border-t border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Professional Experience</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-white">Senior Full Stack Developer</h4>
                      <span className="text-sm text-gray-400">2020 - Present</span>
                    </div>
                    <h5 className="text-md text-purple-400 mb-2">Tech Innovations Inc.</h5>
                    <p className="text-gray-300">
                      Led the development of multiple web applications, mentored junior developers,
                      and implemented CI/CD pipelines to improve deployment efficiency.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-white">Full Stack Developer</h4>
                      <span className="text-sm text-gray-400">2017 - 2020</span>
                    </div>
                    <h5 className="text-md text-cyan-400 mb-2">Web Solutions Co.</h5>
                    <p className="text-gray-300">
                      Developed and maintained various client projects using React, Node.js,
                      and MongoDB. Collaborated closely with design and product teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">BS in Computer Science</h3>
                    <p className="text-gray-400">University of Technology</p>
                    <p className="text-sm text-gray-500">2013 - 2017</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-lg font-medium text-white">Certifications</h3>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      <li>AWS Certified Developer</li>
                      <li>MongoDB Certified Developer</li>
                      <li>Google Cloud Professional Developer</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Download Resume</h2>
                <Link href="#" className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg shadow transition-all font-medium">
                  <FiDownload className="mr-2" /> Resume PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Skills />
    </div>
  );
} 