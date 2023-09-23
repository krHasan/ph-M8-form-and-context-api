const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" />
                <br />
                <input type="email" name="email" id="email" />
                <br />
                <input type="password" name="password" id="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;