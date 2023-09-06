export const uischema = {
    "type": "ListWithDetail",
    "scope": "#/properties/users",
    "options": {
        "detail": {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/firstname",
                            "label": "First Name",
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/lastname",
                            "label": "Last Name"
                        }
                    ]
                },
                {
                    "type": "Control",
                    "scope": "#/properties/age",
                    "label": "Age"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/email",
                    "label": "Email"
                }
            ]
        },
        "rule": {
            "effect": 'NONE', // This disables delete functionality
        },
    }
}