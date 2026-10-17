// app/dashboard/page.tsx
import Link from 'next/link'

export default function () {
  const totalOpportunities = 3
  const totalApplications = 2

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Welcome to your dashboard. Here is a quick overview of your journey.
      </p>

      <div className="card">
        <h2>Your Progress</h2>
        <p><strong>Opportunities explored:</strong> {totalOpportunities}</p>
        <p><strong>Applications submitted:</strong> {totalApplications}</p>
      </div>

      <h2>Quick Actions</h2>
      <ul>
        <li>
          <Link href="/plan">Review your plan</Link>
        </li>
        <li>
          <Link href="/opportunities">Explore new opportunities</Link>
        </li>
        <li>
          <Link href="/dashboard/applications">View your applications</Link>
        </li>
      </ul>

      <p>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  )
}