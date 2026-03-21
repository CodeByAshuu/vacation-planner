export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6 absolute w-full text-white z-10">
      
      <div className="flex gap-2 items-center">
        <img
          src="/breezee.png"
          className="w-12 h-12"
        />
        <h1 className="text-xl font-semibold">Vacationeeze</h1>
      </div>

      <div className="flex gap-8 items-center text-sm">
        <a>About us</a>
        <a>Services</a>
        <a>Destinations</a>
        <a>Resources</a>
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Get in touch
        </button>
      </div>
    </div>
  );
}