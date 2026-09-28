import { cloneElement, type ReactElement } from "react";
import {
  Anchor,
  Baby,
  BookOpen,
  Compass,
  Cpu,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Mountain,
  Package,
  Plane,
  Radio,
  Scale,
  School,
  Shield,
  Ship,
  Stethoscope,
  UserRound,
  Users,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { CourseIconKey } from "@/lib/content/types";

/* Icon per course, keyed by `Course.icon` in the content files. The elements are
   built once at module scope so a course can pick its icon by key at render
   time without creating a component during render. */
const ICONS: Record<CourseIconKey, ReactElement<LucideProps>> = {
  "graduation-cap": <GraduationCap />,
  shield: <Shield />,
  plane: <Plane />,
  ship: <Ship />,
  anchor: <Anchor />,
  stethoscope: <Stethoscope />,
  "heart-pulse": <HeartPulse />,
  baby: <Baby />,
  "user-round": <UserRound />,
  users: <Users />,
  landmark: <Landmark />,
  school: <School />,
  wrench: <Wrench />,
  cpu: <Cpu />,
  "book-open": <BookOpen />,
  scale: <Scale />,
  radio: <Radio />,
  package: <Package />,
  compass: <Compass />,
  mountain: <Mountain />,
  "hard-hat": <HardHat />,
};

export function CourseIcon({
  name,
  className,
}: {
  name: CourseIconKey;
  className: string;
}) {
  return cloneElement(ICONS[name], { className, "aria-hidden": true });
}
