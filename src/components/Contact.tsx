import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
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

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)

        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <section
            id="contact"
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
                    <motion.div
                        variants={itemVariants}
                        className="text-center space-y-4 max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                            Get In Touch
                        </h2>

                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mx-auto" />

                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Ready to discuss your next project? Let's collaborate and create
                            something amazing together.
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Contact Info */}
                        <motion.div variants={containerVariants} className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Let's talk about your project
                            </h3>

                            {[
                                {
                                    icon: Mail,
                                    label: 'Email',
                                    value: 'charlierandriamaro15@gmail.com',
                                    href: 'mailto:Charlierandriamaro15@gmail.com',
                                },
                                {
                                    icon: Phone,
                                    label: 'Phone',
                                    value: '+261 33 67 670 96',
                                    href: 'tel:+15551234567',
                                },
                                {
                                    icon: MapPin,
                                    label: 'Location',
                                    value: 'Antananarivo, Madagascar',
                                    href: '#',
                                },
                            ].map((contact, i) => {
                                const Icon = contact.icon
                                return (
                                    <motion.a
                                        key={i}
                                        href={contact.href}
                                        variants={itemVariants}
                                        whileHover={{ x: 6 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="
                      mt-1 p-3 rounded-lg
                      bg-indigo-100 dark:bg-indigo-900/30
                      transition-colors
                    ">
                                            <Icon className="w-6 h-6 text-indigo-500" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                                {contact.label}
                                            </p>
                                            <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">
                                                {contact.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                )
                            })}
                        </motion.div>

                        {/* Form */}
                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                            className="
                space-y-6 p-8 rounded-xl
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                transition-colors duration-300
              "
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center justify-center min-h-[24rem]"
                                >
                                    <div className="text-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="
                        w-16 h-16 mx-auto mb-4 rounded-full
                        bg-indigo-100 dark:bg-indigo-900/30
                        flex items-center justify-center
                      "
                                        >
                                            <Send className="w-8 h-8 text-indigo-500" />
                                        </motion.div>

                                        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            Message Sent!
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Thank you for reaching out. I'll get back to you soon!
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <>
                                    {[
                                        { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
                                        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                                        { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Project subject' },
                                    ].map((field) => (
                                        <div key={field.name}>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={(formData as any)[field.name]}
                                                onChange={handleChange}
                                                required
                                                placeholder={field.placeholder}
                                                className="
                          w-full px-4 py-3 rounded-lg
                          bg-gray-100 dark:bg-gray-800
                          text-gray-900 dark:text-gray-100
                          border border-gray-300 dark:border-gray-700
                          focus:border-indigo-500 focus:outline-none
                          transition-colors
                        "
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell me about your project..."
                                            className="
                        w-full px-4 py-3 rounded-lg resize-none
                        bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-gray-100
                        border border-gray-300 dark:border-gray-700
                        focus:border-indigo-500 focus:outline-none
                        transition-colors
                      "
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="
                      w-full py-3 rounded-lg
                      bg-indigo-500 hover:bg-indigo-600
                      text-white font-medium
                      flex items-center justify-center gap-2
                      transition-colors
                    "
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </>
                            )}
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
