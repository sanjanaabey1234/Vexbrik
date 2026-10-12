import {
  Globe,
  Smartphone,
  BrainCircuit,
  CloudCog,
  Palette,
  LineChart,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  BrainCircuit,
  CloudCog,
  Palette,
  LineChart,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Globe;
  return <Cmp className={className} aria-hidden />;
}
