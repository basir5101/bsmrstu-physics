import Styles from '../styles/Category.module.css';
import Link from 'next/link'

const categoryCard = () => {
    return (
        <section className = 'container'>
            <div className="row">
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/" className = {Styles.card}>
                            <a>Teachers</a>
                        </Link>
                    </div>
                </div>
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/students" className = {Styles.card}>
                            <a>Students</a>
                        </Link>
                    </div>
                </div>
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/" className = {Styles.card}>
                            <a>Courses</a>
                        </Link>
                    </div>
                </div>
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/" className = {Styles.card}>
                            <a>Achievements</a>
                        </Link>
                    </div>
                </div>
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/" className = {Styles.card}>
                            <a>Notice</a>
                        </Link>
                    </div>
                </div>
                <div className= 'col-md-4'>
                    <div className = {Styles.card}>
                        <Link href="/" className = {Styles.card}>
                            <a>Results</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default categoryCard;