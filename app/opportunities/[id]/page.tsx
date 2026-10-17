// app/opportunities/[id]/page.tsx
import Link from 'next/link'
import { opportunities } from '../../../data/opportunities'

export default async function ({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  )

  if (!selectedOpportunity) {
    return (
      <div>
        <h1>Opportunity not found</h1>
        <p>
          The opportunity you are looking for does not exist.
        </p>
        <p>
          <Link href="/opportunities">← Back to Opportunities</Link>
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1>{selectedOpportunity.title}</h1>

      <p><strong>Company:</strong> {selectedOpportunity.company}</p>
      <p><strong>Location:</strong> {selectedOpportunity.location}</p>

      <h2>Description</h2>
      <p>{selectedOpportunity.description}</p>

      
    </div>
  )
}