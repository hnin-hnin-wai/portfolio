import Link from "next/link";
import { Button } from "./ui/button";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt=""
            priority
            quality={100}
            fill={true}
            width={"50%"}
            height={"30%"}
            style={{ borderRadius: "50%" }}
          ></img>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/*  <Link href="/contact"><Button>Hire me</Button></Link> */}
        </div>

        {/*  mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
