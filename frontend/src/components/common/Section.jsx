function Section({ title, children }){
    return (
        <div className="bg-surface-container-low rounded-xl shadow p-5">
            <h2 className="font-semibold mb-3">{title}</h2>
            {children}
        </div>
    );
}

export default Section;