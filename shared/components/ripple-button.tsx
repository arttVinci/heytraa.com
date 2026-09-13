"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      children,
      rippleColor = "rgba(255, 255, 255, 0.6)",
      duration = "600ms",
      onClick,
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      createRipple(e);
      onClick?.(e);
    };

    const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple: Ripple = { x, y, size, key: Date.now() };
      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useEffect(() => {
      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1];
        const timeout = setTimeout(() => {
          setButtonRipples((prevRipples) =>
            prevRipples.filter((ripple) => ripple.key !== lastRipple.key)
          );
        }, parseInt(duration));
        return () => clearTimeout(timeout);
      }
    }, [buttonRipples, duration]);

    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border px-4 py-2 text-center text-sm font-medium transition-all duration-200 active:scale-[0.98]",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="pointer-events-none absolute inset-0">
          {buttonRipples.map((ripple) => (
            <span
              className="absolute animate-rippling rounded-full opacity-30"
              key={ripple.key}
              style={{
                width: `${ripple.size}px`,
                height: `${ripple.size}px`,
                top: `${ripple.y}px`,
                left: `${ripple.x}px`,
                backgroundColor: rippleColor,
                transform: `scale(0)`,
              }}
            />
          ))}
        </span>
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";
