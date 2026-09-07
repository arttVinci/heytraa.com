import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  tag?: string;
  badge?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[23rem] lg:auto-rows-[25rem] grid-cols-1 lg:grid-cols-3 gap-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  tag,
  badge,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 lg:col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
      // Surface styles
      "bg-white/95 backdrop-blur-md border border-slate-200/80 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // Hover styles
      "hover:border-sky-300 hover:[box-shadow:0_0_0_1px_rgba(2,132,199,.25),0_8px_20px_rgba(2,132,199,.06),0_24px_40px_rgba(2,132,199,.08)] transition-all duration-300 ease-out",
      className
    )}
    {...props}
  >
    {/* Background Graphic Slot (Upper Portion) */}
    <div className="relative h-44 sm:h-48 w-full overflow-hidden pointer-events-none">
      {background}
    </div>

    {/* Content Area (Lower Portion) */}
    <div className="p-6 pt-2 z-10 flex flex-col justify-end">
      <div className="pointer-events-none transform-gpu transition-all duration-300 lg:group-hover:-translate-y-8">
        {/* Icon & Tag Row */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] transition-all duration-300 shadow-xs">
              <Icon className="h-5 w-5 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-90" />
            </div>
            {tag && (
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase tracking-wider border border-slate-200/60">
                {tag}
              </span>
            )}
          </div>
          {badge && <div>{badge}</div>}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-tight">
          {name}
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Mobile-visible CTA */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0284c7] pointer-events-auto lg:hidden">
        <Link href={href} className="inline-flex items-center gap-1.5 hover:underline">
          <span>{cta}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>

    {/* Desktop Revealing CTA Button with Magic UI slide-in */}
    <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex z-20 bg-gradient-to-t from-white via-white/95 to-transparent">
      <Link
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
      >
        <span>{cta}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
      </Link>
    </div>

    {/* Subtle hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-sky-500/[0.015]" />
  </div>
);

export { BentoCard, BentoGrid };
