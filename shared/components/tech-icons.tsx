import React from "react";
import {
  SiGo,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiLanggraph,
  SiDocker,
  SiGooglecloud,
  SiCloudflarepages,
  SiGithub,
  SiPostman,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiLinux,
  SiQdrant,
  SiLangchain,
  SiPython,
  SiCloudflare,
} from "@icons-pack/react-simple-icons";

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

/**
 * Official Go Fiber logo icon from Devicon (colored)
 */
export function FiberIcon({
  className = "w-4 h-4",
  color = "#00ACD7",
  ...props
}: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 42 128 44"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Go Fiber</title>
      <path
        fill={color}
        d="M62.55 47.98c-1.99 0-3.83 1.512-4.122 3.376-.272 1.851 1.19 3.386 3.187 3.386 1.998 0 3.85-1.523 4.098-3.387.247-1.863-1.171-3.374-3.162-3.374zm-25.552 1.954-4.924 29.66h7.166l1.97-11.916h11.788l.984-5.84H42.195l.985-6.082h13.074l.986-5.822H36.998zm31.326 0-4.916 29.658h7.006l.58-3.608h.276c.52 2.057 2.2 3.924 5.558 3.924 4.924 0 9.557-3.851 10.803-11.424 1.31-7.847-2.287-11.423-6.936-11.423-3.518 0-5.82 2.053-6.978 4.095h-.152l1.837-11.222h-7.078zm57.735 7.115c-2.433 0-4.618 1.414-5.936 4.353h-.23l.685-4.054h-6.87l-3.706 22.242h7.08l1.998-12.076c.462-2.65 2.636-4.432 5.14-4.432.884 0 2.086.131 2.737.377L128 57.291a8.417 8.417 0 0 0-1.941-.242zm-24.66.014c-6.705 0-11.804 4.604-12.946 11.495-1.202 7.107 2.359 11.451 9.342 11.461 5.861 0 10.105-2.823 11.682-7.197l-6.457-.187c-.808 1.49-2.405 2.273-4.245 2.273-2.765 0-4.096-1.643-3.648-4.467l.045-.26h14.81l.278-1.767c1.216-7.313-2.548-11.352-8.862-11.352zm-43.83.285L53.866 79.59h7.082l3.7-22.242h-7.08zm-48.055.459-1.85 2.623 24.53-.014.427-2.61H9.514zm91.232 4.367c2.316 0 3.679 1.622 3.317 3.894h-8.14c.508-2.2 2.535-3.894 4.823-3.894zm-23.482.424c2.628 0 3.664 2.29 3.092 5.88-.572 3.59-2.434 5.922-5.04 5.922-2.592 0-3.706-2.326-3.12-5.922.578-3.634 2.475-5.88 5.068-5.88zm-75.362.646L0 65.857l31.377-.023.428-2.59H1.902zm16.31 5.436-1.718 2.623 14.067-.01.427-2.613H18.213z"
      />
    </svg>
  );
}

/**
 * Official GORM database/ORM mark
 */
export function GormIcon({ className = "w-4 h-4", color = "#00ADD8", ...props }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GORM</title>
      <path d="M12 2C6.48 2 2 4.01 2 6.5v11c0 2.49 4.48 4.5 10 4.5s10-2.01 10-4.5v-11C22 4.01 17.52 2 12 2zm0 2c4.42 0 8 1.45 8 2.5S16.42 9 12 9 4 7.55 4 6.5 7.58 4 12 4zm8 13.5c0 1.05-3.58 2.5-8 2.5s-8-1.45-8-2.5V15.2c1.92 1.36 4.8 2.05 8 2.05s6.08-.69 8-2.05v2.3zm0-4.5c0 1.05-3.58 2.5-8 2.5s-8-1.45-8-2.5v-2.3c1.92 1.36 4.8 2.05 8 2.05s6.08-.69 8-2.05V13zm0-4.5c0 1.05-3.58 2.5-8 2.5s-8-1.45-8-2.5V8.7c1.92 1.36 4.8 2.05 8 2.05s6.08-.69 8-2.05V8.5z" />
    </svg>
  );
}

/**
 * RAG (Retrieval-Augmented Generation) Architecture Icon
 */
export function RagIcon({ className = "w-4 h-4", color = "#10B981", ...props }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>RAG (Retrieval-Augmented Generation)</title>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m4.93 4.93 2.12 2.12" />
      <path d="m16.95 16.95 2.12 2.12" />
      <path d="m4.93 19.07 2.12-2.12" />
      <path d="m16.95 7.05 2.12-2.12" />
    </svg>
  );
}

/**
 * Model Context Protocol (MCP) Icon
 */
export function McpIcon({ className = "w-4 h-4", color = "#6366F1", ...props }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Model Context Protocol (MCP)</title>
      <rect x="2" y="3" width="6" height="6" rx="1.5" />
      <rect x="16" y="3" width="6" height="6" rx="1.5" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" />
      <path d="M5 9v3a3 3 0 0 0 3 3h1" />
      <path d="M19 9v3a3 3 0 0 1-3 3h-1" />
      <path d="M12 12v3" />
    </svg>
  );
}

/**
 * AI Concepts & Models (LLM / Neural Architecture) Icon
 */
export function AiConceptsIcon({
  className = "w-4 h-4",
  color = "#8B5CF6",
  ...props
}: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>AI Concepts & Models</title>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z" />
      <path d="M6 12h12" strokeDasharray="1 2" />
    </svg>
  );
}

/**
 * LoRA (Low-Rank Adaptation / Fine-tuning) Neural Network Icon
 */
export function LoraIcon({ className = "w-4 h-4", color = "#EC4899", ...props }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>LoRA (Low-Rank Adaptation)</title>
      <path d="M4 4h4v16H4z" />
      <path d="M16 8h4v8h-4z" />
      <path d="m8 10 8-1" />
      <path d="m8 14 8 1" />
    </svg>
  );
}

/**
 * Architecture & Clean Code Blueprint Icon
 */
export function ArchitectureIcon({ className = "w-4 h-4", color = "#689F99", ...props }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Architecture Blueprint</title>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

/**
 * Dynamic Tech Icon Dispatcher with Full Official Brand Colors
 */
export interface DynamicTechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function TechIcon({
  name,
  className = "w-4 h-4",
  ...props
}: DynamicTechIconProps) {
  switch (name.toLowerCase()) {
    // Backend
    case "golang":
    case "go":
      return <SiGo color="#00ADD8" className={className} {...props} />;
    case "fiber":
      return <FiberIcon color="#00ACD7" className={className} {...props} />;
    case "gorm":
      return <GormIcon color="#00ADD8" className={className} {...props} />;
    case "clean-arch":
      return <ArchitectureIcon color="#689F99" className={className} {...props} />;

    // Frontend
    case "js":
    case "javascript":
      return <SiJavascript color="#F7DF1E" className={className} {...props} />;
    case "ts":
    case "typescript":
      return <SiTypescript color="#3178C6" className={className} {...props} />;
    case "react":
      return <SiReact color="#61DAFB" className={className} {...props} />;
    case "nextjs":
    case "next.js":
    case "next_js":
      return (
        <SiNextdotjs
          className={`${className} text-[#000000] dark:text-[#FFFFFF]`}
          {...props}
        />
      );
    case "tailwind":
    case "tailwindcss":
    case "tailwind css":
      return <SiTailwindcss color="#06B6D4" className={className} {...props} />;
    case "vite":
      return <SiVite color="#646CFF" className={className} {...props} />;

    // AI / LLM
    case "rag":
      return <RagIcon color="#10B981" className={className} {...props} />;
    case "langgraph":
    case "lang graph":
      return <SiLanggraph color="#2563EB" className={className} {...props} />;
    case "mcp":
    case "model-context-protocol":
      return <McpIcon color="#6366F1" className={className} {...props} />;
    case "ai-concepts":
    case "ai-models":
    case "ai-concepts-models":
    case "ai concepts atau model":
      return <AiConceptsIcon color="#8B5CF6" className={className} {...props} />;
    case "langchain":
      return <SiLangchain color="#1C3C3C" className={className} {...props} />;
    case "lora":
      return <LoraIcon color="#EC4899" className={className} {...props} />;

    // Database & Storage
    case "mysql":
      return <SiMysql color="#4479A1" className={className} {...props} />;
    case "qdrant":
      return <SiQdrant color="#DC2626" className={className} {...props} />;
    case "r2":
    case "cloudflare-r2":
    case "cloudflare r2":
    case "r2 cloudflare":
    case "cloudflare_r2":
      return <SiCloudflare color="#F38020" className={className} {...props} />;
    case "postgresql":
    case "postgres":
      return <SiPostgresql color="#4169E1" className={className} {...props} />;
    case "redis":
      return <SiRedis color="#DC382D" className={className} {...props} />;

    // DevOps / Cloud / Tools
    case "docker":
      return <SiDocker color="#2496ED" className={className} {...props} />;
    case "gcp":
    case "google-cloud":
    case "googlecloud":
      return <SiGooglecloud color="#4285F4" className={className} {...props} />;
    case "cloudflare":
    case "cloudflare-pages":
    case "cloudflarepages":
    case "cloudflare pages":
      return <SiCloudflarepages color="#F38020" className={className} {...props} />;
    case "github":
      return (
        <SiGithub
          className={`${className} text-[#181717] dark:text-[#F0F6FC]`}
          {...props}
        />
      );
    case "postman":
    case "postmant":
      return <SiPostman color="#FF6C37" className={className} {...props} />;
    case "git":
      return <SiGit color="#F05032" className={className} {...props} />;
    case "linux":
    case "bash":
      return <SiLinux color="#FCC624" className={className} {...props} />;
    case "python":
      return <SiPython color="#3776AB" className={className} {...props} />;

    default:
      return <ArchitectureIcon color="#689F99" className={className} {...props} />;
  }
}
