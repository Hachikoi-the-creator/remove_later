import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/not-enter/", "/private/"],
        },
        sitemap: "https://babu-app.vercel.app.com/sitemap.xml",
    };
}
