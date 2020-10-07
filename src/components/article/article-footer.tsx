import { Users } from '@/generated/graphql'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from '../button'
import { UserIcon } from '../user-icon'
import styles from './index.module.css'
type Props = {
  user: Pick<Users, 'displayId' | 'displayName'>
}

export const ArticleFooter: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className={styles.aritcleFooterContainer}>
        <Button>Follow</Button>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faEllipsisH} className={styles.icon} />
        </div>
      </div>
      <div className={styles.articleFooter}>
        <UserIcon src="/profile.png" />
        <div>
          <p>{user.displayName}</p>
          <p className={styles.userDescription}>フロントエンドエンジニアです</p>
        </div>
      </div>
    </>
  )
}
