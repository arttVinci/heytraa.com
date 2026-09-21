"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

export interface AvatarItem {
  imageUrl: string;
  profileUrl?: string;
  name?: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: AvatarItem[];
}

export function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-2.5 rtl:space-x-reverse items-center", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={index}
          className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden bg-slate-200 dark:bg-slate-700 shadow-xs shrink-0"
          title={url.name || `Member ${index + 1}`}
        >
          <Image
            src={url.imageUrl}
            alt={url.name || `Avatar ${index + 1}`}
            width={32}
            height={32}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      {(numPeople ?? 0) > 0 && (
        <div
          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-900 bg-gradient-to-br from-[#689F99] to-[#4e7d77] text-center text-[10px] sm:text-xs font-bold text-white shadow-xs shrink-0 font-mono"
          title={`${numPeople} more active participants`}
        >
          +{numPeople}
        </div>
      )}
    </div>
  );
}
