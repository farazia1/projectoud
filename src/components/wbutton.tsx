import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // npm install react-icons

interface WhatsAppButtonProps {
  title: string;
  price: string;
  imageUrl: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ title, price, imageUrl }) => {
  const handleClick = () => {
    const phoneNumber = '923312670848';
    const message = `Hello! I'm interested in this product:\n\n*${title}*\nPrice: ${price}\n\nImage: ${window.location.origin}${imageUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-green-500 text-white text-sm px-3 py-1.5 rounded-full shadow-md hover:bg-green-600 transition duration-200"
    >
      <FaWhatsapp className="text-lg" />
      Order
    </button>
  );
};

export default WhatsAppButton;
