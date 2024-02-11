"use client"
import React from "react";
import Popup from "./base/Popup";
import Dropdown from "./base/Dropdown";
import { icons } from "@/app/utils/icons";
function PopupInvoice() {

  function handleSubmit(e){
    e.preventDefault()

  }

  return (
    <Popup>
      <div id="popup-header">Create a new invoice</div >
      <form id="popup-form" onSubmit={(e) => handleSubmit(e)} >
        <div id="popup-id-client">
          <input required type="text" placeholder="Invoice Id" />
          <input required type="text" placeholder="Client's name" />
        </div>
        <div id="popup-amount-dropdown" >
            <span id="popup-dollar" >$</span>
            <input required type="text" pattern="[0-9]+([\.,][0-9]+)?" title="Please enter numbers only"  placeholder="Amount" />
            <div id="popup-dropdown" >
                <Dropdown></Dropdown>
            </div>
        </div>
        <div id="popup-submit-container" >
          <button id="popup-submit" >
            <span id="popup-submit-text" >Create</span>
            <div id="popup-submit-icon" >{icons.rightarrow}</div>
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupInvoice;
