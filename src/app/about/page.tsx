import Link from 'next/link';

export default function About() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center text-center overflow-hidden bg-[url('/background.jpeg')]"
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10">
        {/* Header */}
        <header className="w-full p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Bill Malley</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-white hover:text-gray-200 transition-colors">
                Projects
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-8 py-32 px-4">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/90 [&>br]:block [&>br]:h-6">
                I'm Bill Malley, a San Francisco-based data analyst with a deep interest in climate tech, 
                sustainability, and building tools that help teams make better decisions. I've spent the last 
                few years working in analytics, business intelligence, and strategy, and I'm now focused on 
                using those skills for impact.
                <br />
                <br />
                When I'm not diving into datasets or developing dashboards, you'll find me exploring the 
                natural landscapes that inspire my desire to work in sustainability. I'm an avid outdoors 
                enthusiast and amateur photographer, always searching for that perfect shot of California's 
                diverse ecosystems, like the background you see here!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full p-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-white/80">© {new Date().getFullYear()} Bill Malley</p>
            <div className="mt-2 space-x-4">
              <a
                href="mailto:bill@malleyanalytics.com"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/bill-malley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
