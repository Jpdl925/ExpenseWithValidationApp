import categories from "./categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form"
import { useEffect, useState } from "react";


const schema = z.object({
    description: z.string().min(3,{message: "Description must be at least 3 characters long"}),
    amount: z.number({invalid_type_error: "Amount is required"}).min(0),
    category: z.string().min(3,{message: "Category must be selected"}),
})

type FormData = z.infer<typeof schema>


interface Expense {
    id:number;
    description: string;
    amount: number;
    category: string;
}

interface ExpenseProps {
    expenses: Expense [];
    addToExpense: (data:object) => void;
}


const ExpenseForm = ({expenses,addToExpense}:ExpenseProps) => {


    const {register,handleSubmit, formState:{errors}}  = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors);

const onHelpSubmit = (data:FieldValues) => {
    const newExpense = {id:(expenses.length+1), description:data.description,amount:data.amount,category:data.category}
    
    addToExpense(newExpense)
    
}



  return (
    <>
    
    <div className="formSpace">
        <h1>Expense List</h1>
    <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mx-5 my-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input {...register('description',)} id="description" type="text" className="form-control" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>

        <div className="mx-5 mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input {...register('amount',{valueAsNumber:true})} id="amount" type="text" className="form-control" />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>

        <div className="mx-5 mb-4">
        <label htmlFor="category" className="form-label">Category</label>
        <select {...register('category',)} id="category" className="form-select">
            <option value=""></option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>        
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
        </div>

        <div className="text-center mb-5">
        <button className="btn btn-primary">Add Expense</button>
        </div>

    </form>
    </div>
    
    </>
  )
}

export default ExpenseForm