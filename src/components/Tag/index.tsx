import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './tag.module.scss'
import Text from '@/components/Text'

type TagStyleType = 'primary' | 'secondary' | 'gold'

interface TagProps {
  title: string
  icon?: ReactNode
  type?: TagStyleType
  className?: string
}

const Tag = ({ title, icon, type = 'primary', className }: TagProps) => {
  return (
    <div className={classNames(styles.tag, styles[type], className)}>
      {icon}
      <Text size={'sm'}>{title}</Text>
    </div>
  )
}

export default Tag
