export default {
    options: {

    },
    inputs: {
        query: { label: 'Query', type: 'textarea' },
    },
    execute({ query }) {
        return query;
    }
};
