import { useState } from "react";

export default function CopyLinkButton({ url }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);

            // Reset the "Copied!" message after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div>
            <button
                onClick={handleCopy}
                style={{
                    padding: "10px 20px",
                    background: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>
                {copied ? "Copied!" : "Copy Link"}
            </button>
        </div>
    );
}
