import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const url = 'https://assignment-12-server-six-chi.vercel.app/seller'
    const { data: allSellers = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    return (

        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                            <label className="sr-only" for="SelectAll">Select All</label>

                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Number

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Name

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Email

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        allSellers?.map((sll, i) =>
                            <tr key={sll._id}>
                                <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                                    <label className="sr-only" for="Row1">Row 1</label>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {i + 1}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {sll.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sll.email}</td>
                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;