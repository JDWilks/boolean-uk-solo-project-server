const prisma = require("./database");

const dappData = [
  {
    dappslug: "cryptokitties",
    name: "CryptoKitties",
    full_description:
      "Cryptokitties is a blockchain-based virtual game that allows players to adopt, raise, and trade the - according to CryptoKitties themselves - oh-so-adorable creatures. Each cat is unique and the one you own is actually 100% yours, secured on the blockchain.",
    website_url: "https://www.cryptokitties.co",
    image: "https://cdn.coinranking.com/dapp/cryptokitties.svg",
    number_of_nfts: 85123,
  },
  {
    dappslug: "godsunchained",
    name: "Gods Unchained",
    full_description:
      "Gods Unchained is a free-to-play, turn-based competitive trading card game in which cards can be bought and sold on the OpenSea marketplace. Players use their collection to build decks of cards, and select a God to play with at the start of each match. The goal of the game is to reduce your opponent's life to zero. Each deck contains exactly 30 cards. On OpenSea, cards can be sold for a fixed price, auctioned, or sold in bundles.",
    website_url: "https://godsunchained.com/",
    image: "https://cdn.coinranking.com/dapp/gods-unchained.png",
    number_of_nfts: 35235,
  },
  {
    dappslug: "somnium-space",
    name: "Somnium Space",
    full_description:
      "Somnium Space is an open, social and persistent Virtual Reality (VR) world that is built on Ethereum. Everyone in Somnium Space is able to buy land and build or import avatars. Players can easily drench themselves into a completely alternative reality and monetize their experiences.",
    website_url: "https://www.somniumspace.com/",
    image: "https://cdn.coinranking.com/dapp/sommium-space.svg",
    number_of_nfts: 670,
  },
  {
    dappslug: "rarible",
    name: "Rarible",
    full_description:
      "Rarible is a NFT marketplace and gives a platform to artists and collectors to create, collect, and trade digital collectibles.",
    website_url: "https://rarible.com/",
    image: "https://cdn.coinranking.com/dapp/rarible.png",
    number_of_nfts: 309726,
  },
  {
    dappslug: "makersplace",
    name: "MakersPlace",
    full_description:
      "MakersPlace is a platform to discover, collect, and trade digital artworks. Every art piece available through MakersPlace is authentic and truly unique, signed and issued by the artist.",
    website_url: "https://makersplace.com/",
    image: "https://cdn.coinranking.com/dapp/makersplace.png",
    number_of_nfts: 8587,
  },
  {
    dappslug: "decentraland",
    name: "Decentraland",
    full_description:
      "Decentraland is a virtual world where you can create your own avatar, build buildings, and meet other people. This metaverse is blockchain-based and the digital items you can purchase are non-fungible tokens.",
    website_url: "https://decentraland.org",
    image: "https://cdn.coinranking.com/dapp/decentraland.svg",
    number_of_nfts: 2217,
  },
  {
    dappslug: "axie-infinity",
    name: "Axie Infinity",
    full_description:
      "Axie Infinity is a digital pet universe where players can battle, raise, and collect fantasy creatures called ‘Axies’. Axie highlights the benefits of blockchain technology through play to earn gameplay and a player-owned economy.",
    website_url: "https://axieinfinity.com",
    image: "https://cdn.coinranking.com/dapp/axie-infinity.png",
    number_of_nfts: 79910,
  },
  {
    dappslug: "superrare",
    name: "SuperRare",
    full_description:
      "SuperRare is a marketplace that allows you to collect and trade unique & one-of-a-kind digital artworks. Each artwork is created by an artist in the Artist Network, and secured on Ethereum as a non-fungible token that you can own and trade.",
    website_url: "https://superrare.co/",
    image: "https://cdn.coinranking.com/dapp/superrare.jpg",
    number_of_nfts: 14706,
  },
  {
    dappslug: "sorare",
    name: "Sorare",
    full_description:
      "Sorare is a fantasy football game where you can buy, trade, and play with digital cards. Every card is an official digital collectible, certified by a club or a league, in the form of blockchain-backed NFTs.",
    website_url: "https://sorare.com/",
    image: "https://cdn.coinranking.com/dapp/sorare.svg",
    number_of_nfts: 272841,
  },
  {
    dappslug: "odyssey-momentum",
    name: "Odyssey Momentum",
    full_description:
      "Odyssey Momentum is the premiere of Odyssey’s online mass collaboration arena: a completely new virtual world where connections, partnerships and valuable solutions are built.",
    website_url: "https://www.odyssey.org/momentum/",
    image: "https://cdn.coinranking.com/dapp/odyssey.jpg",
    number_of_nfts: 25,
  },
  {
    dappslug: "ethereum-name-service",
    name: "Ethereum Name Service",
    full_description:
      "Ethereum Name Service (ENS) is a naming system based on the Ethereum blockchain. It connects human-readable names to machine-readable identifiers such as Ethereum addresses.",
    website_url: "https://ens.domains",
    image: "https://cdn.coinranking.com/dapp/ethereum-name-service.svg",
    number_of_nfts: 143733,
  },
  {
    dappslug: "cryptovoxels-parcel",
    name: "Cryptovoxels Parcel",
    full_description:
      "Cryptovoxels is a virtual world built on the Ethereum blockchain. Players in Cryptovoxels can create avatars, buy land (parcels), and build art galleries and stores. This virtual reality allows users to socialize, attend events, and trade unique items (NFTs).",
    website_url: "https://www.cryptovoxels.com",
    image: "https://cdn.coinranking.com/dapp/cryptovoxels-parcel.png",
    number_of_nfts: 1511,
  },
  {
    dappslug: "unstoppable-domains",
    name: "Unstoppable Domains",
    full_description:
      "Unstoppable Domains is a San Francisco-based company building domains on blockchains. The project enables you to replace cryptocurrency addresses with easy-to-read domain names.",
    website_url: "https://unstoppabledomains.com",
    image: "https://cdn.coinranking.com/dapp/unstoppable-domains.png",
    number_of_nfts: 62282,
  },
  {
    dappslug: "the-sandbox-land",
    name: "The Sandbox LAND",
    full_description:
      "The Sandbox is a decentralized virtual world that is all about gaming. This Ethereum-based metaverse, enables players to create games themselves and play the games created by others.",
    website_url: "https://www.sandbox.game",
    image: "https://cdn.coinranking.com/dapp/the-sandbox-land.png",
    number_of_nfts: 27221,
  },
  {
    dappslug: "bullrun-babes",
    name: "Bullrun Babes",
    full_description:
      "Bullrun Babes are exactly 8888 pixelated collectibles, all uniquely generated as NFT. The Babes include all kinds of characters, some more rare than others. There are three main tiers of the Babes; gold cards, diamond cards and rainbow cards.",
    website_url: "https://www.bullrunbabes.com/",
    image: "https://cdn.coinranking.com/dapp/bullrunbabes.png",
    number_of_nfts: 160,
  },
  {
    dappslug: "art-blocks",
    name: "Art Blocks",
    full_description:
      "Art Blocks is a generative art platform that allows collectors to mint NFTs, without knowing the outcome. Artists provide variables linked as code to the platform, which will generate different and unique combinations of the existing content randomly.",
    website_url: "https://artblocks.io/",
    image: "https://cdn.coinranking.com/dapp/artblocks.png",
    number_of_nfts: 90444,
  },
  {
    dappslug: "cometh-spaceships",
    name: "Cometh Spaceships",
    full_description:
      "Cometh Spaceships, launched on 8 February 2021, is a blockchain game where players can win and utilize NFTs. The goal of the game is to position the spaceship close to the asteroids when they pass by. When you are close enough, you can mine tokens. The better the ship, the more tokens you can earn.",
    website_url: "https://www.cometh.io",
    image: "https://cdn.coinranking.com/dapp/cometh-spaceships.png",
    number_of_nfts: 3465,
  },
  {
    dappslug: "autoglyphs",
    name: "Autoglyphs",
    full_description:
      "Autoglyphs are generative art running on the Ethereum blockchain, a new experimental project by Larva Labs (The creators of CryptoPunks). Each artwork is unique and created by code on the blockchain.",
    website_url: "https://www.larvalabs.com/autoglyphs",
    image: "https://cdn.coinranking.com/dapp/autoglyphs.png",
    number_of_nfts: 29,
  },
];

async function seed() {
  await prisma.dapps.createMany({
    data: dappData,
  });
}

seed();

// {
//     "slug": "cryptokitties",
//     "name": "CryptoKitties",
//     "description": "Cryptokitties is a blockchain-based virtual game that allows players to adopt, raise, and trade the - according to CryptoKitties themselves - oh-so-adorable creatures. Each cat is unique and the one you own is actually 100% yours, secured on the blockchain.",
//     "externalUrl": "https://www.cryptokitties.co",
//     "websiteUrl": "https://www.cryptokitties.co",
//     "image": "https://cdn.coinranking.com/dapp/cryptokitties.svg",
//     "numberOfRegistries": 1,
//     "numberOfNfts": 85102,
//     "coinrankingUrl": "https://coinranking.com/dapp/cryptokitties"
//     },

// model Dapps {
//     id               Int        @id @default(autoincrement())
//     dappslug         String
//     name             String
//     full_description String
//     website_url      String
//     image            String
//     number_of_nfts   Int
//     blockchain       String
//    }
