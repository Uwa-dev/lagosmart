import { FEATURES } from '../constants';
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-w-7xl w-full px-6">
        <ul className="regular-14 flex flex-col md:flex-row justify-between text-gray-600 space-y-8 md:space-y-0 md:space-x-8">
          <li className="flex-1">
            <h3 className="text-2xl font-bold mb-4">We Innovate For Your <br /> Requirements.</h3>
            <p className="text-base">
              In the large sector of Technology Domain Business Solution, lagoSmart Project is based with determination for being the “preferred” B-B Supplier with innovative,
              price-effective and results-oriented efforts. lagoSmart Project companies are established and very well known in the field of Data-Audio-Video Analytics & Security,
              Access Control & Surveillance, 3D Imaging, and Power Solutions serving the African market in Nigeria, Ghana, Senegal, Tanzania, Zambia..
            </p>
          </li>
          <li className="flex-1 space-y-8">
            {FEATURES.map((feature:any, index:any) => (
              <div key={index} className="flex items-start space-x-4">
                <Image src={feature.image} alt={feature.title} width={100} height={100} className="rounded-lg" />
                <div>
                  <h6 className="text-xl font-semibold">{feature.title}</h6>
                  <p className="text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;