const headerMenuData = [
  {
    id: 1,
    name: "Women",
    url: "/",
  },
  {
    id: 2,
    name: "Men",
    url: "/",
  },
  {
    id: 3,
    name: "Company",
    url: "/",
  },
  {
    id: 4,
    name: "Stores",
    url: "/",
  },
];

const HeaderMenu = () => {
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {headerMenuData?.map((item) => (
          <a
            key={item?.id}
            href={item?.url}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            {item?.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderMenu;
