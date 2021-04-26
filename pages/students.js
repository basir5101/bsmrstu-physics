import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Students.module.css';

const students = () => {
    return (
        <div>
            <Head>
                <title>Students! Department of Physics BSMRSTU</title>
            </Head>
            <main className = {Styles.container}>
                <div className = {Styles.title}>
                    <h4>We Have Four Batches</h4>
                    <hr/>
                </div>
                <div className="row">
                    <div className= 'col-md-4'>
                        <div className = {Styles.card}>
                            <Link href="/first-batch" className = {Styles.card}>
                                <a>1st Batch</a>
                            </Link>
                        </div>
                    </div>
                    <div className= 'col-md-4'>
                        <div className = {Styles.card}>
                            <Link href="/students" className = {Styles.card}>
                                <a>2nd Batch</a>
                            </Link>
                        </div>
                    </div>
                    <div className= 'col-md-4'>
                        <div className = {Styles.card}>
                            <Link href="/3rd-batch" className = {Styles.card}>
                                <a>3rd Batch</a>
                            </Link>
                        </div>
                    </div>
                    <div className= 'col-md-4'>
                        <div className = {Styles.card}>
                            <Link href="/" className = {Styles.card}>
                                <a>4th Batch</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
};

export default students;