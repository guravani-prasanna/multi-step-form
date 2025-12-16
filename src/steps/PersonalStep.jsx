import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema } from "../schemas/personalSchema";
import Input from "../components/Input";


export default function PersonalStep({ defaultValues, onNext }) {
const form = useForm({ resolver: zodResolver(personalSchema), defaultValues, mode: "onBlur" });


return (
<form onSubmit={form.handleSubmit(onNext)}>
<Input label="First Name" {...form.register("firstName")} error={form.formState.errors.firstName?.message} />
<Input label="Last Name" {...form.register("lastName")} error={form.formState.errors.lastName?.message} />
<Input label="Email" {...form.register("email")} error={form.formState.errors.email?.message} />
<Input label="Phone" {...form.register("phone")} error={form.formState.errors.phone?.message} />
<Input label="DOB" type="date" {...form.register("dob")} error={form.formState.errors.dob?.message} />
<button type="submit">Next</button>
</form>
);
}