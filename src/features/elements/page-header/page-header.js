import logo from '../../../assets/images/logo.png'
import './page-header.css';
import triangle from '../../../assets/images/triangle.svg'
import { NavLink } from 'react-router-dom';
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
                <div className="pl-3">
                    Payment Gateway
                </div>
                <div className="pl-3">
                    <NavLink to="/pricing">
                        Pricing
                    </NavLink>
                </div>
                <select value={'Nigeria'} className='pl-3'>
                    <option>Nigeria</option>
                </select>
                <div className="pl-3">
                    <NavLink to="/company">
                        Company
                    </NavLink>
                </div>
                <div className="px-3">
                    Resources
                </div>
                <div>
                    <NavLink to="/help">
                        Help
                    </NavLink>
                </div>
            </section>
        </div>
    );
}

export default PageHeader;
