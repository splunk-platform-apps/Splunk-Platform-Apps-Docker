import React, { useState, useEffect } from 'react';
import ReactTodoList from '@splunk/react-todo-list';

const IndexList = () => {
    const [indexes, setIndexes] = useState([]);

    useEffect(() => {
        fetchIndexes();
    }, []); // Empty dependency array ensures this runs once after the component mounts.

    const fetchIndexes = () => {
        fetch('/splunkd/services/data/indexes?output_mode=json', { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                const fetchedIndexes = data.entry.map((entry, index) => ({
                    id: index,
                    title: entry.name,
                    done: false,
                }));
                setIndexes(fetchedIndexes);
            })
            .catch(e => {
                console.error('Error during index retrieval/parsing', e);
            });
    };

    const onCheck = (itemId) => {
        setIndexes(prevIndexes => 
            prevIndexes.map(item => 
                item.id === itemId ? { ...item, done: !item.done } : item
            )
        );
    };

    return <ReactTodoList name="Index audit" items={indexes} onCheck={onCheck} />;
};

export default IndexList;
