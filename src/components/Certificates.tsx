import { certificates } from "../public/certificates.json"
import "../styles/Certificates.scss"
import certImg from "../img/cert.jpg"
export default function Certificates() {
    return (
        <div className="Cert">
            <h2>Those standard certificates guarantees the quality accomplishment of our products and services.</h2>
            <div className="certificates">
                {
                    certificates.map((cert: App.CertI, i: number) => {
                        return (
                            <div key={i} className="cert">
                                <img src={certImg} alt="cert" />
                                <h3><a href={cert.link}>{cert.title}</a></h3>
                                <span>{cert.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
