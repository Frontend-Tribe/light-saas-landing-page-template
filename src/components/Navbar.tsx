import MenuIcon from "@/assets/menu.svg";

const Navbar = () => {
  return (
    <nav>
      <MenuIcon className="h-5 w-5 md:hidden" />
      <div className="hidden md:flex gap-6 items-center text-black/60">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Updates</a>
        <a href="#">Help</a>
        <button className="btn btn-primary">Get for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
