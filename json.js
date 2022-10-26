'{"greeting": "hello"}'
'{"greeting": "hello"}'
const jsonStr = '{"greeting":"hello"}'
undefined
JSON.parse(jsonStr)
{greeting: 'hello'}
const ajson = JSON.parse(jsonStr);
undefined
ajson.greeting = 'hi'
'hi'
ajson
{greeting: 'hi'}
const data = {
    firstname: "John",
    lastname: "Doe",
    greeting: "hello"
}
undefined
JSON.stringify(data)