"use server"

import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from 'next/cache';
import { db } from '@/firebase';

export default async function addTodo(formData) {

    const title = formData.get("title");
    const description = formData.get("description");

    await addDoc(collection(db, "todos"), {
        title: title,
        description: description
    })

    revalidatePath("/");

    return { success: true };
}