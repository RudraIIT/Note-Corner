import { FormEvent, useState } from "react";
import { useTodo } from "../Context/Todo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InputTodo = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");
  const addNewTodo = (e : FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }
  return (
    <form onSubmit={addNewTodo} className="w-full h-8 rounded-3xl mb-8 flex gap-1">
      <Input className="w-11/12 h-full rounded-s-xl pl-3 opacity-50" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Write Todo..."/>
			<Button className="h-full" type="submit">+</Button>
		</form>
    )
}

export default InputTodo
