import React from 'react';
import s from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
