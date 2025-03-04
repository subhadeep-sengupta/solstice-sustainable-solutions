import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-lime-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">SolarTech Solutions</h3>
            <p>Providing clean energy solutions for a brighter future.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-yellow-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>123 Solar Street, Sunnyville, CA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@solartech.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 SolarTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
