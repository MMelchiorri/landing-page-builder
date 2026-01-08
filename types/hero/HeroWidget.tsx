'use client'

import React from 'react'
import { HeroWidgetProperties } from '@/types/hero/hero.schema'

interface HeroWidgetProps {
  properties: HeroWidgetProperties
}

export const HeroWidget: React.FC<HeroWidgetProps> = ({ properties }) => {
  return (
    <div
      className="hero-widget"
      style={{
        backgroundImage: `url(${properties.backgroundImage?.url})`,
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
