import SchemaTypes from './SchemaTypes.js';

const schemas = [{}] as const;

type Schemas = SchemaTypes<typeof schemas>;

/** Discriminated union stand-in for transaction params. */
export type TxParams = Schemas['TxParams'];
