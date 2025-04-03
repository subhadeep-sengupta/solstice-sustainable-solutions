import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#007C11] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Solstice Sustainable Solutions
            </h3>
            <p>Providing clean energy solutions for a brighter future.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Aboutus" className="">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="/Projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/Contactus" className="">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Shefali Mansion, Apcar Garden, Asansol, West Bengal 713301</p>
            <p>Phone:+91 9475588412</p>
            <p>Email: solsticesustainablesolutions@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; 2025 Solstice Sustainable Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
