export interface ContactInfo {
  phones: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  email?: string;
  hours?: BusinessHours;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}