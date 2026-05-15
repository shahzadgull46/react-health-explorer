
const HealthCard = ({ health,openSection,handleClick }) => {

  return (
    <div>
      <h1 className="text-4xl font-bold p-4 my-3.5 mx-46" >Health</h1>
  

      <div className="font-bold p-4 my-4 mx-10 text-2xl bg-slate-100 rounded-lg "onClick={()=>handleClick("nutrition")}>
        
        <div className="flex justify-between cursor-pointer">
        <span >1. Nutrition </span>
        <span>▼</span>
        </div>
        {openSection==="nutrition" ? <div className="p-4  mx-10 text-lg " >
        
        <p><b>Energy: </b> {health?.nutrition.energy}</p>
        <p><b>Fat: </b>{health?.nutrition.fat}</p>
        <p><b>Grade: </b> {health?.nutrition.grade}</p>
        <p><b>Protein: </b>{health?.nutrition.protein}</p>
        <p><b>Salt: </b> {health?.nutrition.salt}</p>
        <p><b>Sugar: </b> {health?.nutrition.sugar}</p>
        
        </div> : null}
        </div>
        <div  className="font-bold p-4 my-4 mx-10 text-2xl bg-slate-100 rounded-lg "  onClick={()=>handleClick("safety")}>
          
          <div className="flex justify-between cursor-pointer">
            <span>2. Safety</span>
             <span>▼</span>
          </div>
          {openSection==="safety" ? 
          <div className="p-4  mx-10 text-lg " >
            <p><b>Additives:</b>{health?.safety?.additives}</p>
            <p><b>Allergens:</b>{health?.safety?.allergens}</p>
           </div>
           : null}
           

        </div>
        
         <div  className="font-bold p-4 my-4 mx-10 text-2xl bg-slate-100 rounded-lg " onClick={()=>handleClick("diet")}>

            <div className="flex justify-between cursor-pointer">
                <span>3. Diet</span>
                 <span>▼</span>

            </div>
              {openSection==="diet" ?
              <div className="p-4  mx-10 text-lg " >
               <p><b>Vegan: </b> { health?.diet.vegan===true ?"Yes" : "No" }</p> 
               <p><b>Vegetarian: </b>{ health?.diet.vegetarian===true ?"Yes" : "No" }</p>
                
              </div>
              : null }
              
         </div>


      <div  className="font-bold p-4 my-4 mx-10 text-2xl bg-slate-100 rounded-lg " onClick={()=>handleClick("environment")}>

            <div className="flex justify-between cursor-pointer">
                <span>4. Environment</span>
                 <span>▼</span>

            </div >
            {openSection==="environment" ?
            <div className="p-4  mx-10 text-lg " >
              <p><b>Ecoscore: </b>{health?.environment.ecoscore}</p>
              <p><b>Ecoscore_Grade: </b>{health?.environment.ecoscore_grade}</p>
              <p><b>Packaging: </b>{health?.environment.packaging}</p>
              </div> 
              : null }
       
              
         </div>


      </div>
    
  );
};

export default HealthCard;
