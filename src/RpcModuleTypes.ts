// RpcApi* duplicated in RpcClient.ts on purpose — see comment there.
type RpcApiHandler = (p?: unknown) => unknown;

type RpcApi<Api> = { [K in keyof Api]: RpcApiHandler };

export default interface RpcModuleTypes<Api extends RpcApi<Api>> {
  Surface: RpcApi<Api>;
}
