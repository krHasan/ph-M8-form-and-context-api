import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Rakib');
    const emailState = useInputState('hasanbappi@gmail.com');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="email" />
                <br />
                <input type="password" name="password" id="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;