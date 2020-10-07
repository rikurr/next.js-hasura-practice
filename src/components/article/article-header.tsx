import React from 'react'
import { Users } from '@/generated/graphql'
import { formatDate } from '@/utils/data'
import { UserIcon } from '../user-icon'

import styles from './index.module.css'
type ArticleHeaderProps = {
  subject: string
  user: Pick<Users, 'displayId' | 'displayName'>
  publishedAt: string
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  subject,
  user,
  publishedAt,
}) => {
  const { datetime, isNew } = formatDate(new Date(publishedAt), new Date())
  return (
    <>
      <h1 className={styles.subject}>{subject}</h1>
      <div className={styles.userContainer}>
        <div>
          <div>
            <UserIcon src="/profile.png" />
          </div>
        </div>
        <div>
          <div>{user.displayName}</div>
          <span>
            <span className={styles.publishedAt}>
              {datetime}
              {isNew ? <span className={styles.isNew}>New</span> : ''}
              <span>&nbsp; 約4分で読めます</span>
            </span>
          </span>
        </div>
      </div>
    </>
  )
}
