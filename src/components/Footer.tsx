import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ]

    return (
        <footer className="bg-card border-t border-border dark:bg-foreground dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="md:col-span-1 space-y-4">
                            <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                Charlie
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-300">
                                Professional video editing and creative post-production services.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h4 className="font-semibold text-foreground dark:text-gray-100">Quick Links</h4>
                            <ul className="space-y-2">
                                {['About', 'Projects', 'Services', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-sm text-muted-foreground hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h4 className="font-semibold text-foreground dark:text-gray-100">Services</h4>
                            <ul className="space-y-2">
                                {['Video Editing', 'Color Grading', 'Motion Graphics', 'Audio Design'].map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            className="text-sm text-muted-foreground hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h4 className="font-semibold text-foreground dark:text-gray-100">Get In Touch</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="text-muted-foreground dark:text-gray-400">
                                    Email:{' '}
                                    <a
                                        href="mailto:hello@videoeditor.com"
                                        className="text-accent hover:underline dark:text-accent dark:hover:underline"
                                    >
                                        hello@videoeditor.com
                                    </a>
                                </li>
                                <li className="text-muted-foreground dark:text-gray-400">
                                    Phone:{' '}
                                    <a
                                        href="tel:+15551234567"
                                        className="text-accent hover:underline dark:text-accent dark:hover:underline"
                                    >
                                        +1 (555) 123-4567
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border dark:border-gray-700" />

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Copyright */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm text-muted-foreground text-center md:text-left dark:text-gray-400"
                        >
                            © {currentYear} Creative Video Editor. All rights reserved.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div variants={containerVariants} className="flex items-center gap-4">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="p-2 rounded-lg bg-secondary hover:bg-accent/20 text-muted-foreground hover:text-accent dark:bg-gray-800 dark:hover:bg-accent/20 dark:text-gray-300 dark:hover:text-accent transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                )
                            })}
                        </motion.div>

                        {/* Links */}
                        <motion.div variants={itemVariants} className="flex gap-6 text-sm text-muted-foreground dark:text-gray-400">
                            <a href="#" className="hover:text-accent dark:hover:text-accent transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-accent dark:hover:text-accent transition-colors">
                                Terms
                            </a>
                            <a href="#" className="hover:text-accent dark:hover:text-accent transition-colors">
                                Sitemap
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
