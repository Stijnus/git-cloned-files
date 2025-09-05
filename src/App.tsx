import React, { useState, useEffect } from 'react'
import { CheckCircle2, Edit3, Trash2, PlusCircle } from 'lucide-react'

interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [newTodo, setNewTodo] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    setTodos([...todos, {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
      createdAt: new Date()
    }])
    setNewTodo('')
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const startEdit = (id: string, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  const saveEdit = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    ))
    setEditingId(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            TaskFlow
          </h1>
          <form onSubmit={addTodo} className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              Add Task
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          {todos.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="No tasks"
                className="mx-auto h-48 rounded-lg object-cover opacity-75"
              />
              <p className="text-slate-500">Your task list is empty and serene</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div 
                key={todo.id}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${todo.completed 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-slate-300 hover:border-emerald-400'}`}
                  >
                    {todo.completed && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  
                  {editingId === todo.id ? (
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => saveEdit(todo.id)}
                      className="flex-1 p-2 border-b-2 border-emerald-500 focus:outline-none"
                      autoFocus
                    />
                  ) : (
                    <span
                      className={`flex-1 text-slate-700 ${
                        todo.completed ? 'line-through text-slate-400' : ''
                      }`}
                    >
                      {todo.text}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="p-2 hover:bg-slate-100 rounded-md text-slate-500 hover:text-emerald-600"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-2 hover:bg-slate-100 rounded-md text-slate-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
