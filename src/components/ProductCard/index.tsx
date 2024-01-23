import { Tour } from '@/model'
import Text from '@/components/Text'
import Amenities from '@/components/ProductCard/components/Ammenities'
import Highlights from '@/components/ProductCard/components/Highlights'
import styles from './product-card.module.scss'
import Tags from '@/components/ProductCard/components/Tags'
import Button from '@/components/Button'
import Prices from '@/components/ProductCard/components/Prices'
import Image from 'next/image'

interface ProductCardProps {
  tour: Tour
}

const ProductCard = ({ tour }: ProductCardProps) => {
  return (
    <article className={styles.root}>
      <div className={styles.image}>
        <Image
          src={tour.images[0].desktop}
          layout={'fill'}
          alt={'Tour image'}
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.titlePrices}>
            <Prices
              from={tour.priceDetail.oldPriceBeautify}
              price={tour.priceDetail.fromPriceBeautify}
              discount={tour.priceDetail.pricingPercentage}
              perNight={tour.priceDetail.pricePerNight}
            />
          </div>
          <div className={styles.title}>
            <Text size={'sm'}>
              {tour.destination} in {tour.days} days +
            </Text>

            <Text size={'lg'} block>
              {tour.title}
            </Text>
          </div>

          <div className={styles.highlightsAndAmenities}>
            <Highlights highlights={tour.highlights} />
            <div className={styles.amenities}>
              <Amenities amenities={tour.includes} />
            </div>
          </div>
          <div>
            <Tags tags={tour.tags} />
          </div>
        </div>

        <div className={styles.prices}>
          <div className={styles.values}>
            <Prices
              from={tour.priceDetail.oldPriceBeautify}
              price={tour.priceDetail.fromPriceBeautify}
              discount={tour.priceDetail.pricingPercentage}
              perNight={tour.priceDetail.pricePerNight}
            />
          </div>
          <Button className={styles.seeTrip}>See Trip</Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
