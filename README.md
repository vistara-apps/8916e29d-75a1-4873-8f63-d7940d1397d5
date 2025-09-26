# Guardian Rights Card

Your pocket legal defense and contract enforcer - a Base Mini App that empowers individuals with jurisdiction-specific legal rights, emergency lawyer connect, and smart contract capabilities.

## Features

### 🛡️ Core Features
- **Jurisdiction-Specific Rights Database**: Location-aware legal rights and protocols
- **Emergency Legal Connect**: Immediate contact with pre-vetted lawyers
- **Smart Contract Templates**: Customizable legal agreements with blockchain notarization
- **Evidence Capture**: Secure audio, video, and note recording
- **NFC/QR Triggered Actions**: Physical smart card integration

### 🎨 Design System
- **Artistic Gallery Theme**: Charcoal background with vibrant pink accents
- **Multi-Theme Support**: Celo, Solana, Base, and Coinbase themes
- **Organic Flowing Borders**: Modern art gallery aesthetic
- **Mobile-First Design**: Optimized for mobile interactions

### 💰 Subscription Tiers
- **Free**: Basic rights info, emergency contact
- **Pro ($5/mo)**: Smart contract templates, evidence capture
- **Premium ($15/mo)**: Advanced features, blockchain notarization, priority support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Components**: Custom UI components with organic styling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── AppShell.tsx    # Main app layout
│   ├── RightsCard.tsx  # Legal rights display
│   ├── EmergencyButton.tsx # Emergency contact
│   ├── ContractBuilder.tsx # Smart contract creation
│   └── EvidenceCapture.tsx # Evidence recording
├── theme-preview/      # Theme gallery page
└── page.tsx           # Main dashboard

lib/
├── types.ts           # TypeScript interfaces
└── constants.ts       # App constants and sample data
```

## Key Components

### Rights Database
Displays jurisdiction-specific legal rights with detailed explanations and keywords for easy searching.

### Emergency Connect
One-tap access to emergency legal contacts including ACLU, National Lawyers Guild, and local legal aid.

### Smart Contracts
Template-based contract creation with blockchain notarization capabilities for legal agreements.

### Evidence Capture
Secure recording of photos, audio, and notes with timestamp and location data for legal documentation.

## Themes

The app supports multiple blockchain-themed designs:
- **Gallery** (Default): Artistic charcoal with vibrant pink
- **Celo**: Black with yellow accents
- **Solana**: Dark purple with magenta
- **Base**: Dark blue with Base blue
- **Coinbase**: Navy with Coinbase blue

## License

MIT License - see LICENSE file for details.
