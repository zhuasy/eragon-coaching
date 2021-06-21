import Menu from './Menu'
import Logo from './Logo'
export default function Navbar() {
  return (
    <div className="flex justify-between w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div> <Logo /> </div>
        <div> <Menu /> </div>
    </div>
  );
}
