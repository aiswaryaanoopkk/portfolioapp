function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="/images/photo.jpg" // Replace with your image path
          alt="Aiswarya Anoop"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-gray-200"
        />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I’m <span className="font-semibold">Aiswarya Anoop</span>, a Computer Science graduate with a strong
          passion for web development and programming. I enjoy turning ideas into
          functional and user-friendly applications, and I'm always eager to learn
          new technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
