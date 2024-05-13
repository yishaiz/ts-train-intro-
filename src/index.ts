let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = 'Hello';

// unknown
exampleUnknown = 123;
exampleUnknown = 'Hello';

if (typeof exampleUnknown === 'string') {
  exampleUnknown.trim();
}

let unknownSetToString: string = exampleUnknown;
