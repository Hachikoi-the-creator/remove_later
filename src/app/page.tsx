import React from "react";
import WhyHeyHom from "~/components/WhyHereHom";

export default function page() {
    return (
        <div className="container">
            <h1>Testing wats link</h1>
            <a
                href={`https://wa.me/${5215592252223}/?text=${encodeURIComponent(
                    "Hello there! cutie pie"
                )}`}
            >
                13 nums link
            </a>
            <a
                href={`https://wa.me/${5592252223}/?text=${encodeURIComponent(
                    "Hello there! cutie pie x2"
                )}`}
            >
                10 nums link
            </a>
            <WhyHeyHom />
        </div>
    );
}
