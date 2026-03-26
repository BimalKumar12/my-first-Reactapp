"use client";

import React, { useActionState, useEffect, useState } from "react";
import { submitFeedback, FeedbackState, FeedbackData } from "../actions/feedback";

const initialState: FeedbackState = {
    success: false,
    message: "",
    data: null,
};

const FeedbackForm = ({ addFeedback }: { addFeedback: (data: FeedbackData) => void }) => {
    const [state, formAction] = useActionState(submitFeedback, initialState);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (state.success && state.data) {
            addFeedback(state.data);
            setSubmitted(true);
        }
    }, [state]);

    if (submitted) {
        return (
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center w-[320px]">
                <h2 className="text-green-400 text-xl font-semibold">
                    Form submitted successfully ✅
                </h2>
                <p className="text-slate-300 mt-2">Thank you for your feedback!</p>
            </div>
        );
    }

    return (
        <form action={formAction} className="bg-slate-800 p-6 rounded-xl shadow-lg w-[320px] flex flex-col">

            <h2 className="text-xl font-semibold mb-4 text-center text-indigo-300">
                Submit Feedback
            </h2>

            <input
                name="name"
                placeholder="Enter Name"
                className="mb-3 p-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                name="employeeId"
                placeholder="Enter Employee ID"
                className="mb-3 p-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
                name="feedback"
                placeholder="Enter Feedback"
                className="mb-3 p-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 transition duration-200 text-white py-2 rounded font-semibold"
            >
                Submit
            </button>

            {state.message && (
                <p
                    className={`mt-3 text-center ${state.success ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {state.message}
                </p>
            )}
        </form>
    );
};

export default FeedbackForm;