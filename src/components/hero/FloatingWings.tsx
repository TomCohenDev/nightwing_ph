import { motion } from 'framer-motion';

const wingImage = '/assets/wing_bobble.png';

const wings = [
  { id: 1, initialX: '9%', initialY: '15%', duration: 3, delay: 0, rotation: 15 },
  { id: 2, initialX: '85%', initialY: '20%', duration: 4, delay: 0.5, rotation: -25 },
  { id: 3, initialX: '8%', initialY: '75%', duration: 3.5, delay: 1, rotation: 45 },
  { id: 4, initialX: '88%', initialY: '80%', duration: 4.5, delay: 1.5, rotation: -10 },
  { id: 5, initialX: '5%', initialY: '68%', duration: 3.8, delay: 0.7, rotation: 190 },
];

export const FloatingWings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {wings.map((wing) => (
        <motion.div
          key={wing.id}
          className="absolute z-0"
          style={{
            left: wing.initialX,
            top: wing.initialY,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [wing.rotation, wing.rotation + 15, wing.rotation - 5, wing.rotation],
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
            className="w-16 md:w-24 h-auto opacity-60"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(250, 126, 97, 0.3))',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

