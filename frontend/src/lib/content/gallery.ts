export type Category = "Training" | "Events" | "Counselling";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Category;
}

export const FILTERS = ["All", "Training", "Events", "Counselling"] as const;
export type Filter = (typeof FILTERS)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/photos/gallery-1-classroom.jpg",
    alt: "Students in a classroom session",
    caption: "Interactive classroom coaching",
    category: "Training",
  },
  {
    src: "/images/photos/gallery-2-physical.jpg",
    alt: "Physical training outdoors",
    caption: "Outdoor physical training",
    category: "Training",
  },
  {
    src: "/images/photos/gallery-3-seminar.jpg",
    alt: "Career seminar for students",
    caption: "Career counselling seminar",
    category: "Counselling",
  },
  {
    src: "/images/photos/gallery-4-parade.jpg",
    alt: "Cadets at a ceremonial parade",
    caption: "Celebrating our selected students",
    category: "Events",
  },
  {
    src: "/images/photos/gallery-5-teaching.jpg",
    alt: "Instructor leading a session",
    caption: "Personal mentor sessions",
    category: "Counselling",
  },
  {
    src: "/images/photos/gallery-6-training.jpg",
    alt: "Students training with an instructor",
    caption: "Structured training session",
    category: "Events",
  },
];
