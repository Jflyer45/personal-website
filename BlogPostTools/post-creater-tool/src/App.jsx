import './App.css';
import {useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import React from "react";

function App() {
  const [mdValue, setmdValue] = React.useState("**Hello world!!!**");
  const [contentList, setContentList] = useState([{type:"", link: ''}])
  const [titleText, setTitleText] = useState("")

  console.log(contentList);

  const handleContentAdd = () => {
    setContentList([...contentList, {type: "", link:""}])
  }

  const handleContentRemove = (index) => {
    const list = [...contentList]
    list.splice(index, 1)
    setContentList(list)
  }

  const handleContentChange = (e, index) => {
    const {name, value} = e.target
    const list = [...contentList]
    list[index][name] = value
    setContentList(list)
  }

  const createJSONFromInput = () => {
    return {
      title:titleText,
      text:mdValue,
      content:contentList
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(createJSONFromInput())
    };
    debugger;
    console.log(requestOptions)
    const response = await fetch('http://localhost:8000/api/posts', requestOptions);
    const data = await response.json();
    
    // Remove fields, keep text incase it doesn't send
    setTitleText("")
    setContentList([{type:"", link: ''}])
  }

  // const render

  return (
    <div className="App">
      <form 
      onSubmit={(e) =>handleFormSubmit(e)}>
        <h3>Title</h3>
        <input type="text" value={titleText} required
        onChange = {(e) => setTitleText(e.target.value)}
        />
        <h3>Text Body</h3>
        <div className="editor">
          <MDEditor required
          value={mdValue}
          onChange={setmdValue}
          />
        </div>
        <h3>Contents</h3>
        {contentList.map((singleContent, index) => (
            <div key={index} className="content">
              <div className='inputs'>
                <select name="type"
                onChange = {(e) => handleContentChange(e, index)}
                >
                  <option value="">Select option</option>
                  <option value="video">Video Link</option>
                  <option value="image">Image Link</option>
                </select>
                <input name="link" type="text" required value={singleContent.link}
                onChange = {(e) => handleContentChange(e, index)}
                />
                {contentList.length - 1 === index && (
                  <button type="button" className="add-btn"
                  onClick={handleContentAdd}
                  >
                    <span>Add more content</span>
                  </button>
                )}
              </div>
              <div className='remove-option'>
                {contentList.length - 1 > 0 && (
                <button type="button" className="remove-btn"
                onClick={() => handleContentRemove(index)}
                >
                  <span>Remove</span>
                </button>
                )}
              </div>
            </div>
          ))}
          <button className="submit-btn">Create post</button>
      </form>
      <div>
        <h1>RENDER EXAMPLE</h1>
        <br/>
        <MDEditor.Markdown source={mdValue} style={{ whiteSpace: 'pre-wrap' }} />
      </div>
    </div>
  );
}

export default App;
