import Link from "next/link";
// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Malbusaat offers the latest fashion trends with high-quality clothing for all occasions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: naeemsarfaraz414@gmail.com</p>
            <p className="text-gray-400">Phone: 03312670848</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;