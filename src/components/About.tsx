import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Play } from 'lucide-react'

interface Category {
    label: string
    items: string[]
}

const categories: Category[] = [
    {
        label: 'Software Proficiency',
        items: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Audition'],
    },
    {
        label: 'Specializations',
        items: ['Color Grading', 'Motion Graphics', 'VFX', 'Sound Design'],
    },
    {
        label: 'Content Types',
        items: ['Corporate Videos', 'Social Media', 'Documentaries', 'Commercials'],
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="
        py-20 px-4 sm:px-6 lg:px-8
        bg-gray-50 dark:bg-gray-950
        border-t border-gray-200 dark:border-gray-800
        transition-colors duration-300
      "
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-12"
                >
                    {/* Title */}
                    <motion.div variants={itemVariants} className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                            About Me
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Text */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                I'm a passionate video editor with over 3 years of professional experience
                                in creating compelling visual content. My journey in video production
                                started with a fascination for storytelling through motion.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                I specialize in cutting-edge editing techniques, color grading, and
                                motion graphics that transform raw footage into captivating stories.
                                Whether it's corporate videos or cinematic productions, I bring
                                creativity and precision to every project.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Beyond editing, I'm constantly exploring new technologies and trends
                                in video production to stay ahead of the curve and deliver the best
                                possible results for my clients.
                            </p>
                        </motion.div>

                        {/* Cards */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {categories.map((category, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="
                    bg-white dark:bg-gray-900
                    rounded-xl p-6
                    border border-gray-200 dark:border-gray-800
                    transition-colors duration-300
                  "
                                >
                                    <h3 className="font-semibold text-indigo-500 mb-4 flex items-center gap-2">
                                        <Play className="w-4 h-4" />
                                        {category.label}
                                    </h3>

                                    <ul className="space-y-2">
                                        {category.items.map((item, j) => (
                                            <li
                                                key={j}
                                                className="text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
