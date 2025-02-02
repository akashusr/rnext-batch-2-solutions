import SVGIcon from "../../ui/Icons";

//menu items
const menuItems = [
  { icon: "dashboardIcon", label: "Dashboard", path: "#" },
  { icon: "projectIcon", label: "Projects", path: "#" },
  { icon: "contactIcon", label: "Contact", path: "#" },
  { icon: "kanbanIcon", label: "Kanban", path: "#" },
  { icon: "calenderIcon", label: "Calendar", path: "#" },
  { icon: "messageIcon", label: "Messages", path: "#" },
  { icon: "settingIcon", label: "Settings", path: "#" },
];

const MenuList = () => {
  return (
    <nav>
      <ul className='space-y-4'>
        {menuItems.map((menu, i) => (
          <li key={i}>
            <a href={menu.path} className='flex items-center'>
              <SVGIcon type={menu.icon} />
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
