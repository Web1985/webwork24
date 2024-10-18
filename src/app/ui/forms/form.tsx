import { useActionState } from 'react';


export default function Form(){
    const [state, formAction] = useActionState(createForm, initialState);
    return (
        <form action={formAction}>
            <input
            id="first-name"
            name="first-name"
            type="text"
            required/>

        </form>
    )
}