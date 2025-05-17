import React from 'react';

export default function BlogLayout({frontMatter, children }) {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="text-white">{children}</div>
    </div>
  );
}
