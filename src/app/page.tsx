export default function Page() {
  return (
    <section className="relative min-h-screen bg-cover bg-center text-center overflow-hidden animate-fadeIn" style={{ backgroundImage: 'url(/background.svg)' }}>
      <div className="space-y-8 pt-32 pb-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
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
