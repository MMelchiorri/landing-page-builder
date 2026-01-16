'use client'

import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { TextWidgetProperties } from '@/schema/text.schema'

interface TextWidgetWidgetProps {
  properties: TextWidgetProperties
}

export const TextWidget: React.FC<TextWidgetWidgetProps> = ({ properties }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant={'h2'}>{properties.title}</Typography>
      <Typography variant={'h2'}>{properties.subtitle}</Typography>

      <Button
        variant="contained"
        href={properties.cta ? properties.cta.url : '#'}
      >
        {properties.cta ? properties.cta.text : 'Learn More'}
      </Button>
    </Box>
  )
}
