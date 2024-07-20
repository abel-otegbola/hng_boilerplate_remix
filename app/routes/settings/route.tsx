import { useState } from "react"
import { Switch } from "~/components/ui/switch"

type role = {
    id: number,
    name: string,
    description: string
}

export default function Index() {
    const [active, setActive] = useState<number>(0)

    const roles: role[] = [
        { id: 0, name: "Guest", description: "Read-only access" },
        { id: 1, name: "User", description: "Read, write, update" },
        { id: 3, name: "Manager", description: "Read, write, approve" },
        { id: 4, name: "Project lead", description: "Manage, coordinate, oversee" },
        { id: 5, name: "Administrator", description: "Full access, control" },
    ]

    return (
        <div className="flex gap-6 items-start p-[5%]">
            <div className="w-[250px] flex flex-col gap-6">
                {
                    roles.map((role: role) => (
                        <button 
                            key={role.id} 
                            className={`flex flex-col gap-1 rounded-[4px] p-[6px_14px]
                                ${active === role.id ? "bg-[#F97316] text-[#FAFAFA]" : "hover:bg-[#F97316] hover:text-[#FAFAFA]"}
                            `}
                            onClick={() => setActive(role.id)}
                        >
                            <span className="font-medium leading-[24px]">{role.name}</span>
                            <span className="text-sm">{role.description}</span>
                        </button>
                    ))
                }
            </div>


            <div className="w-[750px]">
                <div className="pb-4 border border-transparent border-b-[#CBD5E1]">
                    <h1 className="font-semibold text-xl mb-2">Permissions</h1>
                    <p className="text-sm">See the list of permissions</p>
                </div>

                <div className="mt-6">
                    <h2 className="font-medium text-lg mb-2">Transactions permissions</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            <p>Can view transactions</p>
                            <Switch color="orange-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}