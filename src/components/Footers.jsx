export default function AppFooter() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8 relative mt-32 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Exclusive</h3>
          <div className="font-semibold mb-3">Subscribe</div>
          <div className="mb-3">Get 10% off your first order</div>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l bg-black border border-gray-700 outline-none text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-r font-bold"
              aria-label="Subscribe"
            >
              &rarr;
            </button>
          </form>
        </div>
        {/* Support Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Support</h3>
          <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div className="mt-1">exclusive@gmail.com</div>
          <div className="mt-1">+88015-88888-9999</div>
        </div>
        {/* Account Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Account</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>
        {/* Quick Link Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Quick Link</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Download App Column */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">Download App</h3>
          <div className="mb-2">Save $3 with App New User Only</div>
          <div className="flex gap-2 mb-3">
            {/* These QR and App icons should be real assets */}
            <img
              src="/path/to/qr-code.png"
              alt="App QR"
              className="h-12 w-12 object-cover"
            />
            <div className="flex flex-col justify-center gap-2">
              <img
                src="/path/to/google-play.png"
                alt="Google Play"
                className="h-7"
              />
              <img
                src="/path/to/app-store.png"
                alt="App Store"
                className="h-7"
              />
            </div>
          </div>
          <div className="flex gap-4 text-xl mt-2">
            <a href="#" aria-label="Facebook">
              {/* <FaFacebookF /> */}
            </a>
            <a href="#" aria-label="Twitter">
              {/* <FaTwitter /> */}
            </a>
            <a href="#" aria-label="Instagram">
              {/* <FaInstagram /> */}
            </a>
            <a href="#" aria-label="LinkedIn">
              {/* <FaLinkedinIn /> */}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10 text-gray-400 text-xs">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
