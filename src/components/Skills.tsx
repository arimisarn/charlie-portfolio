import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Zap, Palette, Music, Camera, Sparkles, Video } from 'lucide-react'

interface SkillCategory {
    icon: React.ElementType
    title: string
    skills: string[]
}

interface Proficiency {
    skill: string
    level: number
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        { icon: Video, title: 'Video Editing', skills: ['Premiere Pro', 'Final Cut Pro', 'Vegas Pro', 'Sequence Management'] },
        { icon: Palette, title: 'Color Grading', skills: ['DaVinci Resolve', 'LUT Creation', 'Color Theory', 'Grade Matching'] },
        { icon: Sparkles, title: 'Motion Graphics', skills: ['After Effects', 'Animation', 'VFX', 'Title Design'] },
        { icon: Music, title: 'Audio Design', skills: ['Audition', 'Mixing', 'Sound Effects', 'Music Synchronization'] },
        { icon: Camera, title: 'Cinematography', skills: ['Camera Operation', 'Lighting', 'Composition', 'Shot Planning'] },
        { icon: Zap, title: 'Technical Skills', skills: ['4K/UHD Editing', 'Media Management', 'Color Spaces', 'File Formats'] },
    ]

    const proficiencyLevels: Proficiency[] = [
        { skill: 'Video Editing', level: 95 },
        { skill: 'Color Grading', level: 90 },
        { skill: 'Motion Graphics', level: 85 },
        { skill: 'Audio Design', level: 80 },
    ]

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900">
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
                            Skills & Expertise
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {skillCategories.map((category, i) => {
                            const Icon = category.icon
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="group bg-card dark:bg-gray-800 rounded-xl p-8 border border-border/50 dark:border-gray-700 hover:border-accent/50 transition-colors relative overflow-hidden"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                                    >
                                        <Icon className="w-6 h-6 text-accent" />
                                    </motion.div>

                                    {/* Category Title */}
                                    <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-4">
                                        {category.title}
                                    </h3>

                                    {/* Skills List */}
                                    <ul className="space-y-2">
                                        {category.skills.map((skill, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: j * 0.1 }}
                                                className="text-sm text-muted-foreground dark:text-gray-300 flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                {skill}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Proficiency Bars */}
                    <motion.div variants={itemVariants} className="space-y-8 mt-16">
                        <h3 className="text-2xl font-bold text-foreground dark:text-gray-100">
                            Proficiency Levels
                        </h3>
                        <div className="space-y-6">
                            {proficiencyLevels.map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-foreground dark:text-gray-100 font-medium">{item.skill}</span>
                                        <span className="text-accent font-semibold text-sm">{item.level}%</span>
                                    </div>
                                    <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.level}%` }}
                                            transition={{ duration: 1, ease: 'easeOut' }}
                                            className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
