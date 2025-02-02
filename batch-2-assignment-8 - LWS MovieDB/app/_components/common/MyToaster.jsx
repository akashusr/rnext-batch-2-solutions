"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const MyToaster = () => {
    return (
        <Toaster
            position='top-right'
            reverseOrder={false}
            gutter={8}
            containerClassName=''
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: "",
                duration: 2000,
                style: {
                    background: "rgba(255, 15, 15,.5)",
                    color: "#fff",
                    border: "1px solid rgba(255, 15, 15,.7)",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row-reverse",
                },

                // Default options for specific types
                success: {
                    duration: 3000,
                    style: {
                        background: "rgba(15, 255, 15,.5)",
                        color: "#fff",
                        border: "1px solid rgba(15, 255, 15,.9)",
                        borderRadius: "5px",
                        display: "flex",
                        flexDirection: "row-reverse",
                    },
                    theme: {
                        primary: "green",
                        secondary: "black",
                    },
                },
                error: {
                    duration: 3000,
                    theme: {
                        primary: "red",
                        secondary: "black",
                    },
                },
            }}
        />
    );
};

export default MyToaster;
