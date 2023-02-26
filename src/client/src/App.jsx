import { useState } from 'react';

const App= () => {
  
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn w-max">open modal</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="form-control w-full max-w-xs flex flex-col items-center">
            <label className="label">
              <span className="label-text">What is your name?</span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            
          </div>
        </div>
      </div>
  </div>
  )
}

export default App
