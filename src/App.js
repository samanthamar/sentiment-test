import React, {useState} from 'react';
import './App.css';
import Journal from './Journal';

function App() {

  const [journal, setJournal] = useState([]); 
  const [data, setData] = useState({"log": "", "sentiment": ""});

  const handleChange = (event) => {
    // Only get the data once user is done typing
    // Need to hook this up to the backend to get sentiment polarity
    const userData = {"log": event.target.value, "sentiment": 0.0};
    setData(userData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a copy of existing journal entries
    const updateJournal = [...journal];
    // Add new entry
    updateJournal.push(data)
    // Replace old journal with new journal
    setJournal(updateJournal);
    // Reset the text area
    setData({"log": "", "sentiment": ""})
    console.log(journal)
  }

  const clearText = () => {
    setData({"log": "", "sentiment": ""})
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