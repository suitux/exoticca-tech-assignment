import { ReactNode } from 'react'
import { AmenityType } from '@/model'
import Text from '@/components/Text'
import LocationCheckIcon from '@/svg/LocationCheckIcon'
import styles from './amenities.module.scss'
import BedIcon from '@/svg/BedIcon'
import PlaneIcon from '@/svg/PlaneIcon'
import BusIcon from '@/svg/BusIcon'
import CoffeeIcon from '@/svg/CoffeeIcon'
import ActivitiesIcon from '@/svg/ActivitiesIcon'

const AmenityIconByType: { [key in AmenityType]: ReactNode } = {
  ACCOMMODATION: <BedIcon />,
  ALL_FLIGHTS: <PlaneIcon />,
  ALL_TRANSFERS: <BusIcon />,
  SOME_MEALS: <CoffeeIcon />,
  ACTIVITIES: <ActivitiesIcon />
}

interface AmenitiesProps {
  amenities: AmenityType[]
}

const Amenities = ({ amenities }: AmenitiesProps) => {
  return (
    <ol className={styles.ol}>
      {amenities.map(amenity => {
        return (
          <li key={amenity} className={styles.amenity}>
            {AmenityIconByType[amenity]}
            <Text size={'sm'}>{amenity.toLowerCase()}</Text>
          </li>
        )
      })}
    </ol>
  )
}

export default Amenities
