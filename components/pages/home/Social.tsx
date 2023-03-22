import Image from "next/image";

import { motion } from "framer-motion";

interface ISocialProps {
  title: string;
  link: string;
  icon: string;
  delay: number;
}

const SocialItem = ({ title, link, icon, delay }: ISocialProps) => {
  return (
    <motion.div
      className="z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: delay }}
    >
      <a href={link} target="_blank">
        <Image
          src={`/images/social/${icon}.svg`}
          alt={title}
          className="w-10 h-10 md:w-16 md:h-16"
          width={64}
          height={64}
          loading="lazy"
        />
      </a>
    </motion.div>
  );
};
export default SocialItem;
