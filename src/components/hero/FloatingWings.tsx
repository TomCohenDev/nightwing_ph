import { motion } from 'framer-motion';
import wingImage from '../../../assets/wing.png';

const wings = [
  { id: 1, initialX: '10%', initialY: '20%', duration: 3, delay: 0 },
  { id: 2, initialX: '70%', initialY: '40%', duration: 4, delay: 0.5 },
  { id: 3, initialX: '40%', initialY: '60%', duration: 3.5, delay: 1 },
  { id: 4, initialX: '85%', initialY: '15%', duration: 4.5, delay: 1.5 },
];

export const FloatingWings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {wings.map((wing) => (
        <motion.div
          key={wing.id}
          className="absolute"
          style={{
            left: wing.initialX,
            top: wing.initialY,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: wing.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: wing.delay,
          }}
        >
          <img
            src={wingImage}
            alt="Floating wing"
            className="w-16 md:w-24 h-auto opacity-90"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(250, 126, 97, 0.5))',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

