'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Shuffle, TrendingUp, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    title: 'Students & Recent Graduates',
    description:
      'Entering the job market for the first time and need confidence, clarity, and a winning interview strategy.',
    icon: GraduationCap,
  },
  {
    title: 'Career Changers',
    description:
      'Pivoting into new industries and need help repositioning past experience effectively.',
    icon: Shuffle,
  },
  {
    title: 'Ambitious Professionals',
    description:
      'Seeking career advancement, promotions, or transitions to better opportunities.',
    icon: TrendingUp,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const WhoWeServe = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* === DOMINANT BACKGROUND === */}
      <div className="absolute inset-0 bg-[#FEF7F0]" />

      {/* === SUBTLE COLOR DIFFUSION (very soft) === */}
      <div
        className="absolute inset-0"
        // style={{
        //   background: `
        //     radial-gradient(
        //       circle at 20% 20%,
        //       rgba(225, 216, 242, 0.25),
        //       transparent 55%
        //     ),
        //     radial-gradient(
        //       circle at 80% 70%,
              
        //       transparent 60%
        //     )
        //   `,
        // }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#14325A] mb-4 uppercase">
            Who We Serve.
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-2xl mx-auto">
            We support individuals at different stages of their career journey,
            helping them approach interviews with confidence and clarity.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} item={item} index={index} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({ item, index, Icon }: { item: typeof items[0]; index: number; Icon: LucideIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    //   variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        rounded-3xl
        border border-black/5
        bg-white/70
        backdrop-blur-lg
        shadow-[0_20px_40px_rgba(0,0,0,0.05)]
        p-8
        transition-colors
        duration-300
        hover:bg-[#14325A]
        group
      "
    >
      {/* Icon */}
      <motion.div
        animate={{
          backgroundColor: isHovered ? '#E1D8F2' : '#FEF7F0',
        }}
        transition={{ duration: 0.3 }}
        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
      >
        <motion.div
          animate={{
            color: isHovered ? '#14325A' : '#14325A',
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={28} />
        </motion.div>
      </motion.div>

      {/* Text */}
      <h3 className="text-xl font-bold text-[#14325A] mb-3 group-hover:text-white transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-[#3A3A3A] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        {item.description}
      </p>
    </motion.div>
  );
};

export default WhoWeServe;