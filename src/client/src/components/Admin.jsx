const Admin = () => {
    return(
        
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-lg p-5 bg-opacity-80">
            
            <div>
                <h1 className="font-bold font-bold text-4xl">Admin</h1>
            </div>

            <div className="flex h-full items-center justify-center">

                <div className="">
                
                    <div className="btn-group m-3 ">
                        <input type="radio" name="options" data-title="OpenTender" className="btn w-[150px]" />
                        <input type="radio" name="options" data-title="SelectiveTender" className="btn" />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">Tender Title</h1>
                        <input type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">Tender Description</h1>
                        <input type="text" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">Start Date</h1>
                        <input type="text" placeholder="Date in Epoch" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">End Date</h1>
                        <input type="text" placeholder="Date in Epoch" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    

                    <div className="flex justify-center">
                        <button className="btn bg-primary">Create tender</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Admin;