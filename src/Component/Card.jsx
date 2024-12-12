import { FaCommentDollar } from "react-icons/fa";
import { motion } from "motion/react"

function Card() {
  return (
    <>
      <motion.section initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="grid sm:grid-cols-3 gap-4 my-10 text-center">
        <div className="border hover:scale-110 duration-500  shadow-lg rounded-lg flex flex-col">
          <h1 className="pt-6 font-bold text-2xl">HTML, CSS</h1>
          <p className="flex gap-2 text-2xl font-semibold py-4 justify-center items-center">
            <FaCommentDollar /> 200
          </p>
          <p className="p-2 flex-grow">
            Dolor sit amet consectetur adipisicing elit. Nesciunt illum aperiam
            doloribus impedit porro minima commodi excepturi amet quod libero.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-green-700 border rounded-md shadow-md mt-4"
          >
            Free Trail
          </motion.button>
        </div>
        <div className="border bg-gray-100 hover:scale-110 duration-500  shadow-lg rounded-lg flex flex-col">
          <h1 className="pt-6 font-bold text-2xl">JavaScript</h1>
          <p className="flex gap-2 text-2xl font-semibold py-4 justify-center items-center">
            <FaCommentDollar /> 200
          </p>
          <p className="p-2 flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            illum aperiam doloribus impedit porro minima commodi excepturi amet
            quod libero.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-green-700 border rounded-md shadow-md mt-4"
          >
            Free Trail
          </motion.button>
        </div>
        <div className="border hover:scale-110 duration-500  shadow-lg rounded-lg flex flex-col">
          <h1 className="pt-6 font-bold text-2xl">React JS</h1>
          <p className="flex gap-2 text-2xl font-semibold py-4 justify-center items-center">
            <FaCommentDollar /> 200
          </p>
          <p className="p-2 flex-grow">
            Amet consectetur adipisicing elit. Nesciunt illum aperiam minima
            commodi excepturi amet quod libero.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-green-700 border rounded-md shadow-md mt-4"
          >
            Free Trail
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}

export default Card;
