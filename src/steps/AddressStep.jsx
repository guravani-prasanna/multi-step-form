import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schemas/addressSchema";
import Input from "../components/Input";


export default function AddressStep({ defaultValues, onNext, onPrev }) {
const form = useForm({ resolver: zodResolver(addressSchema), defaultValues, mode: "onBlur" });


return (
<form onSubmit={form.handleSubmit(onNext)}>
<Input label="Address" {...form.register("address")} error={form.formState.errors.address?.message} />
<Input label="City" {...form.register("city")} error={form.formState.errors.city?.message} />
<Input label="State" {...form.register("state")} error={form.formState.errors.state?.message} />
<Input label="ZIP" {...form.register("zip")} error={form.formState.errors.zip?.message} />
<button type="submit">Next</button>
<button type="button" onClick={onPrev}>Previous</button>
</form>
);
}