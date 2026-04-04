"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name:
        (formData.get("firstName") as string) +
        " " +
        (formData.get("lastName") as string),
      email: formData.get("email") as string,
      interest: formData.get("interest") as string,
    };

    const { error } = await supabase.from("leads").insert([data]);

    if (!error) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ display: "block" }}>
        <h3>You&apos;re On The List</h3>
        <p>
          We&apos;ll be in touch soon with early access details. Welcome to
          Spartan.
        </p>
      </div>
    );
  }

  return (
    <form className="waitlist-form reveal" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
      />
      <select name="interest" required defaultValue="">
        <option value="" disabled>
          I&apos;m interested in...
        </option>
        <option value="glp1">GLP-1 Weight Loss</option>
        <option value="his_plan">His Plan (TRT + ED)</option>
        <option value="her_plan">Her Plan (HRT)</option>
        <option value="household_plan">Household Plan (His + Hers)</option>
        <option value="peptides">Peptides &amp; Longevity</option>
        <option value="all">Tell me everything</option>
      </select>
      <button type="submit" className="waitlist-submit" disabled={loading}>
        {loading ? "Submitting..." : "Get Early Access"}
      </button>
    </form>
  );
}
