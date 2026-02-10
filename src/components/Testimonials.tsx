'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
    name: string
    role: string
    company: string
    text: string
    rating: number
}

interface Stat {
    number: string
    label: string
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideVariants: Variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            company: 'Tech Innovations Inc',
            text: 'The quality of work was exceptional. The video editing was crisp, the color grading was professional, and everything was delivered on time. Highly recommended!',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            role: 'Content Creator',
            company: 'Digital Media Studio',
            text: 'Working with this talented editor has transformed my content. The creative vision and technical expertise brought my projects to the next level.',
            rating: 5,
        },
        {
            name: 'Emily Rodriguez',
            role: 'Film Producer',
            company: 'Indie Productions',
            text: 'Professional, creative, and responsive. The attention to detail in every frame shows true passion for the craft. Would definitely work together again!',
            rating: 5,
        },
        {
            name: 'David Thompson',
            role: 'Brand Manager',
            company: 'Creative Agency',
            text: 'Fast turnaround without compromising quality. The motion graphics work added amazing visual appeal to our commercial campaign.',
            rating: 5,
        },
    ]

    const stats: Stat[] = [
        { number: '100+', label: 'Videos Edited' },
        { number: '30+', label: 'Clients Served' },
        { number: '4.9★', label: 'Average Rating' },
        { number: '3+', label: 'Years Experience' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-gray-900">
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
                            Client Testimonials
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Carousel */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="relative">
                            <div className="relative h-auto overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5 }}
                                        className="w-full"
                                    >
                                        <div className="bg-card dark:bg-gray-800 rounded-xl p-8 md:p-10 border border-border/50 dark:border-gray-700 hover:border-accent/50 transition-colors relative overflow-hidden">
                                            <div className="absolute top-4 right-4 text-accent/10 text-6xl font-bold">"</div>

                                            <div className="relative z-10 space-y-6">
                                                {/* Rating */}
                                                <div className="flex gap-1">
                                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                                    ))}
                                                </div>

                                                {/* Text */}
                                                <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed italic">
                                                    "{testimonials[currentIndex].text}"
                                                </p>

                                                {/* Author */}
                                                <div className="pt-6 border-t border-border/50 dark:border-gray-700 space-y-2">
                                                    <p className="font-semibold text-foreground dark:text-gray-100 text-lg">
                                                        {testimonials[currentIndex].name}
                                                    </p>
                                                    <p className="text-sm text-accent">{testimonials[currentIndex].role}</p>
                                                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                                                        {testimonials[currentIndex].company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-8">
                                <button
                                    onClick={prev}
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 dark:bg-gray-700 hover:bg-secondary/80 text-foreground dark:text-gray-100 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-3">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-2 rounded-full transition-all ${i === currentIndex ? 'bg-accent w-8' : 'bg-border/50 w-2 hover:bg-border/70'}`}
                                            aria-label={`Go to testimonial ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={next}
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 dark:bg-gray-700 hover:bg-secondary/80 text-foreground dark:text-gray-100 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Counter */}
                            <div className="text-center mt-6 text-sm text-muted-foreground dark:text-gray-400">
                                {currentIndex + 1} / {testimonials.length}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
                        {stats.map((stat, i) => (
                            <motion.div key={i} variants={itemVariants} className="text-center">
                                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                                <p className="text-muted-foreground dark:text-gray-400 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
