

const Cards = ({ title = "", subtitle = "", percentage = 0, spanColor = "bg-success", icon: Icon = () => null, svgColor = "bg-success",}) => {

    return (
        <div className=" bg-mygrey p-4 flex flex-col justify-between rounded-lg">
            <div className="flex h-[80px] w-full md:w-[150px]  justify-between">
                <div>
                    <p className="text-[12px] leading-4 pb-2">{subtitle}</p>
                    <h4 className="text-base font-semibold text-slate-700 mb-1 leading-none">{title}</h4>
                </div>
                
                <div>
            </div>
            </div>
        </div>
    );
}

export default Cards;