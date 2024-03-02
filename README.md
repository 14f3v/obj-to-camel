# obj-to-camel
This is a TypeScript function that converts object keys from snake_case to camelCase.

## Installation

You can install this function via bun/yarn/npm:

incase of using [bun.sh](https://bun.sh)
```bash
bun add git+https://github.com/14f3v/obj-to-camel.git
```


incase of using yarn
```bash
yarn add git+https://github.com/14f3v/obj-to-camel.git
```


incase of using npm
```bash
npm install git+https://github.com/14f3v/obj-to-camel.git
```

## Usage

```typescript
import objToCamel from '@14f3v/obj-to-camel';

const originalObject = {
    FULL_NAME: "foo",
    FAMILY_NAME: "bar",
};

const camelCasedObject = objToCamel(originalObject);

console.log(camelCasedObject);
/* // ? return object would be
camelCasedObject: {
    fullName: "foo",
    familyName: "bar",
}
*/
```

## Function Signature
```typescript
function keysToCamel<T extends Record<string, any>>(
    obj: T
): { [K in keyof T as CamelCase<K & string>]: T[K] };
```
This function takes an object with string keys and returns a new object with camelCase keys.

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

### Feedback and Suggestions
If you have any questions, feedback, or suggestions, please open an issue on the repository. We're open to discussions and appreciate any input you may have.

## License
This project is licensed under the MIT License - see the [LICENSE]() file for details.


Feel free to customize the content according to your project's needs and guidelines. A clear and welcoming contribution section can help foster a collaborative and inclusive community around your project.
