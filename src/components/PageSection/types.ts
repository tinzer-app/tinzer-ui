export interface PageSectionData {
  endpoint: string;
  requestParams?: unknown | null;
}

export interface PageSectionProps {
  data: PageSectionData;
}
