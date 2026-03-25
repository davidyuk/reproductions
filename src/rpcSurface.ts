import RpcModuleTypes from './RpcModuleTypes.js';

type Module = RpcModuleTypes<{ ping: () => void }>;

/** Pulls file-local `RpcApi` into the public API via indexed access (mirrors `TxParams`). */
export type RpcSurfaceExport = Module['Surface'];
