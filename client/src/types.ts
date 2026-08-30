export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  videoUrl?: string;
  duration?: string;
  description?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  features: string[];
  deliveryTime: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MaterialItem {
  name: string;
  iconName: string;
}

export interface BrandItem {
  name: string;
  sub: string;
  iconType: string;
}
