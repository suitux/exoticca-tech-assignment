import { Tour } from '@/model'
import Image from 'next/image'
import Text from '@/components/Text'
import Amenities from '@/components/ProductCard/components/Ammenities/Amenities'
import Highlights from '@/components/ProductCard/components/Highlights/Highlights'
import styles from './product-card.module.scss'
import Tags from '@/components/ProductCard/components/Tags/Tags'
import Button from '@/components/Button'
import Prices from '@/components/ProductCard/components/Prices'

interface ProductCardProps {
  tour: Tour
}

const ProductCard = ({ tour }: ProductCardProps) => {
  console.log(tour)
  return (
    <article className={styles.root}>
      <Image src={tour.images[0].desktop} width={541} height={272} alt={'Tour image'} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div>
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
          <Prices
            from={tour.priceDetail.oldPriceBeautify}
            price={tour.priceDetail.fromPriceBeautify}
            discount={tour.priceDetail.pricingPercentage}
            perNight={tour.priceDetail.pricePerNight}
          />
          <Button className={styles.seeTrip}>See Trip</Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
