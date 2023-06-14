import React from 'react';
import TopicsList from './topics-list';
import { useAuth } from '../context/context';
const RecommendedTopics = () => {
    // const DefaultTopics = [
    //     {title:'The Importance of Establishing a Strong Online Presence for Small Business',keywords:['online presence','small businesses','digital marketing', 'branding']},
    //     {title:'How Fast Turnaround Times in Logo and Website Design Benefits Your Business',keywords:['fast turnaround','logo design','website design','branding']},
    //     {title:'Afforadable Branding solutions for Startups and Entrepreneurs',keywords:['affordable branding','startups','entrepreneurs','logo design','website design']},
    //     {title:'The Benifits of Comprehensive Branding Services for Small to Medium-sized Businesses',keywords:['comprehensive branding','small business','logo design','website design','social media management']},
    //     {title:'Expert Tips for Choosing Right Digital Marketing Agency for your Business',keywords:['digital marketing agency','tips','branding','website design','social media management']},
    // ]
    const {topics}= useAuth();
    return <div>
        <p className='bg-slate-100 border-slate-200 border-2 p-2'>Recommended Topics</p>
        {topics?.map((item,index)=>{
            return (<TopicsList key={'topiclist_'+index} title={item?.title} keywords={item?.keywords} uuid={item?.id} />)
        })}
    </div>;
}


export default RecommendedTopics;