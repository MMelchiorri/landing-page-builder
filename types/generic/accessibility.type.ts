export interface Accessibility {
  wcagLevel: 'A' | 'AA' | 'AAA'
  screenReaderOptimized: boolean
  contrastRatio: 'normal' | 'high'
  keyboardNavigation: boolean
  skipLinksEnabled: boolean
  languageAttribute: string
}
