import React from 'react';
import Circle from '../../media/circle.JPG';
import Circle2 from '../../media/circle2.JPG';
import Microphone from '../../media/microphone.jpg';
import Car from '../../media/Classic-car.jpg';
import RWB from '../../media/IMG_9434.jpg';
import './issues.css';

const Issues = props => {

    return (
        <div className='issues-container'>
            <div className='issue-container'>
                <img src={Circle} className='circle-img' alt='circle-img' />
                <div className='issue-text'>
                    <h1 className='issue-text-title'>A relentless civic innovator, Joshua Ferguson delivers for Vermont.</h1>
                    <h3 className='issue-text-paragraph'>As a Senator Joshua Ferguson will ensure that Rutland County has a clear, principled voice in Montpelier and concerns of communities are heard and articulated with civility. As a citizen, Ferguson has worked to empower youth and communities, expand opportunity, improve public health, promote a culture of innovation, and advance equity and dignity for all. Working people and youth often bear the greatest burden of the challenges facing their communities, while disparities persist along lines of class, geography, status, race, and lack of meaningful participation in the democratic process. <br /><br />Joshua is ready to work for Rutland County.</h3>
                </div>
            </div>
            <div className='issue-container-odd'>
                <img src={Circle2} className='circle-img' alt='circle-img' />
                <div className='issue-text-odd'>
                    <h1 className='issue-text-title'>HEALTHY FAMILIES & HEALTHY COMMUNITIES</h1>
                    <h3 className='issue-text-paragraph'>“The health and safety of our communities is a direct reflection of the health and safety of individuals and families – the lifeblood of community.” <br /><br />Affordable child care and elder care have been key service issues in Vermont, which present a fundamental challenge to the wellbeing of families and communities, especially young families in Rutland County. Child care is essential and families are continuing to voice concerns of access and affordability, options and flexibility. This should be a leading priority for policymakers. Likewise, the realities of an aging population requires affordable elder care and demands that leaders respond to a growing need.<br /><br />In addition, public health remains at the forefront of political discourse since the onset of the COVID-19  pandemic and post-pandemic. The suicide rate is increasing, addiction is widespread, juvenile delinquency is growing, mental health needs remain largely unattended, and children have significant gaps in education and early development as a result. These issues, however, existed before the pandemic, and now are amplified to a degree that calls public health professionals and diverse stakeholders to partner with policymakers to seek solutions.</h3>
                </div>
            </div>
            <div className='issue-container'>
                <img src={Microphone} className='circle-img' alt='microphone' />
                <div className='issue-text'>
                    <h1 className='issue-text-title'>ECONOMIC GROWTH & ECONOMIC SECURITY</h1>
                    <h3 className='issue-text-paragraph'>“When people come, they should know that our county says yes to business, yes to innovation, and yes to growing opportunities for everyone.” <br /><br />Downtown revitalization and rural economic development go hand-in-hand. Both require the energy, vision and vitality of the citizen sector, where profit and nonprofit enterprise thrives, where businesses and organizations work to create local economies. Policy frameworks should enable communities and developers to build incubators and hubs of business growth; promote technical training and skills programs and opportunities; enhance public private partnerships, and find ways to retain emerging Vermont talent across sectors. <br /><br />Key sectors to watch in Vermont: aviation, ecotourism, food and beverage, technology, organic agriculture, manufacturing, cannabis, recreation, history tourism, real estate.</h3>
                </div>
            </div>
            <div className='issue-container-odd'>
                <img src={Car} className='circle-img' alt='car' />
                <div className='issue-text-odd'>
                    <h1 className='issue-text-title'>CRITICAL INFRASTRUCTURE PRIORITIES</h1>
                    <h3 className='issue-text-paragraph'>“Rutland should have reliable and safe infrastructure that is fit for the future.”<br /><br />There are a range of infrastructure opportunities and critical needs to address in Rutland County. Deferred maintenance and underinvestment does not serve the interest of communities. People ultimately bear the costs when critical infrastructure needs are not met. Looking forward, there will be updates to existing structures and  projects ranging from crosswalks and bike paths to roundabouts and pedestrian bridges. <br /><br />Primary areas of concern: modernizing water systems; retaining homegrown construction and civil engineering talent; shoreline infrastructure to stabilize shorelines and promote environmental protection and safe recreation; rural broadband and digital infrastructure; investing in dams, roads, sidewalks, and bridges throughout the region to improve the overall state of infrastructure.</h3>
                </div>
            </div>
            <div className='issue-container'>
                <img src={RWB} className='circle-img' alt='red white blue' />
                <div className='issue-text'>
                    <h1 className='issue-text-title'>CULTURE OF INNOVATION</h1>
                    <h3 className='issue-text-paragraph'>“We should focus our energies on promoting a culture of innovation while recognizing that change is always underway. Vermont is a state of innovation.”<br /><br />By its nature, Vermont is a start-up state and a state of innovation. Young talent and seasoned businesses face the headwinds of high inflation yet continue to possess a drive and thirst for innovation. All Vermonters should have an opportunity to pursue dreams and fulfill a higher potential. When civic engagement and leadership culture embraces innovation it can lift our civic spirit and sense of becoming something greater together. </h3>
                </div>
            </div>
        </div>
    )
};

export default Issues;
