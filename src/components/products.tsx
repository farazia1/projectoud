'use client';

import React from 'react';
import Image from 'next/image';
import WhatsAppButton from './wbutton'; // ✅ Make sure this path is correct

export const Products = () => {
  const products = [
    { src: '/1 (2).jpg', alt: 'Chichen Itza', title: 'Chichen Itza', price: '$16.00' },
    { src: '/1 (1).jpg', alt: 'Colosseum Roma', title: 'Colosseum Roma', price: '$21.15' },
    { src: '/1 (3).jpg', alt: 'Great Pyramid of Giza', title: 'Great Pyramid', price: '$12.00' },
    { src: '/1 (4).jpg', alt: 'San Francisco', title: 'San Francisco', price: '$18.40' },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify...
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={720}
                    height={400}
                    className="h-40 rounded w-full object-cover object-center mb-6"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {product.title}
                  </h2>

                  {/* 👉 Price + Button Side-by-Side */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-600 text-sm">{product.price}</p>
                    <WhatsAppButton
                      title={product.title}
                      price={product.price}
                      imageUrl={product.src}
                    />
                  </div>

                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
