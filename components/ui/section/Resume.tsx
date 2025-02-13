"use client"

import { Briefcase, GraduationCap } from "lucide-react"
import Title from "../Title"
import works from "@/lib/workTimeline.json"
import diplomas from "@/lib/schorlaship.json"
import { motion } from "framer-motion"

const Resume = () => {
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const timelineLineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="p-11">
      <Title title="Resume" span="Resume" subTitle={true} />

      <div className="mt-16 ml-8">
        <Title title="Parcours Professionnel" smallTitle={true} icon={Briefcase} />
        <div className="ml-1 my-8">
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-s border-border_color"
          >
            <motion.div
              variants={timelineLineVariants}
              className="absolute top-0 bottom-0 left-0 w-px bg-border_color origin-top"
            />

            {works.map((work) => (
              <motion.li
                key={work.id}
                variants={timelineItemVariants}
                className="mb-10 ms-4 w-1/2 text-justify"
              >
                <div className="absolute w-3 h-3 bg-border_color rounded-full mt-1.5 -start-1.5 border border-border_color" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  {work.period}
                </time>
                <h3 className="text-2xl font-semibold text-primary">{work.poste}</h3>
                <h4 className="mb-4 text-xl font-semibold text-color_bali">{work.lieu}</h4>
                <p className="text-base font-normal">{work.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>

      <div className="mt-10 ml-8">
        <Title title="Parcours Académique" smallTitle={true} icon={GraduationCap} />
        <div className="ml-1 mt-8">
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-s border-border_color"
          >
            <motion.div
              variants={timelineLineVariants}
              className="absolute top-0 bottom-0 left-0 w-px bg-border_color origin-top"
            />

            {diplomas.map((diplome) => (
              <motion.li
                key={diplome.id}
                variants={timelineItemVariants}
                className="mb-10 ms-4 w-1/2 text-justify last-of-type:mb-0"
              >
                <div className="absolute w-3 h-3 bg-border_color rounded-full mt-1.5 -start-1.5 border border-border_color" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  {diplome.period}
                </time>
                <h3 className="text-2xl font-semibold text-primary">{diplome.diplome}</h3>
                <h4 className="mb-4 text-xl font-semibold text-color_bali">{diplome.lieu}</h4>
                <p className="text-base font-normal">{diplome.mention}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

export default Resume;