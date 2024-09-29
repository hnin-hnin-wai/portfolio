import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/hnin-hnin-wai" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/hnin-hnin-wai/" },
  { icon: <FaEnvelope />, path: "mailto:hninhnin.wai.career@gmail.com" },
  { icon: <FaPhoneAlt />, path: "+1(641) 233 2352" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        if (index === 3) {
          // Render phone number as a tooltip (no link)
          return (
            <div key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className={iconStyles}>{item.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.path}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        } else {
          // Render the rest as links
          return (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              className={iconStyles}
            >
              {item.icon}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Social;
