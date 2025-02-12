import { Space_Grotesk, Inter } from 'next/font/google'

export const SpaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
    weight: ['400', '500', '700']
})

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
    adjustFontFallback: false
})