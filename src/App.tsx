import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <ToDoList title="Shopping List" items={["Milk", "Cheese", "Bread", "Ham", "Butter"]} />

      <ToDoList title="Chore List" items={["Vacuum", "Wash Dishes", "Laundry"]} />
    </>
  )
}

export default App
