export declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }

  interface ILocale {
    locale: string
  }

  interface IMedia {
    id?: string | number
    alternativeText?: string
    caption?: string
    mime?: string
    url?: string
    width?: number
    height?: number
  }
  interface ILink {
    alt: string
    url: string
    id: string | number
    text: string
    title: string
    newTab: boolean
  }
  interface IButton {
    type: string
    theme: string
    text: string
    newTab: boolean
  }

  type SendGpxData = {
    gPXDaten: unknown
    fahrergewicht: number
    bikegewicht: number
    fahrerleistung: number
    bikeleistung: number
  }

  type ResponseGpxData = {
    Fahrtdauer: Date
    Energiebedarf: number
    BilddatenFahrtdauer: []
    BilddatenEnergiebedarf: []
  }
}
