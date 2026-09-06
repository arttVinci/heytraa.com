import React from "react";

export interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  whatsappMsg: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}
