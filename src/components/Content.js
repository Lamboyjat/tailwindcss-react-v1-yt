import React from 'react'
import ImageOne from '../images/about.jpg'
import ImageTwo from '../images/service.jpg'

const Content = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageOne} alt="el-boy9" className="h-full rounded mb-20 shadow"/>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>Suggest Something</h2>
                    <p className='mb-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sunt, aperiam dolorem fugiat magni natus, cumque incidunt possimus repellendus fuga rem amet magnam repudiandae, odio enim culpa. Natus, excepturi ducimus?
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={ImageTwo} alt="el-boy5" className="h-full rounded mb-20 shadow"/>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl mb-2'>Suggest Something</h2>
                <p className='mb-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sunt, aperiam dolorem fugiat magni natus, cumque incidunt possimus repellendus fuga rem amet magnam repudiandae, odio enim culpa. Natus, excepturi ducimus?
                </p>
            </div>
        </div>
        </>
    )
}

export default Content
