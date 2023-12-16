import { Suspense } from "react";
import TicketList from "./TicketList";
import Link from "next/link";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
        <Link href="/tickets/create">
          <button className="btn-primary">Create new ticket</button>
        </Link>
      </Suspense>
    </main>
  );
}
