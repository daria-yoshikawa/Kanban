import axios from 'axios'
import { defineConfig, presetWebFonts, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        width: '2em',
        height: '2em'
      }
    }),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ],
  theme: {
    colors: {
      primary: '#0047FF',
      secondary: 'rgba(0, 71, 255, 0.08)',
      green: '#2DCD5B',
      greenLight: 'rgba(45, 205, 91, 0.08)',
      red: '#FF4F64',
      redLight: 'rgba(246, 41, 52, 0.08)',
      text: {
        primary: '#12133F',
        secondary: '#5A5B80',
        tertiary: '#807C8D'
      }
    }
  }
})
