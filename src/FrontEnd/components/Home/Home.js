import React from 'react';
// import Slider from '../../Slider/Slider';
import Services from '../ServiceCategories/Services/Services';
import WhyUseAriTechs from './WhyUseAriTechs';
import FreeEvaluation from './FreeEvaluation';

const Home = () => {
    return (
        <div className=''>
            {/* <Slider></Slider> */}
            <Services></Services>
            <WhyUseAriTechs></WhyUseAriTechs>
            <FreeEvaluation></FreeEvaluation>
        </div>
    );
};

export default Home;