interface HeroWidget {
  properties: Record<string, string>
}

export const HeroWidget: React.FC<HeroWidget> = ({ properties }) => {
  return (
    <section
      className="hero-widget"
      style={{
        backgroundImage: `url(${properties.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1>{properties.title}</h1>
      <p>{properties.subtitle}</p>
      {properties.ctaText && properties.ctaLink && (
        <a
          href={properties.ctaLink}
          className="hero-cta-button"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ff5733',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          {properties.ctaText}
        </a>
      )}
    </section>
  )
}
