import { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenu, CgClose } from 'react-icons/cg';
import Header from '../Header';


export default function MobileNavigation() {
    const [open, setOpen] = useState(false);
    
    const closeMobileMenu = () => setOpen(false);
  return (
    <div className="mobile-navigation">
        <Header />
        {open ? <CgClose onClick={()=>setOpen(!open)} className="hamburger" size="25px" color="white" /> : <CgMenu onClick={()=>setOpen(!open)} className="hamburger" size="25px" color="white" />}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  )
}
