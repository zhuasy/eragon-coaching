import Logo from './Logo'
import Menu from './Menu'

export default function Navbar() {
  return (
    <nav className="flex justify-content-between items-center">
      <div> <Logo /> </div>
      <div> <Menu /> </div>
    </nav>
  );
}
