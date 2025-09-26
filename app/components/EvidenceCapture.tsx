'use client';

import { useState } from 'react';
import { Camera, Mic, MapPin, Clock, Save } from 'lucide-react';

interface Evidence {
  id: string;
  type: 'photo' | 'audio' | 'note';
  timestamp: Date;
  location?: { lat: number; lng: number };
  data: string;
}

export function EvidenceCapture() {
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [note, setNote] = useState('');

  const capturePhoto = async () => {
    // In a real app, this would use the camera API
    const newEvidence: Evidence = {
      id: Date.now().toString(),
      type: 'photo',
      timestamp: new Date(),
      data: 'photo_placeholder.jpg'
    };
    setEvidence(prev => [...prev, newEvidence]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording
      setTimeout(() => {
        const newEvidence: Evidence = {
          id: Date.now().toString(),
          type: 'audio',
          timestamp: new Date(),
          data: 'audio_recording.mp3'
        };
        setEvidence(prev => [...prev, newEvidence]);
        setIsRecording(false);
      }, 3000);
    }
  };

  const saveNote = () => {
    if (!note.trim()) return;
    
    const newEvidence: Evidence = {
      id: Date.now().toString(),
      type: 'note',
      timestamp: new Date(),
      data: note
    };
    setEvidence(prev => [...prev, newEvidence]);
    setNote('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Camera className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold text-text-primary">Evidence Capture</h3>
      </div>

      {/* Capture Controls */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={capturePhoto}
          className="btn-secondary flex items-center justify-center space-x-2"
        >
          <Camera className="w-4 h-4" />
          <span>Photo</span>
        </button>

        <button
          onClick={toggleRecording}
          className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-organic font-medium transition-all duration-200 ${
            isRecording 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'btn-secondary'
          }`}
        >
          <Mic className="w-4 h-4" />
          <span>{isRecording ? 'Recording...' : 'Audio'}</span>
        </button>
      </div>

      {/* Note Input */}
      <div className="space-y-2">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add notes about the encounter..."
          className="input-field w-full h-24 resize-none"
        />
        <button
          onClick={saveNote}
          disabled={!note.trim()}
          className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Note
        </button>
      </div>

      {/* Evidence List */}
      {evidence.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-text-primary">Captured Evidence</h4>
          {evidence.map((item) => (
            <div key={item.id} className="glass-card p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {item.type === 'photo' && <Camera className="w-4 h-4 text-accent" />}
                  {item.type === 'audio' && <Mic className="w-4 h-4 text-accent" />}
                  {item.type === 'note' && <Clock className="w-4 h-4 text-accent" />}
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <MapPin className="w-4 h-4 text-text-secondary" />
              </div>
              {item.type === 'note' && (
                <p className="text-sm text-text-secondary mt-2">{item.data}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
