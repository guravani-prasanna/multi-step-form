import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../schemas/accountSchema";
import Input from "../components/Input";


export default function AccountStep({ defaultValues, onNext, onPrev }) {
const form = useForm({ resolver: zodResolver(accountSchema), defaultValues, mode: "onBlur" });


return (
<form onSubmit={form.handleSubmit(onNext)}>
<Input label="Username" {...form.register("username")} />
<Input label="Password" type="password" {...form.register("password")} />
<Input label="Confirm Password" type="password" {...form.register("confirmPassword")} error={form.formState.errors.confirmPassword?.message} />
<button type="submit">Next</button>
<button type="button" onClick={onPrev}>Previous</button>
</form>
);
}