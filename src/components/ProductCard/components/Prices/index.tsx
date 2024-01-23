import styles from './prices.module.scss'
import Tag from '@/components/Tag'
import Text from '@/components/Text'

interface PricesProps {
  price: string
  perNight: string
  from: string
  discount: number
}

const Prices = ({ price, perNight, from, discount }: PricesProps) => {
  return (
    <div className={styles.root}>
      <Tag title={`-${discount}%`} type={'gold'} className={styles.tag} />

      <div className={styles.prices}>
        <Text size={'xs'} color={'grey'}>
          From{' '}
          <Text size={'xs'} color={'grey'} lineThrough>
            {from}
          </Text>
        </Text>

        <Text size={'xl'} bold>
          {price}
        </Text>
        <Text size={'xs'} color={'grey'}>
          Per night: {perNight}
        </Text>
      </div>
    </div>
  )
}

export default Prices
