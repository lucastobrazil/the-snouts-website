export interface Release {
  title: string;
  year: number;
  type: "Album" | "EP" | "Single";
  bandcampId: number;
  bandcampType: "album" | "track";
  bandcampUrl: string;
  description?: string;
}

export const releases: Release[] = [
  {
    title: "Sunset",
    year: 2025,
    type: "Single",
    bandcampId: 4028967522,
    bandcampType: "track",
    bandcampUrl: "https://thesnouts1.bandcamp.com/track/sunset",
    description:
      "A tale of personal accountability and anxiety after an embarrassing incident.",
  },
  {
    title: "The Great Disgrace",
    year: 2024,
    type: "Single",
    bandcampId: 1002433675,
    bandcampType: "track",
    bandcampUrl: "https://thesnouts1.bandcamp.com/track/the-great-disgrace",
    description:
      "A tale of personal accountability and anxiety after an embarrassing incident.",
  },
  {
    title: "Lost to the Sea",
    year: 2024,
    type: "Single",
    bandcampId: 22834410,
    bandcampType: "track",
    bandcampUrl: "https://thesnouts1.bandcamp.com/track/lost-to-the-sea",
  },
  {
    title: "It Is What It Is",
    year: 2023,
    type: "Single",
    bandcampId: 3927821612,
    bandcampType: "track",
    bandcampUrl: "https://thesnouts1.bandcamp.com/track/it-is-what-it-is",
  },
  {
    title: "The Snouts",
    year: 2022,
    type: "EP",
    bandcampId: 2603490330,
    bandcampType: "album",
    bandcampUrl: "https://thesnouts1.bandcamp.com/album/the-snouts",
    description:
      "Three tracks of punk and ska recorded at Kersley Road Studio.",
  },
  {
    title: "On the Nose",
    year: 2021,
    type: "Album",
    bandcampId: 1333892818,
    bandcampType: "album",
    bandcampUrl: "https://thesnouts1.bandcamp.com/album/on-the-nose",
    description:
      "Debut release. Seven tracks blending the raucous energy of punk with traditional ska.",
  },
  {
    title: "5 Times",
    year: 2021,
    type: "Single",
    bandcampId: 53823227,
    bandcampType: "track",
    bandcampUrl: "https://thesnouts1.bandcamp.com/track/5-times",
  },
];
