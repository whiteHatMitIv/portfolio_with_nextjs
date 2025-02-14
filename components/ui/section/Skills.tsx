"use client"

import Title from "../Title"
import skills from '@/lib/skills.json'
import { motion } from "framer-motion"
import ProgressBar from "../ProgressBar"

const Skills = () => {
  return (
    <section>
        <div className="p-11">
            <Title title="Compétences" span="Compétences" />
            <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {skills.map((skill, index) => {
                    return (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y:20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProgressBar
                                title={skill.title}
                                width={skill.percent}
                                text={skill.text} 
                            />
                        </motion.div>
                    )
                })}
            </div>   
        </div>
    </section>
  )
}

export default Skills