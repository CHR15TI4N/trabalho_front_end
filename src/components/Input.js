const Input = ({label, inputName, value, onChange, type = "text", errorMessage}) => {
    return (
        <div>
            <div>
                <label for={inputName}>{label}</label>
                <input
                    type={type}
                    name={inputName}
                    id={inputName}
                    value={value}
                    onChange={onChange}
                />
                {
                    errorMessage ? (
                        <p>{errorMessage}</p>
                    ) : <></>
                }
            </div>
        </div>
    );
}

export default Input;