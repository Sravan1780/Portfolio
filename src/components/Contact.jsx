import React from 'react';
import { ContactItem } from './ContactItem';

export const Contact = () => {
  return (
    <>
      <div className='text-center'>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Contact us</h2>
      </div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <ContactItem
              icon={<svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}
              title="Email us:"
              description="Email us for general queries, including marketing and partnership opportunities."
              contactInfo="panchakotisravankumar000@gmail.com"
              actionUrl="mailto:panchakotisravankumar000@gmail.com"
            />
            <ContactItem
              icon={<svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z" /></svg>}
              title="Call us:"
              description="Call us to speak to a member of our team. We are always happy to help."
              contactInfo="+91 9948691780"
              actionUrl="tel:+91 9948691780"
            />
            <ContactItem
              icon={<svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" /></svg>}
              title="Support"
              description="Get help from our support center for technical assistance and issue resolution."
              actionText="Support center"
              actionUrl="#support"
            />
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4 mt-40">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} sravankumarpanchakoti. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};