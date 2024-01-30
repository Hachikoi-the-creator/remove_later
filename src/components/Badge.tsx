import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

export type BadgeProps = {
    className?: string;
    name: ReactNode;
    color?: string;
    href?: string;
};


/**
 *
 * @param color only chooose *30 values plx
 * @returns
 */
export default function Badge({
    className = "relative",
    name,
    color = "blue30",
    href,
}: BadgeProps) {
    const styleBg = {
        backgroundColor: "#C5EA98",
        color: "black",
    };

    const CLASSES = cn(
        "nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs",
        className
    );

    return href ? (
        <Link
            href={href || ""}
            className={`transition-colors duration-300 hover:text-white ${CLASSES}`}
            style={styleBg}
        >
            {name}
        </Link>
    ) : (
        <span
            style={styleBg}
            className={`${CLASSES} ${className} shadow-black`}
        >
            {name}
        </span>
    );
}
