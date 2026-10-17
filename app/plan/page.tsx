// app/plan/page.tsx
import Link from 'next/link'

export default function () {
  return (
    <div>
      <h1>The Plan</h1>

      <p>
        Your journey is divided into three clear stages.
        Each stage has practical actions you can follow, one step at a time.
      </p>

      <h2>1. Prepare</h2>
      <p>
        Before applying, you need to build a strong foundation.
      </p>
      <ul>
        <li>Improve your CV — make it clear, concise, and tailored to your target role.</li>
        <li>Organize your portfolio — showcase your best projects with clean descriptions.</li>
        <li>Choose a target role — decide which position fits your skills and interests.</li>
      </ul>

      <h2>2. Practice</h2>
      <p>
        Strengthen your skills and build confidence before interviews.
      </p>
      <ul>
        <li>Strengthen relevant skills — focus on the technologies employers ask for.</li>
        <li>Prepare for interviews — practice common questions and technical challenges.</li>
      </ul>

      <h2>3. Apply</h2>
      <p>
        Take action. Explore opportunities, submit applications, and follow up.
      </p>
      <ul>
        <li>Explore suitable opportunities — browse job listings and company websites.</li>
        <li>Submit applications — send tailored applications to roles that match your plan.</li>
        <li>Follow up — track responses and stay organized.</li>
      </ul>

      
    </div>
  )
}