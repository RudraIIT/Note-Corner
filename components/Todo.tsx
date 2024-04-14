import { FormEvent, useState } from "react";
import { useTodo } from "../Context/Todo"
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pencil, Save, Trash2 } from "lucide-react";

interface TodoProps {
  todo: {
    id: number;
    todo: string;
    complete: boolean;
  }
}

const Todo : React.FC<TodoProps> = ({ todo }) => {
  const { 
    deleteTodo, 
    updateTodo, 
    toggleComplete,
  } = useTodo();
  const [thisTodo, setThisTodo] = useState(todo.todo);
  const [editable, setEditable] = useState(false);
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    if (editable) {
      updateTodo(thisTodo, todo.id);
      setEditable(false);
    } else {
      if (!todo.complete) {
        setEditable(true);
      }
    }
  }
  const deleteThisTodo = () => {
    deleteTodo(todo.id);
  }
  return (
    <div className="w-full h-12">
      <form onSubmit={handleSubmit} className={`h-full w-full flex gap-3 justify-center items-center px-4 py-2 rounded-xl ${todo.complete ? "bg-[#666666]" : "bg-[#444444]"}`}>
        <Checkbox checked={todo.complete} onClick={() => toggleComplete(todo.id)}/>
        <Input className={`w-10/12 p-2 bg-transparent ${todo.complete ? "line-through" : ""}`} type="text" readOnly={!editable} value={thisTodo} onChange={(e) => setThisTodo(e.target.value)} />
        <Button variant={editable ? "default" : "outline"} className="w-1/12 h-full" type="submit">
          {editable ? <Save size={16}/> : <Pencil size={16}/> }
        </Button>
        <Button variant="destructive" className="w-1/12 h-full" onClick={deleteThisTodo}>
          <Trash2 size={16}/>
        </Button>
      </form>
    </div>
  )
}

export default Todo
