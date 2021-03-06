import React from "react";
import { Form } from "react-bootstrap";
import { clrs } from "../../../DataStore";

export default function SearchBar() {
  return (
    <div >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label
            style={{
              padding: "0px 20px",
              color: clrs[0],
              fontWeight: "bold",
            }}
          >
            Search
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Search anything"
            width="50px"
            style={{
              width: "70vh",
              borderColor: clrs[0],
              borderRadius: "10px",
              padding:"1px 10px"
            }}
          />
          <button
          onClick={()=>{
            window.alert("This service is under Construction - DS Store")
          }}
            style={{
              borderRadius: "25px",
              color: clrs[1],
              backgroundColor: clrs[0],
              fontWeight: "bold",
              borderColor:clrs[1],
              margin:"0px 10px"
            }}
          >
            Find
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}
