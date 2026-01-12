import React from 'react'
import styles from './root.module.css'

interface LayoutRootProps {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({
  header,
  main,
  footer,
}) => {
  return (
    <>
      <header className={styles.header}>{header}</header>
      <main className={'main'}>{main}</main>
      <footer className={'footer'}>{footer}</footer>
    </>
  )
}
