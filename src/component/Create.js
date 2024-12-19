import { React, useState } from 'react'
import Feature from './Feature';

function Create() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const handelSubmit = async (e) => {
    e.preventDefault();

    const todos = { title }

    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todos)

    });
    const data = await response.json();
    if (response.ok) {
      console.log('Data has been added', data);
      setTitle('');
      setError('');
    }
    else {
      console.log('Data has not been added', data.error);
      setError(data.error);
    }
    
  }

  return (
    <div>
      <h1>Todo form</h1>
      {error && <h1>{error}</h1>}
      <form onSubmit={handelSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter todo" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <input type="submit" value="Add" className="btn btn-primary" />
          <input type="reset" value="Reset" className="btn btn-danger" />
        </div>
      </form>
      <Feature />
    </div>
  )
}

export default Create
