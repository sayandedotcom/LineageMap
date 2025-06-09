"use client";

import { MarkerType } from "@xyflow/react";
export const initNodes = [
  {
    id: "asim",
    type: "custom",
    data: {
      name: "Asim De",
      job: "CEO",
      img: "https://lh3.googleusercontent.com/a/ACg8ocK6z7ZxrfbdIi93_ehNHDvOC7N5WX2x6a0JTyvB3BZbX8toDs4=s96-c",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "chumki",
    type: "custom",
    data: {
      name: "Chumki De",
      job: "Designer",
      img: "https://lh3.googleusercontent.com/a/ACg8ocK6z7ZxrfbdIi93_ehNHDvOC7N5WX2x6a0JTyvB3BZbX8toDs4=s96-c",
    },

    position: { x: 200, y: 0 },
  },
  {
    id: "sreya",
    type: "custom",
    data: {
      name: "Sreya De",
      job: "Developer",
      img: "https://lh3.googleusercontent.com/a/ACg8ocK6z7ZxrfbdIi93_ehNHDvOC7N5WX2x6a0JTyvB3BZbX8toDs4=s96-c",
    },
    position: { x: 100, y: 200 },
  },
  {
    id: "sayan",
    type: "custom",
    data: {
      name: "Sayan De",
      job: "Developer",
      img: "https://lh3.googleusercontent.com/a/ACg8ocK6z7ZxrfbdIi93_ehNHDvOC7N5WX2x6a0JTyvB3BZbX8toDs4=s96-c",
    },
    position: { x: 300, y: 200 },
  },
  {
    id: "ayan",
    type: "custom",
    data: {
      name: "Ayan De",
      job: "Developer",
      img: "https://lh3.googleusercontent.com/a/ACg8ocK6z7ZxrfbdIi93_ehNHDvOC7N5WX2x6a0JTyvB3BZbX8toDs4=s96-c",
    },
    position: { x: 500, y: 200 },
  },
];

export const initEdges = [
  {
    id: "e1-2",
    source: "asim",
    target: "chumki",
    label: "animated edge",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-3",
    source: "chumki",
    target: "asim",
    label: "animatege",
    animated: true,
    type: "smoothstep",
  },
  {
    id: "e1-4",
    source: "asim",
    target: "sreya",
    label: "daughter",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-5",
    source: "asim",
    target: "sayan",
    label: "son",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-6",
    source: "asim",
    target: "ayan",
    label: "son",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
