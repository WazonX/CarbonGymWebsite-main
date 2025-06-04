"use client";
import { motion } from "framer-motion";

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  

export default function Home() {
    return (
        <motion.div {...AnimationSettings} className="pt-4 pb-4 ">
            <h1 className="text-center col-12 pt-5 heading-center-column text-uppercase headingSize">
                Grafik
            </h1>
            <h2 className="headingSize text-center pt-3 pb-3">Na zajęcia obowiązują zapisy pod numerem telefonu: <br/>
                    <a href="tel:50125060">
                    <i className="bi bi-telephone-fill">
                    </i>
                        503125060
                    </a>
                </h2>
            <h2 className="headingSize text-center pt-5 pb-3">Trening Kettlebells</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                className="container text-center pt-3 pb-3 spanSmall"
            >
                <div className="row row-underline">
                    <div className="col">Wtorek</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
                <div className="row row-underline">
                    <div className="col">Czwartek</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
            </motion.div>
                        <h2 className="headingSize text-center pt-5 pb-3">Mobility</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                className="container text-center pt-3 pb-3 spanSmall"
            >
                <div className="row row-underline">
                    <div className="col">Piątek</div>
                    <div className="col">19:00 - 20:00</div>
                </div>
                </motion.div>
        </motion.div>
    );
}
