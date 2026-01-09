'use client'

import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { FooterWidgetProperties } from '@/schema/footer.schema'

interface FooterWidgetProps {
  properties: FooterWidgetProperties
}

export const FooterWidget: React.FC<FooterWidgetProps> = ({ properties }) => {
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
