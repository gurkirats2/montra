import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "../elements/page-header/page-header";
import PageFooter from "../elements/page-footer/page-footer";
import LandingPage from "../public-console/landing-page/landing-page";

function Router() {
    return (
        <div className="Layout">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;