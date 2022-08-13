import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";




export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-20 py-8 font-thin md:h-56">
        <MobileNavigation />
        <Navigation />
    </nav>
  )
}
