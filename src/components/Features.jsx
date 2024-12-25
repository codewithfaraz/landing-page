import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Advanced Analytics",
    description:
      "Get detailed insights and analytics to make informed trading decisions.",
    icon: ChartBarIcon,
  },
  {
    name: "Real-time Updates",
    description:
      "Stay updated with real-time market data and instant notifications.",
    icon: ClockIcon,
  },
  {
    name: "Community Trading",
    description:
      "Join a community of traders and share strategies and insights.",
    icon: UserGroupIcon,
  },
  {
    name: "Fast Execution",
    description: "Execute trades quickly with our optimized trading engine.",
    icon: BoltIcon,
  },
  {
    name: "Secure Platform",
    description: "Trade with confidence on our secure and encrypted platform.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Expert Support",
    description: "24/7 support from our team of trading experts.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Trading Made Simple
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed in trading
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools and features you need to become
            a successful trader.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-lg transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
