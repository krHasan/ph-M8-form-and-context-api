import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(() => {
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="name" />
                <br />
                <input ref={emailRef} defaultValue={'example@example.com'} type="email" name="email" id="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RefForm;