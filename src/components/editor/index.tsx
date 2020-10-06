import React from 'react'
import autosize from 'autosize'
import styles from './index.module.css'
import { useClassNames } from '@/utils'

type Props = {
  value: string
  onEdit: (text: string) => void
  placeholder?: string
  className?: string
}

export const Editor: React.FC<Props> = ({
  className,
  value,
  onEdit,
  placeholder,
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      autosize(ref.current)
    }
  }, [])

  const handleChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      onEdit(ev.target.value)
    },
    [onEdit],
  )
  const _className = useClassNames(styles.editor, className)
  return (
    <textarea
      className={_className}
      placeholder={placeholder}
      ref={ref}
      onChange={handleChange}
      value={value}
    />
  )
}
