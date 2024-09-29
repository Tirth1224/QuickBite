import image from "../assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";
const Hero = () => {
  return (
    <div className="flex justify-end items-end">
      <img
        src={image}
        alt="Background"
        className="w-[200px] min-h-[200px] object-cover opacity-30"
      />
    </div>
  );
};

export default Hero;
