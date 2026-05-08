import SidebarToggleButton from './SidebarToggleButton';

export default function Navbar() {
  return (
    <nav className="collapse-title navbar bg-base-300">
      {/* SidebarToggle +  Logo + Search */}
      <div className="navbar-start">
        <SidebarToggleButton />
        <button className="btn text-xl btn-ghost">Aedium</button>
        <input type="text" placeholder="Search" className="input-bordered input w-36 lg:w-auto" />
      </div>

      {/* Login / Avatar */}
      <div className="navbar-end flex gap-2">
        <button className="btn btn-soft btn-sm btn-primary lg:btn-md">Login</button>
      </div>
    </nav>
  );
}
