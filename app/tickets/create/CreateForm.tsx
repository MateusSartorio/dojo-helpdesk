"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(false);

    const ticket = {
      title,
      body,
      priority,
      user_email: "mario@dojo.dev",
    };

    const response = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    if (response.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          name="body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add ticket</span>}
      </button>
      {/* <SubmitButton /> */}
    </form>
  );
}
