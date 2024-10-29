export const baseMeta = (title: string, description: string) => {
  return [
    { title: title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:domain", content: "serotonin.co" },
    { name: "twitter:url", content: "https://www.serotonin.co/" },
    {
      property: "og:image",
      content:
        "https://serotonin.co/web-preview.png",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content:
        "https://serotonin.co/web-preview.png",
    },
    {
      name: "google-site-verification",
      content: "KdlnCe8RqDr_i9klinMMwtVo20i7O4RNao8Hkoho6Uk"
    },
  ];
};

export const canonical = (path: string) => () => {
  return [
    {
      rel: "canonical",
      href: "https://serotonin.co" + path
    }
  ]
}