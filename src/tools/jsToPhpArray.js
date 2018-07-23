export default {
    options: {

    },
    input: {
        query: { label: 'Query', type: 'textarea' },
    },
    execute({ query }) {
        return query;
    }
};
