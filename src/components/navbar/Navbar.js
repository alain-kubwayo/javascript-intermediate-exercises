import Wrapper from "../../wrappers/Wrapper";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";




export default function Navbar() {
  return (
    <Wrapper>
      <nav className="sticky top-0 z-50 w-full h-20 py-8 font-thin leading-10 md:h-56 md:py-16">
          <MobileNavigation />
          <Navigation />
      </nav>
    </Wrapper>
  )
}
