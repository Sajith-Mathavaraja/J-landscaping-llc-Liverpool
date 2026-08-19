import React from 'react';
import { ClipboardList, Search, CalendarCheck, Sparkles } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Request Your Estimate',
    description: 'Tell us what your Liverpool property needs using our quick online form or phone call.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Property Assessment',
    description: 'We evaluate your outdoor space and recommend the right landscaping or maintenance solution.'
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Plan & Schedule',
    description: 'We agree on exact project scope, competitive pricing, and convenient scheduling.'
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Transform Your Property',
    description: 'Our experienced team completes the work with meticulous attention to detail and thorough cleanup.'
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
            How It Works
          </h2>
          <p className="text-gray-800 text-sm sm:text-base">
            From initial inquiry to immaculate final walkthrough, we keep landscaping straightforward and dependable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative flex flex-col justify-between hover:shadow-md hover:border-forest-deep/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-serif text-forest-deep">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sage/15 border border-sage/30 flex items-center justify-center text-forest-deep group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-forest-deep">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-forest-deep font-bold">
                  <span className="w-2 h-2 rounded-full bg-forest-deep"></span>
                  <span>Step {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
