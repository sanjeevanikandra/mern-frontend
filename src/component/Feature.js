import React from 'react'

function Feature() {
  return (
    <div>
      <h2 className='text-center'>Todo List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Task</th>
      
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Feature
