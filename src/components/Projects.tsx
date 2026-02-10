import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Project = {
    id: number
    title: string
    category: string
    description: string
    image: string
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Tech Startup Promo',
            category: 'Commercial',
            description:
                'High-energy promotional video for a tech startup with motion graphics and visual effects.',
            image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'Travel Documentary',
            category: 'Documentary',
            description:
                'Cinematic travel documentary with color grading and atmospheric sound design.',
            image: 'bg-gradient-to-br from-orange-500 to-red-500',
        },
        {
            id: 3,
            title: 'Product Launch Event',
            category: 'Event Coverage',
            description:
                'Live event coverage with dynamic editing and professional transitions.',
            image: 'bg-gradient-to-br from-purple-500 to-pink-500',
        },
        {
            id: 4,
            title: 'Social Media Campaign',
            category: 'Social Content',
            description:
                'Viral-worthy content series for brand engagement and social media presence.',
            image: 'bg-gradient-to-br from-green-500 to-emerald-500',
        },
        {
            id: 5,
            title: 'Music Video Production',
            category: 'Music Video',
            description:
                'Creative music video with narrative storytelling and visual effects.',
            image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
        },
        {
            id: 6,
            title: 'Corporate Training Video',
            category: 'Corporate',
            description:
                'Professional training video with clear messaging and professional graphics.',
            image: 'bg-gradient-to-br from-teal-500 to-blue-500',
        },
    ]

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900 border-t border-border dark:border-gray-700"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-12"
                >
                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground dark:text-gray-100">
                            Featured Projects
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group overflow-hidden rounded-xl border border-border/50 dark:border-gray-700 hover:border-accent/50 transition-colors"
                            >
                                {/* Project Image */}
                                <div className={`w-full h-48 ${project.image} relative overflow-hidden`}>
                                    <motion.div
                                        animate={{ scale: 1.1 }}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <div className="text-white/20 text-4xl font-bold">{project.id}</div>
                                    </motion.div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                                    >
                                        <button className="border border-white text-white hover:bg-white/10 bg-transparent rounded-full p-2 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 bg-card dark:bg-gray-800">
                                    <p className="text-sm font-semibold text-accent mb-2">{project.category}</p>
                                    <h3 className="text-lg font-bold text-foreground dark:text-gray-100 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground dark:text-gray-300">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div variants={itemVariants} className="flex justify-center pt-8">
                        <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors">
                            View All Projects
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
