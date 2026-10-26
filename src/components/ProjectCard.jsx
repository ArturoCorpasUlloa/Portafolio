import { useLanguage } from '../i18n/LanguageContext';
import Tag from './Tag';
import ExternalLink from './ExternalLink';

export default function ProjectCard({ project, onOpenImage, compact = false }) {
  const { pick, t } = useLanguage();
  const title = pick(project.title);
  const hasImage = Boolean(project.image);
  const linkText = (l) => (l.label === 'frontend' ? t.projects.frontend : l.label === 'backend' ? t.projects.backend : t.projects.code);
  return (
    <article className={`card project ${compact ? 'project--compact' : ''}`}>
      {hasImage ? (
        <button
          type="button"
          className="project__media project__media--clickable"
          onClick={() => onOpenImage(project)}
          aria-label={`${t.projects.open}: ${title}`}
        >
          <img src={`./img/${project.image}`} alt="" loading="lazy" />
        </button>
      ) : (
        <div className="project__media project__media--empty" aria-hidden="true"><span>{'</>'}</span></div>
      )}
      <div className="project__body">
        <h3>{title}</h3>
        <p>{pick(project.description)}</p>
        <ul className="tags">
          {project.tags.map((tag) => { const label = pick(tag); return <Tag key={label}>{label}</Tag>; })}
        </ul>
        {project.isPrivate && <p className="card__note">{t.projects.private}</p>}
        {project.links.length > 0 && (
          <div className="card__links">
            {project.links.map((l) => (
              <ExternalLink key={l.href} href={l.href} ariaLabel={`${linkText(l)}: ${title}`}>
                {linkText(l)} <span aria-hidden="true">↗</span>
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
