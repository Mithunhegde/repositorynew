import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Skills />
      
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              Check out some of my recent work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-60 overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                  Distributed Storage
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Decentralized Storage Platform</h3>
                <p className="text-gray-400 mb-4">
                  A system leveraging protocols like IPFS for distributed file storage with an 
                  incentive mechanism. Includes an easy-to-use interface for uploading, sharing, 
                  and retrieving files.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                <Link href="/projects/decentralized-storage" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  View Project <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            <Link href="/projects" className="flex items-center justify-center h-full bg-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">View All Projects</h3>
                <p className="text-gray-400 mb-6">
                  Explore my full portfolio of work and personal projects.
                </p>
                <span className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  See More <FiArrowRight className="ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
