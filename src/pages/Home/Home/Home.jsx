import Banner from '../Banner/Banner';
import Benifit from '../Benifit/Benifit';
import Brands from '../Brands/Brand';
import Faq from '../Faq/Faq';
import HowItWorks from '../HowItWorks/HowItworks';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <Benifit></Benifit>
            <Faq></Faq>
        </div>
    );
};

export default Home;