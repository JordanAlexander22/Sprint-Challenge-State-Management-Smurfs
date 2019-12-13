1. What problem does the context API help solve?

Context API helps solve the problem having to continously pass down props by storing state in a context folder.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. The Store holds all data that the app is using. Reducers are functions that change the state of an app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is stored globally through the app while component state is local to the specific state. If you know you need a certain state used in several components it would be best to store it globally.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a middleware that allows us to use redux asychronously by enabling promises. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API because less boiler plate and better suited for smaller projects. 
