type TxParamsBySchema<SchemaItem> = SchemaItem extends object ? { _tag: 'tx' } : never;

export default interface SchemaTypes<Schema extends readonly object[], SchemaItems = Schema[number]> {
  TxParams: TxParamsBySchema<SchemaItems>;
}
