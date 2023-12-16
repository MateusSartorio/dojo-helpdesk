import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Communication is the backbone of collaboration. Keep an eye on this
        space for important updates, announcements, and news from the WebDev
        galaxy. Whether it &pos; s a change in project timelines or a shout-out
        to a team member, you &pos; ll find it here.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          We are thrilled to announce the latest addition to our dynamic web
          development team. Please join us in welcoming the new member of our
          team, our talented and dedicated web developer who brings a wealth of
          experience and a fresh perspective to our growing family.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          We are thrilled to announce the launch of our brand-new website,
          marking a significant milestone in our digital journey. After months
          of hard work, collaboration, and attention to detail, we are proud to
          present a user-friendly and visually stunning online experience that
          reflects our commitment to innovation and excellence.
        </p>
      </div>
    </main>
  );
}
