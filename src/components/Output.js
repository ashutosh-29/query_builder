import { useLocation } from "react-router";
const Output= ()=> {
    const loc = useLocation();
    let data=loc.state?.data;
  return (
    <>{
        loc.state===null?<>Invaild</>:<div><pre>{JSON.stringify(data, null, 2) }</pre></div>
    }
    </>
  );
}

export default Output;
