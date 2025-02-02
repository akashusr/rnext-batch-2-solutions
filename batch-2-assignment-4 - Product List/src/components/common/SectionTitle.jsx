/* eslint-disable react/prop-types */
const SectionTitle = ({title, subTitle}) => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      {title && <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
        {title}
      </h1> }
      {subTitle && <p className="mt-4 text-xl text-gray-500 text-center">
        {subTitle}
      </p>}
    </div>
  );
};

export default SectionTitle;
