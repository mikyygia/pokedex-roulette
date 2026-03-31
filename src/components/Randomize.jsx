import "../index.css"

export default function Randomize ({onFetch}) {
    return (
        <div className="randomize">
            <button className="discover-btn" onClick={onFetch}>🌀 discover</button>
            <p>results will be displayed on the right</p>
        </div>
    );
}