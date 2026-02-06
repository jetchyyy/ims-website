import { motion } from 'framer-motion';

export const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-900"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    {/* Logo */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-heading text-6xl font-black tracking-tight text-white md:text-8xl">
                            IMS
                        </span>
                    </div>

                    {/* Full Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-200 md:text-base">
                            International
                        </span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-200 md:text-base">
                            Marketing
                        </span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-200 md:text-base">
                            Services
                        </span>
                    </motion.div>

                    {/* Loading Indicator */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="mt-8 h-1 rounded-full bg-white/20"
                    >
                        <div className="h-full w-full rounded-full bg-white" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};
