import "./hero.css";

function HeroSection() {
  return (
    <div className="mt-[120px]">
      <img
        className=" h-[500px] w-full animatedImage"
        src="/images/bannar3.png"
        alt="dummy-image"
      />
      <h2 className="absolute bottom-[600px] font left-[400px] md:text-5xl text-[#142d55] uppercase  font-semibold">
        travel your exam city with exam safari
      </h2>
      <div className="rounded-xl floating">Book Now</div>
    </div>
  );
}

export default HeroSection;
