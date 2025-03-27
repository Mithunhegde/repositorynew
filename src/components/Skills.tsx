"use client";

import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPython, 
  SiDocker,
  SiAmazon,
  SiGit,
  SiGraphql
} from 'react-icons/si';

const skillsData = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
  { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
  { name: 'Git', icon: SiGit, color: 'text-red-500' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600' },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            I specialize in these technologies to build performant, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-800 shadow-lg mb-4">
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <h3 className="text-gray-300 text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 