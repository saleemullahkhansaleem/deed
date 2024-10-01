export default function GlobalImpact() {
  return (
    <>
      <section className="w-full bg-secondary flex items-center py-12">
        <div className="m-auto max-w-7xl flex flex-wrap justify-between gap-12 text-background w-full p-4">
          <h1 className="text-5xl font-bold">
            Global <br />
            Impact
          </h1>
          <h5 className="text-3xl max-w-4xl">
            DEED’s efforts in poverty alleviation, sustainable development, and
            environmental resilience are transforming communities and fostering
            long-term, equitable growth.
          </h5>
        </div>
      </section>
      <div className="h-px w-full bg-backgroundMuted"></div>
      <section className="w-full min-h-[calc(100vh-112px)] bg-secondary grid grid-cols-1 md:grid-cols-4">
        <div className="relative group/global">
          <div className="w-full h-full absolute top-0 left-0 right-0 hidden group-hover/global:block bg-black/40">
            <img
              src="/images/hero-img.webp"
              alt="Global Impact photo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="z-10 relative p-12 flex gap-4 items-center justify-center h-full text-background">
            <div>
              <h2 className="text-[140px] font-bold mb-2"> 97 </h2>
              <h2 className="text-4xl font-bold mb-2"> Countries </h2>
              <p className="text-lg">
                supported to generate jobs and livelihoods in the past two years
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
