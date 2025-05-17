"use client";

import Layout from "@/components/ui/layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center max-w-2xl mx-auto mt-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">
          👋 Welcome to <span className="text-blue-600 dark:text-blue-400">BiasRX</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your AI fairness monitoring and bias auditing dashboard.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded shadow transition"
          >
            Go to Dashboard
          </a>
          <a
            href="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium px-6 py-3 rounded transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </Layout>
  );
}
