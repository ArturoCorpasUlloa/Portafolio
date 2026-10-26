import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Device from '../components/Device';
import Lightbox from '../components/Lightbox';
import Reveal from '../components/Reveal';

const shots = [
  { type: 'phone', src: 'merstore-mobile.jpg', key: 'mobile' },
  { type: 'tablet', src: 'merstore-tablet.jpg', key: 'tablet' },
  { type: 'laptop', src: 'merstore-desktop.jpg', key: 'desktop' },
];

export default function Showcase() {
  const { t } = useLanguage();
  const [box, setBox] = useState(null);
  const deviceImages = shots.map((s) => s.src);
  return (
    <section className="section" id="showcase" aria-labelledby="showcase-title">
      <div className="container">
        <SectionTitle id="showcase-title">{t.showcase.title}</SectionTitle>
        <p className="showcase__text">{t.showcase.text}</p>
        <Reveal>
          <div className="devices">
            {shots.map((s, i) => (
              <Device
                key={s.type}
                type={s.type}
                src={s.src}
                label={t.showcase[s.key]}
                ariaLabel={`${t.projects.open}: Mer.Store, ${t.showcase[s.key]}`}
                onClick={() => setBox({ images: deviceImages, index: i })}
              />
            ))}
          </div>
        </Reveal>
      </div>
      {box && <Lightbox images={box.images} index={box.index} label="Mer.Store" onChange={(i) => setBox({ ...box, index: i })} onClose={() => setBox(null)} />}
    </section>
  );
}
