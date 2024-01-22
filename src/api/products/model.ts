interface BreadcrumbItem {
  url: string
  title: string
  class: string
}

interface HeroImages {
  image: string
  desktop: string
  tablet: string
  mobile: string
}

interface Hero {
  shortDescription: string
  images: HeroImages
  priceHeader: string
  percentageHeader: string
  isDiscount: boolean
}

interface POICard {
  id: string
  name: string
  url: string
  image: string
}

interface POIS {
  title: string
  cards: POICard[]
}

interface UsefulInformationItem {
  class: string
  name: string
  text: string
  position: number
  isFullWidth: boolean
}

interface UsefulInformation {
  country: string
  items: UsefulInformationItem[]
}

interface NearbyCard {
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

interface Nearby {
  title: string
  icon: string
  cards: NearbyCard[]
}

interface SimilarTourImage {
  url: string
  text: string
}

interface Highlight {
  title: string
  url: string
}

interface MapImageUrls {
  desktop: string
  tablet: string
  mobile: string
  horizontal: string
  horizontalSmall: string
}

interface MapInfo {
  showImage: boolean
  image: MapImageUrls
}

interface TagHeadline {
  alias: string
  name: string
  category: string
  uri: string
  isWinner: boolean
  uuid: string
}

interface FcpFixedPrice {
  hasFcpFixedPrice: boolean
  price: number
}

interface SimilarTour {
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

interface Metadata {
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

interface AlternateLink {
  locale: string
  domain: string
}

interface PostResponse {
  breadcrumb: BreadcrumbItem[]
  hero: Hero
  name: string
  flag: string
  type: string
  id: number
  slug: string
  descriptionIcon: string
  mapUrl: string
  longDescription: string
  POIS: POIS
  usefulInformation: UsefulInformation
  nearby: Nearby
  similar: SimilarTour[]
  metadata: Metadata
  emptyUsefulInformation: boolean
  fcpFixedPrice: FcpFixedPrice
}
