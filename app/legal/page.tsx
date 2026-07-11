import React from 'react';
import Container from '@/components/container';

export default function LegalPage() {
  return (
    <div className="bg-[#050A1B] pt-[120px] pb-20">
      <Container className="max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service & Privacy Policy</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Terms of Service</h2>
            <p className="text-gray-300 mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">1. Introduction</h3>
            <p className="text-gray-300 mb-4">
              Welcome to Wise Accelerate. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">2. Services</h3>
            <p className="text-gray-300 mb-4">
              Wise Accelerate provides web application development, mobile app development, AI integration, and other technical services. We may modify or discontinue any part of our services at our sole discretion without notice.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">3. Client Obligations</h3>
            <p className="text-gray-300 mb-4">
              Clients are responsible for providing accurate information, necessary access, and timely feedback to facilitate project completion. Clients retain responsibility for compliance with laws applicable to their business and use of our deliverables.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">4. Intellectual Property</h3>
            <p className="text-gray-300 mb-4">
              Upon full payment, clients receive all applicable rights to the final deliverables, except for any third-party materials and our proprietary tools. We retain the right to display and link to your project as part of our portfolio.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">5. Payment</h3>
            <p className="text-gray-300 mb-4">
              Payment terms will be outlined in the project proposal or agreement. Late payments may incur additional fees, and we reserve the right to pause work until outstanding payments are resolved.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">6. Limitation of Liability</h3>
            <p className="text-gray-300 mb-4">
              Wise Accelerate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">7. Termination</h3>
            <p className="text-gray-300 mb-4">
              Either party may terminate the service agreement with written notice. You remain liable for payment of all fees due up to the date of termination.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">1. Information We Collect</h3>
            <p className="text-gray-300 mb-4">
              We collect information you provide to us when you fill out forms on our website, correspond with us, or use our services, including name, email address, phone number, and project details.
            </p>
            <p className="text-gray-300 mb-4">
              We automatically collect certain information when you visit our website, including IP address, browser type, access times, and pages viewed.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">2. How We Use Your Information</h3>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Provide, maintain, and improve our services</li>
              <li className="mb-2">Process transactions and send related information</li>
              <li className="mb-2">Respond to comments, questions, and requests</li>
              <li className="mb-2">Send technical notices, updates, security alerts, and support messages</li>
              <li className="mb-2">Monitor and analyze trends, usage, and activities</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">3. Information Sharing</h3>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">To contractors, service providers, and other third parties who need that information to help us provide our services</li>
              <li className="mb-2">To comply with applicable law, regulation, legal process, or governmental request</li>
              <li className="mb-2">To enforce our terms of service and other agreements</li>
              <li className="mb-2">To protect the rights, property, or safety of Wise Accelerate, our customers, or others</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">4. Data Security</h3>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">5. Your Rights</h3>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal information.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">6. Changes to Our Privacy Policy</h3>
            <p className="text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h3 className="text-xl font-medium text-white mt-6 mb-3">7. Contact Us</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions about our Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300 mb-4">
              Email: <a href="mailto:info@wiseaccelerate.com" className="text-blue-400 hover:text-blue-300">info@wiseaccelerate.com</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
} 