import React, { useContext } from "react";
import { FiltersContext } from "../helpers/Context";
const RuleField=({index})=>{
    const {filters,setFilters}=useContext(FiltersContext);
    const remove= (idx)=>{
        let newFilter=[...filters];
        newFilter.splice(idx, 1);
        setFilters([...newFilter]);
    }
    const handleChange=(op,idx,val)=>{
        filters[idx][op]=val;
        setFilters([...filters]);
    }
    return (
        <div className="flex flex-wrap pb-4 -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Field
                </label>
                <div className="relative">
                    <select value={filters[index].field} onChange={(e)=>handleChange("field",index,e.target.value)} className="block appearance-none w-full bg-gray-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-state">
                        <option value="Theme">Theme</option>
                        <option value="Sub-theme">Sub-theme</option>
                        <option value="Reason">Reason</option>
                        <option value="Language">Language</option>
                        <option value="Source">Source</option>
                        <option value="Rating">Rating</option>
                        <option value="Time_Period">Time Period</option>
                        <option value="Customer_ID">Customer ID</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Condition
                </label>
                <div className="relative">
                    <select value={filters[index].condition} onChange={(e)=>handleChange("condition",index,e.target.value)} className="block appearance-none w-full bg-gray-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-state">
                        <option value="Equals">Equals</option>
                        <option value="Does_not_equal">Does not equal</option>
                        <option value="Like">Like</option>
                        <option value="Not_like">Not like</option>
                        <option value="Is_Empty">Is Empty</option>
                        <option value="Is">Is</option>
                        <option value="Is_not">Is not</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Criteria
                </label>
                <div className="flex">
                    <div className="relative ">
                        <select value={filters[index].value} onChange={(e)=>handleChange("value",index,e.target.value)} className="block appearance-none w-full bg-gray-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500" id="grid-state">
                            <option value="Offer">Offers</option>
                            <option value="Performance">Performance</option>
                            <option value="Platform">Platform</option>
                            <option value="Product_Feedback">Product Feedback</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    <div onClick={() => remove(index)} className="flex items-center ml-2">❌</div>
                </div>
                
            </div>
            
        </div>
    );
  }
  
  export default RuleField;