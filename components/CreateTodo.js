'use client'

import React, { useRef } from 'react'
import addTodo from './form-action';

function CreateTodo() {
    const formRef = useRef(null);

    async function handleSubmit(formData) {
        const result = await addTodo(formData);
        if (result.success) {
            formRef.current.reset();
        }
    }

  return (
    <>
        <form ref={formRef} action={handleSubmit}>
            <label>Title: </label>
            <br />
            <input name='title' type="text" className='border border-black w-[300px] mb-3'></input>
            <br />
            <label>Description: </label>
            <br />
            <textarea name='description' className='border border-black w-[300px]'></textarea>
            <br />
            <button className='p-3 bg-blue-500 text-white w-[300px]'>Add</button>
        </form>
    </>
  )
}

export default CreateTodo