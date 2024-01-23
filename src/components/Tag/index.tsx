import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './tag.module.scss'
import Text, { TextSizeTypes } from '@/components/Text'

type TagStyleType = 'primary' | 'secondary' | 'gold'

interface TagProps {
  title: string
  icon?: ReactNode
  type?: TagStyleType
  className?: string
  fontSize?: TextSizeTypes
}

const Tag = ({ title, icon, type = 'primary', fontSize = 'sm', className }: TagProps) => {
  return (
    <div className={classNames(styles.tag, styles[type], className)}>
      {icon}
      <Text size={fontSize}>{title}</Text>
    </div>
  )
}

export default Tag
