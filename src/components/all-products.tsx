'use client';

import Image from 'next/image';
import React from 'react';
import WhatsAppButton from './wbutton'; // yahan path ko adjust karen agar folder alag hai

const EcommerceSection = () => {
  const products = [
    { src: '/1 (1).jpg', title: 'The Catalyzer', price: '$16.00' },
    { src: '/1 (2).jpg', title: 'Shooting Stars', price: '$21.15' },
    { src: '/1 (3).jpg', title: 'Neptune', price: '$12.00' },
    { src: '/1 (4).jpg', title: 'The 400 Blows', price: '$18.40' },
    { src: '/1 (5).jpg', title: 'The Catalyzer', price: '$16.00' },
    { src: '/1 (6).jpg', title: 'Shooting Stars', price: '$21.15' },
    { src: '/1 (7).jpg', title: 'Neptune', price: '$12.00' },
    // { src: '/1 (1).jpg', title: 'The 400 Blows', price: '$18.40' },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                
                {/* Price and WhatsApp button row */}
                <div className="flex items-center justify-between mt-1">
                  <p>{product.price}</p>
                  <WhatsAppButton
                    title={product.title}
                    price={product.price}
                    imageUrl={product.src}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
