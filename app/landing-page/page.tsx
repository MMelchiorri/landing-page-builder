import { mockPage } from '@/mock/mockPage'
import { PageRenderer } from '@/renderers/PageRenderer'

export default function Page() {
  return <PageRenderer page={mockPage} />
}
