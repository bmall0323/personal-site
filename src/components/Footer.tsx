const Footer = () => {
    return (
      <footer className="w-full mt-12 p-6 border-t border-gray-300 bg-gray-50 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Bill Malley</p>
        <div className="mt-2 space-x-4">
          <a
            href="mailto:bill@malleyanalytics.com"
            className="hover:underline text-blue-600"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/www.linkedin.com/in/bill-malley"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            LinkedIn
          </a>
          {/* Add GitHub or other links if you want */}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  