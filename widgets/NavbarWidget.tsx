'use client'

import React from 'react'
import { Box, IconButton, Switch, Typography } from '@mui/material'
import { NavbarWidgetProperties } from '@/schema/navbar.schema'

interface NavbarWidgetProps {
  properties: NavbarWidgetProperties
}

export const NavbarWidget: React.FC<NavbarWidgetProps> = ({ properties }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      justifyContent={'space-between'}
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
      <Switch
        sx={{
          '& .MuiSwitch-thumb': {},
        }}
      />
    </Box>
  )
}
