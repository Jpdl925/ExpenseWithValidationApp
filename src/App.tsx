import { useEffect, useState } from "react"
import ValidationForm from "./components/ValidationForm"
import ExpenseForm from "./components/ExpenseForm"





const App = () => {


  const [selectCat, setSelectCat] = useState('')
  const [expenseArray, setExpenseArray] = useState([
    {id:1, description: 'Gas', amount: 150, category: 'Utilities'},
    {id:2, description: 'Movie', amount: 15, category: 'Entertainment'},
    {id:3, description: 'Chipotle', amount: 16, category: 'Food'},
    {id:4, description: 'Curtains', amount: 45, category: 'Shopping'},
    {id:5, description: 'Eggs', amount: 12, category: 'Groceries'}
  ]) 
  
  const handleDelete = (id:number) => {
    setExpenseArray(expenseArray.filter(expense => expense.id !== id))
  }
  
  const expenseAdd = (newExpense:any) => {    
    setExpenseArray([...expenseArray, newExpense])
  }

  useEffect(() => {
    console.log(expenseArray);
    
  

  }, [])
  

  const currentExpense = selectCat ? expenseArray.filter(e => e.category === selectCat) : expenseArray


  return (
    <>
    <div className="wholeSpace">
    <ExpenseForm expenses={currentExpense} addToExpense={expenseAdd}/>
    <ValidationForm expenses={currentExpense} onDelete={handleDelete}/>
    </div>
    </>
  )
}

export default App