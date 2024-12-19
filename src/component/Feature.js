import { React, useState, useEffect } from 'react'


function Feature() {
  let [data, setData] = useState();

  async function getData() {
    const response = await fetch('http://localhost:5000');
    const result = await response.json();
    console.log(result);
    data = result;
    if (result) {
      setData(result);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    console.log(result);
    getData();

  }

  const updateData = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'PUT'
    });
    const result = await response.json();
    console.log(result);
    getData();
  }

  return (
    <div>
      <h2 className='text-center'>Todo List</h2>
      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((ele, index) => {
            return (
              <tr key={ele._id}>
                <td>{index + 1}</td>
                <td>{ele.title}</td>
                <td>
                  <button className="btn btn-primary" onClick={()=> updateData(ele._id) }>Edit</button>
                  <button className="btn btn-danger" onClick={() => deleteData(ele._id)}>Delete</button>

                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Feature
