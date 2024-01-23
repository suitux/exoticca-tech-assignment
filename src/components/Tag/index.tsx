import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './tag.module.scss'
import Text from '@/components/Text'

type TagStyleType = 'primary' | 'secondary'

interface TagProps {
  title: string
  icon?: ReactNode
  type?: TagStyleType
}

const Tag = ({ title, icon, type = 'primary' }: TagProps) => {
  return (
    <div className={classNames(styles.tag, styles[type])}>
      {icon}
      <Text size={'sm'}>{title}</Text>
    </div>
  )
}

export default Tag
