import Link from "next/link";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export function Copyright() {
  return (
    <div className=" bg-[#DFFCF259] py-5">
      <div className="container grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 text-center lg:text-left">
          <p className=" text-lg">Copyright © 2023 | All right to Reserved</p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="space-x-4 text-center md:text-right">
            <Link
              href="#"
              className=" inline-block text-purple"
              aria-label="LinkedinIn"
            >
              <FaLinkedinIn size="30" />
            </Link>
            <Link
              href="#"
              className=" inline-block text-purple"
              aria-label="Instagram"
            >
              <FaInstagram size="30" />
            </Link>
            <Link
              href="#"
              className=" inline-block text-purple"
              aria-label="Twitter"
            >
              <FaTwitter size="30" />
            </Link>
            <Link
              href="#"
              className=" inline-block text-purple"
              aria-label="Behance"
            >
              <FaBehance size="30" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
