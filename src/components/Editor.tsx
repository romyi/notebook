import React, { useEffect, useRef, useState } from 'react'
import { EditorBlock, EditorText, Ribbon } from './Editor.styled'

const Editor = () => {
    const ta = useRef<HTMLTextAreaElement>(null);
    const rib = useRef<HTMLElement>(null);
    const [ribh, setribh] = useState(0);
    const [text, settext] = useState('');
    const [showr, setshowr] = useState(false);
    useEffect(() => {
      if (ta.current) ta.current.focus()
    }, [])
    const change = (e: React.FormEvent<HTMLTextAreaElement>) => {
      settext(e.currentTarget.value)
      setshowr(e.currentTarget.value.split(' ').slice(-1)[0] === '-н')
    }
    useEffect(() => {
      setribh(rib.current?.getBoundingClientRect().height as number)
    }, [showr])
  return (
    <EditorBlock>
        <h5>строка</h5>
        <h5>timeflieswhenyouhf@internet.ru</h5>
        <Ribbon show={showr} h={ribh} ref={rib}>
          <h3>команда</h3>
        </Ribbon>
        <EditorText value={text} onChange={(e) => change(e)} ref={ta}/>
    </EditorBlock>
  )
}

export default Editor