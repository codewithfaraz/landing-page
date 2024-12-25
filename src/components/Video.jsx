import { motion } from "framer-motion";

export default function Video() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Our Platform in Action
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Watch how our trading platform can help you achieve your financial
            goals
          </p>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-w-16 aspect-h-9 w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl"
          >
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
