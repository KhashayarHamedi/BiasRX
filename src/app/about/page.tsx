import Layout from "@/components/ui/layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">📖 About BiasRX</h1>
          <p className="text-lg text-muted-foreground">
            BiasRX is your AI-powered partner in building fair, ethical, and transparent machine learning systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
            <p>
              We aim to democratize bias detection in AI by empowering every data team with intuitive tools to audit, monitor, and correct demographic disparities in predictive models.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">🤖 What We Do</h2>
            <p>
              BiasRX analyzes ML model outputs, computes fairness metrics, and visualizes bias trends over time — all with a user-friendly, privacy-respecting platform.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🧠 Why Fairness Matters</h2>
          <p className="text-muted-foreground">
            Biased AI systems reinforce existing inequalities. Fairness isn’t a luxury — it’s a necessity in healthcare, finance, hiring, and beyond.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🚀 Built With</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Next.js App Router + TailwindCSS</li>
            <li>FastAPI backend for bias analytics</li>
            <li>Recharts for interactive visualizations</li>
            <li>Designed with accessibility and ethics in mind</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
