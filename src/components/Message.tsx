import React from 'react';
import { motion } from 'framer-motion';

interface MessageProps {
  type: 'success' | 'error';
  text: string;
}

const Message: React.FC<MessageProps> = ({ type, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
      role="alert"
    >
      {text}
    </motion.div>
  );
};

export default Message;