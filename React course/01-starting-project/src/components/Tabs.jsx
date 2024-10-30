export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    /* const ButtonContainer = buttonsContainer;

    return (<>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>); */

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}


/* export default function Button({children, className, mode="filled", Icon, ...props}) {
    let cssClasses = `button ${mode}-button`
    if (Icon) {
        cssClasses += ' icon-button';
    }
    
    if (className) {
        cssClasses += ' ' + className;
    }
    
    return (
        <button className = {cssClasses} {...props}>
            {Icon && (
                <span className="button-icon">
                    <Icon />
                </span>
            )}
            <span>{children}</span>
        </button>
    );
} */