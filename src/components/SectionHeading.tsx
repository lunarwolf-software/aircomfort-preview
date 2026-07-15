import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, children, center }: Props) {
  return (
    <div className={`section-heading${center ? ' section-heading--center' : ''}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
