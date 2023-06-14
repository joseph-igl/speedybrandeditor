import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/context';
import { v4 as uuidv4 } from 'uuid';
const Modal = () => {
    const [title,setTitle] = useState('');
    const [keywords,setKeywords] = useState([]);
    const [temp,setTemp] = useState('');
    const {show,onClose,addTopics} = useAuth();
    // console.log(keywords,'keywords')
    return <div style={{display: show?'block':'none'}} className='p-4 text-[1rem] w-[40%] h-fit bg-slate-100 border-slate-200 border-2 m-auto absolute inset-0'>
        <div className="flex justify-between">
            <h1 className='text-[1.5rem]'>Add New Topic</h1>
            <button className='text-[1.3rem]' onClick={()=>{onClose()}}>X</button>
        </div>
        <div className='m-auto'>
            <label htmlFor='topicName' className='w-full'>Topic name:</label><br/>
            <input id='topicName' type='text' className='mb-[1rem] w-[85%]' onChange={
                (e)=>{
                    setTitle(e?.target?.value)
                    }}/><br/>
            <label htmlFor='keywords' className='mb-[1rem]'>Keywords:</label> 
            <span>{keywords?.length>0&&keywords.join(',')}</span><br/>
            <input id='keywords' value={temp} className='mb-[1rem] ' onChange={e=>setTemp(e.target?.value)}/> <button onClick={e=>{
                e.preventDefault();
                setKeywords(prev=>[...prev,temp])
                setTemp('')
            }} className='text-[1rem] border-2 border-black px-1'>+</button>
            <button type='submit' onClick={(e)=>{
            addTopics({title:title,keywords:keywords,id:uuidv4()})
            setKeywords([])
            setTitle('')
            onClose() 
        }} className='flex items-center bg-orange-600 p-2 h-fit w-fit m-auto' >Submit</button>
        </div>
    </div>;
}

export default Modal;