export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black border-b border-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Nextjs-mcp-test</h1>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Sign In
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Learn Programming
        </h1>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Master programming fundamentals and advanced concepts with our comprehensive courses.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded text-lg hover:bg-gray-200">
          Get Started
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Available Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black p-6 rounded border border-white">
            <h3 className="text-xl font-semibold mb-3">Introduction to Programming</h3>
            <p className="text-white mb-4">Learn the fundamentals of programming and computer science concepts.</p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Enroll Now</button>
          </div>
          <div className="bg-black p-6 rounded border border-white">
            <h3 className="text-xl font-semibold mb-3">Advanced Algorithms and Data Structures</h3>
            <p className="text-white mb-4">Master complex algorithms and data structures for technical interviews.</p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Enroll Now</button>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-white">
        <p>© 2025 Bhavesh. All rights reserved.</p>
      </footer>
    </div>
  );
}
