---
version: alpha
name: "Figma Editor UI – Portfolio Design File"
description: "This is the Figma web editor UI, captured while viewing a Korean portfolio/resume design file. The interface itself is Figma's own design system: a near-monochrome (black/white) shell with a single blue (#0d99ff) brand accent, ultra-compact 11px Inter typography, 4–8px spatial rhythm, 5px and 13px border radii for buttons and floating panels respectively, and multi-layer drop shadows on island-style panel cards. The canvas background is a neutral grey (#e5e5e5), and the portfolio content visible on the canvas uses lavender/purple, yellow-green, and warm tones. but those belong to the embedded design file, not the Figma UI system."
colors:
  canvas-grey: "#e5e5e5"
  figma-blue: "#0d99ff"
  success-green: "#14ae5c"
  surface-subtle: "#f5f5f5"
  surface-white: "#ffffff"
  ink-black: "#000000"
  mid-grey: "#444444"
  border-light: "#e6e6e6"
typography:
  ui-label-default:
    fontFamily: "Inter"
    fontSize: "11px"
    fontWeight: "400"
    lineHeight: "16px"
  ui-label-medium:
    fontFamily: "Inter"
    fontSize: "11px"
    fontWeight: "450"
    lineHeight: "16px"
    letterSpacing: "0.05504px"
  ui-label-bold:
    fontFamily: "Inter"
    fontSize: "11px"
    fontWeight: "550"
    lineHeight: "16px"
    letterSpacing: "0.05504px"
  ui-body-small:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "400"
    lineHeight: "24px"
  ui-heading:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "550"
    lineHeight: "22px"
    letterSpacing: "-0.032px"
  canvas-serif:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: "400"
rounded:
  radius-button: "5px"
  radius-small: "3px"
  radius-panel: "13px"
  radius-pill: "50px"
  radius-medium: "6px"
spacing:
  spacing-1: "1px"
  spacing-2: "2px"
  spacing-4: "4px"
  spacing-8: "8px"
  spacing-12: "12px"
  spacing-24: "24px"
  spacing-32: "32px"
---

## Overview

This is the Figma web editor UI, captured while viewing a Korean portfolio/resume design file. The interface itself is Figma's own design system: a near-monochrome (black/white) shell with a single blue (#0d99ff) brand accent, ultra-compact 11px Inter typography, 4–8px spatial rhythm, 5px and 13px border radii for buttons and floating panels respectively, and multi-layer drop shadows on island-style panel cards. The canvas background is a neutral grey (#e5e5e5), and the portfolio content visible on the canvas uses lavender/purple, yellow-green, and warm tones. but those belong to the embedded design file, not the Figma UI system.

**Signature traits:**
- Dual typeface system: Pairs Inter and Times New Roman across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 50px.
- Layered elevation: Depth comes from 3 validated shadow tokens.

## Colors

The palette uses 8 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-text** maps to `ink-black`: Role "text" is grounded by usage context "Primary text, icon fills, button borders across the entire editor UI".
- **surface-background** maps to `surface-white`: Role "background" is grounded by usage context "Panel backgrounds, card surfaces, toolbar backgrounds".
- **action-background** maps to `figma-blue`: Role "background" is grounded by usage context "Brand accent used on the logged-out banner/hero panel, selection highlights, and CTA surfaces".
- **border-border** maps to `border-light`: Role "border" is grounded by usage context "Subtle dividers and code-well borders".

### Text Scale
- **Ink Black** (#000000): Primary text, icon fills, button borders across the entire editor UI. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.3}
- **Mid Grey** (#444444): Secondary text and muted label contexts. Role: text. {authored: rgb(68, 68, 68), space: rgb}

### Interactive
- **Border Light** (#e6e6e6): Subtle dividers and code-well borders. Role: border. {authored: rgb(230, 230, 230), space: rgb}

### Surface & Shadows
- **Canvas Grey** (#e5e5e5): Editor canvas background color behind the design frame. Role: background. {authored: rgb(229, 229, 229), space: rgb}
- **Figma Blue** (#0d99ff): Brand accent used on the logged-out banner/hero panel, selection highlights, and CTA surfaces. Role: background. {authored: rgb(13, 153, 255), space: rgb}
- **Success Green** (#14ae5c): Success states and status indicators. Role: background. {authored: rgb(20, 174, 92), space: rgb}
- **Surface Subtle** (#f5f5f5): Hover states and subtle surface fills. Role: background. {authored: rgb(245, 245, 245), space: rgb}
- **Surface White** (#ffffff): Panel backgrounds, card surfaces, toolbar backgrounds. Role: background. {authored: rgb(255, 255, 255), space: rgb, alpha: 0}

## Typography

Typography uses Inter, Times New Roman across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Inter and Times New Roman for visual contrast. Weight range spans regular, medium, semi-bold. Sizes range from 11px to 16px.

### Font Roles
- **Headline Font**: Inter
- **Body Font**: Inter

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Primary UI label text throughout the editor — panel labels, property values, menu items | Inter | 11px | 400 | 16px | normal | Inter, sans-serif; features: "calt", "liga" | Extracted token |
| Slightly emphasized UI labels, toolbar items, and secondary controls | Inter | 11px | 450 | 16px | 0.05504px | Inter, sans-serif; features: "calt", "liga" | Extracted token |
| Strong emphasis labels, section headers within panels | Inter | 11px | 550 | 16px | 0.05504px | Inter, sans-serif; features: "calt", "liga" | Extracted token |
| Slightly larger body text for descriptions and tooltips | Inter | 12px | 400 | 24px | normal | Inter, sans-serif; features: "calt", "liga" | Extracted token |
| Panel section headings and prominent UI labels | Inter | 13px | 550 | 22px | -0.032px | Inter, sans-serif; features: "calt", "liga" | Extracted token |
| Serif text rendered inside the design canvas (belongs to the embedded portfolio file, not Figma UI) | Times New Roman | 16px | 400 | normal | normal | Times New Roman | Extracted token |

## Layout

Responsive system uses 3 breakpoint tier(s): mobile, tablet, desktop.

This system uses a 4px base grid with scale values 1, 2, 4, 8, 12, 24, 32.

### Responsive Strategy
- **mobile (<= 1440px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 900px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| spacing-1 | 1px | 1 | Extracted spacing token |
| spacing-2 | 2px | 2 | Extracted spacing token |
| spacing-4 | 4px | 4 | Mapped to --xmsbm4d |
| spacing-8 | 8px | 8 | Extracted spacing token |
| spacing-12 | 12px | 12 | Extracted spacing token |
| spacing-24 | 24px | 24 | Mapped to --x30nt0v |
| spacing-32 | 32px | 32 | Mapped to --xcywrs |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| shadow-panel | 2 | 0px 0px 1px 0px rgba(0, 0, 0, 0.3) |
| shadow-elevated | 3 | 0px 0px 1px 0px rgba(0, 0, 0, 0.18) |
| shadow-toolbar-button | 4 | 0px 1px 3px 0px rgba(0, 0, 0, 0.4) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-style | solid |
| Light | outline-color | rgba(0, 0, 0, 0.898) ; rgb(0, 0, 0) ; rgb(255, 255, 255) |
| Light | outline-width | 3px ; 1px ; 2px |
| Light | outline-offset | 0px ; -1px |
| Light | transform | matrix(0, -1, 1, 0, 0, 0) ; matrix(1, 0, 0, 1, -15, -20) ; matrix(1, 0, 0, 1, -2, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-small | 3px | 3 | Subtle corner |
| radius-button | 5px | 5 | Subtle corner |
| radius-medium | 6px | 6 | Subtle corner |
| radius-panel | 13px | 13 | Card corner |
| radius-pill | 50px | 50 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-button | 5px | px |
| radius-small | 3px | px |
| radius-panel | 13px | px |
| radius-pill | 50px | px |
| radius-medium | 6px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry, Layered elevation without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 645px | (max-width: 645px) |
| Breakpoint 2 | <= 832px | (max-width: 832px) |
| Breakpoint 3 | <= 849px | (max-width: 849px) |
| Breakpoint 4 | <= 1000px | (max-width: 1000px) |
| Breakpoint 5 | <= 1023px | (max-width: 1023px) |
| Breakpoint 6 | <= 1440px | (max-width: 1440px) |
| Tablet | >= 900px | (min-width: 900px) |
| Breakpoint 8 | Unknown | (hover: hover) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
