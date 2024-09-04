// src/components/Home/Star.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Star = ({ position }) => (
  <motion.div
    className="absolute"
    style={{ top: position.top, left: position.left }}
    initial="hidden"
    animate="visible"
    variants={starVariants}
    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
  >
    <Image src="" alt="Star" width={30} height={30} />
  </motion.div>
);

export default Star;
