import ExpenseForm from "./ExpenseForm";
import './newExpense.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const EnteredData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        
        props.onAddExpense(EnteredData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
