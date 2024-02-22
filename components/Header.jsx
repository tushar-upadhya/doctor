import { NavLinks } from "@/lib/utilsNavLink";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src={"/logo.svg"} alt="logo" width={180} height={80} />

        <ul className="hidden gap-8 md:flex">
          {NavLinks.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="transition-all ease-in-out cursor-pointer hover:text-primary hover:scale-105">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
