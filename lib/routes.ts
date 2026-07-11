// export const routes = [
//   {
//     name: "Home",
//   },
//   {
//     name: "Services",
//     subItems: [
//       {
//         name: "Services",
//         path: "/services",
//       },
//       {
//         name: "Brand Identity",
//         path: "/brand-identity",
//       },
//       {
//         name: "Web Development",
//         path: "/web-development",
//       },
//     ],
//   },
//   {
//     name: "Work",
//     subItems: [
//       {
//         name: "Work",
//         path: "/work",
//       },
//       {
//         name: "Work Detail",
//         path: "/work-detail",
//       },
//     ],
//   },
//   {
//     name: "Page",
//     subItems: [
//       {
//         name: "About Us",
//         path: "/about-us",
//       },
//       {
//         name: "Careers",
//         path: "/careers",
//       },
//       {
//         name: "Pricing",
//         path: "/pricing",
//       },
//       {
//         name: "Our Team",
//         path: "/team",
//       },
//       {
//         name: "FAQ",
//         path: "/faq",
//       },
//       {
//         name: "404",
//         path: "/page-404",
//       },
//     ],
//   },
//   {
//     name: "Insights",
//     subItems: [
//       {
//         name: "Insights",
//         path: "/insights",
//       },
//       {
//         name: "Single Post",
//         path: "/single-post",
//       },
//     ],
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

import { TECHNOLOGIES } from "./technologies";

export const routes: {
  name: string;
  path: string;
  subItems: { name: string; path: string }[];
}[] = [
    {
      name: "Why Work With Us",
      path: "/why-work-with-us",
      subItems: []
    },
    {
      name: "Our Process",
      path: "/our-process",
      subItems: []
    },
    {
      name: "Technologies",
      path: "/technologies",
      subItems: TECHNOLOGIES.map((t) => ({
        name: t.name,
        path: `/technologies/${t.slug}`,
      })),
    },
    {
      name: "Case Studies",
      path: "/case-studies",
      subItems: []
    },
    {
      name: "What We Think",
      path: "/blogs",
      subItems: []
    },
    {
      name: "Careers",
      path: "/careers",
      subItems: []
    }
  ];