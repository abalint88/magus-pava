import React, { useState } from "react";
import { magusData } from "../Data/data";

import useSortableData from "../Hooks/useSortable"

const PapLovag = () => {
    const [papivars] = useState(magusData);

    const { items, requestSort, sortConfig } = useSortableData(papivars)
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <section className={"full intro"}>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => requestSort('spell')} className={getClassNamesFor('name')}>Varázslat</th>
                        <th onClick={() => requestSort('mp')} className={getClassNamesFor('mp')}>Manapont</th>
                        <th onClick={() => requestSort('arcanum')} className={getClassNamesFor('arcanum')}>Arkánum</th>
                        <th onClick={() => requestSort('type')} className={getClassNamesFor('type')}>Típus</th>
                        <th onClick={() => requestSort('sphere')} className={getClassNamesFor('sphere')}>Szféra</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((papivar) => (
                        <tr key={papivar.id}>
                            <td>{papivar.spell}</td>
                                            <td>{papivar.mp}</td>
                                            <td>{papivar.arcanum}</td>
                                            <td>{papivar.type}</td>
                                            <td>{papivar.sphere}</td>
                            {/* <td coplspan="5">
                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default PapLovag;
