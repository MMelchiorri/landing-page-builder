'use client'

import React from 'react'
import { Box, IconButton, Button, Typography } from '@mui/material'
import {
  FooterSchema,
  FooterWidgetProperties,
} from '@/types/footer/footer.schema'

interface TextWidgetWidgetProps {
  properties: FooterWidgetProperties
}

export const FooterWidget: React.FC<TextWidgetWidgetProps> = ({
  properties,
}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      padding={'20px'}
      bgcolor={'#f5f5f5'}
    >
      <Typography variant={'h6'}>{properties.text}</Typography>
      {properties.links.map((link, index) => (
        <IconButton
          key={index}
          href={link.url}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  )
}
