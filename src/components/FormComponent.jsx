import React, { useState } from 'react'

function FormComponent() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [items, setItems] = useState([])


    const AddData = () => {
        console.log("hello")
        if (input1.trim() !== "" && input2.trim() !== "") {
            setItems([...items, { input1, input2 }])
            setInput1('')
            setInput2('')

        }

    }
    const DeleteSelected = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
      };
      
    return (
        <>
            <div className='mx-w-md mx-auto mt-8 p-4 '>

                <h2 className='text-center text-3xl font-bold m-5'>Director and Movies</h2>

                <input onChange={(e) => setInput1(e.target.value)} type="text" placeholder='Director Name' className='bg-slate-200 border border-none w-2/5 px-2 py-2 m-5' />
                <input onChange={(e) => setInput2(e.target.value)} type="text" placeholder='Movie Name' className='bg-slate-200 border  border-none border-gray-400 w-2/5 px-2 py-2' />
                <button onClick={AddData} className='bg-green-500 text-white px-4 py-2 ml-4'>Add</button>

            </div>

            {items.map((item, index) => (
                <div key={index} className='flex  text-black items-center mx-w-md mx-auto ml-4'>
                    <div  className='bg-white border border-gray-400 w-2/5 px-2 py-2 m-2'>
                    
                       {item.input1} 
                    </div>
                    <div  className='bg-white  border border-gray-400 w-2/5  py-2'>
                    {item.input2}
                    </div>
                    <button onClick={() => DeleteSelected(index)} className='bg-red-600 text-white  px-4 py-2 ml-4'>
                        Remove
                    </button>
                </div>
            ))}


        </>
    )
}

export default FormComponent
