import { Box } from '@mui/material'

interface LayoutRootProps {
  header?: React.ReactNode
  body: React.ReactNode
  footer?: React.ReactNode
}

export const LayoutRoot = ({ header, body, footer }: LayoutRootProps) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box>{header}</Box>
      <Box flexGrow={1}>{body}</Box>
      <Box>{footer}</Box>
    </Box>
  )
}
