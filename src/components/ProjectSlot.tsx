import { motion, useReducedMotion } from 'framer-motion';

interface ProjectSlotProps {
  index: number;
  title: string;
  description: string;
  category: string;
}

function ProjectSlot({ index, title, description, category }: ProjectSlotProps) {
  const reduceMotion = useReducedMotion();
  const slotNumber = String(index).padStart(3, '0');

  return (
    <motion.li
      className="project-slot"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <span className="project-slot__number">{slotNumber}</span>
      <div className="project-slot__name">
        <span>{title}</span>
        <small>{category}</small>
        <p>{description}</p>
      </div>
      <span className="project-slot__status">
        <i aria-hidden="true" />
        Building
      </span>
    </motion.li>
  );
}

export default ProjectSlot;
