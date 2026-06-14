---
name: Heritage Sophistication
colors:
  surface: '#fff8f4'
  surface-dim: '#e9d7c5'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e4'
  surface-container: '#fdebd8'
  surface-container-high: '#f7e5d2'
  surface-container-highest: '#f1e0cd'
  on-surface: '#231a0f'
  on-surface-variant: '#4e453e'
  inverse-surface: '#392f22'
  inverse-on-surface: '#ffeedc'
  outline: '#80756d'
  outline-variant: '#d2c4bb'
  surface-tint: '#705a49'
  primary: '#322214'
  on-primary: '#ffffff'
  primary-container: '#4a3728'
  on-primary-container: '#bba08c'
  inverse-primary: '#dec1ac'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#252623'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b3b38'
  on-tertiary-container: '#a6a5a1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddc7'
  primary-fixed-dim: '#dec1ac'
  on-primary-fixed: '#28180b'
  on-primary-fixed-variant: '#574333'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fff8f4'
  on-background: '#231a0f'
  surface-variant: '#f1e0cd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system for this hospitality project is rooted in the concepts of "Timeless Sanctuary" and "Quiet Luxury." It targets a high-end demographic seeking both the rugged majesty of the Himalayas and the refined comfort of a boutique residence. 

The visual style blends **Modern Minimalism** with **Tactile Elegance**. It prioritizes generous whitespace (breathing room) to evoke a sense of calm, while using high-quality editorial photography as a primary structural element. The interface should feel as intentional and curated as a physical concierge service—unobtrusive yet deeply supportive.

## Colors
The palette is inspired by natural earth minerals and artisanal craftsmanship. 

- **Primary (Deep Earth Brown):** Used for primary text, heavy icons, and grounding structural elements. It conveys stability and heritage.
- **Secondary (Subtle Gold):** Reserved for call-to-action buttons, active states, and premium highlights. It should be used sparingly to maintain its "accent" status.
- **Tertiary (Warm Cream):** The primary background color. Avoid pure white (#FFFFFF) to prevent digital eye strain and maintain a welcoming, paper-like warmth.
- **Neutral (Taupe/Stone):** Used for secondary text, borders, and disabled states. This color bridges the gap between the dark primary and the light background.

## Typography
The typographic scale emphasizes hierarchy through contrast between serif and sans-serif.

- **Headlines:** Use Playfair Display for all headings. The high-contrast strokes of the serif font provide an editorial, prestigious feel.
- **Body & UI:** Use Inter for readability. It remains legible at small sizes and maintains a systematic, clean look that offsets the ornate nature of the serif headlines.
- **Letter Spacing:** Increase letter spacing for labels and all-caps text to enhance the feeling of "luxury" and "space."

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain precise control over line lengths and image alignment. 

- **Grid:** Use a 12-column grid for desktop.
- **Rhythm:** Spacing follows an 8px base unit. Large section gaps (120px+) are encouraged to separate different residential offerings or narratives.
- **Responsive:** On mobile, margins shrink to 20px, and the 12-column grid collapses into a single-column flow. All interactive elements must maintain a minimum 44px hit target despite the minimalist aesthetic.

## Elevation & Depth
Elevation in this design system is subtle, avoiding heavy drop shadows. 

- **Ambient Shadows:** Use soft, highly diffused shadows (e.g., 20px-40px blur) with a low opacity (5-10%) brown-tinted shadow rather than pure black. This creates the illusion of objects resting softly on a surface.
- **Tonal Layers:** Use slight variations of the tertiary cream color to define different surface levels. For example, a "Card" may be pure white (#FFFFFF) resting on the Tertiary Cream (#F9F7F2) background.
- **Glassmorphism:** Use a subtle backdrop blur (10px) on navigation bars and the booking widget to maintain a connection with the high-resolution imagery behind them.

## Shapes
The shape language is "Softened Geometric." While the grid is rigid, the elements have a slight radius to appear more welcoming and organic.

- **Corners:** Use a consistent 4px (Soft) radius for primary UI elements like buttons and input fields.
- **Large Components:** For room cards or large image containers, a 8px (rounded-lg) radius is preferred to soften the visual impact of high-contrast photos.

## Components

- **Booking Widget:** A horizontal, floating bar that pins to the top or bottom of the viewport. It uses a glassmorphic background with `Secondary Gold` for the "Check Availability" button. Input fields should have minimal borders—only a bottom stroke is preferred.
- **Room Cards:** Large, vertically-oriented cards. The image occupies the top 70%, with a subtle gradient overlay at the bottom for white text legibility. Details like "Square Footage" and "Capacity" use `label-sm` typography with minimalist line icons.
- **Buttons:** 
  - *Primary:* Solid `Secondary Gold` with `Primary Brown` text. No border.
  - *Secondary:* Transparent with a 1px `Primary Brown` border. 
- **Amenity Icons:** Use thin-stroke (1.5px) vector icons. Avoid fills; icons should be "outlined" to maintain a lightweight, sophisticated feel.
- **Input Fields:** Use the `Tertiary` color for the background with a 1px border in `Neutral`. Focus states should transition the border to `Secondary Gold`.
- **Date Picker:** A custom, minimalist calendar using `Playfair Display` for the month title and `Inter` for the dates. Selected ranges are highlighted with a soft gold wash.