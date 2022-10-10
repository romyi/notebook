import React, { useEffect, useRef, useState } from 'react'
import { EditorBlock, EditorText } from './Editor.styled'

const Editor = () => {
    const ta = useRef<HTMLTextAreaElement>(null);
    const [text, settext] = useState('');
    useEffect(() => {
      if (ta.current) ta.current.focus()
    }, [])
  return (
    <EditorBlock>
        <h3>Редактор</h3>
        <h5>timeflieswhenyouhf@internet.ru</h5>
        <EditorText value={text} onChange={(e) => settext(e.target.value)} ref={ta}/>
    </EditorBlock>
  )
}

export default Editor