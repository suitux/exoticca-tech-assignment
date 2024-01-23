import { ReactNode } from 'react'
import PersonIcon from '@/svg/PersonIcon'
import { Tag as TagModel } from '@/model'
import Tag from '@/components/Tag'
import styles from './tags.module.scss'

type TagTypes = 'Solo'

const TagPrimaries = ['Solo']

const TagIconByType: { [key in TagTypes]: ReactNode } = {
  Solo: <PersonIcon />
}

interface AmenitiesProps {
  tags: TagModel[]
}

const Tags = ({ tags }: AmenitiesProps) => {
  return (
    <div className={styles.root}>
      <Tag title={'GROUP TOURS'} fontSize={'xs'} />

      {tags.map(tag => {
        return (
          <Tag
            key={tag.tagId}
            title={tag.name}
            icon={TagIconByType[tag.alias as TagTypes]}
            type={TagPrimaries.includes(tag.alias) ? 'primary' : 'secondary'}
            fontSize={'xs'}
          />
        )
      })}
    </div>
  )
}

export default Tags
