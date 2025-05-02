export default function Home() {
  return (
    <section className="text-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hi, I'm Bill 👋
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Data Analyst & Climate Technologist
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-secondary/90">
            I build dashboards, wrangle messy data, and explore how analytics can help power a more sustainable world.
          </p>
        </div>
      </div>
    </section>
  );
}
