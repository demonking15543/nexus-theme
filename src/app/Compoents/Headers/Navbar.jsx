

export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Web & Mobile Development',
        url: 'web-mobile'
      },
      {
        title: 'Embeded ',
        url: 'embeded',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'Django',
                url: 'django',
              },
              {
                title: 'NodeJs',
                url: 'node',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
];

import MenuItems from '../Dropdown/MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;