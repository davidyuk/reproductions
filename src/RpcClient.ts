// RpcApi* duplicated in RpcModuleTypes.ts on purpose: a single shared (exported) definition
// or merging into one file makes TypeDoc treat RpcApi as included and the second
// validateExports warning disappears.
type RpcApiHandler = (p?: unknown) => unknown;

type RpcApi<Api> = { [K in keyof Api]: RpcApiHandler };

type WithOrigin<Api extends RpcApi<Api>> = {
  [K in keyof Api]: (p: Parameters<Api[K]>[0], origin: string) => ReturnType<Api[K]>;
};

/**
 * Minimal stand-in for JSON-RPC wiring.
 */
export default class RpcClient<
  RemoteApi extends RpcApi<RemoteApi>,
  LocalApi extends RpcApi<LocalApi>,
> {
  constructor(readonly methods: WithOrigin<LocalApi>) {}
}
