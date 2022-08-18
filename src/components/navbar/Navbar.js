import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";




export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-20 px-4 py-8 mx-auto font-thin leading-10 md:h-56 md:py-16 md:px-0 md:w-4/5 lg:w-1/2">
        <MobileNavigation />
        <Navigation />
    </nav>
  )
}
