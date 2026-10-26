import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

const filters = ['all', 'automation', 'web'];
const featured = projects.filter((p) => !p.practice);
const practice = projects.filter((p) => p.practice);

export default function Projects() {
  const { t, pick } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [box, setBox] = useState(null); // { images, index, label }
  const visible = featured.filter((p) => filter === 'all' || p.category === filter);
  const open = (p) => setBox({ images: p.gallery || [p.image], index: 0, label: pick(p.title) });
  return (
    <section className="section section--alt" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle id="projects-title">{t.projects.title}</SectionTitle>
        <div className="filters" role="group" aria-label={t.projects.filterLabel}>
          {filters.map((f) => (
            <button key={f} type="button" className={`filter ${filter === f ? 'filter--on' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{t.projects[f]}</button>
          ))}
        </div>
        <p className="sr-only" role="status">{t.projects.results(visible.length)}</p>
        <div className="grid grid--projects">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}><ProjectCard project={p} onOpenImage={open} /></Reveal>
          ))}
        </div>

        {practice.length > 0 && (
          <>
            <h3 className="projects__sub">{t.projects.practice}</h3>
            <p className="projects__subtext">{t.projects.practiceText}</p>
            <div className="grid grid--practice">
              {practice.map((p) => (
                <Reveal key={p.id}><ProjectCard project={p} onOpenImage={open} compact /></Reveal>
              ))}
            </div>
          </>
        )}
      </div>
      {box && <Lightbox images={box.images} index={box.index} label={box.label} onChange={(i) => setBox({ ...box, index: i })} onClose={() => setBox(null)} />}
    </section>
  );
}
