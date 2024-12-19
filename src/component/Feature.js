import React, { useState } from 'react';

function Feature({ data, getData }) {
  const [isEditing, setIsEditing] = useState(null); // Track the editing todo ID
  const [newTitle, setNewTitle] = useState(''); // Track the updated title

  const deleteData = async (id) => {
    await fetch(`http://localhost:5000/${id}`, { method: 'DELETE' });
    getData(); // Refresh the todo list after deletion
  };

  const startEditing = (id, currentTitle) => {
    setIsEditing(id); // Set the ID of the todo being edited
    setNewTitle(currentTitle); // Pre-fill the input with the current title
  };

  const saveEdit = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }), // Send updated title
    });

    if (response.ok) {
      setIsEditing(null); // Exit edit mode
      setNewTitle(''); // Clear the input
      getData(); // Refresh the todo list
    }
  };

  return (
    <div>
      <h2 className="text-center">Todo List</h2>
      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((ele, index) => (
              <tr key={ele._id}>
                <td>{index + 1}</td>
                <td>
                  {isEditing === ele._id ? (
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="form-control" />
                  ) : (
                    ele.title
                  )}
                </td>
                <td>
                  {isEditing === ele._id ? (
                    <>
                      <button className="btn btn-success"
                        onClick={() => saveEdit(ele._id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setIsEditing(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => startEditing(ele._id, ele.title)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteData(ele._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Feature;
