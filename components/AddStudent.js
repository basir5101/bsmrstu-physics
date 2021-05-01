import {useState } from "react";
import Router from 'next/router'

const AddStudent = () => {

    const [quote, setQuote] = useState({});
    const [showStudentForm, setShowStudentForm] = useState(false)
    
    const handleQuoteInput = e =>{
        const newQuote = {...quote};
        newQuote[e.target.name] = e.target.value;
        setQuote(newQuote);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const newQuote = await fetch('http://localhost:3000/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(quote),
            });
            const newQuoteData = await newQuote.json();
            console.log(newQuoteData)
            // if (newQuoteData.status === 'success') {
            //     setQuote({})
            //     setShowStudentForm(false)
            //     Router.push('/')
            // } else {
            //     alert('Sorry! Something went wrong')
            // }
        } catch (error) {
        }
    };

    return (
        <section className = 'mb-5'>
            {
                showStudentForm ? <form>
                <div className="form-group">
                    <label htmlFor="quotes">Name: </label>
                    <textarea onChange = {handleQuoteInput} type="text" className="form-control" name="name" placeholder="what is your name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="verse">Student Id:</label>
                    <input type="text" onChange = {handleQuoteInput} className="form-control" name="studentId" placeholder="what is your Student ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="verse"> Email:</label>
                    <input type="text" onChange = {handleQuoteInput} className="form-control" name="email" placeholder="what is your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="verse"> Batch:</label>
                    <input type="text" onChange = {handleQuoteInput} className="form-control" name="batch" placeholder="which batch you are"/>
                </div>
                <button onClick = {(e) => onSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
            </form> :

        <button onClick = {() => setShowStudentForm(true)} className = 'btn btn-success'> Add New Quote </button>
            }
        </section>
    );
};

export default AddStudent;