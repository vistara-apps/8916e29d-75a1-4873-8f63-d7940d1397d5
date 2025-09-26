'use client';

import { useState } from 'react';
import { Phone, AlertTriangle, Users } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '@/lib/constants';

export function EmergencyButton() {
  const [showContacts, setShowContacts] = useState(false);

  const handleEmergencyCall = (phone: string) => {
    // In a real app, this would use the device's dialer
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <>
      <button
        onClick={() => setShowContacts(true)}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-organic font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 animate-glow"
      >
        <div className="flex items-center justify-center space-x-3">
          <AlertTriangle className="w-6 h-6" />
          <span>Emergency Legal Help</span>
        </div>
      </button>

      {showContacts && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-6 rounded-organic-alt max-w-sm w-full">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-text-primary">Emergency Contacts</h3>
            </div>
            
            <div className="space-y-3">
              {EMERGENCY_CONTACTS.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleEmergencyCall(contact.phone)}
                  className="w-full p-3 bg-surface hover:bg-surface/80 rounded-lg transition-colors text-left"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <div>
                      <div className="font-medium text-text-primary">{contact.name}</div>
                      <div className="text-sm text-text-secondary">{contact.phone}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowContacts(false)}
              className="w-full mt-4 p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
