import Head from "next/head";
import { AtSign, Facebook, PhoneCall } from "react-feather";
import AddStudent from "../components/AddStudent";
import Styles from '../styles/ThirdBatch.module.css';


export default function thirdBatch ({students}) {
    return (
        <div>
            <Head>
                <title>3rd Batch! Department of Physics BSMRSTU</title>
            </Head>
            <main className = {Styles.container}>
                <div className = {Styles.title}>
                    <h4>3rd Batch! </h4>
                    <hr/>
                </div>
                <div>
                    <input className = {Styles.input} type="text" placeholder = 'search'/>
                </div>
                <div className="row">
                    {
                       students && students.data && students.data.map(student =>{
                           return <div key = {student._id} className="col-md-6">
                                    <div className = {Styles.card}>
                                    <p><strong>Name: </strong> {student.name} </p>
                                    <p><strong>Id: </strong> {student.studentId} </p>
                                    <p><strong>Batch: </strong> {student.batch} 34 </p>
                                    <Facebook color = 'white' /> <PhoneCall color = 'white' /> <AtSign color = 'white' />
                                </div>
                            </div>
                       }) 
                    }
                </div>
                <AddStudent />
            </main>
        </div>
    );
};



export const getStaticProps = async () => {
    const res = await(fetch(`http://localhost:3000/api/students`))
    const students = await res.json();

    return {
        props: {
            students
        }
    }
}