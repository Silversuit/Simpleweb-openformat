import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk.mint()', () => {
  it('mints an NFT of a deployed contract', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    const { contractAddress } = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    const nft = sdk.getNFT(contractAddress);

    const receipt = await nft.mint();

    expect(receipt.status).toBe(1);
  });

  it('will throw an error if the networks do not match', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    const { contractAddress } = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    const nft = sdk.getNFT(contractAddress);

    nft.signer = new ethers.Wallet(
      '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
      new ethers.providers.JsonRpcProvider(
        'https://matic-mumbai.chainstacklabs.com/'
      )
    );

    expect(nft.mint()).rejects.toThrow();
  });
});
