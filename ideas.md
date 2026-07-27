# Khujirt Spa Resort - Design Philosophy

## Chosen Design Approach: **Healing Sanctuary Minimalism**

### Design Movement
**Scandinavian Wellness + Medical Authority**

A fusion of Scandinavian minimalism (clean lines, ample whitespace, natural materials) with medical/clinical trust (precision typography, high contrast, organized hierarchy). The design communicates both heritage (1939 establishment) and modernity (contemporary healing practices).

### Core Principles

1. **Medical Trust Through Clarity**: High contrast, organized information hierarchy, and precise typography build confidence in the resort's clinical expertise.
2. **Nature-Integrated Luxury**: Deep greens and earth tones evoke the Orkhon Valley landscape while maintaining premium positioning.
3. **Functional Elegance**: Every element serves a purpose—no decorative clutter. Whitespace is generous and intentional.
4. **Bilingual Accessibility**: Both Mongolian and English are equally prominent and readable, never secondary.

### Color Philosophy

- **Deep Pine Green (#1E4A38)**: Primary brand color representing mountain heritage, healing, and stability. Used for primary CTAs, headers, and trust-building elements.
- **Healing Mineral Teal (#2E8B57)**: Secondary accent for interactive elements, highlights, and health-related CTAs. Evokes mineral-rich water.
- **Warm Earthy Beige (#F5F2EB)**: Soft background for card sections, creating warmth and approachability without clinical coldness.
- **Clean White (#FFFFFF)**: Primary background for medical authority and clarity.
- **Charcoal Gray (#2D3436)**: Text and subtle accents for high readability.

### Layout Paradigm

- **Asymmetric Hero**: Hero section uses a split layout—image on one side, floating search bar on the other—avoiding centered monotony.
- **Card-Based Treatments**: 4-column responsive grid with subtle elevation and hover lift effects.
- **Floating Action Bar**: Search/booking bar floats over hero with glassmorphism effect (semi-transparent backdrop blur).
- **Vertical Rhythm**: Consistent spacing (8px, 16px, 24px, 32px) creates predictable, organized flow.

### Signature Elements

1. **Mineral Water Drop Icon**: Subtle, elegant icon paired with logo text—represents healing water and mineral therapy.
2. **Soft Card Elevation**: Cards use subtle shadows (0 4px 12px rgba) and lift on hover, creating depth without heaviness.
3. **Green Accent Underlines**: Key headings and CTAs feature thin teal underlines, reinforcing brand identity and guiding visual flow.

### Interaction Philosophy

- **Smooth Transitions**: All hover states use 200-250ms ease-out transitions for responsive, premium feel.
- **Floating Elements**: Search bar and booking modal float with subtle entrance animations (fade + scale from 0.95).
- **Toggle Feedback**: Insurance discount toggle shows immediate visual feedback with green highlight and price update animation.
- **Admin Mode Visual Feedback**: Editable sections show yellow/blue outlines with pencil icons and toast notification.

### Animation Guidelines

- **Button Press**: Scale down to 0.97 on active state with 160ms ease-out for tactile feedback.
- **Card Hover**: Lift effect using `transform: translateY(-4px)` with 200ms ease-out.
- **Modal Entrance**: Fade in with scale from 0.95 to 1 over 300ms, centered origin.
- **Toggle Switch**: Smooth color transition (200ms) when toggled, with price update animation (300ms slide-in).
- **Entrance Stagger**: Treatment cards and room cards stagger in by 50-80ms per item on page load.

### Typography System

- **Display Font**: Plus Jakarta Sans Bold (700) for headings—modern, confident, slightly geometric.
- **Body Font**: Inter Regular (400) for body text—clean, highly readable, medical-grade clarity.
- **Hierarchy**:
  - H1: Plus Jakarta Sans 700, 48px, line-height 1.2 (hero heading)
  - H2: Plus Jakarta Sans 700, 32px, line-height 1.3 (section titles)
  - H3: Plus Jakarta Sans 600, 24px, line-height 1.4 (card titles)
  - Body: Inter 400, 16px, line-height 1.6 (readable, accessible)
  - Small: Inter 400, 14px, line-height 1.5 (secondary info)

### Brand Essence

**One-line positioning**: Mongolia's premier mineral healing sanctuary—where 85+ years of tradition meets contemporary wellness science.

**Personality adjectives**: Trustworthy, Serene, Authoritative

### Brand Voice

- **Headlines**: Direct, benefit-focused, never generic. Example: "Mineral Mud Therapy: Clinically Proven Relief for Joint Pain" (not "Welcome to Our Treatments")
- **CTAs**: Action-oriented, clear intent. Example: "Calculate Your 7-Day Healing Package" (not "Get Started Today")
- **Microcopy**: Professional yet warm. Example: "Shuttle bus runs Mon/Wed/Fri at 7:00 AM from Ulaanbaatar" (specific, helpful)

### Wordmark & Logo

- **Logo Concept**: Stylized mineral water drop (teardrop shape) with subtle internal wave pattern, positioned left of text "ХУЖИРТ Рашаан Сувилал"
- **Logo Style**: Bold, geometric, recognizable at small sizes (favicon)
- **Color**: Deep pine green (#1E4A38) as primary; teal (#2E8B57) as secondary for hover states

### Signature Brand Color

**Deep Pine Green (#1E4A38)** — Unmistakably Khujirt. Used for primary buttons, headers, and trust-building elements. Instantly recognizable and connected to mountain heritage.

---

## Style Decisions (Applied)

- **Glassmorphism for Search Bar**: Semi-transparent white background (rgba(255, 255, 255, 0.95)) with backdrop blur effect creates floating, modern feel while maintaining readability.
- **Card Elevation System**: Subtle shadows (0 2px 8px rgba(0,0,0,0.08)) at rest, increased on hover (0 8px 24px rgba(0,0,0,0.12)) for depth perception.
- **Bilingual Parity**: Mongolian and English text sizes are identical; no language is secondary. Both use same font weights and hierarchy.
- **Insurance Discount Highlight**: Green text (#2E8B57) with subtle background highlight when discount is applied, creating immediate visual feedback.
