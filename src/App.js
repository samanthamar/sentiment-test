import React, {useState} from 'react';
import './App.css';
import Journal from './Journal';

function App() {

  const [journal, setJournal] = useState([]); 
  const [data, setData] = useState("");

  const handleChange = (event) => {
    // Only get the data once user is done typing
    setData(event.target.value);
  }

  const getSentiment = async () => {
    // Default options are marked with *
    const url = 'http://localhost:5000/result';
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : '*', 
      "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify({"journal": data}) // body data type must match "Content-Type" header
    });
    const result = await response.json()
    console.log(result)
    return result['sentiment'];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a copy of existing journal entries
    const updateJournal = [...journal];
    // Get the sentiment
    const sentiment = await getSentiment()
    const obj = {"log": data, "sentiment": sentiment}
    // Add new entry
    updateJournal.push(obj)
    // Replace old journal with new journal
    setJournal(updateJournal);
    // Reset the text area
    setData("")
    console.log(journal)
  }

  const clearText = () => {
    setData("")
  }

  return (
    <div className="App">
      <h1>Sentiment Journal</h1>
      <form onSubmit={handleSubmit}>
          <div 
            className="form-group"
            style={{marginLeft: '50px',
            marginRight: '50px'}}>
              <textarea 
                className="form-control" rows="3"
                value={data.log}
                onChange={handleChange}
                placeholder="Input journal entry"/> 
          </div>

          <div className="form-group">
            <input 
              className="btn btn-primary mb-2" 
              type="submit"
              style={{marginRight: '20px'}}/>
            <input 
              className="btn btn-danger mb-2" 
              type="reset"
              onClick={clearText}/>
          </div>

      </form>

      {/* Display the journal entries */}
      <Journal log={journal}/>

  </div>
  );
}

export default App;