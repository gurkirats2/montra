import logo from '../../../assets/images/logo.png'
import './page-header.css';
import triangle from '../../../assets/images/triangle.svg'
function PageHeader() {
    return (
        <div className="justify-between font-14 pad-section1">
            <div className="head-logo">
                <img src={logo} alt="my image" />
            </div>
            <section className="d-flex">
                <div className="p-relative fw-600">
                    Montra App
                    <img src={triangle} className="triangle" alt="" />
                </div>
                <div className="px-3">
                    Platforms
                </div>
                <div>
                    Solutions
                </div>
            </section>
            <section className="d-flex">
                <select value={'Nigeria'}>
                    <option>Nigeria</option>
                </select>
                <div className="pl-3">
                    Company
                </div>
                <div className="px-3">
                    Resources
                </div>
                <div>
                    Help
                </div>
            </section>
        </div>
    );
}

export default PageHeader;
