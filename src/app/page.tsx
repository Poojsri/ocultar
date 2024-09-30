export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left min-h-screen pb-2 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <img src="/screens/ocultar.jpeg" alt="OCultar Logo" className="h-10 w-28 mx-4" />
      <div className="grid grid-cols-2">
        <div className="">
          <video  controls width="100%" className="rounded-3xl border-2 border-white mx-4">
            <source src="/videos/ocultar.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="items-center px-16">
          <h1 className="font-extrabold text-6xl text-slate-100 leading-normal mb-20">Unique AI-Redaction Tool</h1>
          <h3 className="font-medium text-3xl text-slate-300 animate-pulse">Coming soon...</h3>
        </div>
      </div>
    </div>
  );
}