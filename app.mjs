import { maths, strings } from "./utils/index.mjs"

// Side effects in modules
import "./globalConfig.mjs"
console.log('App is running')

// Example usage of the methods
console.log(maths.roundUp(4.2));
console.log(strings.reverse('hello'));
