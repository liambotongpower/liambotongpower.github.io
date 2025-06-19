export default function Home() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center min-h-screen p-8"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <h1 className="text-5xl font-bold mb-4 text-[#2d3748]">Welcome to liampower.ie</h1>
      <p className="text-lg mb-8">This is a test website for Liam Power</p>
      <a
        href="/git-commands.txt"
        className="inline-block px-8 py-4 bg-[#4a5568] text-white rounded hover:bg-[#2d3748] transition-colors mb-4"
      >
        View Git Commands Reference Guide
      </a>
      <a
        href="/pokemon_dataset.zip"
        className="inline-block px-8 py-4 bg-[#4a5568] text-white rounded hover:bg-[#2d3748] transition-colors"
      >
        Download Pokemon Dataset
      </a>
    </section>
  );
}
