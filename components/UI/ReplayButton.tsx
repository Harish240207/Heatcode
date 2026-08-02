"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface ReplayButtonProps {
  isVisible: boolean;
  onReplay: () => void;
}

export function ReplayButton({ isVisible, onReplay }: ReplayButtonProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="replay-button"
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-10 left-1/2 z-30 -translate-x-1/2"
        >
          <motion.button
            onClick={onReplay}
            whileHover={{ scale: 1.08, boxShadow: "0 0 35px rgba(229, 9, 20, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-xs font-medium tracking-[0.25em] text-white uppercase backdrop-blur-2xl transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914]/90"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180 text-white" />
            <span>REPLAY EXPERIENCE</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
