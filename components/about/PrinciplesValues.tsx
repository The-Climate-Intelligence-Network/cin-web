import { Heart, Database, Users, Globe, ShieldCheck } from 'lucide-react';

export default function PrinciplesValues() {
  return (
    <section className="space-y-12 py-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-teal" />
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Principles & Values</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Our core values guide everything we do, from building technology to engaging with local communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
            <Database className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Data-Driven Action</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We believe that accurate, accessible data is the foundation of effective climate policy and community resilience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-sunflower/10 flex items-center justify-center text-sunflower mb-6">
            <Users className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Citizen Empowerment</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We empower individuals to take an active role in climate action through citizen science and grassroots reporting.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
            <Globe className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Climate Justice</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We prioritize the voices and needs of communities in the Global South, who are often most affected by climate change.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-jade/20 flex items-center justify-center text-forest mb-6">
            <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Responsible Tech</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We build and deploy <strong>open-source</strong> technology that prioritizes ethics, privacy, and community-led governance to ensure solutions benefit all.
          </p>
        </div>
      </div>
    </section>
  );
}
