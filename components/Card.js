import { motion } from "framer-motion";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Card = ({ index, setSelectedCards, selectedCards, card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zIndex, setZIndex] = useState(30);

  const { id } = card;

  const onCloseHandler = (id) => {
    setSelectedCards(selectedCards.filter((card) => card.id !== id));
  };

  return (
    <motion.article
      drag
      whileTap={{ zIndex: 40 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onAnimationComplete={() => setIsOpen(true)}
      initial={{ opacity: 0, scale: 5, rotate: 360, y: 450, x: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: !isOpen && 0 + index * 40,
        x: !isOpen && 0 + index * 40,
      }}
      exit={{ opacity: 0, scale: 0, rotate: -360, y: 150, x: 0 }}
      className={`bg-white border-2 absolute top-20 left-1/4 w-[400px] max-w-[600px] h-[300px] shadow-lg ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ zIndex }}
    >
      <div className='flex items-center justify-end'>
        <span
          onClick={() => onCloseHandler(id)}
          className='w-8 h-8 mr-1 mt-1 cursor-pointer'
        >
          <XIcon className='w-full h-full text-black' />
        </span>
      </div>

      <div className='flex items-center justify-center h-[calc(100%-5rem)]'>
        <h1 className='text-black font-bold text-xl'>{card.title}</h1>
      </div>
    </motion.article>
  );
};

export default Card;
