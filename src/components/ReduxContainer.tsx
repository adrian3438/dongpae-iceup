'use client'
import Providers from "../redux/provider";

export default function ReduxContainer ({children} : any) {

    return(
        <>
        <Providers>
            {children}
        </Providers>
        </>
    )
}