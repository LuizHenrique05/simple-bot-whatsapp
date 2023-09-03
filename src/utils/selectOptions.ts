interface contentProps {
    title: String,
    buttons: Array<Object>,
    description: String
}

export const selectOption = (body: string) => {
    let content: contentProps

    if(body === 'hi') {
        content = {
            title: 'title hi', 
            buttons: [
                {
                    "button1": {
                        "displayText": "Text of Button 1 hi"
                    },
                    "button2": {
                        "displayText": "Text of Button 2 hi"
                    }
                },
            ],
            description: 'description hi'
        }
    }
    else {
        content = {
            title: 'title generic', 
            buttons: [
                {
                    "button1": {
                        "displayText": "Text of Button 1 generic"
                    },
                    "button2": {
                        "displayText": "Text of Button 2 generic"
                    }
                },
            ],
            description: 'description generic'
        }
    }

    return content
}