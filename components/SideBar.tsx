import Image from 'next/image'
import logo from '../logo.svg'
import Card from './Card'
import SideBarLink from './SibeBarLink'
const links = [
    {
        label: 'Home',
        icon: 'Grid',
        link: '/home'

    },
    {
        label: 'Calendar',
        icon: 'Calendar',
        link: '/calendar'

    },
    { label: "Profile", icon: "User", link: "/profile" },
    {
        label: 'Settings',
        icon: 'Settings',
        link: '/settings'
    }
]

const SideBar: React.FC = () => {
    return (
        <Card className="h-full w-40 flex items-center justify-between flex-wrap">
          <div className="w-full flex justify-center items-center">
            <Image src={logo} alt="Able logo" priority className="w-14" />
          </div>
          {links.map((i,link) => (
            // eslint-disable-next-line react/jsx-key
            <SideBarLink  link={link} />
          ))}
        </Card>
      );
}
export default SideBar