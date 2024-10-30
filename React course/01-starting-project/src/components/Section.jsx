export default function Section({ title, children, ...propsObject }) {
    return (
        <section {...propsObject}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}