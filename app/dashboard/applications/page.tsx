// app/dashboard/applications/page.tsx
import Link from 'next/link'

const applications = [
  {
    id: 1,
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    status: "Applied",
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Pixel Workshop",
    status: "Under review",
  },
]

export default function () {
  return (
    <div>
      <h1>My Applications</h1>

      <p>
        Here is a list of the jobs you have applied to, and their current status.
      </p>

      {applications.map((application) => (
        <div key={application.id} className="card">
          <h2>{application.title}</h2>
          <p><strong>Company:</strong> {application.company}</p>
          <p><strong>Status:</strong> {application.status}</p>
        </div>
      ))}

      <p>
        <Link href="/dashboard">← Back to Dashboard</Link>
      </p>
    </div>
  )
}