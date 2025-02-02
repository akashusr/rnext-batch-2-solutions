export function validate(formData) {
    const errors = {};

    if (!formData?.fname?.trim()) {
        errors.fname = "First name is required";
    }
    if (!formData?.lname?.trim()) {
        errors.lname = "Last name is required";
    }

    if (!formData?.email?.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData?.email?.trim())) {
        errors.email = "Email address is invalid";
    }
    if (!formData?.password?.trim()) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be 6 characters or more";
    }
    if (!formData?.confirmPassword?.trim()) {
        errors.confirmPassword = "Confirm password is required";
    } else if (formData?.password !== formData?.confirmPassword) {
        errors.confirmPassword = "Passwords not matched";
    }
    return errors;
}
