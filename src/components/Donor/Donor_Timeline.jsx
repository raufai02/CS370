import Donor_Header from '../Donor/Donor_Header.jsx';

export default function Donor_Timeline(){
    return(

        <body className="home">  {/* This class gives it a similar style to the home page, this can change */}
            <Donor_Header num={1}/>
            <section id="section0" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <h2>YOUR TIMELINE IS EMPTY RIGHT NOW </h2>
                            <p>Post a donation to see it here.</p>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}