export interface User {
  userId: string;
  walletAddress: string;
  subscriptionTier: 'free' | 'pro' | 'premium';
  jurisdiction: string;
  emergencyContacts: EmergencyContact[];
  savedContracts: string[];
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  type: 'lawyer' | 'family' | 'legal_aid';
}

export interface Encounter {
  encounterId: string;
  userId: string;
  timestamp: Date;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  evidenceUrls: string[];
  notes: string;
}

export interface Contract {
  contractId: string;
  templateName: string;
  parties: string[];
  terms: Record<string, any>;
  status: 'draft' | 'pending' | 'signed' | 'executed';
  blockchainHash?: string;
  creationTimestamp: Date;
}

export interface Rights {
  rightsId: string;
  jurisdiction: string;
  title: string;
  description: string;
  keywords: string[];
  category: 'police_encounter' | 'arrest' | 'search' | 'questioning' | 'general';
}

export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  fields: TemplateField[];
  template: string;
}

export interface TemplateField {
  name: string;
  type: 'text' | 'date' | 'number' | 'select';
  required: boolean;
  options?: string[];
  placeholder?: string;
}
