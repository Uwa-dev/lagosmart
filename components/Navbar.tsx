import { NAV_LINKS } from "../constants/index"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="bg-black flex flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.jpg" alt="logo" width={120} height={50} />
      </Link>

      <ul className="hidden h-full gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden gap-1">
      <Image src="/search-icon.jpg" alt="search-icon" width={40} height={10} />
      <Image src="/lang.jpg" alt="language-icon" width={40} height={10} />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar;