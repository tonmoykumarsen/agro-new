import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BannerImg1 from '../../../assets/banner/banner1.jpg';
import BannerImg2 from '../../../assets/banner/banner2.jpg';
import BannerImg3 from '../../../assets/banner/banner3.jpg';


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div>
                <img src={BannerImg1} />
                <p className="legend">Banner 1</p>
                <div className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 max-w-md md:max-w-lg text-black space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Amazing Car Deals
                    </h2>
                    <p className="text-sm md:text-base">
                        Discover the best car offers with exclusive discounts and premium features. 
                        Find your dream car today!
                    </p>
                    <button className="btn btn-primary text-yellow">
                        Shop Now
                    </button>
                </div>
            </div>
            <div>
                <img src={BannerImg2} />
                <p className="legend">Banner 2</p>
                <div className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 max-w-md md:max-w-lg text-black space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Amazing Car Deals
                    </h2>
                    <p className="text-sm md:text-base">
                        Discover the best car offers with exclusive discounts and premium features. 
                        Find your dream car today!
                    </p>
                    <button className="btn btn-primary text-black">
                        Shop Now
                    </button>
                </div>
            </div>
            <div>
                <img src={BannerImg3} />
                <p className="legend">Banner 3</p>
                <div className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 max-w-md md:max-w-lg text-black space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Amazing Car Deals
                    </h2>
                    <p className="text-sm md:text-base">
                        Discover the best car offers with exclusive discounts and premium features. 
                        Find your dream car today!
                    </p>
                    <button className="btn btn-primary text-black">
                        Shop Now
                    </button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;