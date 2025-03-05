function Footer() {
    return (
      <div className="py-4 mt-8 text-white bg-gray-900">
        <div className="flex items-center justify-center max-w-screen-xl px-6 mx-auto">
          <h1 className="text-sm text-center md:text-base">
            &copy; {new Date().getFullYear()} All rights reserved.
          </h1>
        </div>
      </div>
    );
  }
  
  export default Footer;
  