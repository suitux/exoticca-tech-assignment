export interface BreadcrumbItem {
  url: string
  title: string
  class: string
}

export interface HeroImages {
  image: string
  desktop: string
  tablet: string
  mobile: string
}

export interface Hero {
  shortDescription: string
  images: HeroImages
  priceHeader: string
  percentageHeader: string
  isDiscount: boolean
}

export interface POICard {
  id: string
  name: string
  url: string
  image: string
}

export interface POIS {
  title: string
  cards: POICard[]
}

export type AmenityType = 'ACCOMMODATION' | 'ALL_FLIGHTS' | 'ALL_TRANSFERS' | 'SOME_MEALS' | 'ACTIVITIES'

export interface UsefulInformationItem {
  class: string
  name: string
  text: string
  position: number
  isFullWidth: boolean
}

export interface UsefulInformation {
  country: string
  items: UsefulInformationItem[]
}

export interface NearbyCard {
  id: string
  name: string
  campaignsAvailable: number
  image: string
  url: string
  fcpFixedPrice: {
    hasFcpFixedPrice: boolean
    price: number
  }
}

export interface Nearby {
  title: string
  icon: string
  cards: NearbyCard[]
}

export interface SimilarTourImage {
  url: string
  text: string
}

export interface Highlight {
  title: string
  url: string
}

export interface MapImageUrls {
  desktop: string
  tablet: string
  mobile: string
  horizontal: string
  horizontalSmall: string
}

export interface MapInfo {
  showImage: boolean
  image: MapImageUrls
}

export interface TagHeadline {
  alias: string
  name: string
  category: string
  uri: string
  isWinner: boolean
  uuid: string
}

export interface FcpFixedPrice {
  hasFcpFixedPrice: boolean
  price: number
}

export interface SimilarTour {
  title: string
  days: string
  fromPrice: string
  fromPriceBeautify: string
  image: SimilarTourImage[]
  url: string
  destination: string
  isPromotion: boolean
  id: string
  hasExtraNights: boolean
  highlights: Highlight[]
  includes: AmenityType
  map: MapInfo
  isNew: boolean
  isPromoted: boolean
  isFlashSales: boolean
  tagHeadline: TagHeadline[]
  fcpFixedPrice: FcpFixedPrice
  oldPrice: string
  pricingPercentage: string
  discountSaved: string
}

export interface Metadata {
  title: string
  desc: string
  keywords: string | null
  OGTitle: string
  OGDescription: string
  OGType: string
  OGSiteName: string
  OGImage: string
  OGUrl: string
  canonicalLink: string
  OGUri: string
  alternateLinks: AlternateLink[]
}

export interface AlternateLink {
  locale: string
  domain: string
}

interface ImageUrls {
  desktop: string
  tablet: string
  mobile: string
}

interface PriceDetail {
  fromPrice: number
  fromPriceBeautify: string
  discountSaved: number
  oldPriceBeautify: string
  pricingPercentage: number
  pricePerNight: string
  oldPrice: number
}

export interface Tag {
  alias: string
  name: string
  description: string
  categoryName: string
  uri: string
  tagId: string
}

interface CrafterDetail {
  crafterSentence: string
  crafterName: string
  crafterAvatar: string
}

export interface Tour {
  id: number
  title: string
  destination: string
  images: ImageUrls[]
  days: number
  url: string
  map: MapInfo
  highlights: Highlight[]
  includes: AmenityType[]
  priceDetail: PriceDetail
  tags: Tag[]
  crafterDetail: CrafterDetail | null
  hasPrivateTour: boolean
  hasSoloTraveller: boolean
  headLine: string
  tagHeadline: TagHeadline[]
  isLandOnly: boolean
  isValid: boolean
  extraNights: number
  isNew: boolean
  isPromoted: boolean
  isFlashSales: boolean
  fcpFixedPrice: FcpFixedPrice
}

export interface DestinationDetail {
  featuredMultiMarket: Tour[]
  multiMarket: Tour[]
}
