
function HowMade({bg}) {
  return (
    <div className={`bg-[${bg}] container mx-auto px-6 py-12`}>
      <h2 className="text-center mb-6 text-lightGreen font-semibold text-4xl">See how it&apos;s made</h2>
      <p className="text-center text-xl text-[#979a9b] md:w-3/5 mx-auto mb-14">Discover the journey of transforming discarded plastic into innovative, eco-friendly products. Each step reflects our commitment to sustainability and quality craftsmanship.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center">
        <div className="mb-4 md:mb-0">
          <div className="mb-4 md:mb-20">
            <span className="text-lightGreen font-medium text-lg">01.</span>
            <h3 className="text-blackColor text-3xl my-3">Collection</h3>
            <p className="text-xl text-[#979a9b] md:w-3/4">Plastic waste is carefully sourced from trusted recycling programs.</p>
          </div>
          <div>
            <span className="text-lightGreen font-medium text-lg">02.</span>
            <h3 className="text-blackColor text-3xl my-3">Sorting</h3>
            <p className="text-xl text-[#979a9b] md:w-3/4">Materials are sorted, cleaned, and prepared for processing.</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <img className="xl:max-w-[600px]" src="/images/howMadeImage.png" alt="" />
        </div>
        <div>
          <div className="mt-4 md:mt-0">
            <div className="mb-4 md:mb-20">
              <p className="text-lightGreen font-medium text-lg text-end">03.</p>
              <h3 className="text-blackColor text-3xl my-3 text-end">Transformation</h3>
              <p className="text-xl text-[#979a9b] md:w-3/4 text-end ml-auto">Advanced techniques convert plastic into durable raw materials.</p>
            </div>
            <div>
              <p className="text-lightGreen font-medium text-lg text-end">04.</p>
              <h3 className="text-blackColor text-3xl my-3 text-end">Creation</h3>
              <p className="text-xl text-[#979a9b] md:w-3/4 text-end ml-auto">Skilled artisans craft the final products with precision and care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowMade;
