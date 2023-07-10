import { useState } from "react";
import "./App.css";

function App() {
  const[formData,setFormData]=useState({"candidates":false,
  "city":"","comments":false,"offers":false,"country":"","emailaddress":"","firstName":"","lastName":"","postalCode":"","pushNotification":"","state":"","streetAddress":""})
  function onChangeHandler(event){
    const{type,name,value,checked}=event.target
    setFormData((prevState)=>{
        return {...prevState,[name]:type==="checkbox"?checked:value}
    })
  }

  function submitEventHandler(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="w-screen min-h-screen overflow-x-hidden overflow-y-auto flex justify-center box-border">
    <div className="w-[52%] shadow-lg p-10">
    <form className="flex flex-col gap-4 " onSubmit={submitEventHandler}>
    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="firstName" className="font-medium ml-1">First Name</label>
      <input type="text" onChange={onChangeHandler} value={formData.firstName} placeholder="Enter Your First Name" name="firstName" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="lastName" className="font-medium ml-1">Last Name</label>
      <input type="text" onChange={onChangeHandler} value={formData.lastName} placeholder="Enter Your Last Name" name="lastName" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="emailaddress" className="font-medium ml-1">Email Address</label>
      <input type="email" onChange={onChangeHandler} value={formData.emailaddress} placeholder="Enter Your Email Address" name="emailaddress" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <div className="flex flex-col h-[10%] gap-1">
    <label htmlFor="country" className="font-medium ml-1">Country</label>
    <select name="country" onChange={onChangeHandler} value={formData.country}  id="" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2">
      <option value="India">India</option>
      <option value="United States">United States</option>
      <option value="America">America</option>
      <option value="Canada">Canada</option>
    </select>
    </div>
    
    <div className="flex flex-col h-[20%] gap-1">
    <label htmlFor="streetAddress" className="font-medium ml-1">Street Address</label>
      <textarea onChange={onChangeHandler} value={formData.streetAddress} placeholder="ABC Colony" name="streetAddress" id="streetAddress" cols="30" rows="10" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"></textarea>
    </div>
      
    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="city" className="font-medium ml-1">City</label>
      <input type="text" onChange={onChangeHandler} value={formData.city} placeholder="Enter Your City Name" name="city" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="state" className="font-medium ml-1">State / Province</label>
      <input type="text" onChange={onChangeHandler} value={formData.state} placeholder="Enter Your State Name" name="state" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <div className="flex flex-col h-[10%] gap-1">
      <label htmlFor="postalCode" className="font-medium ml-1">Zip / Postal Code</label>
      <input type="text" onChange={onChangeHandler} value={formData.postalCode} placeholder="Enter Your Zip Code" name="postalCode" className="rounded-lg h-[95%] border-[0.05rem] border-blue-200 p-2"/>
    </div>

    <fieldset>
      <legend className="font-medium">By Email</legend>
      <div className="mt-2">
      <div className="flex gap-3">
      <input type="checkbox" onChange={onChangeHandler} value={formData.comments} name="comments" id="comments" className="w-[1rem]" />
        <label htmlFor="comments" className="font-medium">Comments</label>
      </div>
      <div className="ml-7  text-slate-500">Get notified when someones posts a comment on a posting.</div>
      </div>
       
      <div className="mt-2">
      <div className="flex gap-3">
      <input type="checkbox" onChange={onChangeHandler} value={formData.candidates} name="candidates" id="candidates" className="w-[1rem]" />
        <label htmlFor="candidates" className="font-medium">Candidates</label>
      </div>
      <div className="ml-7  text-slate-500">Get notified when a candidate applies for a job.</div>
      </div>

      <div className="mt-2">
      <div className="flex gap-3">
      <input type="checkbox" onChange={onChangeHandler} value={formData.offers} name="offers" id="offers" className="w-[1rem]" />
        <label htmlFor="offers" className="font-medium">Offers</label>
      </div>
      <div className="ml-7  text-slate-500">Get notified when a candidate accepts or rejects an offer.</div>
      </div>

    </fieldset>

    <div>
      <h2 className="font-medium">Push Notifications</h2>
      <h2 className="text-slate-500">These are delivered via SMS to your mobile phone.</h2>
    </div>

    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <input type="radio" onChange={onChangeHandler} checked={formData.pushNotification==="everything"} name="pushNotification" value="everything" className="w-[1rem]"/>
        <label htmlFor="everything" className="font-medium">Everything</label>
      </div>
      <div className="flex gap-3">
        <input type="radio" onChange={onChangeHandler} checked={formData.pushNotification==="sameAsEmail"} name="pushNotification" value="sameAsEmail" className="w-[1rem]" />
        <label htmlFor="sameAsEmail" className="font-medium">Same as email</label>
      </div>
      <div className="flex gap-3">
        <input type="radio" onChange={onChangeHandler} checked={formData.pushNotification==="noPushNotification"} name="pushNotification" value="noPushNotification" className="w-[1rem]" />
        <label htmlFor="noPushNotification" className="font-medium">No push notifications</label>
      </div>
    </div>
    <button className="bg-sky-400 text-white px-3 py-2 hover:bg-sky-600 w-[15%] rounded-lg font-medium duration-200">Save</button>
    </form>
    

    </div>
    </div>
  )
}

export default App;
