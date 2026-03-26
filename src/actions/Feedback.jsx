
export function submitFeedback(prevState, formData) {
    const name = formData.get("name");
    const employeeId = formData.get("employeeId");
    const feedback = formData.get("feedback");

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