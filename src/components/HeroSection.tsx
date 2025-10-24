import dogvideo from "../assets/video/dogvideo.webm";
import dancingdog from "../assets/video/dancingdog.webm";
export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Saliri&reg; build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          tools for DOGS
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        sapiente dolore similique sint natus, error illum!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="
        "
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mxx-3 rounded-md"
        >
          Bark for free
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={dancingdog} />
          Video not supported
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={dogvideo} />
          Video not supported
        </video>
      </div>
    </div>
  );
};
