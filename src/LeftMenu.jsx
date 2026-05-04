import React, { useState } from "react";
import "./Viewer3D.css";
import { div } from "three/src/nodes/math/OperatorNode.js";

export default function LeftMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [reset, setReset] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trimvariant, setTrimVariant] = useState("");
  const [engineType, setEngineType] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [drivetrainType, setDrivetrainType] = useState("");
  
  const modelOptions = {
    Ford: ["Focus"],
    Chevrolet: ["Cruze"],
    Dodge: ["Dart"]
  };

  const trimVariantOptions = {
    Focus : ["Trend", "Titanium", "Titanium X", "ST-Line", "ST-Line X", "Active", "Active X", "Vignale", "ST"],
    Cruze : ["L", "LS", "LT", "Premier", "Diesel"],
    Dart : ["SE", "SXT", "Aero", "GT", "Limited"]
  }

  const engineTypeOptions = {
    Focus : { Trend : ["I4", "I3"], Titanium : ["I4", "I3"],
        "Titanium X" : ["I4", "I3"], "ST-Line" : ["I4", "I3"],
        "ST-Line X" : ["I4", "I3"], Active : ["I4", "I3"],
        "Active X" : ["I4", "I3"], Viganle : ["I4", "I3"], ST : ["I4"]
    },
        Cruze : { L : ["I4"], LS : ["I4"],LT : ["I4"], Premier : ["I4"],Diesel : ["I4"]}, 
    Dart : {SE : ["I4"], SXT : ["I4"], Aero : ["I4"], GT : ["I4"], Limited : ["I4"]}
  }

  const transmissionTypeOptions = {
    Focus : { Trend : ["6-speed Manual", "8-speed Automatic" ], Titanium : ["6-speed Manual", "8-speed Automatic"],
        "Titanium X" : ["6-speed Manual", "8-speed Automatic"], "ST-Line" : ["6-speed Manual", "8-speed Automatic"],
        "ST-Line X" : ["6-speed Manual", "8-speed Automatic"], Active : ["6-speed Manual", "8-speed Automatic"],
        "Active X" : ["6-speed Manual", "8-speed Automatic"], Viganle : ["8-speed Automatic"], ST : ["6-speed Manual"]
    },
    Cruze : { L : ["6-speed Manual", "6-speed Automatic"], LS : ["6-speed Manual", "6-speed Automatic"],
        LT : ["6-speed Manual", "6-speed Automatic", "9-speed Automatic", "CVT"], Premier : ["6-speed Automatic","9-speed Automatic"],
        Diesel : ["6-speed Manual", "6-speed Automatic"]}, 
    Dart : {SE : ["6-speed Manual", "6-speed Automatic"], SXT : ["6-speed Manual", "6-speed Automatic", "6-speed Dual Clutch"], 
        Aero : ["6-speed Dual Clutch"], GT : ["6-speed Manual", "6-speed Automatic"], Limited : ["6-speed Manual", "6-speed Automatic", "6-speed Dual Clutch"]} 
  }

  const drivetrainTypeOptions = {
    Focus : { Trend : ["Front-Wheel Drive"], Titanium : ["Front-Wheel Drive"],
        "Titanium X" : ["Front-Wheel Drive"], "ST-Line" : ["Front-Wheel Drive"],
        "ST-Line X" : ["Front-Wheel Drive"], Active : ["Front-Wheel Drive"],
        "Active X" : ["Front-Wheel Drive"], Viganle : ["Front-Wheel Drive"], ST : ["Front-Wheel Drive"]
    },
    Cruze : { L : ["Front-Wheel Drive"], LS : ["Front-Wheel Drive"],LT : ["Front-Wheel Drive"], Premier : ["Front-Wheel Drive"],Diesel : ["Front-Wheel Drive"]},
    Dart : {SE : ["Front-Wheel Drive"], SXT : ["Front-Wheel Drive"], Aero : ["Front-Wheel Drive"], GT : ["Front-Wheel Drive"], Limited : ["Front-Wheel Drive"]}
  }

  function handleReset(){
    setMake("");
    setModel("");
    setYear("");
    setTrimVariant("");
    setEngineType("");
    setTransmissionType("");
    setDrivetrainType("");
  }
  
  function handleMakeChange(e) {
    setMake(e.target.value);
    setModel(""); 
    setTrimVariant(""); 
    setEngineType(""); 
    setTransmissionType("");
    setDrivetrainType(""); 
  }

  const handleModelChange = (e) =>{
    setModel(e.target.value);
  }

  function handleYearChange(e){
    setYear(e.target.value);
  }

  const handleTrimVariantChange = (e) =>{
    setTrimVariant(e.target.value);
  }

  const handleEngineTypeChange = (e) =>{
    setEngineType(e.target.value);
  }

  const handleTransmissionTypeChange = (e) =>{
    setTransmissionType(e.target.value);
  }

  const handleDrivetrainTypeChange = (e) =>{
    setDrivetrainType(e.target.value);
  }


  return (
    <div className={`left-menu ${collapsed ? "collapsed" : ""}`}>
      
      <div className="menu-header">
        {!collapsed && <h2>Project: Omni-Mech</h2>}
        <button 
          className="collapse-btn" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "➤" : "◀"}
        </button>
      </div>

    {/* Menu content */}

    {/* Dropdowns */}
    {/* Dropdowns first tier */}
      {!collapsed && (
        <div className="menu-content">
        {/* Reset Button */}
        <button onClick={handleReset}>Reset</button>
        {/* Make Dropdown */}
        <select value={make} onChange={handleMakeChange}>
            <option value="" disabled hidden>Make</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Dodge">Dodge</option>
        </select>

        {/* Model Dropdown */}
        <select value={model} onChange={handleModelChange} disabled={!make}>
            <option value="" disabled hidden>Model</option>
            {make && modelOptions[make].map((m) => (
                <option key={m} value={m}>{m}</option>
            ))}
        </select>

        {/* Year Dropdown */}
        <select value={year} onChange={handleYearChange}>
            <option value="" disabled hidden>Year</option>
            <option value="2000">2000</option>
            <option value="2010">2010</option>
            <option value="2018">2018</option>
        </select>

        {/* Trim / Variant Dropdown */}
        <select value={trimvariant} onChange={handleTrimVariantChange} disabled={!model}>
            <option value="" disabled hidden>Trim / Variant</option>
            {model && trimVariantOptions[model].map((tv)=>
                (<option key={tv} value={tv} >{tv}</option>))}
        </select>

        {/* Engine Type Dropdown */}
        <select value={engineType} onChange={handleEngineTypeChange} disabled={!trimvariant}>
            <option value="" disabled hidden>Engine Type</option>
            {trimvariant && engineTypeOptions[model][trimvariant].map((et)=>
                (<option key={et} value={et}>{et}</option>))}
        </select>

        {/* Transmission Type Dropdown */}
        <select value={transmissionType} onChange={handleTransmissionTypeChange} disabled={!engineType}>
            <option value="" disabled hidden>Transmission</option>
            {engineType && transmissionTypeOptions[model][trimvariant].map((tt)=>
                (<option key={tt} value={tt}>{tt}</option>))}
        </select>

        <select value={drivetrainType} onChange={handleDrivetrainTypeChange} disabled={!transmissionType}>
            <option value="" disabled hidden>Drivetrain</option>
            {transmissionType && drivetrainTypeOptions[model][trimvariant].map((dt)=>
            (<option key={dt} value={dt}>{dt}</option>))}
        </select>

        <select name="" id="">
          <option value="" >System</option>

        </select>

        <select name="" id="">
          <option value="" >Sub-System</option>
        </select>

        <select name="" id="">
          <option value="" >Component Group</option>
        </select>

        <select name="" id="">
          <option value="" >Individual Part</option>
        </select>
        
        </div>
      )}
 

    </div>
  );
}

