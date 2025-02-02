const BannerContent = () => {
  return (
    <>
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer styles are finally here
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
      </div>
      <div className="mt-10">
        {/* Decorative image grid */}
        <a
          href="#"
          className="inline-block rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700"
        >
          Shop Collection
        </a>
      </div>
    </>
  );
};

export default BannerContent;
