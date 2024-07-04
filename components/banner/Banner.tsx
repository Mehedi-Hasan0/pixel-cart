import PrimaryBanner from "./PrimaryBanner";
import SecondaryBanner from "./SecondaryBanner";

const Banner = () => {
  return (
    <section className="py-8 flex flex-col md:flex-row gap-8 justify-between">
      <div className="w-2/3">
        <PrimaryBanner />
      </div>
      <div className="w-1/3">
        <SecondaryBanner />
      </div>
    </section>
  );
};

export default Banner;
