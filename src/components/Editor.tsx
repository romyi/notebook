import React, { useEffect, useRef, useState } from 'react'
import { EditorBlock, EditorText, Ribbon } from './Editor.styled'

const Editor = () => {
    const ta = useRef<HTMLTextAreaElement>(null);
    const [text, settext] = useState('');
    const [showr, setshowr] = useState(false);
    useEffect(() => {
      if (ta.current) ta.current.focus()
    }, [])
    const change = (e: React.FormEvent<HTMLTextAreaElement>) => {
      settext(e.currentTarget.value)
      e.currentTarget.value.split(' ').slice(-1)[0] === 'aa' ? setshowr(true) : setshowr(false)
    }
  return (
    <EditorBlock>
        <h3>Редактор</h3>
        <h5>timeflieswhenyouhf@internet.ru</h5>
        <Ribbon display={showr}><h1>контент</h1></Ribbon>
        <EditorText value={text} onChange={(e) => change(e)} ref={ta}/>
    </EditorBlock>
  )
}

export default Editor