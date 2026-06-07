export interface MetricItem {
  id: string;
  value: string;
  suffix: string;
  label: string;
  description: string;
  category: "operations" | "finance" | "product";
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5 stars or percentage
  category: "analytics" | "tools" | "business" | "strengths";
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  metrics: string[];
  category: "leadership" | "analytics" | "product";
}

export interface ProjectItem {
  id: string;
  title: string;
  location?: string;
  scope: string;
  description: string;
  bullets: string[];
  techStack: string[];
  impactMetric: string;
  category: "product-rollout" | "supply-chain" | "account-management";
}
