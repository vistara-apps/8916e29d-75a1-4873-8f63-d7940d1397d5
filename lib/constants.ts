import { Rights, ContractTemplate } from './types';

export const SAMPLE_RIGHTS: Rights[] = [
  {
    rightsId: '1',
    jurisdiction: 'US-General',
    title: 'Right to Remain Silent',
    description: 'You have the right to remain silent. Anything you say can and will be used against you in a court of law.',
    keywords: ['miranda', 'silence', 'questioning'],
    category: 'questioning'
  },
  {
    rightsId: '2',
    jurisdiction: 'US-General',
    title: 'Right to an Attorney',
    description: 'You have the right to an attorney. If you cannot afford an attorney, one will be provided for you.',
    keywords: ['lawyer', 'attorney', 'legal representation'],
    category: 'questioning'
  },
  {
    rightsId: '3',
    jurisdiction: 'US-General',
    title: 'Right to Refuse Search',
    description: 'You have the right to refuse consent to search your person, belongings, car, or home unless they have a warrant.',
    keywords: ['search', 'warrant', 'consent'],
    category: 'search'
  },
  {
    rightsId: '4',
    jurisdiction: 'US-General',
    title: 'Right to Record',
    description: 'You have the right to record police interactions in public spaces, as long as you do not interfere with their duties.',
    keywords: ['recording', 'video', 'documentation'],
    category: 'police_encounter'
  }
];

export const CONTRACT_TEMPLATES: ContractTemplate[] = [
  {
    id: '1',
    name: 'Simple Release Form',
    description: 'Basic release form for general purposes',
    category: 'Release',
    fields: [
      { name: 'releasor', type: 'text', required: true, placeholder: 'Person giving release' },
      { name: 'releasee', type: 'text', required: true, placeholder: 'Person receiving release' },
      { name: 'date', type: 'date', required: true },
      { name: 'description', type: 'text', required: true, placeholder: 'What is being released' }
    ],
    template: 'I, {{releasor}}, hereby release {{releasee}} from any claims related to {{description}} as of {{date}}.'
  },
  {
    id: '2',
    name: 'Consent to Record',
    description: 'Consent form for recording interactions',
    category: 'Consent',
    fields: [
      { name: 'consenter', type: 'text', required: true, placeholder: 'Person giving consent' },
      { name: 'recorder', type: 'text', required: true, placeholder: 'Person recording' },
      { name: 'purpose', type: 'text', required: true, placeholder: 'Purpose of recording' },
      { name: 'date', type: 'date', required: true }
    ],
    template: 'I, {{consenter}}, consent to being recorded by {{recorder}} for the purpose of {{purpose}} on {{date}}.'
  }
];

export const EMERGENCY_CONTACTS = [
  { name: 'ACLU Legal Hotline', phone: '1-877-634-5454', type: 'legal_aid' as const },
  { name: 'National Lawyers Guild', phone: '1-415-285-5067', type: 'legal_aid' as const },
  { name: 'Emergency Legal Services', phone: '911', type: 'legal_aid' as const }
];
