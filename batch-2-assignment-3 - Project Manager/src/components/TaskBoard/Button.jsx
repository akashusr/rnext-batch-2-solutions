const Button = ({ label, type = "button", variant, ...rest }) => (
  <button
    type={type}
    className={`rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
      variant === "primary"
        ? "bg-green-600 text-white hover:bg-green-700 border-transparent"
        : "border  border-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
    }`}
    {...rest}>
    {label}
  </button>
);
export default Button;
