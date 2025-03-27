"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap mb-4 gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700 text-xs font-medium rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-4">
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-cyan-500 transition-colors">
              <FiGithub className="mr-2" />
              <span>Code</span>
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-500 transition-colors">
              <FiExternalLink className="mr-2" />
              <span>Live Demo</span>
            </Link>
          )}
          <Link href={`/projects/${id}`} className="ml-auto text-cyan-500 hover:text-cyan-400 transition-colors">
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 