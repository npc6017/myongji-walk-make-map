import '../styles/Button.css';

export const Button = ({name, state, setState}) => {
    const styleClasses = ["button", state ? 'button-marker-start' : 'button-marker-end'];
    return (
        <button
            className={styleClasses.join(' ')}
            onClick={() => setState(!state)}
        >{name}</button>
    )
}