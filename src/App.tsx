import { useEffect, useState } from "react"
import ValidationForm from "./components/ValidationForm"
import ExpenseForm from "./components/ExpenseForm"





const App = () => {


  const [selectCat, setSelectCat] = useState('')
  const [expenseArray, setExpenseArray] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id:2, description: 'bbb', amount: 15, category: 'Entertainment'},
    {id:3, description: 'ccc', amount: 20, category: 'Food'},
    {id:4, description: 'ddd', amount: 25, category: 'Shopping'},
    {id:5, description: 'eee', amount: 16, category: 'Groceries'}
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
    <ExpenseForm expenses={currentExpense} addToExpense={expenseAdd}/>
    <ValidationForm expenses={currentExpense} onDelete={handleDelete}/>
    </>
  )
}

export default App