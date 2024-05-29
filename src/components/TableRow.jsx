

const TableRow = ({ item, productId, price, status, action }) => {
    return (
        <tr className="bg-white border-b border-gray6 last:border-0 text-start">
            <td className=" pl-4 pr-8 whitespace-nowrap">
                <a href="sd" className="font-medium text-heading text-hover-primary">{item}</a>
            </td>
            <td className="px-3 py-3 font-normal text-slate-600">{productId}</td>
            <td className="px-3 py-3 font-normal text-slate-600">{price}</td>
            <td className="px-3 py-3">
                <span className={`text-[11px] ${status.color} px-3 py-1 rounded-md leading-none ${status.bg} font-medium`}>{status.text}</span>
            </td>
            <td className="px-3 py-3 w-14">{action}</td>
        </tr>
    );
};

export default TableRow;