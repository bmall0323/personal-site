import Link from 'next/link';
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
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
        <div className="space-y-8 py-16 px-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <a 
              href="https://app.powerbi.com/view?r=eyJrIjoiMWNmZTM1ZGEtYzc5Mi00ZDUyLWEzNTktNjFhNDA4ZDIzYjZhIiwidCI6IjlmMTIxNTRmLWRjMmMtNDM3NC05YzE0LTdjZTFkNWJjODRiYSJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <ProjectCard
                title="Square + Power BI Integration"
                description="Automated daily sales data pipeline from client ERP system and Square API into Power BI dashboards using Python, Parquet files, and scheduled refreshes."
                link="https://app.powerbi.com/view?r=eyJrIjoiMWNmZTM1ZGEtYzc5Mi00ZDUyLWEzNTktNjFhNDA4ZDIzYjZhIiwidCI6IjlmMTIxNTRmLWRjMmMtNDM3NC05YzE0LTdjZTFkNWJjODRiYSJ9"
              />
            </a>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <ProjectCard
                title="Klaviyo Marketing Analytics"
                description="Connected Klaviyo email campaign data to Power BI to create a custom marketing performance dashboard for a retail client."
                link="https://github.com/your-username/klaviyo-powerbi"
              />
            </a>
            {/* Add more ProjectCard components here */}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full p-6 border-t border-white/10 mt-8">
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
