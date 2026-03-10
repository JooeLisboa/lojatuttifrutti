# Loja Tutti Frutti • Landing Page Premium (Bio Link)

Landing page interativa (estilo Linktree) da **Loja Tutti Frutti**, com foco em conversão para WhatsApp, prova social e presença digital profissional.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Estrutura de pastas

```txt
public/
  logo-tutti-frutti.svg
  og-image-tutti-frutti.svg
src/
  components/
    layout/
      Footer.tsx
    sections/
      CTAGroup.tsx
      FinalCTASection.tsx
      HeroSection.tsx
      HighlightsSection.tsx
      InfoSection.tsx
      ReviewsSection.tsx
    ui/
      FloatingWhatsAppButton.tsx
      SectionHeading.tsx
  data/
    storeData.ts
  App.tsx
  main.tsx
  styles.css
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Personalização rápida
- **Logo**: substitua `public/logo-tutti-frutti.svg`.
- **Imagem de compartilhamento (OG)**: substitua `public/og-image-tutti-frutti.svg`.
- **Dados da loja**: edite `src/data/storeData.ts`.
