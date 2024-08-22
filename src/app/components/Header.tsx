import Image from "next/image";
import logo from "../../../public/senyaLogo.svg";
import { links } from "../constants/links";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" py-5 flex justify-between">
      <div>
        <Image src={logo} alt="logo" width={90} height={234} />
      </div>
      <nav>
        <ul className="flex items-center ">
          {links.map((link) => (
            <li className="mr-4" key={link.id}>
              <Link  className="text-xl font-bold" href={link.id}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
