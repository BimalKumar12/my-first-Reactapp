"use server";

export interface FeedbackData {
    id: number;
    name: string;
    employeeId: string;
    feedback: string;
}

export interface FeedbackState {
    success: boolean;
    message: string;
    data?: FeedbackData | null;
}

export async function submitFeedback(
    prevState: FeedbackState,
    formData: FormData
): Promise<FeedbackState> {
    const name = formData.get("name") as string;
    const employeeId = formData.get("employeeId") as string;
    const feedback = formData.get("feedback") as string;

    if (!name || !employeeId || !feedback) {
        return {
            success: false,
            message: "All fields are required!",
            data: null,
        };
    }

    return {
        success: true,
        message: "Form submitted successfully",
        data: {
            id: Date.now(),
            name,
            employeeId,
            feedback,
        },
    };
}