import {
  BreadcrumbItem,
  DestinationDetail,
  FcpFixedPrice,
  Hero,
  Nearby,
  POIS,
  SimilarTour,
  UsefulInformation
} from '@/model'
import { Metadata } from 'next'

export interface PostResponse {
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
  destinations: DestinationDetail
}
