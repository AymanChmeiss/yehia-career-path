// app/page.tsx
import Link from 'next/link'

export default function () {
  return (
    <div>
      <h1>Yehia's Career Path</h1>

      <p>
        Yehia is a Computer Science graduate from the Lebanese University.
        He is looking for a job, and he has set himself a two-month goal.
      </p>

      <p>
        This website helps Yehia organize his journey:
        remember his goal, plan his next steps, explore opportunities,
        and track his applications.
      </p>

      <p>
        It won't promise him a job — but it will give him clarity
        and a practical way to move forward.
      </p>

      <p>
        <Link href="/plan">Go to the Plan</Link>
      </p>
      <p>
        <Link href="/opportunities">Explore Opportunities</Link>
      </p>
    </div>
  )
}