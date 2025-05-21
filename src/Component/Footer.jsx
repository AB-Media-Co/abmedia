export default function Footer() {
    return (
      <footer className="bg-black text-white text-sm py-6">
        <div className="container mx-auto px-4 flex flex-col items-start max-w-7xl space-y-2">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold tracking-widest">ab media</h1>
  
          {/* Links */}
          <div className="flex flex-wrap justify-start gap-4 text-xs text-white/90">
            <a href="#" className="hover:underline">Privacy</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline">Do Not Sell My Info</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  