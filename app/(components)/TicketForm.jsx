"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TicketForm = ({ ticket }) => {
  const editMode = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    category: "hardware problem",
    priority: 1,
    prograss: 0,
    status: "not started",
  };
  if (editMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["category"] = ticket.category;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["prograss"] = ticket.prograss;
    startingTicketData["status"] = ticket.status;
  }
  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center text-form-text">
      <form
        className="flex flex-col gap-3 w-1/2 "
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{editMode ? "Update your ticket" : "Create you ticket"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="text-white"
        />
        <label>description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
          className="text-white"
        />
        <label>category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="text-white"
        >
          <option value="hardware problem">hardware problem</option>
          <option value="network problem">network problem</option>
          <option value="software problem">software problem</option>
        </select>
        <label>priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            value={1}
            onChange={handleChange}
            type="radio"
            className="text-white"
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            value={2}
            onChange={handleChange}
            type="radio"
            className="text-white"
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            value={3}
            onChange={handleChange}
            type="radio"
            className="text-white"
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            value={4}
            onChange={handleChange}
            type="radio"
            className="text-white"
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            value={5}
            onChange={handleChange}
            type="radio"
            className="text-white"
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>prograss</label>
        <input
          id="prograss"
          name="prograss"
          value={formData.prograss}
          onChange={handleChange}
          min="0"
          max="100"
          type="range"
        />
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="text-white"
        >
          <option value="not started">not started</option>
          <option value="in prograss">in prograss</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={editMode ? "Update ticket" : "Create ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
