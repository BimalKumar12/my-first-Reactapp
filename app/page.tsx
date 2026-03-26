"use client";

import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { FeedbackData } from "./actions/feedback";

export default function Page() {
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

  const addFeedback = (data: FeedbackData) => {
    setFeedbacks((prev) => [...prev, data]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      
      {/* 🔥 UPDATED HEADING */}
      <h1 className="text-4xl font-bold mb-8 text-indigo-400">
        Employee Feedback Form
      </h1>

      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}