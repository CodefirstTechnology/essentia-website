---
name: Essentia
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#424844'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727974'
  outline-variant: '#c2c8c3'
  surface-tint: '#4c6358'
  primary: '#051b12'
  on-primary: '#ffffff'
  primary-container: '#1a3026'
  on-primary-container: '#80988b'
  inverse-primary: '#b3ccbe'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a2800'
  on-tertiary-container: '#b18d48'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe9d9'
  primary-fixed-dim: '#b3ccbe'
  on-primary-fixed: '#092016'
  on-primary-fixed-variant: '#354c40'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap-lg: 120px
  section-gap-md: 80px
---

## Brand & Style
The design system is rooted in the intersection of organic serenity and architectural precision. It targets high-net-worth investors and families seeking a sanctuary that balances modern wellbeing with uncompromising luxury. 

The aesthetic identity blends **Apple-inspired Minimalism** with **Glassmorphism**, emphasizing high-end materiality. The emotional goal is to evoke a sense of "quiet luxury"—sophisticated, calm, and grounded. The UI prioritizes expansive whitespace, intentional layering, and a tactile quality that feels both digital and physical.

## Colors
This design system utilizes a palette inspired by natural elements and premium materials:

*   **Forest Green (#1A3026):** Our primary brand color, used for core branding, primary buttons, and deep structural elements. It conveys stability and growth.
*   **Gold (#C5A059):** Reserved for accents, interactive states, and highlights. It should be used sparingly to maintain a sophisticated rather than ostentatious feel.
*   **Ivory & Light Beige:** The background (#FAF9F6) and secondary surfaces (#F5F2ED) provide a warm, gallery-like foundation that is softer and more premium than pure white.
*   **Charcoal Black (#121212):** Used for typography to ensure maximum readability against the lighter background while maintaining a high-contrast, editorial look.

## Typography
The typographic hierarchy relies on the tension between the classic, high-contrast serif of **Playfair Display** and the geometric, modern clarity of **Montserrat**. 

Headlines should be treated as editorial elements with generous leading and tight tracking for larger sizes. Body text requires increased line height (1.6) to support the "airy" brand promise. Labels should always utilize Montserrat with slight letter spacing and uppercase styling to denote metadata and navigation items clearly.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, controlled composition, transitioning to a fluid model on mobile devices. 

*   **Desktop:** 12-column grid with a 1440px max-width. Use large 80px side margins to create the "airy" feel of a luxury brochure.
*   **Spacing Rhythm:** Use a strict 8px base unit. Section-to-section spacing is intentionally aggressive (120px+) to allow the eye to rest and emphasize property imagery.
*   **Mobile:** 4-column grid with 24px margins. Elements should stack vertically, maintaining the high-contrast serif headlines as the focal point.

## Elevation & Depth
Depth in the design system is achieved through **Glassmorphism** and soft, ambient shadows rather than harsh borders.

*   **Glass Layers:** Use a background blur (minimum 20px) with a 70% white fill for navigation bars and floating property cards. This creates a sense of light passing through the interface.
*   **Ambient Shadows:** Use highly diffused, low-opacity shadows (e.g., `0px 20px 40px rgba(26, 48, 38, 0.05)`). The shadow color should have a slight Forest Green tint to maintain harmony with the brand palette.
*   **Tonal Stacking:** Use the Light Beige surface for secondary containers that sit "on top" of the Ivory background, creating depth without needing shadows.

## Shapes
The shape language is defined by significant roundedness to evoke a sense of comfort and modern architectural curves.

*   **Primary Elements:** Buttons and small chips use a full **Pill-shaped (3)** radius.
*   **Containers:** Property cards, image galleries, and input fields use `rounded-2xl` (1.5rem) or `rounded-3xl` (2rem) to mimic modern furniture and architectural silhouettes.
*   **Media:** All property photography must have rounded corners to maintain the soft, organic aesthetic; sharp 90-degree corners are strictly prohibited.

## Components
*   **Buttons:** Primary buttons are Forest Green with Ivory text. Secondary buttons use a Gold outline with transparent backgrounds. Use a generous padding (16px 32px) to ensure a premium, touch-friendly feel.
*   **Cards:** Property cards should feature a full-bleed image at the top with a Glassmorphic overlay for the price or "New Launch" tag. Text content sits on an Ivory base.
*   **Inputs:** Minimalist bottom-border-only fields or softly rounded light-beige containers. Focus states should use a subtle Gold halo or bottom border.
*   **Lists:** Real estate feature lists (e.g., amenities) should use custom Gold-tinted organic icons rather than standard generic bullets.
*   **Special Component (The Sanctuary Toggle):** A high-design toggle switch that allows users to switch between "Investor View" (data-heavy) and "Experience View" (image-heavy), utilizing a smooth sliding animation and Glassmorphic styling.