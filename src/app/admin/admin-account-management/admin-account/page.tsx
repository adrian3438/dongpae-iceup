import AdminAccountPage from "components/pages/dotsAdmin/admin-account";

export default function AdminAccount ({searchParams : {id}} : any) {

    return(
        <>
        <AdminAccountPage
            id={id}
        />
        </>
    )
}