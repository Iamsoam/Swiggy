

const ResCard=(props)=>{
   
    const {resdata} = props;

    console.log(resdata)

    return(
        <div className='res-card m-4 p-4 w-70 hover:shadow-lg font-graphic bg-gray-200 rounded-lg'>
            <div className='res-img'>
                {/* <img className="rounded" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpe28EZ9yMsijrOZqh-o1cFqaPjdpbPMQJw&s' alt='Restaurant' /> */}
                <img className="rounded w-70 h-60 " src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ resdata.info.cloudinaryImageId} alt='Restaurant' />
            </div>
            <div className='res-content'>
                <h3 className="py-4">{resdata.info.name}</h3>
                <p>{resdata.info.cuisines.join(",")}</p>
                {/* <p>Area:{resdata.info.areaName}</p> */}
                <p>{resdata.info.avgRating} ⭐⭐⭐⭐</p>
                <p>Delivery time:{resdata.info.sla.deliveryTime} mins</p>
                <p>Cost For Two : {resdata.info.costForTwo}</p>
        </div>

     </div>   
    )
}


export const withPromotedLabel =(ResCard)=>{
    return(props)=>{
        return (
            <div className="">
                <label className="text-white border-2 rounded-lg bg-black absolute px-2 mt-1 mx-4">
                    Open
                </label>
                <ResCard {...props} />
            </div>
        )  }
}

export default ResCard;