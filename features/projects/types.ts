export interface ProjectItem {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  architecture: string[];
  tags: string[];
  githubBackend?: string;
  githubFrontend?: string;
  liveUrl?: string;
}
