'use client'

import React from 'react'

type heroWidgetProperties = {
  title: string
  subtitle: string
  backgroundImageUrl?: {
    url: string
    alt: string
  }
  ctaText?: {
    label: string
    link: string
  }
}

interface HeroWidgetProps {
  properties: heroWidgetProperties
}

export const HeroWidget: React.FC<HeroWidgetProps> = ({ properties }) => {
  return (
    <div
      className="hero-widget"
      style={{
        backgroundImage: `url(${properties.backgroundImageUrl?.url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '40vh',
        padding: '100px 20px',
        textAlign: 'left',
      }}
    >
      <h1>{properties.title}</h1>
      <p>{properties.subtitle}</p>
    </div>
  )
}
