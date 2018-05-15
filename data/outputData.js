// message.watsonData = outputData
let outputData = {
    intents: [{
        intent: 'search_capabilities',
        confidence: 1
    }],
    entities: [{
            entity: 'work_type',
            location: [Array],
            value: 'brand',
            confidence: 1,
            expected: true
        },
        {
            entity: 'work_capability',
            location: [Array],
            value: 'brand_positioning',
            confidence: 1,
            expected: true
        }
    ],
    input: {
        text: 'brand_positioning'
    },
    output: {
        text: ['app: work_capability'],
        nodes_visited: ['node_2_1525985977169', 'node_2_1525985977169'],
        warning: 'DialogNode: Event handler with ID [handler_7_1525985977169] of type [focus] has no condition, context, or output specified. It will be ignored.',
        log_messages: [
            [Object]
        ]
    },
    context: {
        conversation_id: 'e932be79-4d86-488b-886e-9b2d31128f8c',
        system: {
            dialog_stack: [Array],
            dialog_turn_counter: 4,
            dialog_request_counter: 4,
            _node_output_map: [Object],
            branch_exited: true,
            branch_exited_reason: 'completed'
        },
        work_capability: 'brand_positioning'
    }
}

module.exports = outputData;