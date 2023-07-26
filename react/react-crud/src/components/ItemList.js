import React from 'react';

const styles = {
    list: {
        "margin": "0 auto",
        "width": "40%",
        "paddingInlineStart": "0"
    },
    listItem: {
        "textAlign": "left",
        "padding": "0.2rem",
        "display": "inline-block",
        "width": "100%",
        "margin": "-1px auto",
        "borderStyle": "solid"
    },
    deleteBtn: {
        "margin": "0 0.5rem",
        "backgroundColor": "Tomato",
        "float": "right"
    },
    editBtn: {
        "margin": "0 0.5rem",
        "backgroundColor": "LimeGreen",
        "float": "right"
    },
    topBtn: {
        "margin": "0 0.5rem"
    }
};

const ItemList = props => {
    const {
        list,
        fetchData,
        clearData,
        createItem,
        deleteItem,
        editItem
    } = props;
    let renderList = "";

    if (list.length) {
        renderList = list.map(i => {
            const displayTitle = i.title.substring(0, 15);
            return (
                <li key={i.id} style={styles.listItem}>
                    {`[ ${displayTitle} ]`}
                    <button onClick={() => deleteItem(i.id)} style={styles.deleteBtn}>Delete</button>
                    <button onClick={() => editItem(i.id)} style={styles.editBtn}>Edit</button>
                </li>
            );
        });
    }

    return (
        <div>
            <h1>React CRUD</h1>
            <button onClick={fetchData} style={styles.topBtn}>Fetch From API</button>
            <button onClick={createItem} style={styles.topBtn}>Create Item</button>
            <button onClick={clearData} style={styles.topBtn}>Clear All</button>
            <h3>Item List</h3>
            <div>
                <ul style={styles.list}>
                    {renderList}
                </ul>
            </div>
        </div>
    );
}

export default ItemList;