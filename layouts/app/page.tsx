import React from 'react'
import Hello from "@/components/hello";

const Page = () => {
    console.log("I am a server component")
    return (
        <main>
            <div>Next js 16</div>
            <Hello/>
        </main>
    )
}
export default Page

//server side components - reduce the amount of js that is sent to client improving performance, direct access to sever side resources like databases or file systems
//client side components - are needed for browser interactivity like clickig a button, rendered on client side, client side means the browser, to use add a "use client; directive at the top level of your file

//rule of thumb - leave everything as a server side component until you need a browser activity then use client components

//in nextjs - it is now obsolete to useCallback, and useMemo due to auto memoization which is for rerendering to run it install (npm install babel-plugin-react-compiler@latest)