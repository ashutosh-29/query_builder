import RuleField from "./RuleField";
import React, { useEffect, useRef, useState } from "react";
import { FiltersContext } from '../helpers/Context';
import { Link } from "react-router-dom";
const QueryBuilder=()=>{
    let andRef=useRef(null);
    let orRef=useRef(null);
    const [filters,setFilters]=useState([{"field":"Theme","condition":"Equals","value":"Offer","type":'rule'}]);
    const [readable,setReadable]=useState("");
    const [jsonQuery,setJsonQuery]=useState({"children":[],"conjunction":'AND',"not":false,"type":'rule_group'});
    const [operation,setOperation]=useState("AND");
    const add=()=>{
        filters.push({"field":"Theme","condition":"Equals","value":"Offer","type":'rule'});
        setFilters([...filters]);
    }
    const changeCondition=(val)=>{
        if(val==="AND"){
            andRef.current.className='px-2';
            orRef.current.className='bg-gray-700 px-2';
            setOperation("AND");
        }
        else{
            orRef.current.className='px-2';
            andRef.current.className='bg-gray-700 px-2';
            setOperation("OR");
        }
        
        
    }
    const convertToReable=()=>{
        let ans="";
        filters.map((filter,idx)=>{
            let text=`"(field.${filter.field}) ${filter.condition} `;
            text+=`/`;
            text+=`"${filter.value}"`;
            text+='/"';
            if(idx!==filters.length-1)text+=operation==="AND"?" && ":" || ";
            ans+=text;
        });
        setReadable(ans);
    }
    useEffect(()=>{
        convertToReable();
        jsonQuery['children']=filters;
        jsonQuery['conjunction']=operation;
        setJsonQuery({...jsonQuery});
    },[filters,operation])
    
  return (
    <>
      <div className="w-4/5 m-auto">
        <div className="w-full p-6 bg-purple-800">
            {
                filters.length<=1?<>
                    <h1 className="text-white font-semibold p-2">Create tag and query</h1>
                    <p className="text-gray-300 p-2"> The query you build will be saved in your active view</p>
                </>:<>
                    <h1 className="text-white font-semibold p-2">Build your query</h1>
                    <p className="bg-purple-900 rounded p-2 text-white"><span className="font-semibold">Query: </span>{readable}</p>
                </>
            }
            
            
        </div>

        <div className="w-full bg-gray-800 py-2">
            <div className="w-4/5 m-auto my-20 p-4 bg-gray-700 border border-gray-400 rounded " >
                {
                    filters.length>1 ? <div className="flex w-20 justify-between rounded bg-purple-700 hover:bg-purple-800 text-white font-semibold focus:outline-none focus:shadow-outline mb-2">
                        <div onClick={()=>changeCondition("AND")} ref={andRef} className="px-2">AND</div> 
                        <div onClick={()=>changeCondition("OR")} ref={orRef} className="bg-gray-700 px-2">OR</div>
                    </div> : <></>
                }
                {
                    filters.map((filter,idx)=>{
                        return <FiltersContext.Provider key={idx} value={{filters,setFilters}}>
                            <RuleField index={idx} />
                        </FiltersContext.Provider>
                })
                }
                <button onClick={()=>add()} className="bg-purple-700 hover:bg-purple-800 text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline" type="button">+ Add Filter</button>
            </div>
            <div className="flex w-full justify-end p-4">
                {
                    filters.length > 1 ? <Link to='/output' state={{data:jsonQuery}} className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Finish</Link>:<></>
                }
                
            </div>
        </div>
      </div>
    </>
  );
}

export default QueryBuilder;