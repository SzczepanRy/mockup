
import "../styles/About.scss"
import unia from "../img/unia.png"
export default function About() {
    return (
        <div className="about">
            <div className="desc">

                <ul>
                    <h2>In 2023 company celebrates its 10th anniversary on the market.</h2>
                    <li>
                        RBC Bearing Polska Sp. z o. o. was established in 2013 and started production in 2014.
                    </li>
                    <li>
                        In April 2014, we moved to our own headquarters located at ul. Wojska Polskiego 16A.
                    </li>
                    <li>
                        RBC Bearings Polska produces components for other RBC divisions to serve the aviation, railway and industrial markets.
                    </li>
                    <li>
                        RBC Bearings Polska Sp. z o.o. operates within the SSE "EUROPARK Mielec" and belongs to the National Key Cluster - AIR VALLEY.
                    </li>
                    <img src={unia} alt="unia" />

                </ul>

            </div>
        </div>
    )
}
