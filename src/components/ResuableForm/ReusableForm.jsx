const ReusableForm = ({submitBtnText = 'Submit', handleSubmit, children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="name" />
                <br />
                <input type="email" name="email" id="email" />
                <br />
                <input type="password" name="password" id="password" />
                <br />
                <button>{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;