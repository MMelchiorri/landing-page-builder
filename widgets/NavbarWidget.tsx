'use client'

import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { NavbarWidgetProperties } from '@/schema/navbar.schema'

interface NavbarWidgetProps {
  properties: NavbarWidgetProperties
}

export const NavbarWidget: React.FC<NavbarWidgetProps> = ({ properties }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
    >
      <Typography variant={'h6'}>{properties.brand?.name}</Typography>
      {properties.links && (
        <Box display={'flex'} gap={2} marginTop={1}>
          {properties.links.map((link, index) => (
            <IconButton
              key={index}
              href={link.url}
              aria-label={link.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </IconButton>
          ))}
        </Box>
      )}
    </Box>
  )
}
