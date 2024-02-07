"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // But you can create a sidebar manually
    tutorialSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Getting Started 😉 ',
            items: ['getting-started/installation', 'getting-started/advanced-testing'],
        },
            {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Docusaurus Guides',
        description: 'Learn about the most important Docusaurus concepts!',
        slug: '/locators/text',
        keywords: ['guides'],
        image: '/img/logo.png',
      },
      items: ['locators/text'],
    },

          {
            type: 'category',
            label: 'Element Locators  👀 ',
            items: ['locators/text', 'locators/heading', 'locators/link'],
        },


         {
            type: 'category',
            label: 'Text  👀 ',
            items: ['locators/text', ],
        },
        // {
        //     type: 'category',
        //     label: 'Element Methods 👀 ',
        //     items: ['elements/text', 'elements/heading', 'elements/link'],
        // },
    ],
};
exports.default = sidebars;
