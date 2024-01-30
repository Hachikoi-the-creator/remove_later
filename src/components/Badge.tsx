import Link from "next/link";
import type { ReactNode } from "react";

import type { TwMainColor, TwMainColorWithSuffix30 } from "~/data/types";
import { cn } from "~/lib/utils";

export type BadgeProps = {
    className?: string;
    name: ReactNode;
    color?: TwMainColorWithSuffix30;
    href?: string;
};

const hexCompanyColors: Record<TwMainColor, string> = {
    darkBlue100: "#100E2D",
    darkBlue80: "#3F3E57",
    darkBlue50: "#878696",
    darkBlue30: "#C2C2C2",
    blue100: "#2338B5",
    blue80: "#4F5FC3",
    blue50: "#919BDA",
    blue30: "#BDC3E8",
    lightblue100: "#00B2E3",
    lightblue80: "#33C1E8",
    lightblue50: "#80D8F1",
    lightblue30: "#B3E8F6",
    green100: "#8BD631",
    green80: "#A2DE5A",
    green50: "#C5EA98",
    green30: "#DCF2C1",
    orange100: "#FFA400",
    orange80: "#FFB633",
    orange50: "#FFD180",
    orange30: "#FFE3B3",
    purple100: "#3D1152",
    purple80: "#634074",
    purple50: "#9E88A8",
    purple30: "#C5B8CB",
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
        backgroundColor: hexCompanyColors[color],
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
