import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 space-y-6">
        <ProjectCard
          title="Square + Power BI Integration"
          description="Automated daily sales data pipeline from Square API into Power BI dashboards using Python, Parquet files, and scheduled refreshes."
          link="https://github.com/your-username/square-powerbi-project"
        />
        <ProjectCard
          title="Klaviyo Marketing Analytics"
          description="Connected Klaviyo email campaign data to Power BI to create a custom marketing performance dashboard for a retail client."
          link="https://github.com/your-username/klaviyo-powerbi"
        />
        {/* Add more ProjectCard components here */}
      </div>
    </section>
  );
}
