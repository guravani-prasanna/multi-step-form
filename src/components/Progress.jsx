export default function Progress({ step }) {
return (
<div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
{[0, 1, 2, 3].map((i) => (
<div
key={i}
style={{
flex: 1,
height: 6,
background: step >= i ? "black" : "#ccc"
}}
/>
))}
</div>
);
}