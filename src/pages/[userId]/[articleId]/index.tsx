import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'

import { useGetArticleQuery } from '@/generated/graphql'

import styles from './index.module.css'
import { Article } from '@/components/article'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { loading, error, data } = useGetArticleQuery({
    variables: {
      id: articleId as string,
    },
  })

  if (loading) {
    return <p>...Loding</p>
  }
  if (error) {
    return <p>{error.toString()}</p>
  }
  if (!data || !data.articles_by_pk) {
    return <Error statusCode={404} />
  }
  const { user, subject, content } = data.articles_by_pk
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.subject}>{subject}</h1>
      <div className={styles.userContainer}>
        <div>
          <img className={styles.userIcon} src="/profile.png" />
        </div>
        <div>
          <div className={styles.userId}>{user.displayId}</div>
          <div className={styles.username}>{user.displayName}</div>
        </div>
      </div>
      <div className={styles.content}>
        <Article content={content} />
      </div>
    </div>
  )
}

export default ArticlePage