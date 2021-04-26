import Head from "next/head";
import { AtSign, Facebook, PhoneCall } from "react-feather";
import Styles from '../styles/ThirdBatch.module.css';


const thirdBatch = () => {
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
                    <div className="col-md-6">
                        <div className = {Styles.card}>
                            <p><strong>Name: </strong> Abdul Basir</p>
                            <p><strong>Id: </strong> 18phy040</p>
                            <p><strong>Batch: </strong> 3rd</p>
                            <Facebook color = 'white' /> <PhoneCall color = 'white' /> <AtSign color = 'white' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = {Styles.card}>
                            <p><strong>Name: </strong> Abdul Basir</p>
                            <p><strong>Id: </strong> 18phy040</p>
                            <p><strong>Batch: </strong> 3rd</p>
                            <Facebook color = 'white' /> <PhoneCall color = 'white' /> <AtSign color = 'white' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = {Styles.card}>
                            <p><strong>Name: </strong> Abdul Basir</p>
                            <p><strong>Id: </strong> 18phy040</p>
                            <p><strong>Batch: </strong> 3rd</p>
                            <Facebook color = 'white' /> <PhoneCall color = 'white' /> <AtSign color = 'white' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = {Styles.card}>
                            <p><strong>Name: </strong> Abdul Basir</p>
                            <p><strong>Id: </strong> 18phy040</p>
                            <p><strong>Batch: </strong> 3rd</p>
                            <Facebook color = 'white' /> <PhoneCall color = 'white' /> <AtSign color = 'white' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default thirdBatch;