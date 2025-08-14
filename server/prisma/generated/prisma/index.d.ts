
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model UserExamAttempt
 * 
 */
export type UserExamAttempt = $Result.DefaultSelection<Prisma.$UserExamAttemptPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model ExerciseQuestion
 * 
 */
export type ExerciseQuestion = $Result.DefaultSelection<Prisma.$ExerciseQuestionPayload>
/**
 * Model UserExerciseAttempt
 * 
 */
export type UserExerciseAttempt = $Result.DefaultSelection<Prisma.$UserExerciseAttemptPayload>
/**
 * Model ExerciseAnswer
 * 
 */
export type ExerciseAnswer = $Result.DefaultSelection<Prisma.$ExerciseAnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  DEVELOPER: 'DEVELOPER',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userExamAttempt`: Exposes CRUD operations for the **UserExamAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExamAttempts
    * const userExamAttempts = await prisma.userExamAttempt.findMany()
    * ```
    */
  get userExamAttempt(): Prisma.UserExamAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseQuestion`: Exposes CRUD operations for the **ExerciseQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseQuestions
    * const exerciseQuestions = await prisma.exerciseQuestion.findMany()
    * ```
    */
  get exerciseQuestion(): Prisma.ExerciseQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userExerciseAttempt`: Exposes CRUD operations for the **UserExerciseAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExerciseAttempts
    * const userExerciseAttempts = await prisma.userExerciseAttempt.findMany()
    * ```
    */
  get userExerciseAttempt(): Prisma.UserExerciseAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseAnswer`: Exposes CRUD operations for the **ExerciseAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseAnswers
    * const exerciseAnswers = await prisma.exerciseAnswer.findMany()
    * ```
    */
  get exerciseAnswer(): Prisma.ExerciseAnswerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Exam: 'Exam',
    Question: 'Question',
    UserExamAttempt: 'UserExamAttempt',
    Exercise: 'Exercise',
    ExerciseQuestion: 'ExerciseQuestion',
    UserExerciseAttempt: 'UserExerciseAttempt',
    ExerciseAnswer: 'ExerciseAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "exam" | "question" | "userExamAttempt" | "exercise" | "exerciseQuestion" | "userExerciseAttempt" | "exerciseAnswer"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExamFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExamAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      UserExamAttempt: {
        payload: Prisma.$UserExamAttemptPayload<ExtArgs>
        fields: Prisma.UserExamAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExamAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExamAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserExamAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExamAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          findMany: {
            args: Prisma.UserExamAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>[]
          }
          create: {
            args: Prisma.UserExamAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          createMany: {
            args: Prisma.UserExamAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserExamAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          update: {
            args: Prisma.UserExamAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserExamAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExamAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExamAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserExamAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExamAttempt>
          }
          groupBy: {
            args: Prisma.UserExamAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExamAttemptGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserExamAttemptFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserExamAttemptAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserExamAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserExamAttemptCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExerciseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExerciseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      ExerciseQuestion: {
        payload: Prisma.$ExerciseQuestionPayload<ExtArgs>
        fields: Prisma.ExerciseQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          findFirst: {
            args: Prisma.ExerciseQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          findMany: {
            args: Prisma.ExerciseQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>[]
          }
          create: {
            args: Prisma.ExerciseQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          createMany: {
            args: Prisma.ExerciseQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExerciseQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          update: {
            args: Prisma.ExerciseQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseQuestionPayload>
          }
          aggregate: {
            args: Prisma.ExerciseQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseQuestion>
          }
          groupBy: {
            args: Prisma.ExerciseQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseQuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExerciseQuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExerciseQuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExerciseQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseQuestionCountAggregateOutputType> | number
          }
        }
      }
      UserExerciseAttempt: {
        payload: Prisma.$UserExerciseAttemptPayload<ExtArgs>
        fields: Prisma.UserExerciseAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExerciseAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExerciseAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserExerciseAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExerciseAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          findMany: {
            args: Prisma.UserExerciseAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>[]
          }
          create: {
            args: Prisma.UserExerciseAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          createMany: {
            args: Prisma.UserExerciseAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserExerciseAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          update: {
            args: Prisma.UserExerciseAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserExerciseAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExerciseAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExerciseAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExerciseAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserExerciseAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExerciseAttempt>
          }
          groupBy: {
            args: Prisma.UserExerciseAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExerciseAttemptGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserExerciseAttemptFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserExerciseAttemptAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserExerciseAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserExerciseAttemptCountAggregateOutputType> | number
          }
        }
      }
      ExerciseAnswer: {
        payload: Prisma.$ExerciseAnswerPayload<ExtArgs>
        fields: Prisma.ExerciseAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          findFirst: {
            args: Prisma.ExerciseAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          findMany: {
            args: Prisma.ExerciseAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>[]
          }
          create: {
            args: Prisma.ExerciseAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          createMany: {
            args: Prisma.ExerciseAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExerciseAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          update: {
            args: Prisma.ExerciseAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnswerPayload>
          }
          aggregate: {
            args: Prisma.ExerciseAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseAnswer>
          }
          groupBy: {
            args: Prisma.ExerciseAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAnswerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExerciseAnswerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExerciseAnswerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExerciseAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    exam?: ExamOmit
    question?: QuestionOmit
    userExamAttempt?: UserExamAttemptOmit
    exercise?: ExerciseOmit
    exerciseQuestion?: ExerciseQuestionOmit
    userExerciseAttempt?: UserExerciseAttemptOmit
    exerciseAnswer?: ExerciseAnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    examAttempts: number
    exerciseAttempts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    examAttempts?: boolean | UserCountOutputTypeCountExamAttemptsArgs
    exerciseAttempts?: boolean | UserCountOutputTypeCountExerciseAttemptsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExerciseAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseAttemptWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    attempts: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    attempts?: boolean | ExamCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAttemptWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    questions: number
    attempts: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExerciseCountOutputTypeCountQuestionsArgs
    attempts?: boolean | ExerciseCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseQuestionWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseAttemptWhereInput
  }


  /**
   * Count Type UserExerciseAttemptCountOutputType
   */

  export type UserExerciseAttemptCountOutputType = {
    answers: number
  }

  export type UserExerciseAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UserExerciseAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserExerciseAttemptCountOutputType without action
   */
  export type UserExerciseAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttemptCountOutputType
     */
    select?: UserExerciseAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserExerciseAttemptCountOutputType without action
   */
  export type UserExerciseAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    phone: string | null
    hashedPassword: string | null
    role: $Enums.Role | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    phone: string | null
    hashedPassword: string | null
    role: $Enums.Role | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    phone: number
    hashedPassword: number
    role: number
    isPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashedPassword?: true
    role?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashedPassword?: true
    role?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashedPassword?: true
    role?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    phone: string
    hashedPassword: string
    role: $Enums.Role
    isPaid: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phone?: boolean
    hashedPassword?: boolean
    role?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    examAttempts?: boolean | User$examAttemptsArgs<ExtArgs>
    exerciseAttempts?: boolean | User$exerciseAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    phone?: boolean
    hashedPassword?: boolean
    role?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "phone" | "hashedPassword" | "role" | "isPaid" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    examAttempts?: boolean | User$examAttemptsArgs<ExtArgs>
    exerciseAttempts?: boolean | User$exerciseAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      examAttempts: Prisma.$UserExamAttemptPayload<ExtArgs>[]
      exerciseAttempts: Prisma.$UserExerciseAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      phone: string
      hashedPassword: string
      role: $Enums.Role
      isPaid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examAttempts<T extends User$examAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$examAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exerciseAttempts<T extends User$exerciseAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$exerciseAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isPaid: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.examAttempts
   */
  export type User$examAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    where?: UserExamAttemptWhereInput
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    cursor?: UserExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAttemptScalarFieldEnum | UserExamAttemptScalarFieldEnum[]
  }

  /**
   * User.exerciseAttempts
   */
  export type User$exerciseAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    where?: UserExerciseAttemptWhereInput
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    cursor?: UserExerciseAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExerciseAttemptScalarFieldEnum | UserExerciseAttemptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    jti: string | null
    revoked: boolean | null
    expiresAt: Date | null
    userId: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    jti: string | null
    revoked: boolean | null
    expiresAt: Date | null
    userId: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    jti: number
    revoked: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    jti?: true
    revoked?: true
    expiresAt?: true
    userId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    jti?: true
    revoked?: true
    expiresAt?: true
    userId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    jti?: true
    revoked?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    jti: string
    revoked: boolean
    expiresAt: Date
    userId: string
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jti?: boolean
    revoked?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    jti?: boolean
    revoked?: boolean
    expiresAt?: boolean
    userId?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jti" | "revoked" | "expiresAt" | "userId", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jti: string
      revoked: boolean
      expiresAt: Date
      userId: string
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * @param {RefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RefreshToken.
     * @param {RefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly jti: FieldRef<"RefreshToken", 'String'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken findRaw
   */
  export type RefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken aggregateRaw
   */
  export type RefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    examNumber: number | null
  }

  export type ExamSumAggregateOutputType = {
    examNumber: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    examNumber: number | null
    title: string | null
    isFree: boolean | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    examNumber: number | null
    title: string | null
    isFree: boolean | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    examNumber: number
    title: number
    isFree: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    examNumber?: true
  }

  export type ExamSumAggregateInputType = {
    examNumber?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    examNumber?: true
    title?: true
    isFree?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    examNumber?: true
    title?: true
    isFree?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    examNumber?: true
    title?: true
    isFree?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    examNumber: number
    title: string
    isFree: boolean
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examNumber?: boolean
    title?: boolean
    isFree?: boolean
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    attempts?: boolean | Exam$attemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>



  export type ExamSelectScalar = {
    id?: boolean
    examNumber?: boolean
    title?: boolean
    isFree?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examNumber" | "title" | "isFree", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    attempts?: boolean | Exam$attemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      attempts: Prisma.$UserExamAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examNumber: number
      title: string
      isFree: boolean
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * @param {ExamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exam = await prisma.exam.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExamFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Exam.
     * @param {ExamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exam = await prisma.exam.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExamAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends Exam$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly examNumber: FieldRef<"Exam", 'Int'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly isFree: FieldRef<"Exam", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam findRaw
   */
  export type ExamFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exam aggregateRaw
   */
  export type ExamAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.attempts
   */
  export type Exam$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    where?: UserExamAttemptWhereInput
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    cursor?: UserExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAttemptScalarFieldEnum | UserExamAttemptScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionSumAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIndex: number | null
    examId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIndex: number | null
    examId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    options: number
    correctAnswerIndex: number
    examId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionSumAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIndex?: true
    examId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIndex?: true
    examId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    options?: true
    correctAnswerIndex?: true
    examId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    options: string[]
    correctAnswerIndex: number
    examId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
    examId?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
    examId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "options" | "correctAnswerIndex" | "examId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      options: string[]
      correctAnswerIndex: number
      examId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const question = await prisma.question.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Question.
     * @param {QuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const question = await prisma.question.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String[]'>
    readonly correctAnswerIndex: FieldRef<"Question", 'Int'>
    readonly examId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question findRaw
   */
  export type QuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question aggregateRaw
   */
  export type QuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserExamAttempt
   */

  export type AggregateUserExamAttempt = {
    _count: UserExamAttemptCountAggregateOutputType | null
    _avg: UserExamAttemptAvgAggregateOutputType | null
    _sum: UserExamAttemptSumAggregateOutputType | null
    _min: UserExamAttemptMinAggregateOutputType | null
    _max: UserExamAttemptMaxAggregateOutputType | null
  }

  export type UserExamAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type UserExamAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type UserExamAttemptMinAggregateOutputType = {
    id: string | null
    score: number | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    examId: string | null
  }

  export type UserExamAttemptMaxAggregateOutputType = {
    id: string | null
    score: number | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    examId: string | null
  }

  export type UserExamAttemptCountAggregateOutputType = {
    id: number
    score: number
    startedAt: number
    completedAt: number
    userId: number
    examId: number
    answers: number
    _all: number
  }


  export type UserExamAttemptAvgAggregateInputType = {
    score?: true
  }

  export type UserExamAttemptSumAggregateInputType = {
    score?: true
  }

  export type UserExamAttemptMinAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    examId?: true
  }

  export type UserExamAttemptMaxAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    examId?: true
  }

  export type UserExamAttemptCountAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    examId?: true
    answers?: true
    _all?: true
  }

  export type UserExamAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAttempt to aggregate.
     */
    where?: UserExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAttempts to fetch.
     */
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExamAttempts
    **/
    _count?: true | UserExamAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExamAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExamAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExamAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExamAttemptMaxAggregateInputType
  }

  export type GetUserExamAttemptAggregateType<T extends UserExamAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExamAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExamAttempt[P]>
      : GetScalarType<T[P], AggregateUserExamAttempt[P]>
  }




  export type UserExamAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAttemptWhereInput
    orderBy?: UserExamAttemptOrderByWithAggregationInput | UserExamAttemptOrderByWithAggregationInput[]
    by: UserExamAttemptScalarFieldEnum[] | UserExamAttemptScalarFieldEnum
    having?: UserExamAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExamAttemptCountAggregateInputType | true
    _avg?: UserExamAttemptAvgAggregateInputType
    _sum?: UserExamAttemptSumAggregateInputType
    _min?: UserExamAttemptMinAggregateInputType
    _max?: UserExamAttemptMaxAggregateInputType
  }

  export type UserExamAttemptGroupByOutputType = {
    id: string
    score: number | null
    startedAt: Date
    completedAt: Date | null
    userId: string
    examId: string
    answers: JsonValue
    _count: UserExamAttemptCountAggregateOutputType | null
    _avg: UserExamAttemptAvgAggregateOutputType | null
    _sum: UserExamAttemptSumAggregateOutputType | null
    _min: UserExamAttemptMinAggregateOutputType | null
    _max: UserExamAttemptMaxAggregateOutputType | null
  }

  type GetUserExamAttemptGroupByPayload<T extends UserExamAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExamAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExamAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExamAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserExamAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserExamAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    examId?: boolean
    answers?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamAttempt"]>



  export type UserExamAttemptSelectScalar = {
    id?: boolean
    score?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    examId?: boolean
    answers?: boolean
  }

  export type UserExamAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "startedAt" | "completedAt" | "userId" | "examId" | "answers", ExtArgs["result"]["userExamAttempt"]>
  export type UserExamAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $UserExamAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExamAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number | null
      startedAt: Date
      completedAt: Date | null
      userId: string
      examId: string
      answers: Prisma.JsonValue
    }, ExtArgs["result"]["userExamAttempt"]>
    composites: {}
  }

  type UserExamAttemptGetPayload<S extends boolean | null | undefined | UserExamAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserExamAttemptPayload, S>

  type UserExamAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserExamAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserExamAttemptCountAggregateInputType | true
    }

  export interface UserExamAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExamAttempt'], meta: { name: 'UserExamAttempt' } }
    /**
     * Find zero or one UserExamAttempt that matches the filter.
     * @param {UserExamAttemptFindUniqueArgs} args - Arguments to find a UserExamAttempt
     * @example
     * // Get one UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExamAttemptFindUniqueArgs>(args: SelectSubset<T, UserExamAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserExamAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserExamAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserExamAttempt
     * @example
     * // Get one UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExamAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExamAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExamAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptFindFirstArgs} args - Arguments to find a UserExamAttempt
     * @example
     * // Get one UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExamAttemptFindFirstArgs>(args?: SelectSubset<T, UserExamAttemptFindFirstArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExamAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptFindFirstOrThrowArgs} args - Arguments to find a UserExamAttempt
     * @example
     * // Get one UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExamAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExamAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExamAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExamAttempts
     * const userExamAttempts = await prisma.userExamAttempt.findMany()
     * 
     * // Get first 10 UserExamAttempts
     * const userExamAttempts = await prisma.userExamAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExamAttemptWithIdOnly = await prisma.userExamAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExamAttemptFindManyArgs>(args?: SelectSubset<T, UserExamAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserExamAttempt.
     * @param {UserExamAttemptCreateArgs} args - Arguments to create a UserExamAttempt.
     * @example
     * // Create one UserExamAttempt
     * const UserExamAttempt = await prisma.userExamAttempt.create({
     *   data: {
     *     // ... data to create a UserExamAttempt
     *   }
     * })
     * 
     */
    create<T extends UserExamAttemptCreateArgs>(args: SelectSubset<T, UserExamAttemptCreateArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserExamAttempts.
     * @param {UserExamAttemptCreateManyArgs} args - Arguments to create many UserExamAttempts.
     * @example
     * // Create many UserExamAttempts
     * const userExamAttempt = await prisma.userExamAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExamAttemptCreateManyArgs>(args?: SelectSubset<T, UserExamAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExamAttempt.
     * @param {UserExamAttemptDeleteArgs} args - Arguments to delete one UserExamAttempt.
     * @example
     * // Delete one UserExamAttempt
     * const UserExamAttempt = await prisma.userExamAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserExamAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserExamAttemptDeleteArgs>(args: SelectSubset<T, UserExamAttemptDeleteArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserExamAttempt.
     * @param {UserExamAttemptUpdateArgs} args - Arguments to update one UserExamAttempt.
     * @example
     * // Update one UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExamAttemptUpdateArgs>(args: SelectSubset<T, UserExamAttemptUpdateArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserExamAttempts.
     * @param {UserExamAttemptDeleteManyArgs} args - Arguments to filter UserExamAttempts to delete.
     * @example
     * // Delete a few UserExamAttempts
     * const { count } = await prisma.userExamAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExamAttemptDeleteManyArgs>(args?: SelectSubset<T, UserExamAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExamAttempts
     * const userExamAttempt = await prisma.userExamAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExamAttemptUpdateManyArgs>(args: SelectSubset<T, UserExamAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExamAttempt.
     * @param {UserExamAttemptUpsertArgs} args - Arguments to update or create a UserExamAttempt.
     * @example
     * // Update or create a UserExamAttempt
     * const userExamAttempt = await prisma.userExamAttempt.upsert({
     *   create: {
     *     // ... data to create a UserExamAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExamAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserExamAttemptUpsertArgs>(args: SelectSubset<T, UserExamAttemptUpsertArgs<ExtArgs>>): Prisma__UserExamAttemptClient<$Result.GetResult<Prisma.$UserExamAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExamAttempts that matches the filter.
     * @param {UserExamAttemptFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userExamAttempt = await prisma.userExamAttempt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserExamAttemptFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserExamAttempt.
     * @param {UserExamAttemptAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userExamAttempt = await prisma.userExamAttempt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserExamAttemptAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptCountArgs} args - Arguments to filter UserExamAttempts to count.
     * @example
     * // Count the number of UserExamAttempts
     * const count = await prisma.userExamAttempt.count({
     *   where: {
     *     // ... the filter for the UserExamAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserExamAttemptCountArgs>(
      args?: Subset<T, UserExamAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExamAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExamAttemptAggregateArgs>(args: Subset<T, UserExamAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserExamAttemptAggregateType<T>>

    /**
     * Group by UserExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExamAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExamAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserExamAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExamAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExamAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExamAttempt model
   */
  readonly fields: UserExamAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExamAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExamAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExamAttempt model
   */
  interface UserExamAttemptFieldRefs {
    readonly id: FieldRef<"UserExamAttempt", 'String'>
    readonly score: FieldRef<"UserExamAttempt", 'Int'>
    readonly startedAt: FieldRef<"UserExamAttempt", 'DateTime'>
    readonly completedAt: FieldRef<"UserExamAttempt", 'DateTime'>
    readonly userId: FieldRef<"UserExamAttempt", 'String'>
    readonly examId: FieldRef<"UserExamAttempt", 'String'>
    readonly answers: FieldRef<"UserExamAttempt", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserExamAttempt findUnique
   */
  export type UserExamAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAttempt to fetch.
     */
    where: UserExamAttemptWhereUniqueInput
  }

  /**
   * UserExamAttempt findUniqueOrThrow
   */
  export type UserExamAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAttempt to fetch.
     */
    where: UserExamAttemptWhereUniqueInput
  }

  /**
   * UserExamAttempt findFirst
   */
  export type UserExamAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAttempt to fetch.
     */
    where?: UserExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAttempts to fetch.
     */
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAttempts.
     */
    cursor?: UserExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAttempts.
     */
    distinct?: UserExamAttemptScalarFieldEnum | UserExamAttemptScalarFieldEnum[]
  }

  /**
   * UserExamAttempt findFirstOrThrow
   */
  export type UserExamAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAttempt to fetch.
     */
    where?: UserExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAttempts to fetch.
     */
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAttempts.
     */
    cursor?: UserExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAttempts.
     */
    distinct?: UserExamAttemptScalarFieldEnum | UserExamAttemptScalarFieldEnum[]
  }

  /**
   * UserExamAttempt findMany
   */
  export type UserExamAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAttempts to fetch.
     */
    where?: UserExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAttempts to fetch.
     */
    orderBy?: UserExamAttemptOrderByWithRelationInput | UserExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExamAttempts.
     */
    cursor?: UserExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAttempts.
     */
    skip?: number
    distinct?: UserExamAttemptScalarFieldEnum | UserExamAttemptScalarFieldEnum[]
  }

  /**
   * UserExamAttempt create
   */
  export type UserExamAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExamAttempt.
     */
    data: XOR<UserExamAttemptCreateInput, UserExamAttemptUncheckedCreateInput>
  }

  /**
   * UserExamAttempt createMany
   */
  export type UserExamAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExamAttempts.
     */
    data: UserExamAttemptCreateManyInput | UserExamAttemptCreateManyInput[]
  }

  /**
   * UserExamAttempt update
   */
  export type UserExamAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExamAttempt.
     */
    data: XOR<UserExamAttemptUpdateInput, UserExamAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserExamAttempt to update.
     */
    where: UserExamAttemptWhereUniqueInput
  }

  /**
   * UserExamAttempt updateMany
   */
  export type UserExamAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExamAttempts.
     */
    data: XOR<UserExamAttemptUpdateManyMutationInput, UserExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserExamAttempts to update
     */
    where?: UserExamAttemptWhereInput
    /**
     * Limit how many UserExamAttempts to update.
     */
    limit?: number
  }

  /**
   * UserExamAttempt upsert
   */
  export type UserExamAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExamAttempt to update in case it exists.
     */
    where: UserExamAttemptWhereUniqueInput
    /**
     * In case the UserExamAttempt found by the `where` argument doesn't exist, create a new UserExamAttempt with this data.
     */
    create: XOR<UserExamAttemptCreateInput, UserExamAttemptUncheckedCreateInput>
    /**
     * In case the UserExamAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExamAttemptUpdateInput, UserExamAttemptUncheckedUpdateInput>
  }

  /**
   * UserExamAttempt delete
   */
  export type UserExamAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserExamAttempt to delete.
     */
    where: UserExamAttemptWhereUniqueInput
  }

  /**
   * UserExamAttempt deleteMany
   */
  export type UserExamAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAttempts to delete
     */
    where?: UserExamAttemptWhereInput
    /**
     * Limit how many UserExamAttempts to delete.
     */
    limit?: number
  }

  /**
   * UserExamAttempt findRaw
   */
  export type UserExamAttemptFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserExamAttempt aggregateRaw
   */
  export type UserExamAttemptAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserExamAttempt without action
   */
  export type UserExamAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAttempt
     */
    select?: UserExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExamAttempt
     */
    omit?: UserExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    exerciseNumber: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    exerciseNumber: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    exerciseNumber: number | null
    title: string | null
    isFree: boolean | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    exerciseNumber: number | null
    title: string | null
    isFree: boolean | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    exerciseNumber: number
    title: number
    isFree: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    exerciseNumber?: true
  }

  export type ExerciseSumAggregateInputType = {
    exerciseNumber?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    exerciseNumber?: true
    title?: true
    isFree?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    exerciseNumber?: true
    title?: true
    isFree?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    exerciseNumber?: true
    title?: true
    isFree?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    exerciseNumber: number
    title: string
    isFree: boolean
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseNumber?: boolean
    title?: boolean
    isFree?: boolean
    questions?: boolean | Exercise$questionsArgs<ExtArgs>
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>



  export type ExerciseSelectScalar = {
    id?: boolean
    exerciseNumber?: boolean
    title?: boolean
    isFree?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseNumber" | "title" | "isFree", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Exercise$questionsArgs<ExtArgs>
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      questions: Prisma.$ExerciseQuestionPayload<ExtArgs>[]
      attempts: Prisma.$UserExerciseAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseNumber: number
      title: string
      isFree: boolean
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * @param {ExerciseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exercise = await prisma.exercise.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExerciseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Exercise.
     * @param {ExerciseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exercise = await prisma.exercise.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExerciseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Exercise$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends Exercise$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly exerciseNumber: FieldRef<"Exercise", 'Int'>
    readonly title: FieldRef<"Exercise", 'String'>
    readonly isFree: FieldRef<"Exercise", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise findRaw
   */
  export type ExerciseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exercise aggregateRaw
   */
  export type ExerciseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exercise.questions
   */
  export type Exercise$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    where?: ExerciseQuestionWhereInput
    orderBy?: ExerciseQuestionOrderByWithRelationInput | ExerciseQuestionOrderByWithRelationInput[]
    cursor?: ExerciseQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseQuestionScalarFieldEnum | ExerciseQuestionScalarFieldEnum[]
  }

  /**
   * Exercise.attempts
   */
  export type Exercise$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    where?: UserExerciseAttemptWhereInput
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    cursor?: UserExerciseAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExerciseAttemptScalarFieldEnum | UserExerciseAttemptScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseQuestion
   */

  export type AggregateExerciseQuestion = {
    _count: ExerciseQuestionCountAggregateOutputType | null
    _avg: ExerciseQuestionAvgAggregateOutputType | null
    _sum: ExerciseQuestionSumAggregateOutputType | null
    _min: ExerciseQuestionMinAggregateOutputType | null
    _max: ExerciseQuestionMaxAggregateOutputType | null
  }

  export type ExerciseQuestionAvgAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type ExerciseQuestionSumAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type ExerciseQuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIndex: number | null
    hint: string | null
    exerciseId: string | null
  }

  export type ExerciseQuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIndex: number | null
    hint: string | null
    exerciseId: string | null
  }

  export type ExerciseQuestionCountAggregateOutputType = {
    id: number
    text: number
    options: number
    correctAnswerIndex: number
    hint: number
    exerciseId: number
    _all: number
  }


  export type ExerciseQuestionAvgAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type ExerciseQuestionSumAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type ExerciseQuestionMinAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIndex?: true
    hint?: true
    exerciseId?: true
  }

  export type ExerciseQuestionMaxAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIndex?: true
    hint?: true
    exerciseId?: true
  }

  export type ExerciseQuestionCountAggregateInputType = {
    id?: true
    text?: true
    options?: true
    correctAnswerIndex?: true
    hint?: true
    exerciseId?: true
    _all?: true
  }

  export type ExerciseQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseQuestion to aggregate.
     */
    where?: ExerciseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseQuestions to fetch.
     */
    orderBy?: ExerciseQuestionOrderByWithRelationInput | ExerciseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseQuestions
    **/
    _count?: true | ExerciseQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseQuestionMaxAggregateInputType
  }

  export type GetExerciseQuestionAggregateType<T extends ExerciseQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseQuestion[P]>
      : GetScalarType<T[P], AggregateExerciseQuestion[P]>
  }




  export type ExerciseQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseQuestionWhereInput
    orderBy?: ExerciseQuestionOrderByWithAggregationInput | ExerciseQuestionOrderByWithAggregationInput[]
    by: ExerciseQuestionScalarFieldEnum[] | ExerciseQuestionScalarFieldEnum
    having?: ExerciseQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseQuestionCountAggregateInputType | true
    _avg?: ExerciseQuestionAvgAggregateInputType
    _sum?: ExerciseQuestionSumAggregateInputType
    _min?: ExerciseQuestionMinAggregateInputType
    _max?: ExerciseQuestionMaxAggregateInputType
  }

  export type ExerciseQuestionGroupByOutputType = {
    id: string
    text: string
    options: string[]
    correctAnswerIndex: number
    hint: string | null
    exerciseId: string
    _count: ExerciseQuestionCountAggregateOutputType | null
    _avg: ExerciseQuestionAvgAggregateOutputType | null
    _sum: ExerciseQuestionSumAggregateOutputType | null
    _min: ExerciseQuestionMinAggregateOutputType | null
    _max: ExerciseQuestionMaxAggregateOutputType | null
  }

  type GetExerciseQuestionGroupByPayload<T extends ExerciseQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
    hint?: boolean
    exerciseId?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseQuestion"]>



  export type ExerciseQuestionSelectScalar = {
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
    hint?: boolean
    exerciseId?: boolean
  }

  export type ExerciseQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "options" | "correctAnswerIndex" | "hint" | "exerciseId", ExtArgs["result"]["exerciseQuestion"]>
  export type ExerciseQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $ExerciseQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseQuestion"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      options: string[]
      correctAnswerIndex: number
      hint: string | null
      exerciseId: string
    }, ExtArgs["result"]["exerciseQuestion"]>
    composites: {}
  }

  type ExerciseQuestionGetPayload<S extends boolean | null | undefined | ExerciseQuestionDefaultArgs> = $Result.GetResult<Prisma.$ExerciseQuestionPayload, S>

  type ExerciseQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseQuestionCountAggregateInputType | true
    }

  export interface ExerciseQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseQuestion'], meta: { name: 'ExerciseQuestion' } }
    /**
     * Find zero or one ExerciseQuestion that matches the filter.
     * @param {ExerciseQuestionFindUniqueArgs} args - Arguments to find a ExerciseQuestion
     * @example
     * // Get one ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseQuestionFindUniqueArgs>(args: SelectSubset<T, ExerciseQuestionFindUniqueArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseQuestionFindUniqueOrThrowArgs} args - Arguments to find a ExerciseQuestion
     * @example
     * // Get one ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionFindFirstArgs} args - Arguments to find a ExerciseQuestion
     * @example
     * // Get one ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseQuestionFindFirstArgs>(args?: SelectSubset<T, ExerciseQuestionFindFirstArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionFindFirstOrThrowArgs} args - Arguments to find a ExerciseQuestion
     * @example
     * // Get one ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseQuestions
     * const exerciseQuestions = await prisma.exerciseQuestion.findMany()
     * 
     * // Get first 10 ExerciseQuestions
     * const exerciseQuestions = await prisma.exerciseQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseQuestionWithIdOnly = await prisma.exerciseQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseQuestionFindManyArgs>(args?: SelectSubset<T, ExerciseQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseQuestion.
     * @param {ExerciseQuestionCreateArgs} args - Arguments to create a ExerciseQuestion.
     * @example
     * // Create one ExerciseQuestion
     * const ExerciseQuestion = await prisma.exerciseQuestion.create({
     *   data: {
     *     // ... data to create a ExerciseQuestion
     *   }
     * })
     * 
     */
    create<T extends ExerciseQuestionCreateArgs>(args: SelectSubset<T, ExerciseQuestionCreateArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseQuestions.
     * @param {ExerciseQuestionCreateManyArgs} args - Arguments to create many ExerciseQuestions.
     * @example
     * // Create many ExerciseQuestions
     * const exerciseQuestion = await prisma.exerciseQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseQuestionCreateManyArgs>(args?: SelectSubset<T, ExerciseQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExerciseQuestion.
     * @param {ExerciseQuestionDeleteArgs} args - Arguments to delete one ExerciseQuestion.
     * @example
     * // Delete one ExerciseQuestion
     * const ExerciseQuestion = await prisma.exerciseQuestion.delete({
     *   where: {
     *     // ... filter to delete one ExerciseQuestion
     *   }
     * })
     * 
     */
    delete<T extends ExerciseQuestionDeleteArgs>(args: SelectSubset<T, ExerciseQuestionDeleteArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseQuestion.
     * @param {ExerciseQuestionUpdateArgs} args - Arguments to update one ExerciseQuestion.
     * @example
     * // Update one ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseQuestionUpdateArgs>(args: SelectSubset<T, ExerciseQuestionUpdateArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseQuestions.
     * @param {ExerciseQuestionDeleteManyArgs} args - Arguments to filter ExerciseQuestions to delete.
     * @example
     * // Delete a few ExerciseQuestions
     * const { count } = await prisma.exerciseQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseQuestionDeleteManyArgs>(args?: SelectSubset<T, ExerciseQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseQuestions
     * const exerciseQuestion = await prisma.exerciseQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseQuestionUpdateManyArgs>(args: SelectSubset<T, ExerciseQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExerciseQuestion.
     * @param {ExerciseQuestionUpsertArgs} args - Arguments to update or create a ExerciseQuestion.
     * @example
     * // Update or create a ExerciseQuestion
     * const exerciseQuestion = await prisma.exerciseQuestion.upsert({
     *   create: {
     *     // ... data to create a ExerciseQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseQuestionUpsertArgs>(args: SelectSubset<T, ExerciseQuestionUpsertArgs<ExtArgs>>): Prisma__ExerciseQuestionClient<$Result.GetResult<Prisma.$ExerciseQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseQuestions that matches the filter.
     * @param {ExerciseQuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exerciseQuestion = await prisma.exerciseQuestion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExerciseQuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExerciseQuestion.
     * @param {ExerciseQuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exerciseQuestion = await prisma.exerciseQuestion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExerciseQuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ExerciseQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionCountArgs} args - Arguments to filter ExerciseQuestions to count.
     * @example
     * // Count the number of ExerciseQuestions
     * const count = await prisma.exerciseQuestion.count({
     *   where: {
     *     // ... the filter for the ExerciseQuestions we want to count
     *   }
     * })
    **/
    count<T extends ExerciseQuestionCountArgs>(
      args?: Subset<T, ExerciseQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseQuestionAggregateArgs>(args: Subset<T, ExerciseQuestionAggregateArgs>): Prisma.PrismaPromise<GetExerciseQuestionAggregateType<T>>

    /**
     * Group by ExerciseQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseQuestion model
   */
  readonly fields: ExerciseQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExerciseQuestion model
   */
  interface ExerciseQuestionFieldRefs {
    readonly id: FieldRef<"ExerciseQuestion", 'String'>
    readonly text: FieldRef<"ExerciseQuestion", 'String'>
    readonly options: FieldRef<"ExerciseQuestion", 'String[]'>
    readonly correctAnswerIndex: FieldRef<"ExerciseQuestion", 'Int'>
    readonly hint: FieldRef<"ExerciseQuestion", 'String'>
    readonly exerciseId: FieldRef<"ExerciseQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseQuestion findUnique
   */
  export type ExerciseQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseQuestion to fetch.
     */
    where: ExerciseQuestionWhereUniqueInput
  }

  /**
   * ExerciseQuestion findUniqueOrThrow
   */
  export type ExerciseQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseQuestion to fetch.
     */
    where: ExerciseQuestionWhereUniqueInput
  }

  /**
   * ExerciseQuestion findFirst
   */
  export type ExerciseQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseQuestion to fetch.
     */
    where?: ExerciseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseQuestions to fetch.
     */
    orderBy?: ExerciseQuestionOrderByWithRelationInput | ExerciseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseQuestions.
     */
    cursor?: ExerciseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseQuestions.
     */
    distinct?: ExerciseQuestionScalarFieldEnum | ExerciseQuestionScalarFieldEnum[]
  }

  /**
   * ExerciseQuestion findFirstOrThrow
   */
  export type ExerciseQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseQuestion to fetch.
     */
    where?: ExerciseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseQuestions to fetch.
     */
    orderBy?: ExerciseQuestionOrderByWithRelationInput | ExerciseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseQuestions.
     */
    cursor?: ExerciseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseQuestions.
     */
    distinct?: ExerciseQuestionScalarFieldEnum | ExerciseQuestionScalarFieldEnum[]
  }

  /**
   * ExerciseQuestion findMany
   */
  export type ExerciseQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseQuestions to fetch.
     */
    where?: ExerciseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseQuestions to fetch.
     */
    orderBy?: ExerciseQuestionOrderByWithRelationInput | ExerciseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseQuestions.
     */
    cursor?: ExerciseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseQuestions.
     */
    skip?: number
    distinct?: ExerciseQuestionScalarFieldEnum | ExerciseQuestionScalarFieldEnum[]
  }

  /**
   * ExerciseQuestion create
   */
  export type ExerciseQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseQuestion.
     */
    data: XOR<ExerciseQuestionCreateInput, ExerciseQuestionUncheckedCreateInput>
  }

  /**
   * ExerciseQuestion createMany
   */
  export type ExerciseQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseQuestions.
     */
    data: ExerciseQuestionCreateManyInput | ExerciseQuestionCreateManyInput[]
  }

  /**
   * ExerciseQuestion update
   */
  export type ExerciseQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseQuestion.
     */
    data: XOR<ExerciseQuestionUpdateInput, ExerciseQuestionUncheckedUpdateInput>
    /**
     * Choose, which ExerciseQuestion to update.
     */
    where: ExerciseQuestionWhereUniqueInput
  }

  /**
   * ExerciseQuestion updateMany
   */
  export type ExerciseQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseQuestions.
     */
    data: XOR<ExerciseQuestionUpdateManyMutationInput, ExerciseQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseQuestions to update
     */
    where?: ExerciseQuestionWhereInput
    /**
     * Limit how many ExerciseQuestions to update.
     */
    limit?: number
  }

  /**
   * ExerciseQuestion upsert
   */
  export type ExerciseQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseQuestion to update in case it exists.
     */
    where: ExerciseQuestionWhereUniqueInput
    /**
     * In case the ExerciseQuestion found by the `where` argument doesn't exist, create a new ExerciseQuestion with this data.
     */
    create: XOR<ExerciseQuestionCreateInput, ExerciseQuestionUncheckedCreateInput>
    /**
     * In case the ExerciseQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseQuestionUpdateInput, ExerciseQuestionUncheckedUpdateInput>
  }

  /**
   * ExerciseQuestion delete
   */
  export type ExerciseQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
    /**
     * Filter which ExerciseQuestion to delete.
     */
    where: ExerciseQuestionWhereUniqueInput
  }

  /**
   * ExerciseQuestion deleteMany
   */
  export type ExerciseQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseQuestions to delete
     */
    where?: ExerciseQuestionWhereInput
    /**
     * Limit how many ExerciseQuestions to delete.
     */
    limit?: number
  }

  /**
   * ExerciseQuestion findRaw
   */
  export type ExerciseQuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExerciseQuestion aggregateRaw
   */
  export type ExerciseQuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExerciseQuestion without action
   */
  export type ExerciseQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseQuestion
     */
    select?: ExerciseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseQuestion
     */
    omit?: ExerciseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseQuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserExerciseAttempt
   */

  export type AggregateUserExerciseAttempt = {
    _count: UserExerciseAttemptCountAggregateOutputType | null
    _avg: UserExerciseAttemptAvgAggregateOutputType | null
    _sum: UserExerciseAttemptSumAggregateOutputType | null
    _min: UserExerciseAttemptMinAggregateOutputType | null
    _max: UserExerciseAttemptMaxAggregateOutputType | null
  }

  export type UserExerciseAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type UserExerciseAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type UserExerciseAttemptMinAggregateOutputType = {
    id: string | null
    score: number | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    exerciseId: string | null
  }

  export type UserExerciseAttemptMaxAggregateOutputType = {
    id: string | null
    score: number | null
    startedAt: Date | null
    completedAt: Date | null
    userId: string | null
    exerciseId: string | null
  }

  export type UserExerciseAttemptCountAggregateOutputType = {
    id: number
    score: number
    startedAt: number
    completedAt: number
    userId: number
    exerciseId: number
    _all: number
  }


  export type UserExerciseAttemptAvgAggregateInputType = {
    score?: true
  }

  export type UserExerciseAttemptSumAggregateInputType = {
    score?: true
  }

  export type UserExerciseAttemptMinAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    exerciseId?: true
  }

  export type UserExerciseAttemptMaxAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    exerciseId?: true
  }

  export type UserExerciseAttemptCountAggregateInputType = {
    id?: true
    score?: true
    startedAt?: true
    completedAt?: true
    userId?: true
    exerciseId?: true
    _all?: true
  }

  export type UserExerciseAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExerciseAttempt to aggregate.
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExerciseAttempts to fetch.
     */
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExerciseAttempts
    **/
    _count?: true | UserExerciseAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExerciseAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExerciseAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExerciseAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExerciseAttemptMaxAggregateInputType
  }

  export type GetUserExerciseAttemptAggregateType<T extends UserExerciseAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExerciseAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExerciseAttempt[P]>
      : GetScalarType<T[P], AggregateUserExerciseAttempt[P]>
  }




  export type UserExerciseAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseAttemptWhereInput
    orderBy?: UserExerciseAttemptOrderByWithAggregationInput | UserExerciseAttemptOrderByWithAggregationInput[]
    by: UserExerciseAttemptScalarFieldEnum[] | UserExerciseAttemptScalarFieldEnum
    having?: UserExerciseAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExerciseAttemptCountAggregateInputType | true
    _avg?: UserExerciseAttemptAvgAggregateInputType
    _sum?: UserExerciseAttemptSumAggregateInputType
    _min?: UserExerciseAttemptMinAggregateInputType
    _max?: UserExerciseAttemptMaxAggregateInputType
  }

  export type UserExerciseAttemptGroupByOutputType = {
    id: string
    score: number | null
    startedAt: Date
    completedAt: Date | null
    userId: string
    exerciseId: string
    _count: UserExerciseAttemptCountAggregateOutputType | null
    _avg: UserExerciseAttemptAvgAggregateOutputType | null
    _sum: UserExerciseAttemptSumAggregateOutputType | null
    _min: UserExerciseAttemptMinAggregateOutputType | null
    _max: UserExerciseAttemptMaxAggregateOutputType | null
  }

  type GetUserExerciseAttemptGroupByPayload<T extends UserExerciseAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExerciseAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExerciseAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExerciseAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserExerciseAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserExerciseAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    exerciseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    answers?: boolean | UserExerciseAttempt$answersArgs<ExtArgs>
    _count?: boolean | UserExerciseAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExerciseAttempt"]>



  export type UserExerciseAttemptSelectScalar = {
    id?: boolean
    score?: boolean
    startedAt?: boolean
    completedAt?: boolean
    userId?: boolean
    exerciseId?: boolean
  }

  export type UserExerciseAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "startedAt" | "completedAt" | "userId" | "exerciseId", ExtArgs["result"]["userExerciseAttempt"]>
  export type UserExerciseAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    answers?: boolean | UserExerciseAttempt$answersArgs<ExtArgs>
    _count?: boolean | UserExerciseAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserExerciseAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExerciseAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      answers: Prisma.$ExerciseAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number | null
      startedAt: Date
      completedAt: Date | null
      userId: string
      exerciseId: string
    }, ExtArgs["result"]["userExerciseAttempt"]>
    composites: {}
  }

  type UserExerciseAttemptGetPayload<S extends boolean | null | undefined | UserExerciseAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserExerciseAttemptPayload, S>

  type UserExerciseAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserExerciseAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserExerciseAttemptCountAggregateInputType | true
    }

  export interface UserExerciseAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExerciseAttempt'], meta: { name: 'UserExerciseAttempt' } }
    /**
     * Find zero or one UserExerciseAttempt that matches the filter.
     * @param {UserExerciseAttemptFindUniqueArgs} args - Arguments to find a UserExerciseAttempt
     * @example
     * // Get one UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExerciseAttemptFindUniqueArgs>(args: SelectSubset<T, UserExerciseAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserExerciseAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserExerciseAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserExerciseAttempt
     * @example
     * // Get one UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExerciseAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExerciseAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExerciseAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptFindFirstArgs} args - Arguments to find a UserExerciseAttempt
     * @example
     * // Get one UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExerciseAttemptFindFirstArgs>(args?: SelectSubset<T, UserExerciseAttemptFindFirstArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExerciseAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptFindFirstOrThrowArgs} args - Arguments to find a UserExerciseAttempt
     * @example
     * // Get one UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExerciseAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExerciseAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExerciseAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExerciseAttempts
     * const userExerciseAttempts = await prisma.userExerciseAttempt.findMany()
     * 
     * // Get first 10 UserExerciseAttempts
     * const userExerciseAttempts = await prisma.userExerciseAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExerciseAttemptWithIdOnly = await prisma.userExerciseAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExerciseAttemptFindManyArgs>(args?: SelectSubset<T, UserExerciseAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserExerciseAttempt.
     * @param {UserExerciseAttemptCreateArgs} args - Arguments to create a UserExerciseAttempt.
     * @example
     * // Create one UserExerciseAttempt
     * const UserExerciseAttempt = await prisma.userExerciseAttempt.create({
     *   data: {
     *     // ... data to create a UserExerciseAttempt
     *   }
     * })
     * 
     */
    create<T extends UserExerciseAttemptCreateArgs>(args: SelectSubset<T, UserExerciseAttemptCreateArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserExerciseAttempts.
     * @param {UserExerciseAttemptCreateManyArgs} args - Arguments to create many UserExerciseAttempts.
     * @example
     * // Create many UserExerciseAttempts
     * const userExerciseAttempt = await prisma.userExerciseAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExerciseAttemptCreateManyArgs>(args?: SelectSubset<T, UserExerciseAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExerciseAttempt.
     * @param {UserExerciseAttemptDeleteArgs} args - Arguments to delete one UserExerciseAttempt.
     * @example
     * // Delete one UserExerciseAttempt
     * const UserExerciseAttempt = await prisma.userExerciseAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserExerciseAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserExerciseAttemptDeleteArgs>(args: SelectSubset<T, UserExerciseAttemptDeleteArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserExerciseAttempt.
     * @param {UserExerciseAttemptUpdateArgs} args - Arguments to update one UserExerciseAttempt.
     * @example
     * // Update one UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExerciseAttemptUpdateArgs>(args: SelectSubset<T, UserExerciseAttemptUpdateArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserExerciseAttempts.
     * @param {UserExerciseAttemptDeleteManyArgs} args - Arguments to filter UserExerciseAttempts to delete.
     * @example
     * // Delete a few UserExerciseAttempts
     * const { count } = await prisma.userExerciseAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExerciseAttemptDeleteManyArgs>(args?: SelectSubset<T, UserExerciseAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExerciseAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExerciseAttempts
     * const userExerciseAttempt = await prisma.userExerciseAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExerciseAttemptUpdateManyArgs>(args: SelectSubset<T, UserExerciseAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExerciseAttempt.
     * @param {UserExerciseAttemptUpsertArgs} args - Arguments to update or create a UserExerciseAttempt.
     * @example
     * // Update or create a UserExerciseAttempt
     * const userExerciseAttempt = await prisma.userExerciseAttempt.upsert({
     *   create: {
     *     // ... data to create a UserExerciseAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExerciseAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserExerciseAttemptUpsertArgs>(args: SelectSubset<T, UserExerciseAttemptUpsertArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExerciseAttempts that matches the filter.
     * @param {UserExerciseAttemptFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userExerciseAttempt = await prisma.userExerciseAttempt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserExerciseAttemptFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserExerciseAttempt.
     * @param {UserExerciseAttemptAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userExerciseAttempt = await prisma.userExerciseAttempt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserExerciseAttemptAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserExerciseAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptCountArgs} args - Arguments to filter UserExerciseAttempts to count.
     * @example
     * // Count the number of UserExerciseAttempts
     * const count = await prisma.userExerciseAttempt.count({
     *   where: {
     *     // ... the filter for the UserExerciseAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserExerciseAttemptCountArgs>(
      args?: Subset<T, UserExerciseAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExerciseAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExerciseAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExerciseAttemptAggregateArgs>(args: Subset<T, UserExerciseAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserExerciseAttemptAggregateType<T>>

    /**
     * Group by UserExerciseAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExerciseAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExerciseAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserExerciseAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExerciseAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExerciseAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExerciseAttempt model
   */
  readonly fields: UserExerciseAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExerciseAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExerciseAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends UserExerciseAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, UserExerciseAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExerciseAttempt model
   */
  interface UserExerciseAttemptFieldRefs {
    readonly id: FieldRef<"UserExerciseAttempt", 'String'>
    readonly score: FieldRef<"UserExerciseAttempt", 'Int'>
    readonly startedAt: FieldRef<"UserExerciseAttempt", 'DateTime'>
    readonly completedAt: FieldRef<"UserExerciseAttempt", 'DateTime'>
    readonly userId: FieldRef<"UserExerciseAttempt", 'String'>
    readonly exerciseId: FieldRef<"UserExerciseAttempt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserExerciseAttempt findUnique
   */
  export type UserExerciseAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExerciseAttempt to fetch.
     */
    where: UserExerciseAttemptWhereUniqueInput
  }

  /**
   * UserExerciseAttempt findUniqueOrThrow
   */
  export type UserExerciseAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExerciseAttempt to fetch.
     */
    where: UserExerciseAttemptWhereUniqueInput
  }

  /**
   * UserExerciseAttempt findFirst
   */
  export type UserExerciseAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExerciseAttempt to fetch.
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExerciseAttempts to fetch.
     */
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExerciseAttempts.
     */
    cursor?: UserExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExerciseAttempts.
     */
    distinct?: UserExerciseAttemptScalarFieldEnum | UserExerciseAttemptScalarFieldEnum[]
  }

  /**
   * UserExerciseAttempt findFirstOrThrow
   */
  export type UserExerciseAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExerciseAttempt to fetch.
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExerciseAttempts to fetch.
     */
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExerciseAttempts.
     */
    cursor?: UserExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExerciseAttempts.
     */
    distinct?: UserExerciseAttemptScalarFieldEnum | UserExerciseAttemptScalarFieldEnum[]
  }

  /**
   * UserExerciseAttempt findMany
   */
  export type UserExerciseAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserExerciseAttempts to fetch.
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExerciseAttempts to fetch.
     */
    orderBy?: UserExerciseAttemptOrderByWithRelationInput | UserExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExerciseAttempts.
     */
    cursor?: UserExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExerciseAttempts.
     */
    skip?: number
    distinct?: UserExerciseAttemptScalarFieldEnum | UserExerciseAttemptScalarFieldEnum[]
  }

  /**
   * UserExerciseAttempt create
   */
  export type UserExerciseAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExerciseAttempt.
     */
    data: XOR<UserExerciseAttemptCreateInput, UserExerciseAttemptUncheckedCreateInput>
  }

  /**
   * UserExerciseAttempt createMany
   */
  export type UserExerciseAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExerciseAttempts.
     */
    data: UserExerciseAttemptCreateManyInput | UserExerciseAttemptCreateManyInput[]
  }

  /**
   * UserExerciseAttempt update
   */
  export type UserExerciseAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExerciseAttempt.
     */
    data: XOR<UserExerciseAttemptUpdateInput, UserExerciseAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserExerciseAttempt to update.
     */
    where: UserExerciseAttemptWhereUniqueInput
  }

  /**
   * UserExerciseAttempt updateMany
   */
  export type UserExerciseAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExerciseAttempts.
     */
    data: XOR<UserExerciseAttemptUpdateManyMutationInput, UserExerciseAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserExerciseAttempts to update
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * Limit how many UserExerciseAttempts to update.
     */
    limit?: number
  }

  /**
   * UserExerciseAttempt upsert
   */
  export type UserExerciseAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExerciseAttempt to update in case it exists.
     */
    where: UserExerciseAttemptWhereUniqueInput
    /**
     * In case the UserExerciseAttempt found by the `where` argument doesn't exist, create a new UserExerciseAttempt with this data.
     */
    create: XOR<UserExerciseAttemptCreateInput, UserExerciseAttemptUncheckedCreateInput>
    /**
     * In case the UserExerciseAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExerciseAttemptUpdateInput, UserExerciseAttemptUncheckedUpdateInput>
  }

  /**
   * UserExerciseAttempt delete
   */
  export type UserExerciseAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserExerciseAttempt to delete.
     */
    where: UserExerciseAttemptWhereUniqueInput
  }

  /**
   * UserExerciseAttempt deleteMany
   */
  export type UserExerciseAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExerciseAttempts to delete
     */
    where?: UserExerciseAttemptWhereInput
    /**
     * Limit how many UserExerciseAttempts to delete.
     */
    limit?: number
  }

  /**
   * UserExerciseAttempt findRaw
   */
  export type UserExerciseAttemptFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserExerciseAttempt aggregateRaw
   */
  export type UserExerciseAttemptAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserExerciseAttempt.answers
   */
  export type UserExerciseAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    where?: ExerciseAnswerWhereInput
    orderBy?: ExerciseAnswerOrderByWithRelationInput | ExerciseAnswerOrderByWithRelationInput[]
    cursor?: ExerciseAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseAnswerScalarFieldEnum | ExerciseAnswerScalarFieldEnum[]
  }

  /**
   * UserExerciseAttempt without action
   */
  export type UserExerciseAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseAttempt
     */
    select?: UserExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExerciseAttempt
     */
    omit?: UserExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseAttemptInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseAnswer
   */

  export type AggregateExerciseAnswer = {
    _count: ExerciseAnswerCountAggregateOutputType | null
    _avg: ExerciseAnswerAvgAggregateOutputType | null
    _sum: ExerciseAnswerSumAggregateOutputType | null
    _min: ExerciseAnswerMinAggregateOutputType | null
    _max: ExerciseAnswerMaxAggregateOutputType | null
  }

  export type ExerciseAnswerAvgAggregateOutputType = {
    selectedOptionIndex: number | null
  }

  export type ExerciseAnswerSumAggregateOutputType = {
    selectedOptionIndex: number | null
  }

  export type ExerciseAnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    selectedOptionIndex: number | null
    isCorrect: boolean | null
    submittedAt: Date | null
    attemptId: string | null
  }

  export type ExerciseAnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    selectedOptionIndex: number | null
    isCorrect: boolean | null
    submittedAt: Date | null
    attemptId: string | null
  }

  export type ExerciseAnswerCountAggregateOutputType = {
    id: number
    questionId: number
    selectedOptionIndex: number
    isCorrect: number
    submittedAt: number
    attemptId: number
    _all: number
  }


  export type ExerciseAnswerAvgAggregateInputType = {
    selectedOptionIndex?: true
  }

  export type ExerciseAnswerSumAggregateInputType = {
    selectedOptionIndex?: true
  }

  export type ExerciseAnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    selectedOptionIndex?: true
    isCorrect?: true
    submittedAt?: true
    attemptId?: true
  }

  export type ExerciseAnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    selectedOptionIndex?: true
    isCorrect?: true
    submittedAt?: true
    attemptId?: true
  }

  export type ExerciseAnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    selectedOptionIndex?: true
    isCorrect?: true
    submittedAt?: true
    attemptId?: true
    _all?: true
  }

  export type ExerciseAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAnswer to aggregate.
     */
    where?: ExerciseAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnswers to fetch.
     */
    orderBy?: ExerciseAnswerOrderByWithRelationInput | ExerciseAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseAnswers
    **/
    _count?: true | ExerciseAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseAnswerMaxAggregateInputType
  }

  export type GetExerciseAnswerAggregateType<T extends ExerciseAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseAnswer[P]>
      : GetScalarType<T[P], AggregateExerciseAnswer[P]>
  }




  export type ExerciseAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAnswerWhereInput
    orderBy?: ExerciseAnswerOrderByWithAggregationInput | ExerciseAnswerOrderByWithAggregationInput[]
    by: ExerciseAnswerScalarFieldEnum[] | ExerciseAnswerScalarFieldEnum
    having?: ExerciseAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseAnswerCountAggregateInputType | true
    _avg?: ExerciseAnswerAvgAggregateInputType
    _sum?: ExerciseAnswerSumAggregateInputType
    _min?: ExerciseAnswerMinAggregateInputType
    _max?: ExerciseAnswerMaxAggregateInputType
  }

  export type ExerciseAnswerGroupByOutputType = {
    id: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt: Date
    attemptId: string
    _count: ExerciseAnswerCountAggregateOutputType | null
    _avg: ExerciseAnswerAvgAggregateOutputType | null
    _sum: ExerciseAnswerSumAggregateOutputType | null
    _min: ExerciseAnswerMinAggregateOutputType | null
    _max: ExerciseAnswerMaxAggregateOutputType | null
  }

  type GetExerciseAnswerGroupByPayload<T extends ExerciseAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseAnswerGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    selectedOptionIndex?: boolean
    isCorrect?: boolean
    submittedAt?: boolean
    attemptId?: boolean
    attempt?: boolean | UserExerciseAttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAnswer"]>



  export type ExerciseAnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    selectedOptionIndex?: boolean
    isCorrect?: boolean
    submittedAt?: boolean
    attemptId?: boolean
  }

  export type ExerciseAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "selectedOptionIndex" | "isCorrect" | "submittedAt" | "attemptId", ExtArgs["result"]["exerciseAnswer"]>
  export type ExerciseAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | UserExerciseAttemptDefaultArgs<ExtArgs>
  }

  export type $ExerciseAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseAnswer"
    objects: {
      attempt: Prisma.$UserExerciseAttemptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      selectedOptionIndex: number
      isCorrect: boolean
      submittedAt: Date
      attemptId: string
    }, ExtArgs["result"]["exerciseAnswer"]>
    composites: {}
  }

  type ExerciseAnswerGetPayload<S extends boolean | null | undefined | ExerciseAnswerDefaultArgs> = $Result.GetResult<Prisma.$ExerciseAnswerPayload, S>

  type ExerciseAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseAnswerCountAggregateInputType | true
    }

  export interface ExerciseAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseAnswer'], meta: { name: 'ExerciseAnswer' } }
    /**
     * Find zero or one ExerciseAnswer that matches the filter.
     * @param {ExerciseAnswerFindUniqueArgs} args - Arguments to find a ExerciseAnswer
     * @example
     * // Get one ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseAnswerFindUniqueArgs>(args: SelectSubset<T, ExerciseAnswerFindUniqueArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseAnswerFindUniqueOrThrowArgs} args - Arguments to find a ExerciseAnswer
     * @example
     * // Get one ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerFindFirstArgs} args - Arguments to find a ExerciseAnswer
     * @example
     * // Get one ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseAnswerFindFirstArgs>(args?: SelectSubset<T, ExerciseAnswerFindFirstArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerFindFirstOrThrowArgs} args - Arguments to find a ExerciseAnswer
     * @example
     * // Get one ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseAnswers
     * const exerciseAnswers = await prisma.exerciseAnswer.findMany()
     * 
     * // Get first 10 ExerciseAnswers
     * const exerciseAnswers = await prisma.exerciseAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseAnswerWithIdOnly = await prisma.exerciseAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseAnswerFindManyArgs>(args?: SelectSubset<T, ExerciseAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseAnswer.
     * @param {ExerciseAnswerCreateArgs} args - Arguments to create a ExerciseAnswer.
     * @example
     * // Create one ExerciseAnswer
     * const ExerciseAnswer = await prisma.exerciseAnswer.create({
     *   data: {
     *     // ... data to create a ExerciseAnswer
     *   }
     * })
     * 
     */
    create<T extends ExerciseAnswerCreateArgs>(args: SelectSubset<T, ExerciseAnswerCreateArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseAnswers.
     * @param {ExerciseAnswerCreateManyArgs} args - Arguments to create many ExerciseAnswers.
     * @example
     * // Create many ExerciseAnswers
     * const exerciseAnswer = await prisma.exerciseAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseAnswerCreateManyArgs>(args?: SelectSubset<T, ExerciseAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExerciseAnswer.
     * @param {ExerciseAnswerDeleteArgs} args - Arguments to delete one ExerciseAnswer.
     * @example
     * // Delete one ExerciseAnswer
     * const ExerciseAnswer = await prisma.exerciseAnswer.delete({
     *   where: {
     *     // ... filter to delete one ExerciseAnswer
     *   }
     * })
     * 
     */
    delete<T extends ExerciseAnswerDeleteArgs>(args: SelectSubset<T, ExerciseAnswerDeleteArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseAnswer.
     * @param {ExerciseAnswerUpdateArgs} args - Arguments to update one ExerciseAnswer.
     * @example
     * // Update one ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseAnswerUpdateArgs>(args: SelectSubset<T, ExerciseAnswerUpdateArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseAnswers.
     * @param {ExerciseAnswerDeleteManyArgs} args - Arguments to filter ExerciseAnswers to delete.
     * @example
     * // Delete a few ExerciseAnswers
     * const { count } = await prisma.exerciseAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseAnswerDeleteManyArgs>(args?: SelectSubset<T, ExerciseAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseAnswers
     * const exerciseAnswer = await prisma.exerciseAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseAnswerUpdateManyArgs>(args: SelectSubset<T, ExerciseAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExerciseAnswer.
     * @param {ExerciseAnswerUpsertArgs} args - Arguments to update or create a ExerciseAnswer.
     * @example
     * // Update or create a ExerciseAnswer
     * const exerciseAnswer = await prisma.exerciseAnswer.upsert({
     *   create: {
     *     // ... data to create a ExerciseAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseAnswer we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseAnswerUpsertArgs>(args: SelectSubset<T, ExerciseAnswerUpsertArgs<ExtArgs>>): Prisma__ExerciseAnswerClient<$Result.GetResult<Prisma.$ExerciseAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseAnswers that matches the filter.
     * @param {ExerciseAnswerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exerciseAnswer = await prisma.exerciseAnswer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExerciseAnswerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExerciseAnswer.
     * @param {ExerciseAnswerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exerciseAnswer = await prisma.exerciseAnswer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExerciseAnswerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ExerciseAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerCountArgs} args - Arguments to filter ExerciseAnswers to count.
     * @example
     * // Count the number of ExerciseAnswers
     * const count = await prisma.exerciseAnswer.count({
     *   where: {
     *     // ... the filter for the ExerciseAnswers we want to count
     *   }
     * })
    **/
    count<T extends ExerciseAnswerCountArgs>(
      args?: Subset<T, ExerciseAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAnswerAggregateArgs>(args: Subset<T, ExerciseAnswerAggregateArgs>): Prisma.PrismaPromise<GetExerciseAnswerAggregateType<T>>

    /**
     * Group by ExerciseAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseAnswerGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseAnswer model
   */
  readonly fields: ExerciseAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends UserExerciseAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserExerciseAttemptDefaultArgs<ExtArgs>>): Prisma__UserExerciseAttemptClient<$Result.GetResult<Prisma.$UserExerciseAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExerciseAnswer model
   */
  interface ExerciseAnswerFieldRefs {
    readonly id: FieldRef<"ExerciseAnswer", 'String'>
    readonly questionId: FieldRef<"ExerciseAnswer", 'String'>
    readonly selectedOptionIndex: FieldRef<"ExerciseAnswer", 'Int'>
    readonly isCorrect: FieldRef<"ExerciseAnswer", 'Boolean'>
    readonly submittedAt: FieldRef<"ExerciseAnswer", 'DateTime'>
    readonly attemptId: FieldRef<"ExerciseAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseAnswer findUnique
   */
  export type ExerciseAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnswer to fetch.
     */
    where: ExerciseAnswerWhereUniqueInput
  }

  /**
   * ExerciseAnswer findUniqueOrThrow
   */
  export type ExerciseAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnswer to fetch.
     */
    where: ExerciseAnswerWhereUniqueInput
  }

  /**
   * ExerciseAnswer findFirst
   */
  export type ExerciseAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnswer to fetch.
     */
    where?: ExerciseAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnswers to fetch.
     */
    orderBy?: ExerciseAnswerOrderByWithRelationInput | ExerciseAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAnswers.
     */
    cursor?: ExerciseAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAnswers.
     */
    distinct?: ExerciseAnswerScalarFieldEnum | ExerciseAnswerScalarFieldEnum[]
  }

  /**
   * ExerciseAnswer findFirstOrThrow
   */
  export type ExerciseAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnswer to fetch.
     */
    where?: ExerciseAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnswers to fetch.
     */
    orderBy?: ExerciseAnswerOrderByWithRelationInput | ExerciseAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAnswers.
     */
    cursor?: ExerciseAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAnswers.
     */
    distinct?: ExerciseAnswerScalarFieldEnum | ExerciseAnswerScalarFieldEnum[]
  }

  /**
   * ExerciseAnswer findMany
   */
  export type ExerciseAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnswers to fetch.
     */
    where?: ExerciseAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnswers to fetch.
     */
    orderBy?: ExerciseAnswerOrderByWithRelationInput | ExerciseAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseAnswers.
     */
    cursor?: ExerciseAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnswers.
     */
    skip?: number
    distinct?: ExerciseAnswerScalarFieldEnum | ExerciseAnswerScalarFieldEnum[]
  }

  /**
   * ExerciseAnswer create
   */
  export type ExerciseAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseAnswer.
     */
    data: XOR<ExerciseAnswerCreateInput, ExerciseAnswerUncheckedCreateInput>
  }

  /**
   * ExerciseAnswer createMany
   */
  export type ExerciseAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseAnswers.
     */
    data: ExerciseAnswerCreateManyInput | ExerciseAnswerCreateManyInput[]
  }

  /**
   * ExerciseAnswer update
   */
  export type ExerciseAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseAnswer.
     */
    data: XOR<ExerciseAnswerUpdateInput, ExerciseAnswerUncheckedUpdateInput>
    /**
     * Choose, which ExerciseAnswer to update.
     */
    where: ExerciseAnswerWhereUniqueInput
  }

  /**
   * ExerciseAnswer updateMany
   */
  export type ExerciseAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseAnswers.
     */
    data: XOR<ExerciseAnswerUpdateManyMutationInput, ExerciseAnswerUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseAnswers to update
     */
    where?: ExerciseAnswerWhereInput
    /**
     * Limit how many ExerciseAnswers to update.
     */
    limit?: number
  }

  /**
   * ExerciseAnswer upsert
   */
  export type ExerciseAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseAnswer to update in case it exists.
     */
    where: ExerciseAnswerWhereUniqueInput
    /**
     * In case the ExerciseAnswer found by the `where` argument doesn't exist, create a new ExerciseAnswer with this data.
     */
    create: XOR<ExerciseAnswerCreateInput, ExerciseAnswerUncheckedCreateInput>
    /**
     * In case the ExerciseAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseAnswerUpdateInput, ExerciseAnswerUncheckedUpdateInput>
  }

  /**
   * ExerciseAnswer delete
   */
  export type ExerciseAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
    /**
     * Filter which ExerciseAnswer to delete.
     */
    where: ExerciseAnswerWhereUniqueInput
  }

  /**
   * ExerciseAnswer deleteMany
   */
  export type ExerciseAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAnswers to delete
     */
    where?: ExerciseAnswerWhereInput
    /**
     * Limit how many ExerciseAnswers to delete.
     */
    limit?: number
  }

  /**
   * ExerciseAnswer findRaw
   */
  export type ExerciseAnswerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExerciseAnswer aggregateRaw
   */
  export type ExerciseAnswerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExerciseAnswer without action
   */
  export type ExerciseAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnswer
     */
    select?: ExerciseAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnswer
     */
    omit?: ExerciseAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnswerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    phone: 'phone',
    hashedPassword: 'hashedPassword',
    role: 'role',
    isPaid: 'isPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    jti: 'jti',
    revoked: 'revoked',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    examNumber: 'examNumber',
    title: 'title',
    isFree: 'isFree'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    options: 'options',
    correctAnswerIndex: 'correctAnswerIndex',
    examId: 'examId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const UserExamAttemptScalarFieldEnum: {
    id: 'id',
    score: 'score',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    userId: 'userId',
    examId: 'examId',
    answers: 'answers'
  };

  export type UserExamAttemptScalarFieldEnum = (typeof UserExamAttemptScalarFieldEnum)[keyof typeof UserExamAttemptScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    exerciseNumber: 'exerciseNumber',
    title: 'title',
    isFree: 'isFree'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseQuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    options: 'options',
    correctAnswerIndex: 'correctAnswerIndex',
    hint: 'hint',
    exerciseId: 'exerciseId'
  };

  export type ExerciseQuestionScalarFieldEnum = (typeof ExerciseQuestionScalarFieldEnum)[keyof typeof ExerciseQuestionScalarFieldEnum]


  export const UserExerciseAttemptScalarFieldEnum: {
    id: 'id',
    score: 'score',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    userId: 'userId',
    exerciseId: 'exerciseId'
  };

  export type UserExerciseAttemptScalarFieldEnum = (typeof UserExerciseAttemptScalarFieldEnum)[keyof typeof UserExerciseAttemptScalarFieldEnum]


  export const ExerciseAnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    selectedOptionIndex: 'selectedOptionIndex',
    isCorrect: 'isCorrect',
    submittedAt: 'submittedAt',
    attemptId: 'attemptId'
  };

  export type ExerciseAnswerScalarFieldEnum = (typeof ExerciseAnswerScalarFieldEnum)[keyof typeof ExerciseAnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPaid?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    examAttempts?: UserExamAttemptListRelationFilter
    exerciseAttempts?: UserExerciseAttemptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    examAttempts?: UserExamAttemptOrderByRelationAggregateInput
    exerciseAttempts?: UserExerciseAttemptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPaid?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    examAttempts?: UserExamAttemptListRelationFilter
    exerciseAttempts?: UserExerciseAttemptListRelationFilter
  }, "id" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isPaid?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    jti?: StringFilter<"RefreshToken"> | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    jti?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jti?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "jti">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    jti?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    jti?: StringWithAggregatesFilter<"RefreshToken"> | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    examNumber?: IntFilter<"Exam"> | number
    title?: StringFilter<"Exam"> | string
    isFree?: BoolFilter<"Exam"> | boolean
    questions?: QuestionListRelationFilter
    attempts?: UserExamAttemptListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    examNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    attempts?: UserExamAttemptOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    examNumber?: number
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    isFree?: BoolFilter<"Exam"> | boolean
    questions?: QuestionListRelationFilter
    attempts?: UserExamAttemptListRelationFilter
  }, "id" | "examNumber">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    examNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    examNumber?: IntWithAggregatesFilter<"Exam"> | number
    title?: StringWithAggregatesFilter<"Exam"> | string
    isFree?: BoolWithAggregatesFilter<"Exam"> | boolean
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswerIndex?: IntFilter<"Question"> | number
    examId?: StringFilter<"Question"> | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    examId?: SortOrder
    exam?: ExamOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswerIndex?: IntFilter<"Question"> | number
    examId?: StringFilter<"Question"> | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    examId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswerIndex?: IntWithAggregatesFilter<"Question"> | number
    examId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type UserExamAttemptWhereInput = {
    AND?: UserExamAttemptWhereInput | UserExamAttemptWhereInput[]
    OR?: UserExamAttemptWhereInput[]
    NOT?: UserExamAttemptWhereInput | UserExamAttemptWhereInput[]
    id?: StringFilter<"UserExamAttempt"> | string
    score?: IntNullableFilter<"UserExamAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExamAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExamAttempt"> | Date | string | null
    userId?: StringFilter<"UserExamAttempt"> | string
    examId?: StringFilter<"UserExamAttempt"> | string
    answers?: JsonFilter<"UserExamAttempt">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type UserExamAttemptOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    answers?: SortOrder
    user?: UserOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type UserExamAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExamAttemptWhereInput | UserExamAttemptWhereInput[]
    OR?: UserExamAttemptWhereInput[]
    NOT?: UserExamAttemptWhereInput | UserExamAttemptWhereInput[]
    score?: IntNullableFilter<"UserExamAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExamAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExamAttempt"> | Date | string | null
    userId?: StringFilter<"UserExamAttempt"> | string
    examId?: StringFilter<"UserExamAttempt"> | string
    answers?: JsonFilter<"UserExamAttempt">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id">

  export type UserExamAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    answers?: SortOrder
    _count?: UserExamAttemptCountOrderByAggregateInput
    _avg?: UserExamAttemptAvgOrderByAggregateInput
    _max?: UserExamAttemptMaxOrderByAggregateInput
    _min?: UserExamAttemptMinOrderByAggregateInput
    _sum?: UserExamAttemptSumOrderByAggregateInput
  }

  export type UserExamAttemptScalarWhereWithAggregatesInput = {
    AND?: UserExamAttemptScalarWhereWithAggregatesInput | UserExamAttemptScalarWhereWithAggregatesInput[]
    OR?: UserExamAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserExamAttemptScalarWhereWithAggregatesInput | UserExamAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExamAttempt"> | string
    score?: IntNullableWithAggregatesFilter<"UserExamAttempt"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"UserExamAttempt"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserExamAttempt"> | Date | string | null
    userId?: StringWithAggregatesFilter<"UserExamAttempt"> | string
    examId?: StringWithAggregatesFilter<"UserExamAttempt"> | string
    answers?: JsonWithAggregatesFilter<"UserExamAttempt">
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    exerciseNumber?: IntFilter<"Exercise"> | number
    title?: StringFilter<"Exercise"> | string
    isFree?: BoolFilter<"Exercise"> | boolean
    questions?: ExerciseQuestionListRelationFilter
    attempts?: UserExerciseAttemptListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    exerciseNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
    questions?: ExerciseQuestionOrderByRelationAggregateInput
    attempts?: UserExerciseAttemptOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    exerciseNumber?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    title?: StringFilter<"Exercise"> | string
    isFree?: BoolFilter<"Exercise"> | boolean
    questions?: ExerciseQuestionListRelationFilter
    attempts?: UserExerciseAttemptListRelationFilter
  }, "id" | "exerciseNumber">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    exerciseNumber?: IntWithAggregatesFilter<"Exercise"> | number
    title?: StringWithAggregatesFilter<"Exercise"> | string
    isFree?: BoolWithAggregatesFilter<"Exercise"> | boolean
  }

  export type ExerciseQuestionWhereInput = {
    AND?: ExerciseQuestionWhereInput | ExerciseQuestionWhereInput[]
    OR?: ExerciseQuestionWhereInput[]
    NOT?: ExerciseQuestionWhereInput | ExerciseQuestionWhereInput[]
    id?: StringFilter<"ExerciseQuestion"> | string
    text?: StringFilter<"ExerciseQuestion"> | string
    options?: StringNullableListFilter<"ExerciseQuestion">
    correctAnswerIndex?: IntFilter<"ExerciseQuestion"> | number
    hint?: StringNullableFilter<"ExerciseQuestion"> | string | null
    exerciseId?: StringFilter<"ExerciseQuestion"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type ExerciseQuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    hint?: SortOrder
    exerciseId?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type ExerciseQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseQuestionWhereInput | ExerciseQuestionWhereInput[]
    OR?: ExerciseQuestionWhereInput[]
    NOT?: ExerciseQuestionWhereInput | ExerciseQuestionWhereInput[]
    text?: StringFilter<"ExerciseQuestion"> | string
    options?: StringNullableListFilter<"ExerciseQuestion">
    correctAnswerIndex?: IntFilter<"ExerciseQuestion"> | number
    hint?: StringNullableFilter<"ExerciseQuestion"> | string | null
    exerciseId?: StringFilter<"ExerciseQuestion"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type ExerciseQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    hint?: SortOrder
    exerciseId?: SortOrder
    _count?: ExerciseQuestionCountOrderByAggregateInput
    _avg?: ExerciseQuestionAvgOrderByAggregateInput
    _max?: ExerciseQuestionMaxOrderByAggregateInput
    _min?: ExerciseQuestionMinOrderByAggregateInput
    _sum?: ExerciseQuestionSumOrderByAggregateInput
  }

  export type ExerciseQuestionScalarWhereWithAggregatesInput = {
    AND?: ExerciseQuestionScalarWhereWithAggregatesInput | ExerciseQuestionScalarWhereWithAggregatesInput[]
    OR?: ExerciseQuestionScalarWhereWithAggregatesInput[]
    NOT?: ExerciseQuestionScalarWhereWithAggregatesInput | ExerciseQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseQuestion"> | string
    text?: StringWithAggregatesFilter<"ExerciseQuestion"> | string
    options?: StringNullableListFilter<"ExerciseQuestion">
    correctAnswerIndex?: IntWithAggregatesFilter<"ExerciseQuestion"> | number
    hint?: StringNullableWithAggregatesFilter<"ExerciseQuestion"> | string | null
    exerciseId?: StringWithAggregatesFilter<"ExerciseQuestion"> | string
  }

  export type UserExerciseAttemptWhereInput = {
    AND?: UserExerciseAttemptWhereInput | UserExerciseAttemptWhereInput[]
    OR?: UserExerciseAttemptWhereInput[]
    NOT?: UserExerciseAttemptWhereInput | UserExerciseAttemptWhereInput[]
    id?: StringFilter<"UserExerciseAttempt"> | string
    score?: IntNullableFilter<"UserExerciseAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExerciseAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExerciseAttempt"> | Date | string | null
    userId?: StringFilter<"UserExerciseAttempt"> | string
    exerciseId?: StringFilter<"UserExerciseAttempt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    answers?: ExerciseAnswerListRelationFilter
  }

  export type UserExerciseAttemptOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    user?: UserOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    answers?: ExerciseAnswerOrderByRelationAggregateInput
  }

  export type UserExerciseAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExerciseAttemptWhereInput | UserExerciseAttemptWhereInput[]
    OR?: UserExerciseAttemptWhereInput[]
    NOT?: UserExerciseAttemptWhereInput | UserExerciseAttemptWhereInput[]
    score?: IntNullableFilter<"UserExerciseAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExerciseAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExerciseAttempt"> | Date | string | null
    userId?: StringFilter<"UserExerciseAttempt"> | string
    exerciseId?: StringFilter<"UserExerciseAttempt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    answers?: ExerciseAnswerListRelationFilter
  }, "id">

  export type UserExerciseAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    _count?: UserExerciseAttemptCountOrderByAggregateInput
    _avg?: UserExerciseAttemptAvgOrderByAggregateInput
    _max?: UserExerciseAttemptMaxOrderByAggregateInput
    _min?: UserExerciseAttemptMinOrderByAggregateInput
    _sum?: UserExerciseAttemptSumOrderByAggregateInput
  }

  export type UserExerciseAttemptScalarWhereWithAggregatesInput = {
    AND?: UserExerciseAttemptScalarWhereWithAggregatesInput | UserExerciseAttemptScalarWhereWithAggregatesInput[]
    OR?: UserExerciseAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserExerciseAttemptScalarWhereWithAggregatesInput | UserExerciseAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExerciseAttempt"> | string
    score?: IntNullableWithAggregatesFilter<"UserExerciseAttempt"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"UserExerciseAttempt"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserExerciseAttempt"> | Date | string | null
    userId?: StringWithAggregatesFilter<"UserExerciseAttempt"> | string
    exerciseId?: StringWithAggregatesFilter<"UserExerciseAttempt"> | string
  }

  export type ExerciseAnswerWhereInput = {
    AND?: ExerciseAnswerWhereInput | ExerciseAnswerWhereInput[]
    OR?: ExerciseAnswerWhereInput[]
    NOT?: ExerciseAnswerWhereInput | ExerciseAnswerWhereInput[]
    id?: StringFilter<"ExerciseAnswer"> | string
    questionId?: StringFilter<"ExerciseAnswer"> | string
    selectedOptionIndex?: IntFilter<"ExerciseAnswer"> | number
    isCorrect?: BoolFilter<"ExerciseAnswer"> | boolean
    submittedAt?: DateTimeFilter<"ExerciseAnswer"> | Date | string
    attemptId?: StringFilter<"ExerciseAnswer"> | string
    attempt?: XOR<UserExerciseAttemptScalarRelationFilter, UserExerciseAttemptWhereInput>
  }

  export type ExerciseAnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    selectedOptionIndex?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
    attemptId?: SortOrder
    attempt?: UserExerciseAttemptOrderByWithRelationInput
  }

  export type ExerciseAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseAnswerWhereInput | ExerciseAnswerWhereInput[]
    OR?: ExerciseAnswerWhereInput[]
    NOT?: ExerciseAnswerWhereInput | ExerciseAnswerWhereInput[]
    questionId?: StringFilter<"ExerciseAnswer"> | string
    selectedOptionIndex?: IntFilter<"ExerciseAnswer"> | number
    isCorrect?: BoolFilter<"ExerciseAnswer"> | boolean
    submittedAt?: DateTimeFilter<"ExerciseAnswer"> | Date | string
    attemptId?: StringFilter<"ExerciseAnswer"> | string
    attempt?: XOR<UserExerciseAttemptScalarRelationFilter, UserExerciseAttemptWhereInput>
  }, "id">

  export type ExerciseAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    selectedOptionIndex?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
    attemptId?: SortOrder
    _count?: ExerciseAnswerCountOrderByAggregateInput
    _avg?: ExerciseAnswerAvgOrderByAggregateInput
    _max?: ExerciseAnswerMaxOrderByAggregateInput
    _min?: ExerciseAnswerMinOrderByAggregateInput
    _sum?: ExerciseAnswerSumOrderByAggregateInput
  }

  export type ExerciseAnswerScalarWhereWithAggregatesInput = {
    AND?: ExerciseAnswerScalarWhereWithAggregatesInput | ExerciseAnswerScalarWhereWithAggregatesInput[]
    OR?: ExerciseAnswerScalarWhereWithAggregatesInput[]
    NOT?: ExerciseAnswerScalarWhereWithAggregatesInput | ExerciseAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseAnswer"> | string
    questionId?: StringWithAggregatesFilter<"ExerciseAnswer"> | string
    selectedOptionIndex?: IntWithAggregatesFilter<"ExerciseAnswer"> | number
    isCorrect?: BoolWithAggregatesFilter<"ExerciseAnswer"> | boolean
    submittedAt?: DateTimeWithAggregatesFilter<"ExerciseAnswer"> | Date | string
    attemptId?: StringWithAggregatesFilter<"ExerciseAnswer"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    examAttempts?: UserExamAttemptCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    examAttempts?: UserExamAttemptUncheckedCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    examAttempts?: UserExamAttemptUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    examAttempts?: UserExamAttemptUncheckedUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
    userId: string
  }

  export type RefreshTokenUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
    userId: string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamCreateInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    questions?: QuestionCreateNestedManyWithoutExamInput
    attempts?: UserExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    attempts?: UserExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUpdateManyWithoutExamNestedInput
    attempts?: UserExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    attempts?: UserExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
  }

  export type ExamUpdateManyMutationInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamUncheckedUpdateManyInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    examId: string
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    examId: string
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExamAttemptCreateInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    answers: InputJsonValue
    user: UserCreateNestedOneWithoutExamAttemptsInput
    exam: ExamCreateNestedOneWithoutAttemptsInput
  }

  export type UserExamAttemptUncheckedCreateInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    examId: string
    answers: InputJsonValue
  }

  export type UserExamAttemptUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: InputJsonValue | InputJsonValue
    user?: UserUpdateOneRequiredWithoutExamAttemptsNestedInput
    exam?: ExamUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type UserExamAttemptUncheckedUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type UserExamAttemptCreateManyInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    examId: string
    answers: InputJsonValue
  }

  export type UserExamAttemptUpdateManyMutationInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: InputJsonValue | InputJsonValue
  }

  export type UserExamAttemptUncheckedUpdateManyInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type ExerciseCreateInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    questions?: ExerciseQuestionCreateNestedManyWithoutExerciseInput
    attempts?: UserExerciseAttemptCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    questions?: ExerciseQuestionUncheckedCreateNestedManyWithoutExerciseInput
    attempts?: UserExerciseAttemptUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: ExerciseQuestionUpdateManyWithoutExerciseNestedInput
    attempts?: UserExerciseAttemptUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: ExerciseQuestionUncheckedUpdateManyWithoutExerciseNestedInput
    attempts?: UserExerciseAttemptUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
  }

  export type ExerciseUpdateManyMutationInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseUncheckedUpdateManyInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExerciseQuestionCreateInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
    exercise: ExerciseCreateNestedOneWithoutQuestionsInput
  }

  export type ExerciseQuestionUncheckedCreateInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
    exerciseId: string
  }

  export type ExerciseQuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type ExerciseQuestionUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseQuestionCreateManyInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
    exerciseId: string
  }

  export type ExerciseQuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseQuestionUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExerciseAttemptCreateInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutExerciseAttemptsInput
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    answers?: ExerciseAnswerCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptUncheckedCreateInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    exerciseId: string
    answers?: ExerciseAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutExerciseAttemptsNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    answers?: ExerciseAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    answers?: ExerciseAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptCreateManyInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    exerciseId: string
  }

  export type UserExerciseAttemptUpdateManyMutationInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserExerciseAttemptUncheckedUpdateManyInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseAnswerCreateInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
    attempt: UserExerciseAttemptCreateNestedOneWithoutAnswersInput
  }

  export type ExerciseAnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
    attemptId: string
  }

  export type ExerciseAnswerUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempt?: UserExerciseAttemptUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type ExerciseAnswerUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attemptId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseAnswerCreateManyInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
    attemptId: string
  }

  export type ExerciseAnswerUpdateManyMutationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnswerUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attemptId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type UserExamAttemptListRelationFilter = {
    every?: UserExamAttemptWhereInput
    some?: UserExamAttemptWhereInput
    none?: UserExamAttemptWhereInput
  }

  export type UserExerciseAttemptListRelationFilter = {
    every?: UserExerciseAttemptWhereInput
    some?: UserExerciseAttemptWhereInput
    none?: UserExerciseAttemptWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExamAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExerciseAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    revoked?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    examNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    examNumber?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    examNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    examNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    examNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    examId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIndex?: SortOrder
    examId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIndex?: SortOrder
    examId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type UserExamAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    answers?: SortOrder
  }

  export type UserExamAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserExamAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
  }

  export type UserExamAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
  }

  export type UserExamAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ExerciseQuestionListRelationFilter = {
    every?: ExerciseQuestionWhereInput
    some?: ExerciseQuestionWhereInput
    none?: ExerciseQuestionWhereInput
  }

  export type ExerciseQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    exerciseNumber?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseNumber?: SortOrder
    title?: SortOrder
    isFree?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    exerciseNumber?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type ExerciseQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    hint?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseQuestionAvgOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type ExerciseQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIndex?: SortOrder
    hint?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIndex?: SortOrder
    hint?: SortOrder
    exerciseId?: SortOrder
  }

  export type ExerciseQuestionSumOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ExerciseAnswerListRelationFilter = {
    every?: ExerciseAnswerWhereInput
    some?: ExerciseAnswerWhereInput
    none?: ExerciseAnswerWhereInput
  }

  export type ExerciseAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExerciseAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type UserExerciseAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserExerciseAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type UserExerciseAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type UserExerciseAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserExerciseAttemptScalarRelationFilter = {
    is?: UserExerciseAttemptWhereInput
    isNot?: UserExerciseAttemptWhereInput
  }

  export type ExerciseAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    selectedOptionIndex?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
    attemptId?: SortOrder
  }

  export type ExerciseAnswerAvgOrderByAggregateInput = {
    selectedOptionIndex?: SortOrder
  }

  export type ExerciseAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    selectedOptionIndex?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
    attemptId?: SortOrder
  }

  export type ExerciseAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    selectedOptionIndex?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
    attemptId?: SortOrder
  }

  export type ExerciseAnswerSumOrderByAggregateInput = {
    selectedOptionIndex?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserExamAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput> | UserExamAttemptCreateWithoutUserInput[] | UserExamAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutUserInput | UserExamAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserExamAttemptCreateManyUserInputEnvelope
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
  }

  export type UserExerciseAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput> | UserExerciseAttemptCreateWithoutUserInput[] | UserExerciseAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutUserInput | UserExerciseAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserExerciseAttemptCreateManyUserInputEnvelope
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserExamAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput> | UserExamAttemptCreateWithoutUserInput[] | UserExamAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutUserInput | UserExamAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserExamAttemptCreateManyUserInputEnvelope
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
  }

  export type UserExerciseAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput> | UserExerciseAttemptCreateWithoutUserInput[] | UserExerciseAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutUserInput | UserExerciseAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserExerciseAttemptCreateManyUserInputEnvelope
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserExamAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput> | UserExamAttemptCreateWithoutUserInput[] | UserExamAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutUserInput | UserExamAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserExamAttemptUpsertWithWhereUniqueWithoutUserInput | UserExamAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExamAttemptCreateManyUserInputEnvelope
    set?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    disconnect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    delete?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    update?: UserExamAttemptUpdateWithWhereUniqueWithoutUserInput | UserExamAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExamAttemptUpdateManyWithWhereWithoutUserInput | UserExamAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
  }

  export type UserExerciseAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput> | UserExerciseAttemptCreateWithoutUserInput[] | UserExerciseAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutUserInput | UserExerciseAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserExerciseAttemptUpsertWithWhereUniqueWithoutUserInput | UserExerciseAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExerciseAttemptCreateManyUserInputEnvelope
    set?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    disconnect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    delete?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    update?: UserExerciseAttemptUpdateWithWhereUniqueWithoutUserInput | UserExerciseAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExerciseAttemptUpdateManyWithWhereWithoutUserInput | UserExerciseAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserExamAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput> | UserExamAttemptCreateWithoutUserInput[] | UserExamAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutUserInput | UserExamAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserExamAttemptUpsertWithWhereUniqueWithoutUserInput | UserExamAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExamAttemptCreateManyUserInputEnvelope
    set?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    disconnect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    delete?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    update?: UserExamAttemptUpdateWithWhereUniqueWithoutUserInput | UserExamAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExamAttemptUpdateManyWithWhereWithoutUserInput | UserExamAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
  }

  export type UserExerciseAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput> | UserExerciseAttemptCreateWithoutUserInput[] | UserExerciseAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutUserInput | UserExerciseAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserExerciseAttemptUpsertWithWhereUniqueWithoutUserInput | UserExerciseAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExerciseAttemptCreateManyUserInputEnvelope
    set?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    disconnect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    delete?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    update?: UserExerciseAttemptUpdateWithWhereUniqueWithoutUserInput | UserExerciseAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExerciseAttemptUpdateManyWithWhereWithoutUserInput | UserExerciseAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserExamAttemptCreateNestedManyWithoutExamInput = {
    create?: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput> | UserExamAttemptCreateWithoutExamInput[] | UserExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutExamInput | UserExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: UserExamAttemptCreateManyExamInputEnvelope
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserExamAttemptUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput> | UserExamAttemptCreateWithoutExamInput[] | UserExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutExamInput | UserExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: UserExamAttemptCreateManyExamInputEnvelope
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserExamAttemptUpdateManyWithoutExamNestedInput = {
    create?: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput> | UserExamAttemptCreateWithoutExamInput[] | UserExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutExamInput | UserExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: UserExamAttemptUpsertWithWhereUniqueWithoutExamInput | UserExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: UserExamAttemptCreateManyExamInputEnvelope
    set?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    disconnect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    delete?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    update?: UserExamAttemptUpdateWithWhereUniqueWithoutExamInput | UserExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: UserExamAttemptUpdateManyWithWhereWithoutExamInput | UserExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserExamAttemptUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput> | UserExamAttemptCreateWithoutExamInput[] | UserExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamAttemptCreateOrConnectWithoutExamInput | UserExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: UserExamAttemptUpsertWithWhereUniqueWithoutExamInput | UserExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: UserExamAttemptCreateManyExamInputEnvelope
    set?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    disconnect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    delete?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    connect?: UserExamAttemptWhereUniqueInput | UserExamAttemptWhereUniqueInput[]
    update?: UserExamAttemptUpdateWithWhereUniqueWithoutExamInput | UserExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: UserExamAttemptUpdateManyWithWhereWithoutExamInput | UserExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
  }

  export type QuestionCreateoptionsInput = {
    set: string[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type QuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedOneWithoutExamAttemptsInput = {
    create?: XOR<UserCreateWithoutExamAttemptsInput, UserUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAttemptsInput
    connect?: ExamWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutExamAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutExamAttemptsInput, UserUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamAttemptsInput
    upsert?: UserUpsertWithoutExamAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamAttemptsInput, UserUpdateWithoutExamAttemptsInput>, UserUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type ExamUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAttemptsInput
    upsert?: ExamUpsertWithoutAttemptsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutAttemptsInput, ExamUpdateWithoutAttemptsInput>, ExamUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExerciseQuestionCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput> | ExerciseQuestionCreateWithoutExerciseInput[] | ExerciseQuestionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseQuestionCreateOrConnectWithoutExerciseInput | ExerciseQuestionCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseQuestionCreateManyExerciseInputEnvelope
    connect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
  }

  export type UserExerciseAttemptCreateNestedManyWithoutExerciseInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput> | UserExerciseAttemptCreateWithoutExerciseInput[] | UserExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutExerciseInput | UserExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: UserExerciseAttemptCreateManyExerciseInputEnvelope
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
  }

  export type ExerciseQuestionUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput> | ExerciseQuestionCreateWithoutExerciseInput[] | ExerciseQuestionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseQuestionCreateOrConnectWithoutExerciseInput | ExerciseQuestionCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseQuestionCreateManyExerciseInputEnvelope
    connect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
  }

  export type UserExerciseAttemptUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput> | UserExerciseAttemptCreateWithoutExerciseInput[] | UserExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutExerciseInput | UserExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: UserExerciseAttemptCreateManyExerciseInputEnvelope
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
  }

  export type ExerciseQuestionUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput> | ExerciseQuestionCreateWithoutExerciseInput[] | ExerciseQuestionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseQuestionCreateOrConnectWithoutExerciseInput | ExerciseQuestionCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseQuestionUpsertWithWhereUniqueWithoutExerciseInput | ExerciseQuestionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseQuestionCreateManyExerciseInputEnvelope
    set?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    disconnect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    delete?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    connect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    update?: ExerciseQuestionUpdateWithWhereUniqueWithoutExerciseInput | ExerciseQuestionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseQuestionUpdateManyWithWhereWithoutExerciseInput | ExerciseQuestionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseQuestionScalarWhereInput | ExerciseQuestionScalarWhereInput[]
  }

  export type UserExerciseAttemptUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput> | UserExerciseAttemptCreateWithoutExerciseInput[] | UserExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutExerciseInput | UserExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: UserExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput | UserExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: UserExerciseAttemptCreateManyExerciseInputEnvelope
    set?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    disconnect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    delete?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    update?: UserExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput | UserExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: UserExerciseAttemptUpdateManyWithWhereWithoutExerciseInput | UserExerciseAttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
  }

  export type ExerciseQuestionUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput> | ExerciseQuestionCreateWithoutExerciseInput[] | ExerciseQuestionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseQuestionCreateOrConnectWithoutExerciseInput | ExerciseQuestionCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseQuestionUpsertWithWhereUniqueWithoutExerciseInput | ExerciseQuestionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseQuestionCreateManyExerciseInputEnvelope
    set?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    disconnect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    delete?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    connect?: ExerciseQuestionWhereUniqueInput | ExerciseQuestionWhereUniqueInput[]
    update?: ExerciseQuestionUpdateWithWhereUniqueWithoutExerciseInput | ExerciseQuestionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseQuestionUpdateManyWithWhereWithoutExerciseInput | ExerciseQuestionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseQuestionScalarWhereInput | ExerciseQuestionScalarWhereInput[]
  }

  export type UserExerciseAttemptUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput> | UserExerciseAttemptCreateWithoutExerciseInput[] | UserExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutExerciseInput | UserExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: UserExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput | UserExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: UserExerciseAttemptCreateManyExerciseInputEnvelope
    set?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    disconnect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    delete?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    connect?: UserExerciseAttemptWhereUniqueInput | UserExerciseAttemptWhereUniqueInput[]
    update?: UserExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput | UserExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: UserExerciseAttemptUpdateManyWithWhereWithoutExerciseInput | UserExerciseAttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
  }

  export type ExerciseQuestionCreateoptionsInput = {
    set: string[]
  }

  export type ExerciseCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExerciseCreateWithoutQuestionsInput, ExerciseUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutQuestionsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseQuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ExerciseUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExerciseCreateWithoutQuestionsInput, ExerciseUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutQuestionsInput
    upsert?: ExerciseUpsertWithoutQuestionsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutQuestionsInput, ExerciseUpdateWithoutQuestionsInput>, ExerciseUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedOneWithoutExerciseAttemptsInput = {
    create?: XOR<UserCreateWithoutExerciseAttemptsInput, UserUncheckedCreateWithoutExerciseAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseAnswerCreateNestedManyWithoutAttemptInput = {
    create?: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput> | ExerciseAnswerCreateWithoutAttemptInput[] | ExerciseAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: ExerciseAnswerCreateOrConnectWithoutAttemptInput | ExerciseAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: ExerciseAnswerCreateManyAttemptInputEnvelope
    connect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
  }

  export type ExerciseAnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput> | ExerciseAnswerCreateWithoutAttemptInput[] | ExerciseAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: ExerciseAnswerCreateOrConnectWithoutAttemptInput | ExerciseAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: ExerciseAnswerCreateManyAttemptInputEnvelope
    connect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutExerciseAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutExerciseAttemptsInput, UserUncheckedCreateWithoutExerciseAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExerciseAttemptsInput
    upsert?: UserUpsertWithoutExerciseAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExerciseAttemptsInput, UserUpdateWithoutExerciseAttemptsInput>, UserUncheckedUpdateWithoutExerciseAttemptsInput>
  }

  export type ExerciseUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    upsert?: ExerciseUpsertWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutAttemptsInput, ExerciseUpdateWithoutAttemptsInput>, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExerciseAnswerUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput> | ExerciseAnswerCreateWithoutAttemptInput[] | ExerciseAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: ExerciseAnswerCreateOrConnectWithoutAttemptInput | ExerciseAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: ExerciseAnswerUpsertWithWhereUniqueWithoutAttemptInput | ExerciseAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: ExerciseAnswerCreateManyAttemptInputEnvelope
    set?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    disconnect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    delete?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    connect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    update?: ExerciseAnswerUpdateWithWhereUniqueWithoutAttemptInput | ExerciseAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: ExerciseAnswerUpdateManyWithWhereWithoutAttemptInput | ExerciseAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: ExerciseAnswerScalarWhereInput | ExerciseAnswerScalarWhereInput[]
  }

  export type ExerciseAnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput> | ExerciseAnswerCreateWithoutAttemptInput[] | ExerciseAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: ExerciseAnswerCreateOrConnectWithoutAttemptInput | ExerciseAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: ExerciseAnswerUpsertWithWhereUniqueWithoutAttemptInput | ExerciseAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: ExerciseAnswerCreateManyAttemptInputEnvelope
    set?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    disconnect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    delete?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    connect?: ExerciseAnswerWhereUniqueInput | ExerciseAnswerWhereUniqueInput[]
    update?: ExerciseAnswerUpdateWithWhereUniqueWithoutAttemptInput | ExerciseAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: ExerciseAnswerUpdateManyWithWhereWithoutAttemptInput | ExerciseAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: ExerciseAnswerScalarWhereInput | ExerciseAnswerScalarWhereInput[]
  }

  export type UserExerciseAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutAnswersInput, UserExerciseAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutAnswersInput
    connect?: UserExerciseAttemptWhereUniqueInput
  }

  export type UserExerciseAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserExerciseAttemptCreateWithoutAnswersInput, UserExerciseAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserExerciseAttemptCreateOrConnectWithoutAnswersInput
    upsert?: UserExerciseAttemptUpsertWithoutAnswersInput
    connect?: UserExerciseAttemptWhereUniqueInput
    update?: XOR<XOR<UserExerciseAttemptUpdateToOneWithWhereWithoutAnswersInput, UserExerciseAttemptUpdateWithoutAnswersInput>, UserExerciseAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type UserExamAttemptCreateWithoutUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    answers: InputJsonValue
    exam: ExamCreateNestedOneWithoutAttemptsInput
  }

  export type UserExamAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    examId: string
    answers: InputJsonValue
  }

  export type UserExamAttemptCreateOrConnectWithoutUserInput = {
    where: UserExamAttemptWhereUniqueInput
    create: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserExamAttemptCreateManyUserInputEnvelope = {
    data: UserExamAttemptCreateManyUserInput | UserExamAttemptCreateManyUserInput[]
  }

  export type UserExerciseAttemptCreateWithoutUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    answers?: ExerciseAnswerCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    exerciseId: string
    answers?: ExerciseAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptCreateOrConnectWithoutUserInput = {
    where: UserExerciseAttemptWhereUniqueInput
    create: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserExerciseAttemptCreateManyUserInputEnvelope = {
    data: UserExerciseAttemptCreateManyUserInput | UserExerciseAttemptCreateManyUserInput[]
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    jti?: StringFilter<"RefreshToken"> | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
  }

  export type UserExamAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserExamAttemptWhereUniqueInput
    update: XOR<UserExamAttemptUpdateWithoutUserInput, UserExamAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserExamAttemptCreateWithoutUserInput, UserExamAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserExamAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserExamAttemptWhereUniqueInput
    data: XOR<UserExamAttemptUpdateWithoutUserInput, UserExamAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserExamAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserExamAttemptScalarWhereInput
    data: XOR<UserExamAttemptUpdateManyMutationInput, UserExamAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserExamAttemptScalarWhereInput = {
    AND?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
    OR?: UserExamAttemptScalarWhereInput[]
    NOT?: UserExamAttemptScalarWhereInput | UserExamAttemptScalarWhereInput[]
    id?: StringFilter<"UserExamAttempt"> | string
    score?: IntNullableFilter<"UserExamAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExamAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExamAttempt"> | Date | string | null
    userId?: StringFilter<"UserExamAttempt"> | string
    examId?: StringFilter<"UserExamAttempt"> | string
    answers?: JsonFilter<"UserExamAttempt">
  }

  export type UserExerciseAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserExerciseAttemptWhereUniqueInput
    update: XOR<UserExerciseAttemptUpdateWithoutUserInput, UserExerciseAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserExerciseAttemptCreateWithoutUserInput, UserExerciseAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserExerciseAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserExerciseAttemptWhereUniqueInput
    data: XOR<UserExerciseAttemptUpdateWithoutUserInput, UserExerciseAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserExerciseAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserExerciseAttemptScalarWhereInput
    data: XOR<UserExerciseAttemptUpdateManyMutationInput, UserExerciseAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserExerciseAttemptScalarWhereInput = {
    AND?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
    OR?: UserExerciseAttemptScalarWhereInput[]
    NOT?: UserExerciseAttemptScalarWhereInput | UserExerciseAttemptScalarWhereInput[]
    id?: StringFilter<"UserExerciseAttempt"> | string
    score?: IntNullableFilter<"UserExerciseAttempt"> | number | null
    startedAt?: DateTimeFilter<"UserExerciseAttempt"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserExerciseAttempt"> | Date | string | null
    userId?: StringFilter<"UserExerciseAttempt"> | string
    exerciseId?: StringFilter<"UserExerciseAttempt"> | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examAttempts?: UserExamAttemptCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examAttempts?: UserExamAttemptUncheckedCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examAttempts?: UserExamAttemptUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examAttempts?: UserExamAttemptUncheckedUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionCreateWithoutExamInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
  }

  export type UserExamAttemptCreateWithoutExamInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    answers: InputJsonValue
    user: UserCreateNestedOneWithoutExamAttemptsInput
  }

  export type UserExamAttemptUncheckedCreateWithoutExamInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    answers: InputJsonValue
  }

  export type UserExamAttemptCreateOrConnectWithoutExamInput = {
    where: UserExamAttemptWhereUniqueInput
    create: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type UserExamAttemptCreateManyExamInputEnvelope = {
    data: UserExamAttemptCreateManyExamInput | UserExamAttemptCreateManyExamInput[]
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswerIndex?: IntFilter<"Question"> | number
    examId?: StringFilter<"Question"> | string
  }

  export type UserExamAttemptUpsertWithWhereUniqueWithoutExamInput = {
    where: UserExamAttemptWhereUniqueInput
    update: XOR<UserExamAttemptUpdateWithoutExamInput, UserExamAttemptUncheckedUpdateWithoutExamInput>
    create: XOR<UserExamAttemptCreateWithoutExamInput, UserExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type UserExamAttemptUpdateWithWhereUniqueWithoutExamInput = {
    where: UserExamAttemptWhereUniqueInput
    data: XOR<UserExamAttemptUpdateWithoutExamInput, UserExamAttemptUncheckedUpdateWithoutExamInput>
  }

  export type UserExamAttemptUpdateManyWithWhereWithoutExamInput = {
    where: UserExamAttemptScalarWhereInput
    data: XOR<UserExamAttemptUpdateManyMutationInput, UserExamAttemptUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    attempts?: UserExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    attempts?: UserExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    attempts?: UserExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    attempts?: UserExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserCreateWithoutExamAttemptsInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamAttemptsInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    exerciseAttempts?: UserExerciseAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamAttemptsInput, UserUncheckedCreateWithoutExamAttemptsInput>
  }

  export type ExamCreateWithoutAttemptsInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    questions?: QuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutAttemptsInput = {
    id?: string
    examNumber: number
    title: string
    isFree?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutAttemptsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
  }

  export type UserUpsertWithoutExamAttemptsInput = {
    update: XOR<UserUpdateWithoutExamAttemptsInput, UserUncheckedUpdateWithoutExamAttemptsInput>
    create: XOR<UserCreateWithoutExamAttemptsInput, UserUncheckedCreateWithoutExamAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamAttemptsInput, UserUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type UserUpdateWithoutExamAttemptsInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamAttemptsInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    exerciseAttempts?: UserExerciseAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExamUpsertWithoutAttemptsInput = {
    update: XOR<ExamUpdateWithoutAttemptsInput, ExamUncheckedUpdateWithoutAttemptsInput>
    create: XOR<ExamCreateWithoutAttemptsInput, ExamUncheckedCreateWithoutAttemptsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutAttemptsInput, ExamUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExamUpdateWithoutAttemptsInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutAttemptsInput = {
    examNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExerciseQuestionCreateWithoutExerciseInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
  }

  export type ExerciseQuestionUncheckedCreateWithoutExerciseInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
  }

  export type ExerciseQuestionCreateOrConnectWithoutExerciseInput = {
    where: ExerciseQuestionWhereUniqueInput
    create: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseQuestionCreateManyExerciseInputEnvelope = {
    data: ExerciseQuestionCreateManyExerciseInput | ExerciseQuestionCreateManyExerciseInput[]
  }

  export type UserExerciseAttemptCreateWithoutExerciseInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutExerciseAttemptsInput
    answers?: ExerciseAnswerCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptUncheckedCreateWithoutExerciseInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    answers?: ExerciseAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserExerciseAttemptCreateOrConnectWithoutExerciseInput = {
    where: UserExerciseAttemptWhereUniqueInput
    create: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput>
  }

  export type UserExerciseAttemptCreateManyExerciseInputEnvelope = {
    data: UserExerciseAttemptCreateManyExerciseInput | UserExerciseAttemptCreateManyExerciseInput[]
  }

  export type ExerciseQuestionUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseQuestionWhereUniqueInput
    update: XOR<ExerciseQuestionUpdateWithoutExerciseInput, ExerciseQuestionUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseQuestionCreateWithoutExerciseInput, ExerciseQuestionUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseQuestionUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseQuestionWhereUniqueInput
    data: XOR<ExerciseQuestionUpdateWithoutExerciseInput, ExerciseQuestionUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseQuestionUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseQuestionScalarWhereInput
    data: XOR<ExerciseQuestionUpdateManyMutationInput, ExerciseQuestionUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseQuestionScalarWhereInput = {
    AND?: ExerciseQuestionScalarWhereInput | ExerciseQuestionScalarWhereInput[]
    OR?: ExerciseQuestionScalarWhereInput[]
    NOT?: ExerciseQuestionScalarWhereInput | ExerciseQuestionScalarWhereInput[]
    id?: StringFilter<"ExerciseQuestion"> | string
    text?: StringFilter<"ExerciseQuestion"> | string
    options?: StringNullableListFilter<"ExerciseQuestion">
    correctAnswerIndex?: IntFilter<"ExerciseQuestion"> | number
    hint?: StringNullableFilter<"ExerciseQuestion"> | string | null
    exerciseId?: StringFilter<"ExerciseQuestion"> | string
  }

  export type UserExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput = {
    where: UserExerciseAttemptWhereUniqueInput
    update: XOR<UserExerciseAttemptUpdateWithoutExerciseInput, UserExerciseAttemptUncheckedUpdateWithoutExerciseInput>
    create: XOR<UserExerciseAttemptCreateWithoutExerciseInput, UserExerciseAttemptUncheckedCreateWithoutExerciseInput>
  }

  export type UserExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput = {
    where: UserExerciseAttemptWhereUniqueInput
    data: XOR<UserExerciseAttemptUpdateWithoutExerciseInput, UserExerciseAttemptUncheckedUpdateWithoutExerciseInput>
  }

  export type UserExerciseAttemptUpdateManyWithWhereWithoutExerciseInput = {
    where: UserExerciseAttemptScalarWhereInput
    data: XOR<UserExerciseAttemptUpdateManyMutationInput, UserExerciseAttemptUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseCreateWithoutQuestionsInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    attempts?: UserExerciseAttemptCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutQuestionsInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    attempts?: UserExerciseAttemptUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutQuestionsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutQuestionsInput, ExerciseUncheckedCreateWithoutQuestionsInput>
  }

  export type ExerciseUpsertWithoutQuestionsInput = {
    update: XOR<ExerciseUpdateWithoutQuestionsInput, ExerciseUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExerciseCreateWithoutQuestionsInput, ExerciseUncheckedCreateWithoutQuestionsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutQuestionsInput, ExerciseUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExerciseUpdateWithoutQuestionsInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    attempts?: UserExerciseAttemptUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutQuestionsInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    attempts?: UserExerciseAttemptUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutExerciseAttemptsInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    examAttempts?: UserExamAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExerciseAttemptsInput = {
    id?: string
    username: string
    phone: string
    hashedPassword: string
    role?: $Enums.Role
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    examAttempts?: UserExamAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExerciseAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExerciseAttemptsInput, UserUncheckedCreateWithoutExerciseAttemptsInput>
  }

  export type ExerciseCreateWithoutAttemptsInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    questions?: ExerciseQuestionCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutAttemptsInput = {
    id?: string
    exerciseNumber: number
    title: string
    isFree?: boolean
    questions?: ExerciseQuestionUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutAttemptsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
  }

  export type ExerciseAnswerCreateWithoutAttemptInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
  }

  export type ExerciseAnswerUncheckedCreateWithoutAttemptInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
  }

  export type ExerciseAnswerCreateOrConnectWithoutAttemptInput = {
    where: ExerciseAnswerWhereUniqueInput
    create: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type ExerciseAnswerCreateManyAttemptInputEnvelope = {
    data: ExerciseAnswerCreateManyAttemptInput | ExerciseAnswerCreateManyAttemptInput[]
  }

  export type UserUpsertWithoutExerciseAttemptsInput = {
    update: XOR<UserUpdateWithoutExerciseAttemptsInput, UserUncheckedUpdateWithoutExerciseAttemptsInput>
    create: XOR<UserCreateWithoutExerciseAttemptsInput, UserUncheckedCreateWithoutExerciseAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExerciseAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExerciseAttemptsInput, UserUncheckedUpdateWithoutExerciseAttemptsInput>
  }

  export type UserUpdateWithoutExerciseAttemptsInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    examAttempts?: UserExamAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExerciseAttemptsInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    examAttempts?: UserExamAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseUpsertWithoutAttemptsInput = {
    update: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExerciseUpdateWithoutAttemptsInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: ExerciseQuestionUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutAttemptsInput = {
    exerciseNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    questions?: ExerciseQuestionUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseAnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: ExerciseAnswerWhereUniqueInput
    update: XOR<ExerciseAnswerUpdateWithoutAttemptInput, ExerciseAnswerUncheckedUpdateWithoutAttemptInput>
    create: XOR<ExerciseAnswerCreateWithoutAttemptInput, ExerciseAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type ExerciseAnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: ExerciseAnswerWhereUniqueInput
    data: XOR<ExerciseAnswerUpdateWithoutAttemptInput, ExerciseAnswerUncheckedUpdateWithoutAttemptInput>
  }

  export type ExerciseAnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: ExerciseAnswerScalarWhereInput
    data: XOR<ExerciseAnswerUpdateManyMutationInput, ExerciseAnswerUncheckedUpdateManyWithoutAttemptInput>
  }

  export type ExerciseAnswerScalarWhereInput = {
    AND?: ExerciseAnswerScalarWhereInput | ExerciseAnswerScalarWhereInput[]
    OR?: ExerciseAnswerScalarWhereInput[]
    NOT?: ExerciseAnswerScalarWhereInput | ExerciseAnswerScalarWhereInput[]
    id?: StringFilter<"ExerciseAnswer"> | string
    questionId?: StringFilter<"ExerciseAnswer"> | string
    selectedOptionIndex?: IntFilter<"ExerciseAnswer"> | number
    isCorrect?: BoolFilter<"ExerciseAnswer"> | boolean
    submittedAt?: DateTimeFilter<"ExerciseAnswer"> | Date | string
    attemptId?: StringFilter<"ExerciseAnswer"> | string
  }

  export type UserExerciseAttemptCreateWithoutAnswersInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutExerciseAttemptsInput
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
  }

  export type UserExerciseAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    exerciseId: string
  }

  export type UserExerciseAttemptCreateOrConnectWithoutAnswersInput = {
    where: UserExerciseAttemptWhereUniqueInput
    create: XOR<UserExerciseAttemptCreateWithoutAnswersInput, UserExerciseAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type UserExerciseAttemptUpsertWithoutAnswersInput = {
    update: XOR<UserExerciseAttemptUpdateWithoutAnswersInput, UserExerciseAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserExerciseAttemptCreateWithoutAnswersInput, UserExerciseAttemptUncheckedCreateWithoutAnswersInput>
    where?: UserExerciseAttemptWhereInput
  }

  export type UserExerciseAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserExerciseAttemptWhereInput
    data: XOR<UserExerciseAttemptUpdateWithoutAnswersInput, UserExerciseAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type UserExerciseAttemptUpdateWithoutAnswersInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutExerciseAttemptsNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateWithoutAnswersInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    jti: string
    revoked?: boolean
    expiresAt: Date | string
  }

  export type UserExamAttemptCreateManyUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    examId: string
    answers: InputJsonValue
  }

  export type UserExerciseAttemptCreateManyUserInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    exerciseId: string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAttemptUpdateWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: InputJsonValue | InputJsonValue
    exam?: ExamUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type UserExamAttemptUncheckedUpdateWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    examId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type UserExamAttemptUncheckedUpdateManyWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    examId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type UserExerciseAttemptUpdateWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    answers?: ExerciseAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: StringFieldUpdateOperationsInput | string
    answers?: ExerciseAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateManyWithoutUserInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyExamInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
  }

  export type UserExamAttemptCreateManyExamInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
    answers: InputJsonValue
  }

  export type QuestionUpdateWithoutExamInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type UserExamAttemptUpdateWithoutExamInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: InputJsonValue | InputJsonValue
    user?: UserUpdateOneRequiredWithoutExamAttemptsNestedInput
  }

  export type UserExamAttemptUncheckedUpdateWithoutExamInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type UserExamAttemptUncheckedUpdateManyWithoutExamInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
  }

  export type ExerciseQuestionCreateManyExerciseInput = {
    id?: string
    text: string
    options?: ExerciseQuestionCreateoptionsInput | string[]
    correctAnswerIndex: number
    hint?: string | null
  }

  export type UserExerciseAttemptCreateManyExerciseInput = {
    id?: string
    score?: number | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    userId: string
  }

  export type ExerciseQuestionUpdateWithoutExerciseInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseQuestionUncheckedUpdateWithoutExerciseInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseQuestionUncheckedUpdateManyWithoutExerciseInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: ExerciseQuestionUpdateoptionsInput | string[]
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    hint?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserExerciseAttemptUpdateWithoutExerciseInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutExerciseAttemptsNestedInput
    answers?: ExerciseAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateWithoutExerciseInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: ExerciseAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserExerciseAttemptUncheckedUpdateManyWithoutExerciseInput = {
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseAnswerCreateManyAttemptInput = {
    id?: string
    questionId: string
    selectedOptionIndex: number
    isCorrect: boolean
    submittedAt?: Date | string
  }

  export type ExerciseAnswerUpdateWithoutAttemptInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnswerUncheckedUpdateWithoutAttemptInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnswerUncheckedUpdateManyWithoutAttemptInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    selectedOptionIndex?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}