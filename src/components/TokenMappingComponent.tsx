import {TokenMapping} from "../services/TokenMapping.ts";

interface TokenMappingComponentProps {
    mappings?: TokenMapping[]
}

export function TokenMappingComponent({mappings = []}: TokenMappingComponentProps) {
    return <div className="mt-8">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original
                    Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tokenized
                    Value
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {mappings.length === 0 ? (
                <tr>
                    <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                        &lt;no mappings&gt;
                    </td>
                </tr>
            ) : (
                mappings.map((mapping, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{mapping.originalValue}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mapping.tokenizedValue}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    </div>;
}