import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import image from "../assets/lie.jpeg"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Hero: React.FC = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv.pdf'
        link.download = 'cv.pdf'
        link.click()
    }

    return (
        <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background dark:from-gray-900 dark:to-gray-800">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl dark:bg-accent/10"
                    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-32 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl dark:bg-secondary/20"
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="space-y-4">
                            <motion.p variants={itemVariants} className="text-accent font-semibold text-lg">
                                Bienvenue sur mon portfolio
                            </motion.p>
                            <h1 className="text-5xl lg:text-6xl font-bold text-foreground dark:text-gray-100 leading-tight">
                                <motion.span variants={itemVariants} className="block">
                                    Monteur Vidéo
                                </motion.span>
                                <motion.span
                                    variants={itemVariants}
                                    className="block bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
                                >
                                    Créatif
                                </motion.span>
                            </h1>
                            <motion.p variants={itemVariants} className="text-lg text-muted-foreground dark:text-gray-300 max-w-md">
                                Transformer des idées en histoires visuelles captivantes. Spécialisé dans le montage dynamique, l’étalonnage des couleurs et les animations graphiques créatives.
                            </motion.p>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownloadCV}
                                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg flex items-center gap-2 px-6 py-3 transition-colors"
                            >
                                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Télécharger CV
                            </button>
                            <button className="rounded-lg border border-accent/50 hover:bg-secondary dark:hover:bg-gray-700 bg-transparent px-6 py-3 transition-colors text-foreground dark:text-gray-100">
                                Voir les projets
                            </button>
                        </motion.div>

                        {/* Stats */}
                        {/* <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
                            {[
                                { label: 'Projets', value: '50+' },
                                { label: 'Clients', value: '30+' },
                                { label: 'Expérience', value: '3+ ans' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-card rounded-lg p-4 border border-border/50 dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <p className="text-accent font-bold text-2xl">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground dark:text-gray-300">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div> */}
                    </motion.div>

                    {/* Right Image */}
                    <motion.div variants={itemVariants} className="relative h-96 lg:h-full min-h-96">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl dark:from-accent/10 dark:to-secondary/30" />
                            <img
                                src={image}
                                alt="Portrait du monteur vidéo"
                                className="object-cover rounded-2xl shadow-2xl w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground dark:text-gray-400"
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
