import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className='flex gap-2'>
            <aside>
                <p>sidebar</p>
            </aside>
            <main>
                <p>main content</p>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout