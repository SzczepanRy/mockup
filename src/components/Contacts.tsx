import "../styles/Contacts.scss"
export default function Contacts() {

    return (
        <div className="Contacts">
            <h2>
                Let us know your questions or inquiries. Please complete the form below:
            </h2>
            <div className="info">
                <form className="form" action='https://www.rbcpolska.pl/Main/Submit' method='POST' >
                    <div className="headForm">
                        <input required type="text" placeholder='Name' />
                        <input required type="email" placeholder='Email Address' />
                    </div>
                    <input required type="text" placeholder='Subject' />
                    <textarea className="longMessage" required placeholder='Enter your message' />
                    <button type='submit'>Send Now</button>
                </form>
                <div className="details">
                    <ul>
                        <li>
                            Address: RBC Bearings POLSKA SP Z O O Ul. <br />Wojska Polskiego 16A, 39-300 Mielec, Poland
                        </li>
                        <li>Phone: +48 17 746 4800</li>
                        <li>Fax: +48 17 746 4860</li>
                        <li>Email:office@rbcpolska.pl</li>
                        <li>HR Department Tel: +48 17 746 48 22</li>
                        <li>Finance Department Tel: +48 17 746 48 11</li>
                        <li>Quality Department Tel: +48 17 746 48 34</li>
                        <li>Maintenance Department Tel: +48 17 746 48 36</li>
                        <li>Production Department Tel: +48 17 746 48 35</li>
                    </ul>



                </div>
            </div>
        </div>
    )
}
