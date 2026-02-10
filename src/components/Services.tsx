import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Clapperboard, Palette, Sparkles, Music, Zap, Film } from 'lucide-react'

type Service = {
  icon: React.ElementType
  title: string
  description: string
  price: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: Clapperboard,
      title: 'Video Editing',
      description:
        'Professional video editing for all formats and styles with attention to narrative flow and pacing.',
      price: 'Custom Quote',
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description:
        'Professional color grading and correction to establish mood, tone, and visual consistency.',
      price: 'Custom Quote',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description:
        'Custom motion graphics, animations, and visual effects to enhance your storytelling.',
      price: 'Custom Quote',
    },
    {
      icon: Music,
      title: 'Audio Design',
      description:
        'Audio mixing, sound design, and music synchronization for immersive sound experiences.',
      price: 'Custom Quote',
    },
    {
      icon: Zap,
      title: 'Consultation',
      description:
        'Professional consultation for video projects, editing workflows, and creative direction.',
      price: '$50/hour',
    },
    {
      icon: Film,
      title: 'Post Production',
      description:
        'Full post-production services including editing, grading, graphics, and audio mastering.',
      price: 'Custom Quote',
    },
  ]

  return (
    <section
      id="services"
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
          <motion.div variants={itemVariants} className="max-w-2xl space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground dark:text-gray-100">
              Services I Offer
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded-full" />
            <p className="text-lg text-muted-foreground dark:text-gray-300">
              Comprehensive video editing and post-production solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group bg-card dark:bg-gray-800 rounded-xl p-8 border border-border/50 dark:border-gray-700 hover:border-accent/50 transition-colors relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-accent" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="pt-6 border-t border-border/50 dark:border-gray-700">
                      <p className="text-accent font-semibold text-lg">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100">
              Let's create something amazing together
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
              Whether you have a specific project in mind or need guidance on your video production,
              I'm here to help bring your vision to life.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
