import React from 'react'

const CardContainer = ({children, title, subtitle}) => {
  return (
    <div className={`bg-secondary  p-5 rounded-md flex flex-row  justify-between `}>
      {/* Left */}
      <div className="w-9/12">
        <h1 className="text-lg font-semibold my-2 text-textOne">{title}</h1>
        <p className="text-sm">{subtitle}</p>
        {/* components */}
        {children}
      </div>
      {/* Right */}
      <div className="w-3/12 text-right">
        
          <label className="cursor-pointer flex-row-reverse label">
            <input type="checkbox" className="toggle toggle-primary" checked />
          </label>
    
      </div>
    </div>
  );
}

export default CardContainer