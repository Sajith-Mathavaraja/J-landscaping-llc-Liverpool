import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Lawn Restoration & Precision Edging',
    description: 'Transformed an overgrown weeds-dominated front yard into a lush, stripe-mowed manicured lawn with razor-sharp edges along the driveway and walkways.',
    before: '/images/before-1.webp',
    after: '/images/after-1.webp',
    location: 'Liverpool, NY'
  },
  {
    id: 2,
    title: 'Mulch Bed & Plant Bed Renovation',
    description: 'Cleared neglected weed beds, re-defined landscape borders, installed premium dark chocolate mulch, and planted vibrant hostas and hydrangeas.',
    before: '/images/before-2.webp',
    after: '/images/after-2.webp',
    location: 'Clay, NY'
  }
];

const TransformationCard = ({ project }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  // Global window listeners for ultra smooth dragging
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      updatePosition(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) updatePosition(e.touches[0].clientX);
    });
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-lime-600 font-sans">
              {project.location} Transformation
            </span>
            <h3 className="text-xl font-bold font-serif text-forest-deep">{project.title}</h3>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-50 text-forest-deep text-xs font-semibold self-start sm:self-auto border border-lime-200">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Before / After</span>
          </div>
        </div>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-2">{project.description}</p>
      </div>

      {/* Interactive Image Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden select-none cursor-ew-resize border border-gray-200 shadow-inner group touch-none"
      >
        {/* AFTER Image (Bottom Layer) */}
        <img
          src={project.after}
          alt={`After landscaping transformation: ${project.title}`}
          width="800"
          height="600"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER Label */}
        <span className="absolute top-3 right-3 bg-forest-deep/90 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md z-10 pointer-events-none">
          AFTER
        </span>

        {/* BEFORE Image (Top Layer clipped with CSS clip-path) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={project.before}
            alt={`Before landscaping transformation: ${project.title}`}
            width="800"
            height="600"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* BEFORE Label */}
          <span className="absolute top-3 left-3 bg-black/80 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
            BEFORE
          </span>
        </div>

        {/* Divider Slider Line & Interactive Knob */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-lime-500 text-black border-2 border-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 font-bold" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-charcoal/50 font-medium pt-1">
        ⟵ Drag slider to compare Before &amp; After ⟶
      </div>
    </div>
  );
};

const BeforeAfterSlider = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-lime-600 font-sans">
            Real Liverpool Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
            From Overgrown to Outstanding
          </h2>
          <p className="text-base text-charcoal/70">
            Drag the slider to see how J Landscaping LLC elevates local residential properties across Liverpool and Onondaga County, NY.
          </p>
        </div>

        {/* Transformations Grid (2 clean cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <TransformationCard key={proj.id} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
