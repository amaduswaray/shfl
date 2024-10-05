import LinkedIn from "@icons/linkedin.svg";
import GitHub from "@icons/github.svg";
const Footer = () => {
  return (
    <div className="flex flex-row gap-5 justify-center items-center w-full max-w-lg h-20 bottom-0 fixed mb-10">
      <a href="https://linkedin.com">
        <LinkedIn />
      </a>
      <a href="https://linkedin.com">
        <GitHub />
      </a>
    </div>
  );
};

export default Footer;
