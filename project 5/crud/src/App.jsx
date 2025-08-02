import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'

const App = () => {
  const [data, setData] = useState("")
  const [boolean, setBoolean] = useState(false)
  const [index, setIndex] = useState(null)
  const [todolist, setTodolist] = useState(JSON.parse(localStorage.getItem("Data")) || [])

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(todolist))
  }, [todolist])

  const handleEdit = (item, index) => {
    setData(item)
    setBoolean(true)
    setIndex(index)
  }

  const handleUpdate = () => {
    const updated = todolist.map((item, i) => (i === index ? data : item))
    setTodolist(updated)
    setData("")
    setBoolean(false)
    alert("Task updated successfully!")
  }

  const handleDelete = (index) => {
    const updated = todolist.filter((_, i) => i !== index)
    setTodolist(updated)
    localStorage.setItem("Data", JSON.stringify(updated))
  }

  const handleAdd = () => {
    if (!data.trim()) {
      alert("Please enter a task.")
      return
    }
    setTodolist([...todolist, data])
    setData("")
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 to-purple-100 transition-colors">

      {/* Navbar */}
      <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🧠 Todo App</h1>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 bg-sky-50"></h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              value={data}
              onChange={(e) => setData(e.target.value)}
              type="text"
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {boolean ? (
              <button
                onClick={handleUpdate}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md transition font-medium"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition font-medium"
              >
                Add Task
              </button>
            )}
          </div>

          <div className="space-y-4">
            {todolist.length === 0 ? (
              <p className="text-center text-gray-500 italic">No tasks yet.</p>
            ) : (
              todolist.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 border border-gray-300 px-4 py-3 rounded-md shadow-sm"
                >
                  <p className="text-gray-800">{item}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item, index)}
                      className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <CiEdit className="text-lg" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <MdDelete className="text-lg" />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Todo App by You. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
