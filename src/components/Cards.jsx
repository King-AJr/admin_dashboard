

const Cards = ({ title = "", subtitle = "", percentage = 0, spanColor = "bg-success", icon: Icon = () => null, svgColor = "bg-success",}) => {

    return (
        <div className="widget-item bg-white p-4 flex flex-col justify-between rounded-md">
            <div className="flex  justify-between">
                <div>
                <h4 className="text-base font-semibold text-slate-700 mb-1 leading-none">{title}</h4>
                <p className="text-[8px] leading-4">{subtitle}</p>
                </div>
                
                <div>
                <span className={`text-lg text-white rounded-full flex items-center justify-center h-8 w-8 shrink-0 ${spanColor}`}>
                    <Icon size={18} />
                </span>
            </div>
            </div>
                {percentage !== 0 && (
                    <div className={`badge space-x-1 mt-5 ${svgColor}`}>
                        <span className="text-xs">{percentage}%</span>
                        <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V18C1 19.66 2.34 21 4 21H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 16L8.59 10.64C9.35 9.76001 10.7 9.7 11.52 10.53L12.47 11.48C13.29 12.3 14.64 12.25 15.4 11.37L20 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                )}
            
            
        </div>
    );
}

export default Cards;