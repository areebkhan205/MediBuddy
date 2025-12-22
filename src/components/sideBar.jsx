import { NavItems } from "./navBarItems";



export function SideBar(){
    return <>
    <div className="h-screen w-[40%] flex justify-center bg-red-200 absolute top-14 left-0 z-50  overflow-hidden ">
        <NavItems className="flex flex-col gap-3 mt-8 p-4  w-full bg-red-800 " />
    </div>
    </>
}