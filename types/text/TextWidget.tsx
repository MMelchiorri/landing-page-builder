'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { TextWidgetProperties } from '@/types/text/text.schema'

interface TextWidgetWidgetProps {
  properties: TextWidgetProperties
}

export const TextWidget: React.FC<TextWidgetWidgetProps> = ({ properties }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant={'h2'}>{properties.title}</Typography>
      <Typography variant={'h2'}>{properties.subtitle}</Typography>
    </Box>
  )
}
