import React, { useEffect, useRef, useState } from 'react'
import { EditorBlock, EditorText, Ribbon } from './Editor.styled'

const Editor = () => {
    const ta = useRef<HTMLTextAreaElement>(null);
    const [text, settext] = useState('');
    const [showr, setshowr] = useState(false);
    const px = useRef(0)
    useEffect(() => {
      if (ta.current) ta.current.focus()
    }, [])
    const change = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const sel = e.currentTarget.selectionEnd;
      px.current = (sel+(sel < 6 ? 4 : 8)) * 6
      settext(e.currentTarget.value)
      e.currentTarget.value.split(' ').includes('aa') ? setshowr(true) : setshowr(false)
    }
  return (
    <EditorBlock>
        <h3>Редактор</h3>
        <h5>timeflieswhenyouhf@internet.ru</h5>
        {showr && <Ribbon offsetx={px.current} />}
        <EditorText value={text} onChange={(e) => change(e)} ref={ta}/>
    </EditorBlock>
  )
}

export default Editor