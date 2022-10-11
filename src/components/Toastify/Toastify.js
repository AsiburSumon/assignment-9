import React from 'react';
import './Toastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
        const notify =()=>{
            toast('No more Topics available now', {position: toast.POSITION.TOP_CENTER})
        }
        return (
            <div>
                <button onClick={notify} className='more-topics'>More Topics</button>
                <ToastContainer />
            </div>
        );
};

export default Toastify;