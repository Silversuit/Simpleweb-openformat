/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Overview",
      items: ["intro", "how-open-format-works"],
      collapsible: false
    },
    {
      type: "category",
      label: "Quickstart",
      items: ["guides/javascript", "guides/react"],
      collapsible: false
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "deploying",
        "minting",
        "buying-and-selling",
        "royalties",
        "revenue-sharing",
        "sales-commissions"
      ],
      collapsible: false
    }
  ],
  reference: [
    {
      type: "category",
      label: "Javascript",
      items: [
        {
          type: "doc",
          id: "reference/javascript/sdk",
          label: "SDK"
        },
        {
          type: "doc",
          id: "reference/javascript/nft",
          label: "NFT"
        }
      ],
      collapsible: false
    },
    {
      type: "category",
      label: "React",
      items: [
        "reference/react/openformatprovider",
        "reference/react/connectbutton",
        {
          type: "doc",
          id: "reference/react/hooks",
          label: "Hooks"
        }
      ],
      collapsible: false
    },
    {
      type: "category",
      label: "Contracts",
      items: [
        "reference/contracts/open-format",
        "reference/contracts/error-codes"
      ],
      collapsible: false
    }
  ]
};

module.exports = sidebars;