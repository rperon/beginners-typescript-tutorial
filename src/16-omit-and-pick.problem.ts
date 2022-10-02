import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, "id">;
type MyType2 = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType2, { firstName: string; lastName: string }>>];
