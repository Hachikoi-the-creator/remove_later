"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import pex0 from "public/homeTest/pex0.jpg";
import pex1 from "public/homeTest/pex1.jpg";
import pex10 from "public/homeTest/pex10.jpg";
import pex11 from "public/homeTest/pex11.jpg";
import pex2 from "public/homeTest/pex2.jpg";
import pex3 from "public/homeTest/pex3.jpg";
import pex4 from "public/homeTest/pex4.jpg";
import pex5 from "public/homeTest/pex5.jpg";
import pex6 from "public/homeTest/pex6.jpg";
import pex7 from "public/homeTest/pex7.jpg";
import pex8 from "public/homeTest/pex8.jpg";
import pex9 from "public/homeTest/pex9.jpg";
// import rightImgPng from "public/whyy.png";
import { useState } from "react";
import Badge from "./Badge";
import Heading from "./Heading";

export const whyHeyHom= [
    {
        tagText: "Datos",
        tagColor: "blue30",
        title: "Estimador de precio y estadísticas en cada propiedad",
        description:
            "Estimador de precios y estadísticas que te ayuda a comprender el valor de tu propiedad o la propiedad que estás considerando.",
    },
    {
        tagText: "Garantía",
        tagColor: "green30",
        title: "Validamos las propiedades para que tengas la certeza al firmar",
        description:
            "Certificamos cada propiedad para brindarte la seguridad que necesitas al tomar decisiones importantes.",
    },
    {
        tagText: "Atención profesional",
        tagColor: "orange30",
        title: "Asesores capacitados que te acompañarán en cada momento",
        description:
            "Garantizamos un servicio de atención profesional, enfocado en satisfacer tus necesidades y brindarte la asesoría experta que mereces.",
    },
    {
        tagText: "Tecnología",
        tagColor: "lightblue30",
        title: "Automatizamos procesos manuales para que tengas una experiencia rápida y fluida",
        description:
            "Agilizamos procesos manuales para proporcionarte una experiencia rápida y fluida en cada etapa.",
    },
];

export type SectionOurFeaturesProps = {
    className?: string;
    rightImg?: StaticImageData;
    type?: "type1" | "type2";
};
const testingImages = [
    pex0,
    pex1,
    pex2,
    pex3,
    pex4,
    pex5,
    pex6,
    pex7,
    pex8,
    pex9,
    pex10,
    pex11,
];

export default function WhyHeyHom({ className = "lg:py-14" }) {
    const [currIndex, setCurrIndex] = useState(0);

    return (
        <section
            className={`nc-SectionOurFeatures relative  !mt-0 !pt-24 !pb-0 items-center ${className}`}
            data-nc-id="SectionOurFeatures"
            id="why-hey-hom"
        >
            <Heading>¿Por que hey hom?</Heading>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                    <Image
                        src={testingImages[currIndex]}
                        alt="hey hom"
                        width={768}
                        className="object-cover rounded-md h-full lg:h-[66vh] object-top"
                        sizes="(min-width: 1280px) 612px, (min-width: 1040px) 496px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
                    />
                </div>
                <div className={`lg:w-1/2`}>
                    {testingImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrIndex(index)}
                            className="border border-red-300 p-1"
                        >
                            {index}
                        </button>
                    ))}

                    <ul className="space-y-10">
                        {whyHeyHom.map((item, index) => (
                            <li key={index} className="space-y-4">
                                <Badge
                                    color={item.tagColor}
                                    name={item.tagText}
                                />
                                <span className="block text-xl font-semibold">
                                    {item.title}
                                </span>
                                <span className="mt-5 block text-neutral-500 dark:text-neutral-400">
                                    {item.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
