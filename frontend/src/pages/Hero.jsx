function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Our E-Commerce Platform 🚀
      </h1>
      <p className="text-xl mb-6">
        Your one-stop shop for everything awesome.
      </p>
      <a
        href="/signup"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </div>
  );
}

export default Hero;
