export const pageview = (url: string) => {
    // @ts-ignore ???? was in template
    window.dataLayer.push({
        event: "pageview",
        page: url,
    });
};
