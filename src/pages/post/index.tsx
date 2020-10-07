import { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'
import { Editor } from '@/components/editor'
import { SiteHeader, SiteHeaderItem } from '@/components/site-header'
import { Button } from '@/components/button'

import { usePostArticleMutation } from '@/generated/graphql'
import { UserIcon } from '@/components/user-icon'

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [postDisabled, setPostDisabled] = useState(false)
  const [postArticle] = usePostArticleMutation()
  const router = useRouter()

  console.log(postArticle)

  const handleChangeSubject = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(ev.target.value)
    },
    [],
  )

  const handlePost = useCallback(
    async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault()
      if (!content || !subject || postDisabled) {
        return
      }
      setPostDisabled(true)
      const { data } = await postArticle({
        variables: {
          authorId: 'eac2cb46-192d-42b0-8f17-77f815220905',
          content,
          subject,
          publishedAt: 'now()',
        },
      })
      if (data && data.insert_articles_one) {
        console.log(data)
        const articleId = data.insert_articles_one.id
        router.push(`/hoge/${articleId}`)
        setPostDisabled(false)
      } else {
        console.log('Post unknown state', data)
      }
    },
    [content, subject, postDisabled, postArticle, router],
  )

  const siteheaderRight = (
    <>
      <SiteHeaderItem>
        <form onSubmit={handlePost}>
          <Button type="submit">
            <span>投稿する</span>
          </Button>
        </form>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <UserIcon src="/profile.png" />
      </SiteHeaderItem>
    </>
  )
  return (
    <>
      <SiteHeader right={siteheaderRight} />
      <div className={styles.editContent}>
        <input
          className={styles.subject}
          type="text"
          placeholder="タイトル"
          onChange={handleChangeSubject}
          value={subject}
        />
        <Editor
          className={styles.editor}
          placeholder="本文を書きましょう"
          value={content}
          onEdit={setContent}
        />
      </div>
    </>
  )
}

export default PostPage
