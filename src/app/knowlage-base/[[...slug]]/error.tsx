'use client';
import {useEffect} from "react";

export default function Error({error, reset} : {
    error: Error & { digest?: string };
    reset: () => void; }){

    useEffect(()=>{
        console.error(error);
    }, [error]);
    return (
        <main>
            <div className="container mx-auto px-4">
                <div className="">
                    <h2>Something went wront</h2>
                    <h3>{error.message}</h3>
                    <div>
                        <button
                            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                            onClick={
                                // Attempt to recover by trying to re-render the invoices route
                                () => reset()
                            }
                        >
                            Try again
                        </button>
                    </div>

                </div>
            </div>

        </main>
    )
        ;
}