import { Target, Database, Users } from 'lucide-react';
import Image from 'next/image';

export default function MissionPurpose() {
  return (
    <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-stretch">
        {/* Top Left: Header + Challenges */}
        <div className="space-y-8 flex flex-col pb-6 lg:pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-teal" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Mission &amp; Purpose</h2>
            </div>
            <p className="text-lg text-charcoal leading-relaxed font-medium">
              The Climate Intelligence Network was founded to address two critical challenges in global climate action:
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-teal shadow-sm border-t border-r border-b border-forest/5 transition-colors hover:border-forest/20">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-5 h-5 text-deepForest" />
                <h3 className="text-xl font-bold text-deepForest">Climate Data Gap</h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                Developing nations face a massive climate-data creation and governance gap, limiting effective policy-making, impactful climate action, and access to global climate finance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-teal shadow-sm border-t border-r border-b border-forest/5 transition-colors hover:border-forest/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-deepForest" />
                <h3 className="text-xl font-bold text-deepForest">Youth Power Gap</h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                While youth worldwide are passionate about climate action, many in under-resourced communities lack the support and opportunities to mitigate and adapt to local climate challenges.
              </p>
            </div>
          </div>
        </div>
        
        {/* Top Right: Image */}
        <div className="flex flex-col pb-6 lg:pb-8 h-full">
          <div className="relative flex-grow min-h-[400px] lg:min-h-0 w-full rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/photos/group.jpg"
              alt="Mission and Purpose Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bottom Left: Data Text */}
        <div className="pt-2 lg:pt-0 pb-6 lg:pb-0">
          <p className="text-lg text-charcoal leading-relaxed">
            <strong>Accurate, real-time data is vital</strong> for understanding the complex environmental changes happening around us and for informing robust policy decisions and solutions. By engaging citizens in science, storytelling, and solution building, we harness local knowledge, create a sense of ownership, and fill critical data gaps that traditional methods often overlook.
          </p>
        </div>

        {/* Bottom Right: Quote Box */}
        <div className="flex flex-col justify-start">
          <div className="bg-jade/20 p-6 rounded-2xl border-l-4 border-l-teal shadow-sm border-t border-r border-b border-forest/5 h-full">
            <p className="text-lg text-deepForest italic leading-relaxed">
              "This grassroots involvement not only democratizes climate information but also amplifies the voices of those most affected, ensuring that global solutions are informed by diverse, on-the-ground perspectives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
