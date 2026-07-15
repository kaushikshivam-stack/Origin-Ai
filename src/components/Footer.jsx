
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col items-center gap-4">
        <p className="caption text-n-4">
          © {new Date().getFullYear()} ORIGIN. All Rights Reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
