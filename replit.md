# Overview

A modern, responsive landing page built with React and TypeScript, showcasing three products in an elegant interface. The project demonstrates a SaaS hub concept with a clean design system based on Tailwind CSS and shadcn/ui components. The landing page features a hero section, product showcase with interactive cards, and a comprehensive footer.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a component-based React architecture using TypeScript for type safety. The project structure separates concerns with dedicated directories for components, UI elements, and styles. The main application entry point is through `App.tsx`, which orchestrates the hero section, products showcase, and footer components.

## Styling System
Built on Tailwind CSS v4 with a comprehensive design system featuring custom CSS variables for theming. The styling approach uses utility-first classes with a dark/light theme system supported by CSS custom properties. Global styles are managed through `index.css` and `globals.css` with consistent color tokens and spacing variables.

## Component Design
Leverages shadcn/ui component library for consistent, accessible UI elements including buttons, cards, forms, and navigation components. The component architecture emphasizes reusability with props-based customization and TypeScript interfaces for type safety. Custom components like `ProductCard`, `Hero`, and `Footer` extend the base design system.

## Build System
Uses Vite as the build tool with React SWC plugin for fast compilation and hot module replacement. The configuration includes path aliases for clean imports and extensive package aliasing for dependency management. TypeScript compilation targets ES2020 with strict type checking enabled.

## Theme Management
Implements a sophisticated theming system with CSS custom properties supporting both light and dark modes. The theme system includes semantic color tokens, consistent spacing variables, and responsive design patterns. Theme switching is handled through the `next-themes` package for persistent user preferences.

# External Dependencies

## Core Framework
- **React 18.3.1**: Main UI framework with hooks and modern patterns
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool with React SWC plugin for compilation

## Styling & Design
- **Tailwind CSS v4**: Utility-first CSS framework with custom configuration
- **@radix-ui components**: Comprehensive set of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library extending Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional className utilities

## Enhanced UI Components
- **cmdk**: Command palette and search interface components
- **embla-carousel-react**: Carousel and slider functionality
- **react-hook-form**: Form state management and validation
- **react-day-picker**: Date picker component
- **recharts**: Chart and data visualization library
- **sonner**: Toast notification system
- **next-themes**: Theme switching and persistence
- **vaul**: Drawer component for mobile interfaces
- **input-otp**: OTP input field component
- **react-resizable-panels**: Resizable panel layouts

## Development Tools
- **AutoPrefixer**: CSS vendor prefix automation
- **serve**: Static file serving for production builds