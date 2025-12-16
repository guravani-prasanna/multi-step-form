export default function Review({ data, onEdit }) {
return (
<div>
<h2>Review Details</h2>
<pre>{JSON.stringify(data, null, 2)}</pre>
<button onClick={() => onEdit(0)}>Edit Personal</button>
<button onClick={() => onEdit(1)}>Edit Address</button>
<button onClick={() => onEdit(2)}>Edit Account</button>
</div>
);
}