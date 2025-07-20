export async function getWalletAddress() {
  await window.keplr.enable("fixorium-devnet");
  const signer = window.getOfflineSigner("fixorium-devnet");
  const accounts = await signer.getAccounts();
  return accounts[0].address;
}

