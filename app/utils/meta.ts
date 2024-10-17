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
        "https://uploads-ssl.webflow.com/643ec1520f5bd43cd10eaf73/644fd0d4366cf8f42fb982ae_Opengraph.png",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content:
        "https://uploads-ssl.webflow.com/643ec1520f5bd43cd10eaf73/644fd0d4366cf8f42fb982ae_Opengraph.png",
    },
  ];
};
