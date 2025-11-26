import React from 'react'

const UserDetails = async ({params}: {params: Promise<{id: string}>}) => { //params

    const {id} = await params;

    return (
        <h1>Showing Details for user #{id}</h1>
    )
}
export default UserDetails
