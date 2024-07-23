import React from 'react';
import { db } from '@/firebase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

async function remove(formData) {
  "use server"

  await deleteDoc(doc(db, "todos", formData.get("id")));

  revalidatePath("/");
}

async function TodoList() {

  const todos = await getDocs(collection(db, "todos"));

  return (
    <div>
      <h1 className='text-5xl mb-[30px]'>Todo List</h1>
      <ul className='w-[400px] h-[400px] border-2 border-black flex flex-col items-center overflow-scroll mb-5'>
        {todos.docs.map(todo =>
          <div key={todo.id} className='border border-black w-9/12 h-fit mt-[20px] relative'>
            <div className="link">
              <Link href={"/" + todo.id} className='w-full h-full flex items-center'>
                <li className='pl-[10px]'>{todo.data().title}</li>
              </Link>
            </div>
            <form action={remove} className='xbutton'>
              <input name='id' type="text" className='hidden' value={todo.id} readOnly></input>
              <button>X</button>
            </form>
          </div>
        )}
      </ul>
    </div>
  )
}

export default TodoList