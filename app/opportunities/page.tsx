// app/opportunities/page.tsx
import Link from 'next/link'
import { opportunities } from '../../data/opportunities'

export default function () {
  return (
    <div>
      <h1>Opportunities</h1>

      <p>
        Here are some opportunities you can explore. Compare them before deciding where to apply.
      </p>

      {opportunities.map((opportunity) => {
        const destination = `/opportunities/${opportunity.id}`

        return (
          <div key={opportunity.id} className="card">
            <h2>{opportunity.title}</h2>
            <p><strong>Company:</strong> {opportunity.company}</p>
            <p><strong>Location:</strong> {opportunity.location}</p>
            <p>
              <Link href={destination}>View opportunity →</Link>
            </p>
          </div>
        )
      })}

      <p>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  )
}