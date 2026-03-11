import { useLocation } from "react-router"

function Product() {
  let {state}=useLocation()
  console.log(state?.product)

  if(!state)
  {
    return <p className="flex text-center text-3xl text-slate-400 justify-center items-center min-h-screen">No product Selected</p>
  }
  return (
    // display product details on UI
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-10 px-6">

      <div className="w-full md:w-2/5 flex justify-center">
        <img 
          src={state?.product?.image} 
          className="w-60 sm:w-72 md:w-80 object-contain"
        />
      </div>

       <div className="w-full md:w-3/5">
          <p className="text-2xl sm:text-3xl mb-6 text-blue-400">
            {state?.product?.title}
          </p>

          <p className="text-lg sm:text-xl mb-4">
            <span className="font-semibold text-gray-700">Description: </span>
            {state?.product?.description}
          </p>

          <p className="text-lg sm:text-xl mb-4">
            <span className="font-semibold text-gray-700">Price: </span>
            ${state?.product?.price}
          </p>

          <p className="text-lg sm:text-xl mb-4">
            <span className="font-semibold text-gray-700">Category: </span>
            {state?.product?.category}
          </p>

          {/* <p>{state?.product?.rating} </p> */}
       </div>

    </div>
  )
}

export default Product