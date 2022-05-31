import React from 'react';

export type CalloutProps = {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

const Callout = ({ heading, description, ctaText, ctaLink }: CalloutProps) => {
  return (
    <div
      className="flex flex-col items-start justify-between rounded-2xl p-10 dark:bg-primary-dark-gray md:flex-row md:items-center md:px-20 md:pt-16 md:pb-12"
      style={{ backgroundColor: 'rgba(222,226,233, 0.5)' }}
    >
      <div className="flex-1">
        <h4 className="text-h4">{heading}</h4>
        <p className="pt-2 dark:text-primary-gray-100">{description}</p>
      </div>
      <a
        className="h-14 rounded-lg bg-black px-16 py-5 text-sm text-white hover:cursor-pointer"
        href={ctaLink}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default Callout;
