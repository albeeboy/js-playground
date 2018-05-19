// message.watsonData = outputData
let outputData = {
    intents: [{
        intent: 'search_case_component',
        confidence: 0.33017634153366093
    }],
    entities: [{
            entity: 'case_component',
            location: [Array],
            value: 'deck_case_study',
            confidence: 1,
            expected: true
        },
        {
            entity: 'client_name',
            location: [Array],
            value: 'First Data',
            confidence: 1,
            expected: true
        }
    ],
    input: { text: 'I need to find a deck case study for First Data' },
    output: {
        text: ['app: client_name: case_component'],
        nodes_visited: ['node_2_1526487621477', 'node_2_1526487621477'],
        log_messages: []
    },
    context: {
        conversation_id: 'b56253bf-c03e-468a-9a24-ab7f1be6da90',
        system: {
            dialog_stack: [Array],
            dialog_turn_counter: 3,
            dialog_request_counter: 3,
            _node_output_map: [Object]
        },
        client_name: 'First Data',
        case_component: 'deck_case_study'
    }
}

module.exports = outputData;