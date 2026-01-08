import React from 'react'

interface HeroWidgetProps {
  properties: Record<string, string>
}

export const HeroWidget: React.FC<HeroWidgetProps> = ({ properties }) => {
  return (
    <div
      className="hero-widget"
      style={{
        backgroundImage: `url(${properties.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h1>{properties.title}</h1>
      <p>{properties.subtitle}</p>
    </div>
  )
}
