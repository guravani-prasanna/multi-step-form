export default function Input({ label, error, ...props }) {
const id = props.name;
return (
<div style={{ marginBottom: 12 }}>
<label htmlFor={id}>{label}</label><br />
<input id={id} {...props} aria-describedby={error ? `${id}-error` : undefined} />
{error && <div id={`${id}-error`} style={{ color: "red" }}>{error}</div>}
</div>
);
}