import categories from "./categories";


    interface Expense {
        id: number;
        description: string;
        amount: number;
        category: string;
    }

    interface ExpenseProps {
        expenses: Expense [];
        onDelete: (id:number) => void;
    }


const ValidationForm = ({expenses,onDelete}:ExpenseProps) => {

    if(expenses.length === 0)
        return null;

    return (
        <>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th scope="col" >Description</th>
                    <th scope="col" >Amount</th>
                    <th scope="col" >Category</th>
                    <th scope="col" ></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map}
            </tbody>
        </table>
        </>
      );
}

export default ValidationForm