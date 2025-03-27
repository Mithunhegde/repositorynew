import ContactForm from "@/components/ContactForm";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const metadata = {
  title: 'Contact | My Portfolio',
  description: 'Get in touch with me for collaborations or opportunities'
};

export default function ContactPage() {
  return (
    <div className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question or want to work together? Reach out using the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <FiMail className="h-6 w-6 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <FiMapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-400">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <FiPhone className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-700 pt-6">
              <p className="text-gray-400">Prefer to connect on social media? Check out the links in the footer!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 