import { NextPage } from 'next'
import { useState, useCallback } from 'react'

import styles from './index.module.css'
import { Editor } from '@/components/editor'
import { SiteHeader, SiteHeaderItem } from '@/components/site-header'
import { Button } from '@/components/button'

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const handleChangeSubject = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(ev.target.value)
    },
    [],
  )

  const siteheaderRight = (
    <>
      <SiteHeaderItem>
        <Button type="submit">
          <span>投稿する</span>
        </Button>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <img className={styles.userIcon} src="/profile.png" />
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
