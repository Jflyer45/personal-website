import './App.css';
import {useState} from "react";

function App() {

  const [contentList, setContentList] = useState([{type:"", link: ''}])
  const [titleText, setTitleText] = useState("")
  const [bodyText, setBodyText] = useState("")

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
      text:bodyText,
      content:contentList
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(createJSONFromInput())
    };
    debugger;
    console.log(requestOptions)
    const response = await fetch('http://localhost:8000/api/posts', requestOptions);
    const data = await response.json();
    console.log(`Response Data:`)
    console.log(data)
  }

  return (
    <div className="App">
      <form 
      onSubmit={(e) =>handleFormSubmit(e)}>
        <h3>Title</h3>
        <input type="text" value={titleText}
        onChange = {(e) => setTitleText(e.target.value)}
        />
        <h3>Text Body</h3>
        <textarea
          onChange = {(e) => setBodyText(e.target.value)}
        />
        <h3>Contents</h3>
        {contentList.map((singleContent, index) => (
            <div key={index} className="content">
              <div>
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
              <div>
                {contentList.length - 1 && (
                <button type="button" className="remove-btn"
                onClick={() => handleContentRemove(index)}
                >
                  <span>Remove</span>
                </button>
                )}
              </div>
            </div>
          ))}
          <button className="submit">Create post</button>
      </form>
    </div>
  );
}

export default App;
