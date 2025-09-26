'use client';

import { useState } from 'react';
import { AppShell } from './components/AppShell';
import { RightsCard } from './components/RightsCard';
import { EmergencyButton } from './components/EmergencyButton';
import { ContractBuilder } from './components/ContractBuilder';
import { EvidenceCapture } from './components/EvidenceCapture';
import { SAMPLE_RIGHTS } from '@/lib/constants';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar, Identity } from '@coinbase/onchainkit/identity';
import { Shield, FileText, Camera, QrCode, Zap, Star } from 'lucide-react';

type ActiveTab = 'dashboard' | 'rights' | 'contracts' | 'evidence';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [selectedRight, setSelectedRight] = useState<any>(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rights':
        if (selectedRight) {
          return (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedRight(null)}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                ← Back to Rights
              </button>
              <div className="glass-card p-6 rounded-organic-alt">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  {selectedRight.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    {selectedRight.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRight.keywords.map((keyword: string) => (
                      <span 
                        key={keyword}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 bg-surface/50 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-text-primary mb-2">What This Means:</h4>
                    <p className="text-sm text-text-secondary">
                      This right protects you during interactions with law enforcement. 
                      You can exercise this right at any time during an encounter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-text-primary">Your Rights</h2>
            </div>
            {SAMPLE_RIGHTS.map((right) => (
              <RightsCard
                key={right.rightsId}
                right={right}
                onClick={() => setSelectedRight(right)}
              />
            ))}
          </div>
        );
      
      case 'contracts':
        return <ContractBuilder />;
      
      case 'evidence':
        return <EvidenceCapture />;
      
      default:
        return (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="glass-card p-6 rounded-organic-alt text-center animate-float">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-organic mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-text-primary mb-2">
                Guardian Rights Card
              </h1>
              <p className="text-text-secondary mb-4">
                Your pocket legal defense and contract enforcer
              </p>
              
              {/* Wallet Connection */}
              <Wallet>
                <ConnectWallet>
                  <div className="flex items-center justify-center space-x-2 btn-primary">
                    <Zap className="w-4 h-4" />
                    <span>Connect Wallet</span>
                  </div>
                </ConnectWallet>
                <div className="flex items-center justify-center space-x-3 p-3 bg-surface/50 rounded-lg">
                  <Avatar className="w-8 h-8" />
                  <Name className="text-text-primary font-medium" />
                </div>
              </Wallet>
            </div>

            {/* Emergency Button */}
            <EmergencyButton />

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab('rights')}
                className="glass-card p-4 rounded-organic hover:bg-surface/90 transition-all duration-200 card-hover"
              >
                <Shield className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-text-primary mb-1">Know Your Rights</h3>
                <p className="text-xs text-text-secondary">Access jurisdiction-specific legal rights</p>
              </button>

              <button
                onClick={() => setActiveTab('contracts')}
                className="glass-card p-4 rounded-organic hover:bg-surface/90 transition-all duration-200 card-hover"
              >
                <FileText className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-text-primary mb-1">Smart Contracts</h3>
                <p className="text-xs text-text-secondary">Create and sign legal documents</p>
              </button>

              <button
                onClick={() => setActiveTab('evidence')}
                className="glass-card p-4 rounded-organic hover:bg-surface/90 transition-all duration-200 card-hover"
              >
                <Camera className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-text-primary mb-1">Evidence Capture</h3>
                <p className="text-xs text-text-secondary">Secure recording and documentation</p>
              </button>

              <div className="glass-card p-4 rounded-organic">
                <QrCode className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-semibold text-text-primary mb-1">Smart Card</h3>
                <p className="text-xs text-text-secondary">NFC/QR quick access</p>
              </div>
            </div>

            {/* Subscription Tiers */}
            <div className="glass-card p-6 rounded-organic-alt">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                <Star className="w-5 h-5 text-accent mr-2" />
                Subscription Plans
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-surface/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-text-primary">Free</h4>
                      <p className="text-sm text-text-secondary">Basic rights info, emergency contact</p>
                    </div>
                    <span className="text-accent font-bold">$0</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-text-primary">Pro</h4>
                      <p className="text-sm text-text-secondary">Smart contracts, evidence capture</p>
                    </div>
                    <span className="text-accent font-bold">$5/mo</span>
                  </div>
                </div>
                <div className="p-3 bg-surface/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-text-primary">Premium</h4>
                      <p className="text-sm text-text-secondary">Advanced features, priority support</p>
                    </div>
                    <span className="text-accent font-bold">$15/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AppShell>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 p-1 bg-surface/30 rounded-organic">
        {[
          { id: 'dashboard', label: 'Home', icon: Shield },
          { id: 'rights', label: 'Rights', icon: Shield },
          { id: 'contracts', label: 'Contracts', icon: FileText },
          { id: 'evidence', label: 'Evidence', icon: Camera },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as ActiveTab)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg transition-all duration-200 ${
              activeTab === id
                ? 'bg-accent text-white shadow-lg'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>

      {renderTabContent()}
      
      {/* Bottom padding for fixed navigation */}
      <div className="h-20" />
    </AppShell>
  );
}
