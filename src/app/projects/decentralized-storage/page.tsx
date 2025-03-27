import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Decentralized Storage Platform | My Portfolio',
  description: 'A system leveraging protocols like IPFS for distributed file storage with an incentive mechanism'
};

export default function DecentralizedStoragePage() {
  return (
    <div className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-10">
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>
        
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Decentralized Storage Platform</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-indigo-900/50 text-xs font-medium rounded-full text-indigo-300">
              IPFS
            </span>
            <span className="px-2 py-1 bg-purple-900/50 text-xs font-medium rounded-full text-purple-300">
              Web3
            </span>
            <span className="px-2 py-1 bg-blue-900/50 text-xs font-medium rounded-full text-blue-300">
              React
            </span>
            <span className="px-2 py-1 bg-green-900/50 text-xs font-medium rounded-full text-green-300">
              Node.js
            </span>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/username/decentralized-storage" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-cyan-500 transition-colors">
              <FiGithub className="mr-2" />
              <span>View Code</span>
            </Link>
            <Link href="https://decentralized-storage-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-500 transition-colors">
              <FiExternalLink className="mr-2" />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
            Distributed Storage Interface
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                The Decentralized Storage Platform is a system that leverages protocols like IPFS for distributed file 
                storage combined with an incentive mechanism similar to Filecoin tokens. The goal was to create a 
                user-friendly interface for interacting with distributed storage networks.
              </p>
              
              <p>
                Users can store files in a content-addressed way, ensuring data integrity and persistence across the 
                network. The platform handles the complexity of distributed systems behind a clean, intuitive interface.
              </p>
              
              <p>
                The system includes features for uploading, sharing, and retrieving files, with a focus on security 
                and reliability. Users can track their storage usage and manage access controls for shared files.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-10 mb-4">Key Features</h3>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Content-addressed storage using IPFS protocol</li>
                <li>User-friendly interface for file management</li>
                <li>Token-based incentive mechanism for storage providers</li>
                <li>Secure file sharing with granular permissions</li>
                <li>Encryption for sensitive data</li>
                <li>Real-time file synchronization</li>
                <li>Storage usage analytics and monitoring</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mt-10 mb-4">Technical Challenges</h3>
              
              <p>
                Implementing this project required solving several technical challenges:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensuring file integrity across distributed networks</li>
                <li>Building a reliable pinning service to maintain file availability</li>
                <li>Designing an efficient incentive mechanism for storage providers</li>
                <li>Creating a seamless user experience despite the distributed nature of the system</li>
                <li>Optimizing for performance with potentially large files</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Technologies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Frontend</h3>
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux Toolkit</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-medium text-white">Backend</h3>
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>IPFS API</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-medium text-white">Infrastructure</h3>
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>AWS</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">My Role</h2>
              <p className="text-gray-300">
                As the lead developer on this project, I was responsible for the entire development lifecycle, including:
              </p>
              <ul className="mt-2 space-y-2 text-gray-400 list-disc pl-5">
                <li>System architecture design</li>
                <li>Frontend and backend implementation</li>
                <li>IPFS integration</li>
                <li>Security implementation</li>
                <li>Performance optimization</li>
                <li>Deployment and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 