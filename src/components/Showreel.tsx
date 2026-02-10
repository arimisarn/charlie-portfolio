import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Play } from 'lucide-react'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Showreel: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <section
            id="showreel"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-12"
                >
                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground dark:text-gray-100">
                            My Showreel
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Video Player */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {/* Placeholder Video Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 dark:from-secondary/20 dark:to-accent/30 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: isPlaying ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="bg-accent/20 rounded-full p-8 group-hover:bg-accent/30 transition-colors"
                                >
                                    <Play className="w-16 h-16 text-accent fill-accent" />
                                </motion.div>
                            </motion.div>

                            {/* Video Content Display */}
                            {isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                                >
                                    <div className="text-center text-white">
                                        <p className="text-xl font-semibold mb-4">Showreel Video</p>
                                        <p className="text-sm text-gray-300">
                                            Replace with your actual video embed
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Play Button Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={{ opacity: isPlaying ? 0 : 0.3 }}
                        >
                            <button className="bg-accent hover:bg-accent/90 rounded-full w-20 h-20 flex items-center justify-center">
                                <Play className="w-8 h-8 fill-white text-white ml-1" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Description Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: 'Professional Quality',
                                description:
                                    '4K/UHD editing with color grading and professional audio mixing',
                            },
                            {
                                title: 'Creative Direction',
                                description:
                                    'Conceptualization and execution of unique visual storytelling',
                            },
                            {
                                title: 'Fast Turnaround',
                                description:
                                    'Quick delivery without compromising on quality and creativity',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-card dark:bg-gray-800 rounded-lg p-6 border border-border/50 dark:border-gray-700"
                            >
                                <h3 className="font-semibold text-lg text-foreground dark:text-gray-100 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground dark:text-gray-300 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Showreel
