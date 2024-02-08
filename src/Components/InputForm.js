import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function InputForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !message) {
      return toast.error("please fill email, subject and message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
      
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <form onSubmit={submitHandler}>
          <div id="form">
            <h1>SEND E-MAIL</h1>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            
            <div>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </div>
            
            <button className="theme" type="submit">{loading ? "Sending..." : "Submit"}</button>
            </div>
        </form>
      </header>
    </div>
  );
}

export default InputForm;
