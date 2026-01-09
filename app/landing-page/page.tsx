import { mockPage } from '@/mock/mockPage'
import { PageRenderer } from '@/renderers/PageRenderer'

export default function LandingPage() {
  return <PageRenderer page={mockPage} />
}
