import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";

const ExpensesForm = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

    //need to get data (in array) from firebase (Api)
    const [data, setData] = useState([]);
    // SetState function that allows us to update the value of the function

    //passing values in input elements
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  console.log(category);
  const categoryHandler = (e) => {
    setCategory(e.target.value);
      };

// Posting data to fireBase
  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      //console.log(obj);
      desc,
      amount,
      category,
    };
    try {
       const res = await axios.post(
        "https://expensetracker-a99e6-default-rtdb.firebaseio.com/ExpenseList.json",
        obj
      );
      console.log(res);
      getData(); //fetching data here
    } catch (error) {
      console.log("error", error);
    }
    setDesc("");
    setAmount("");
    setCategory("");
  };

  // getting data from firebase
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://expensetracker-a99e6-default-rtdb.firebaseio.com/ExpenseList.json"
      );
      console.log(res.data);
      setData(res.data); // 
    } catch (error) {
      console.log("Error", error);
    }
  };
  // need useEffect hook to rerender getData(or to get values/information)
  useEffect(() => {
    getData();
  }, []);

// dataArray in items
  const items=[];
  for(let key in data){
    items.push({id:key, ...data[key]});
  }
  return (
<>
    <div>
      <form>
        <h1>Day-to-day Expenses</h1>
        <input
          value={desc}
          onChange={descHandler}
          type="text"
          placeholder="Enter Descrption of Expense "
        ></input>
        <input
          value={amount}
          onChange={amountHandler}
          type="number"
          placeholder="Enter Amount of Expense "
        ></input>

        <select 
        name="Category" 
        value={category} 
         onChange={categoryHandler}>
         <option>Select</option>
          <option>Food</option>
          <option>Petrol</option>
          <option>Clothes</option>
          <option>other..</option>
        </select>
        <button onClick={submitHandler}>Submit</button>
      </form>

      {items.map((items)=>{
       return(
     <div key ={items.id}>
     <h3> Description : {items.desc}</h3>
     <p> Amount : {items.amount}</p>
     <p> Category: {items.category}</p>
    </div>
      )})} 
    </div>
    </>
  );
};
export default ExpensesForm;

