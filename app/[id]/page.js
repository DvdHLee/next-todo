import React from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

async function Todo({ params }) {

    const todo = await getDoc(doc(db, "todos", params.id));

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-[30px]'>{todo.data().title}</h1>
            <h3>{todo.data().description}</h3>
        </div>
    )
}

export default Todo;