"use client";

import { FeedbackData } from "../actions/feedback";

export default function FeedbackList({ feedbacks }: { feedbacks: FeedbackData[] }) {
    return (
        <div className="mt-8 w-[350px]">
            {feedbacks.length > 0 && (
                <h2 className="text-xl font-semibold mb-3 text-indigo-300 text-center">
                    Submitted Feedbacks
                </h2>
            )}

            {feedbacks.map((f) => (
                <div
                    key={f.id}
                    className="bg-slate-800 p-4 rounded-lg mb-3 border border-slate-700 shadow-md"
                >
                    <p className="text-sm"><span className="font-semibold text-indigo-400">Name:</span> {f.name}</p>
                    <p className="text-sm"><span className="font-semibold text-indigo-400">Employee ID:</span> {f.employeeId}</p>
                    <p className="text-sm"><span className="font-semibold text-indigo-400">Feedback:</span> {f.feedback}</p>
                </div>
            ))}
        </div>
    );
}