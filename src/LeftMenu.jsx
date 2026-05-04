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
  const [system, setSystem] = useState("");
  const [subSystem, setSubSystem] = useState("");
  
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

  const systemOptions = {
    "System" : ["Engine", "Transmission", "Drivetrain", "Fuel System", "Cooling System", "Electrical",
      "Suspension", "Brakes", "Steering", "HVAC", "Exhaust", "Body/Interior", "Hybrid/EV High-Voltage", "ADAS/Sensors/Infotainment"
    ]
  }

  const subSystemOptions = {
    "Engine" : ["Intake System (airbox, throttle body, intake manifold)",
      "Exhaust System (Engine‑side) (manifold, O2 sensors, turbo)",
      "Fuel Delivery (Engine‑side) (injectors, rails, HPFP)",
      "Ignition System (coils, plugs, wires)",
      "Lubrication System (oil pump, pan, filter, galleries)",
      "Cooling (Engine‑side) (water pump, thermostat, jackets)",
      "Timing System (chain/belt, tensioners, VVT actuators)",
      "Crankshaft / Pistons / Block Assembly",
      "Cylinder Head / Valvetrain",
      "Engine Sensors & Actuators (MAF, MAP, TPS, ECT, knock, cam/crank sensors)",
      "Engine Control System (ECU, harness, grounds)",],
    "Transmission" : ["Gear Train / Shafts",
        "Clutch Assembly (Manual)",
        "Torque Converter (Auto)",
        "Valve Body / Mechatronics",
        "Hydraulic System",
        "Shift Linkage / Cables",
        "Transmission Cooling",
        "Transmission Sensors","TCM / Control Electronics","Differential (if integrated)",],
    "Drivetrain" : ["Front Axle / CV Shafts", "Rear Axle / Half‑Shafts","Driveshaft / Prop Shaft",
          "Transfer Case","Differentials (Front/Rear)","AWD Coupling / PTU","U‑Joints / Carrier Bearings",],
    "Fuel System" : ["Fuel Tank","Fuel Pump (Low‑Pressure)","Fuel Pump (High‑Pressure)",
          "Fuel Lines / Rails","EVAP System","Diesel Aftertreatment (DEF, SCR)","Fuel Filters / Water Separators", ],
    "Cooling System" : ["Radiator / Condenser Stack", "Water Pump (Mechanical or Electric)","Thermostat / Coolant Valves","Cooling Hoses / Pipes",
      "Engine Cooling Loop","Transmission Cooling Loop","Hybrid/EV Battery Cooling Loop","Inverter Cooling Loop",],
    "Electrical" : ["Charging System (alternator, DC‑DC converter)", "Starting System (starter, solenoid)","Battery / Cables","Fuses / Relays / Junction Boxes","Wiring Harnesses",
      "Grounds","Lighting (Exterior)","Lighting (Interior)","Instrument Cluster","Body Control Modules","CAN Bus / LIN Bus Networks",],
    "Suspension" : ["Front Suspension Assembly", "Rear Suspension Assembly","Control Arms","Struts / Shocks","Springs","Bushings","Subframe / Crossmember","Stabilizer Bars / End Links",],
    "Brakes" : ["Front Brakes","Rear Brakes","Brake Lines / Hoses","ABS System","Brake Booster / Master Cylinder","Parking Brake (Mechanical or Electronic)","Brake Control Module", ],
    "Steering" : ["Steering Rack (Hydraulic or EPS)","Steering Column","Tie Rods / Ends","Power Steering Pump (Hydraulic)","EPS Motor / Module","Intermediate Shaft","Steering Angle Sensor", ],
    "HVAC" : ["Heater Core", "Evaporator","Blower Motor","Blend Doors / Actuators","AC Compressor","AC Lines / Expansion Valve","Cabin Air Filtration",],
    "Exhaust" : ["Exhaust Manifold","Catalytic Converter(s)","Downpipe","Muffler / Resonator","Exhaust Piping","O2 Sensors","DPF / SCR (Diesel)",],
    "Body/Interior" : ["Doors / Windows / Regulators", "Seats / Seat Motors","Dashboard / Console","Airbags / SRS","Interior Trim","Exterior Trim","Mirrors","Sunroof / Roof Components",
      "Locks / Latches","Wipers / Washers","Body Panels","HVAC Ducting","Infotainment Displays","Speakers / Amplifiers",],
    "Hybrid/EV High-Voltage" : ["High‑Voltage Battery Pack", "Battery Management System (BMS)","Inverter / Converter","Electric Drive Motor(s)","Onboard Charger",
      "DC‑DC Converter","HV Cables / Contactors","Thermal Management (Battery + Inverter)",],
    "ADAS/Sensors/Infotainment" : ["Radar Sensors", "Camera Systems","Ultrasonic Sensors","LIDAR (if equipped)","ADAS Control Module",
      "Lane‑Keep/ACC/AEB Systems","Telematics/Connectivity","Infotainment Head Unit","Navigation","Antenna Systems","Parking Assist","Blind Spot Monitoring",]

      
  }

  function handleReset(){
    setMake("");
    setModel("");
    setYear("");
    setTrimVariant("");
    setEngineType("");
    setTransmissionType("");
    setDrivetrainType("");
    setSystem("");
    setSubSystem("");
  }
  
  function handleMakeChange(e) {
    setMake(e.target.value);
    setModel(""); 
    setTrimVariant(""); 
    setEngineType(""); 
    setTransmissionType("");
    setDrivetrainType(""); 
    setSystem("");
    setSubSystem("");
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

  const handleSystemChange = (e) =>{
    setSystem(e.target.value);
  }

  const handleSubSystemChange = (e) =>{
    setSubSystem(e.target.value);
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

        <select name="" id="" value = {system} onChange={handleSystemChange} disabled={!drivetrainType}>
          <option value="" disabled hidden>System</option>
          {drivetrainType && systemOptions["System"].map((s)=>
          (<option key={s} value={s} >{s}</option>))}
        </select>

        <select name="" id="" value={subSystem} onChange={handleSubSystemChange} disabled={!system}>

          <option value="" disabled hidden>Sub-System</option>
          {system && subSystemOptions[system] && subSystemOptions[system].map((ss) =>
          (<option key={ss} value={ss}>{ss}</option>))}
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

