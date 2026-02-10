import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    // 🔥 Charger thème sauvegardé
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const initialTheme = savedTheme ?? 'light'

        setTheme(initialTheme)
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
        setMounted(true)
    }, [])

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Showreel', href: '#showreel' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ]

    const handleNavClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    return (
        <nav
            className="
        fixed top-0 left-0 right-0 z-50
        bg-background dark:bg-gray-900
        text-foreground dark:text-gray-100
        backdrop-blur-md border-b
        border-border dark:border-gray-700
        transition-colors duration-300
      "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="
              text-2xl font-bold
              bg-gradient-to-r from-accent to-blue-400
              bg-clip-text text-transparent
            "
                    >
                        Charlie
                    </motion.div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.label}
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                onClick={() => handleNavClick(item.href)}
                                className="
                  px-4 py-2 text-sm font-medium
                  text-foreground dark:text-gray-100
                  hover:text-accent
                  transition-colors duration-300
                "
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* RIGHT CONTROLS */}
                    <div className="flex items-center gap-4">

                        {/* THEME SWITCH */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="
                  rounded-full p-2
                  hover:bg-secondary dark:hover:bg-gray-700
                  transition-all duration-300
                "
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {theme === 'dark' ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Sun className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Moon className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        )}

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                md:hidden p-2 rounded-lg
                hover:bg-secondary dark:hover:bg-gray-700
                transition-colors duration-300
              "
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* MOBILE NAV */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden pb-4 space-y-2"
                        >
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="
                    block w-full text-left px-4 py-2 text-sm font-medium
                    text-foreground dark:text-gray-100
                    hover:text-accent
                    hover:bg-secondary dark:hover:bg-gray-700
                    rounded-lg
                    transition-all duration-300
                  "
                                >
                                    {item.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navigation
