import { motion, MotionValue } from "framer-motion";

import { WithChildrenProps } from "@/types/common/common";

type TestimonialProps = WithChildrenProps & {
  parallax?: MotionValue<number>;
};

const Motion = ({ children, parallax }: TestimonialProps) => {
  return <motion.div style={{ y: parallax ?? 0 }}>{children}</motion.div>;
};

export default Motion;
