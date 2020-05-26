import React from 'react'


export default function RowInput(props) {

    const {description, list_items, onChangeItem} = props


    if (list_items.length !== 0) {
        return (
            <div className="RowInput">
                    <select onChange={onChangeItem}>
                        {
                        list_items.map(item => {
                            return (
                                <option key={item}
                                    value={item}>
                                    {item}</option>
                            )
                        })
                    } </select>
                    </div>

        )
    } else {
        return (
            <div></div>
        )
    }
}
