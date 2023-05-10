import React, { useState, useMemo, useEffect, SetStateAction, Dispatch, useCallback } from "react";
import JoditEditor from "jodit-react";

type EditorProps ={
  updatedText:string,
  setEditorText:Dispatch<SetStateAction<string>>
}

export default function Editor({updatedText , setEditorText}:EditorProps) {
  const [content, setContent] = useState("");

  const config = useMemo(() => ({
    readonly: false,
    addNewLineOnDBLClick: false
  }), []);

  const handleSetContext = useCallback((value:any) => {
    setContent(value);
    setEditorText(value);
  }, [setEditorText]);

  

  useEffect(()=>{
    console.log(updatedText);
    if(updatedText){
        setContent(`<p>${updatedText}</p>`);
        setEditorText(`<p>${updatedText}</p>`);
    }
  },[updatedText, setEditorText]);

  return useMemo(
    () => (
      <JoditEditor
        value={content}
        config={config}
        onBlur={handleSetContext}
        onChange={handleSetContext}
      />
    ),
    [content , config , handleSetContext]
  );
}
