import Link from "next/link";
import React from "react";
import QueryTest from "~/components/QueryTest";
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
            <QueryTest/>
            <WhyHeyHom />

            <Link href={{
                pathname: "/",
                query: { gallery: "open" }
            }}>Open gallery w/link</Link>
        </div>
    );
}
