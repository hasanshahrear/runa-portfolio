
type TProps = {
    icon: React.ReactNode,
    title: string,
    desc: string,
}
export function AddressCard({icon, title, desc}:TProps){
    return(
        <div className="flex gap-8 items-center">
            <div>
                {icon}
            </div>
            <div>
                <p className="text-base">{title}</p>
                <strong className="text-lg">{desc}</strong>
            </div>
        </div>
    )
}