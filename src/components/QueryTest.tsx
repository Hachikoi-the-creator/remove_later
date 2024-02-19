"use client"

import { usePathname, useSearchParams } from "next/navigation";

export default function QueryTest() {
    // const pathname = usePathname();
    const searchParams=useSearchParams();

    if (searchParams.get("gallery")) return     <div className="text-2xl text-blue-500">This appear on gallery=open</div>
  return (
    <p>missing query param</p>
  )
}