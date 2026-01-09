'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { HeroWidgetProperties } from '@/types/hero/hero.schema'

interface HeroWidgetProps {
  properties: HeroWidgetProperties
}

export const HeroWidget: React.FC<HeroWidgetProps> = ({ properties }) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Box
        className="hero-widget"
        sx={{
          flex: 1,
          backgroundImage: `url(${properties.backgroundImage?.url})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '40vh',
          padding: '100px 20px',
        }}
      />
      <Box>
        <Typography variant={'h2'}>{properties.title}</Typography>
        <Typography variant={'h2'}>{properties.subtitle}</Typography>
      </Box>
    </Box>
  )
}
