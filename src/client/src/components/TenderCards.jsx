const TenderCards = (props) => {
    

    return(
        
        <div className=" flex flex-row flex-wrap justify-evenly ">

            {props.ended?
                <div>

                </div>
                :
                <div className="bg-base-300 h-[250px] w-[350px] rounded-lg p-4 my-7 mx-4 border-solid border-primary border-t-[1px] border-b-[1px] flex flex-col text-center ">
                <div className="text-3xl">
                    {props.title}
                </div>
                <div className="flex flex-col h-full justify-center">
                    {(props.desc.length)>77 && ( <div>{props.desc.slice(0,77)} . . .</div> )}
                    {(props.desc.length)<77 && ( <div>{props.desc}</div> )}
                </div>
                <div>
                    <button className="btn bg-base-100 m-3">Open</button>
                </div>
            </div>
            }

            
        </div>
       
    );
}

export default TenderCards;