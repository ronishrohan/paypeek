"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import Popup from "./base/Popup";
import Dropdown from "./base/Dropdown";
import { icons } from "@/app/utils/icons";
import { createInvoice } from "../../utils/createInvoice";
import { useInvoicePopup } from "./InvoicePopupWrapper";


function PopupInvoice() {
  const { handleClose } = useInvoicePopup();
  const [state, setState] = useState(0);
  const clientRef = useRef();
  const idRef = useRef();
  const amountRef = useRef();
  const [pending, startTransition] = useTransition();

  function handleStateChange() {
    setState((prev) => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    startTransition(async () => {
      const data = {
        id: idRef.current.value,
        client: clientRef.current.value,
        amount: amountRef.current.value,
      };
      await createInvoice(data, state);

      handleClose();
    });
  }

  return (
    <Popup>
      <div id="popup-header">
        <div>Create a new invoice</div>
        <button onClick={handleClose} id="popup-close-button">
          {icons.close}
        </button>
      </div>
      <form id="popup-form" onSubmit={handleSubmit}>
        <div id="popup-id-client">
          <input
            ref={idRef}
            name="id"
            required
            type="text"
            placeholder="Invoice Id"
          />
          <input
            ref={clientRef}
            name="client"
            required
            type="text"
            placeholder="Client's name"
          />
        </div>
        <div id="popup-amount-dropdown">
          <span id="popup-dollar">$</span>
          <input
            ref={amountRef}
            name="amount"
            required
            type="text"
            pattern="[0-9]+([\.,][0-9]+)?"
            title="Please enter numbers only"
            placeholder="Amount"
          />
          <div id="popup-dropdown">
            <Dropdown handleChange={handleStateChange}></Dropdown>
          </div>
        </div>
        <div id="popup-submit-container">
          <button disabled={pending} id="popup-submit">
            {pending ? (
              <span className="spinning">{icons.loading}</span>
            ) : (
              <>
                <span id="popup-submit-text">Create</span>
              </>
            )}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupInvoice;
