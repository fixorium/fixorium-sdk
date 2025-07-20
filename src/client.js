import { StargateClient } from "@cosmjs/stargate";

export async function connectClient(rpc) {
  return await StargateClient.connect(rpc);
}

