import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="max-w-7xl w-full grid grid-cols-3 items-center justify-between m-auto mb-16">
      <div className="flex flex-col items-start gap-8 w-full">
        <p className="font-[500]">Brainstorm</p>
        <ul className="flex gap-4">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub/>
          </li>
        </ul>
        <p>&copy; Brainstorm 2024</p>
      </div>
      <div className="flex flex-col items-start gap-8 w-full">
      <p className="font-[500]">Services</p>
      <ul className="flex gap-4">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub/>
          </li>
        </ul>
        <p>&copy; Brainstorm 2024</p>
      </div>
     <div className="flex flex-col items-start gap-8 w-full">
     <ul className="flex gap-4">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub/>
          </li>
        </ul>
        <p>&copy; Brainstorm 2024</p>
      </div>
    </footer>
  );
};
