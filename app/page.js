import TodoList from "@/components/TodoList";
import CreateTodo from "@/components/CreateTodo";

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <TodoList />
        <CreateTodo />
      </div>
    </>
  );
}
