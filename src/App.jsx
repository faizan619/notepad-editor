import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function App() {
  
  const [value,setvalue] = useState('');

  return (
    <>
    <div className="container">
        <h1>Notepad Editor</h1>
       <ReactQuill
       className='helo'
        theme='snow'
        placeholder='Enter your Text'
        value={value}
        onChange={setvalue}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
          ],
        }}
        formats={[
          'header',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image'
        ]}
      />
    </div>
    </>
  )
}

export default App