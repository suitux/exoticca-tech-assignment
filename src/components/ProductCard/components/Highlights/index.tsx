import { Highlight } from '@/model'
import Text from '@/components/Text'
import LocationCheckIcon from '@/svg/LocationCheckIcon'
import styles from './highlights.module.scss'

const HIGHLIGHT_MAX = 4

interface HighlightsProps {
  highlights: Highlight[]
}

const Highlights = ({ highlights }: HighlightsProps) => {
  const hasMoreHighLights = highlights.length > HIGHLIGHT_MAX

  return (
    <ol>
      {highlights.slice(0, HIGHLIGHT_MAX).map(highLight => {
        return (
          <li key={highLight.title} className={styles.highlight}>
            <LocationCheckIcon />
            <Text size={'sm'}>{highLight.title}</Text>
          </li>
        )
      })}
      {hasMoreHighLights && (
        <li className={styles.more}>
          <Text size={'sm'} color={'grey'}>
            + {highlights.length - HIGHLIGHT_MAX} more
          </Text>
        </li>
      )}
    </ol>
  )
}

export default Highlights
