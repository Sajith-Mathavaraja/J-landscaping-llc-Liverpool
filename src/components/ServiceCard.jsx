import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, benefits, image, onLearnMore }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-sage/30 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1">
      
      {/* Service Image */}
      <div className="relative w-full h-44 overflow-hidden bg-gray-100">
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <h3 className="text-lg font-bold font-serif text-forest-deep group-hover:text-forest transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-1.5 pt-2 border-t border-gray-100">
            {benefits.map((b, idx) => (
              <li key={idx} className="text-xs text-charcoal/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0"></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onLearnMore}
            className="text-xs font-bold text-forest hover:text-lime-600 flex items-center gap-1 focus-ring rounded transition-colors"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
