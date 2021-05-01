import Image from 'next/image';


const Banner = () => {
    return (
        <section className = 'container py-5'>
            <div className="row">
                <div className="col-md-8">
                    <Image
                        src="/Education Background vector 4.svg"
                        alt="Picture of the author"
                        width={600}
                        height={500}
                    />
                </div>
                <div className="col-md-4 text-center d-flex align-items-center justify-content-center text-white">
                    <h4>Welcome to <br/><br/>
                        Department of Physics <br/><br/>
                        BSMRSTU
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default Banner;