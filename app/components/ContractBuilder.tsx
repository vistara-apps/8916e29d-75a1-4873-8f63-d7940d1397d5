'use client';

import { useState } from 'react';
import { ContractTemplate, TemplateField } from '@/lib/types';
import { CONTRACT_TEMPLATES } from '@/lib/constants';
import { FileText, Plus, Check } from 'lucide-react';

export function ContractBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isCreating, setIsCreating] = useState(false);

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const generateContract = () => {
    if (!selectedTemplate) return '';
    
    let contract = selectedTemplate.template;
    Object.entries(formData).forEach(([key, value]) => {
      contract = contract.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });
    return contract;
  };

  const handleCreateContract = async () => {
    setIsCreating(true);
    // Simulate contract creation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsCreating(false);
    alert('Contract created successfully!');
    setSelectedTemplate(null);
    setFormData({});
  };

  if (!selectedTemplate) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-text-primary">Contract Templates</h3>
        </div>

        {CONTRACT_TEMPLATES.map((template) => (
          <div
            key={template.id}
            className="glass-card p-4 rounded-organic hover:bg-surface/90 transition-all duration-200 cursor-pointer card-hover"
            onClick={() => setSelectedTemplate(template)}
          >
            <h4 className="font-semibold text-text-primary mb-2">{template.name}</h4>
            <p className="text-sm text-text-secondary mb-2">{template.description}</p>
            <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
              {template.category}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">{selectedTemplate.name}</h3>
        <button
          onClick={() => setSelectedTemplate(null)}
          className="text-text-secondary hover:text-text-primary"
        >
          Back
        </button>
      </div>

      <div className="space-y-4">
        {selectedTemplate.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              {field.required && <span className="text-accent ml-1">*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                value={formData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                className="input-field w-full"
              >
                <option value="">Select...</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className="input-field w-full"
              />
            )}
          </div>
        ))}
      </div>

      {Object.keys(formData).length > 0 && (
        <div className="glass-card p-4 rounded-lg">
          <h4 className="font-medium text-text-primary mb-2">Preview:</h4>
          <p className="text-sm text-text-secondary whitespace-pre-wrap">
            {generateContract()}
          </p>
        </div>
      )}

      <button
        onClick={handleCreateContract}
        disabled={isCreating || selectedTemplate.fields.some(f => f.required && !formData[f.name])}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isCreating ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Creating Contract...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <Check className="w-4 h-4" />
            <span>Create Contract</span>
          </div>
        )}
      </button>
    </div>
  );
}
