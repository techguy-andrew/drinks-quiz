'use client';

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-xl">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
            {content}
          </pre>
        </div>
      )}
    </div>
  );
}

interface SimpleAccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export function SimpleAccordion({ items }: SimpleAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}