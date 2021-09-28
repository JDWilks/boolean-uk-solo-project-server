const prisma = require("./database");

const dappData = [
  {
    dappslug: "cryptokitties",
    name: "CryptoKitties",
    full_description:
      "CryptoKitties is the world’s first blockchain game and proved the value of non-fungible tokens, becoming the key step to making blockchain more accessible. This virtual game allows players to adopt, breed, and trade virtual kitties. Each cat is unique and the one you own is actually 100% yours, secured on the blockchain. And because it’s stored on the blockchain, you can take it with you into other experiences and games, created by blockchain game developers. CryptoKitties was created in December 2017 by Axiom Zen, a blockchain company based in Vancouver. The Kitties run via a set of smart contracts on the Ethereum blockchain; ERC-721. This is a free, open standard that describes how to build non-fungible tokens on the Ethereum blockchain. The tokens can be bought with Ether, the cryptocurrency that is used on Ethereum and necessary to fuel CryptoKittie transactions, which include purchasing and breeding them. To get started, a Chrome extension like Dapper or MetaMask must be installed, which acts as a digital wallet and lets users send and receive Ether from their computers.",
    website_url: "https://www.cryptokitties.co",
    image: "https://cdn.coinranking.com/dapp/cryptokitties.svg",
    number_of_nfts: 85123,
  },
  {
    dappslug: "godsunchained",
    name: "Gods Unchained",
    full_description:
      "Gods Unchained is a tactical card game that gives players true ownership of their in-game items. The game focuses on competitive play, which means players must strategically outsmart their opponents. This way, players can win cards, which they completely own. Gods Unchained was developed by an Australia-based blockchain gaming startup ‘Immutable’. The Immutable wants to make virtual worlds real, including providing real ownership over your own digital in-game items, like with Gods Unchained. Each collectible card is a non-fungible token based on the Ethereum blockchain. This enables players to own their in-game assets the same way they own cryptocurrency. Each match is a one-on-one battle between two players (or with the computer). You need to reduce the opponent’s life to zero by beating their gods with yours. After you started the game and won yourself some cards, you’re able to trade with other players.",
    website_url: "https://godsunchained.com/",
    image: "https://cdn.coinranking.com/dapp/gods-unchained.png",
    number_of_nfts: 35235,
  },
  {
    dappslug: "somnium-space",
    name: "Somnium Space",
    full_description:
      "Somnium Space is an open, social and persistent Virtual Reality (VR) world that is built on Ethereum. Everyone in Somnium Space is able to buy land and build or import avatars.  Players can easily drench themselves into a completely alternative reality and monetize their experiences. This world is shaped by players, with land ownership on the blockchain as well as a virtual investment. Somnium Space has its own economy and its own currency. Somnium Space is designed for VR devices, however, fully accessible from any device from 2D mode on a user’s desktop. The platform is designed to be a digital social location where people from around the world can socialize, join events, play games and more. Somnium Space CUBE is the in-world cryptocurrency token based on the Ethereum blockchain. CUBEs can be used to buy land parcels on OpenSea, or to rent them from other users. The best use of CUBEs will be for in-world transactions, like micro payments in their store and User-to-User transactions.",
    website_url: "https://www.somniumspace.com/",
    image: "https://cdn.coinranking.com/dapp/sommium-space.svg",
    number_of_nfts: 670,
  },
  {
    dappslug: "rarible",
    name: "Rarible",
    full_description:
      "Rarible is a marketplace for NFTs. It gives a platform to the artists and collectors to create, collect, and trade digital collectibles. Non-fungible tokens put digital artists completely in control over their work, because the ownership is blockchain-managed. By tokenizing your work as an artist, you both ensure that it’s unique and that it’s labeled as your work. And thanks to Rarible, digital collectors are now able to own these collectibles. Rarible was launched in the beginning of 2020 by Alexei Falin and Alex Salnikov. The goal of Rarible is to evolve into a fully Decentralized Autonomous Organization (DAO), where the decision-making and organization is in control of active platform users. By giving creators and collectors the opportunity to come up with platform ideas and vote on platform upgrades, they aim to make it a public platform, responsive to the users. RARI is the governance token of Rarible.",
    website_url: "https://rarible.com/",
    image: "https://cdn.coinranking.com/dapp/rarible.png",
    number_of_nfts: 309726,
  },
  {
    dappslug: "makersplace",
    name: "MakersPlace",
    full_description:
      "MakersPlace is a platform to discover, collect, and invest in digital artworks. Every art piece available through MakersPlace is authentic and truly unique, signed and issued by the artist. Even if the digital creation is copied, it won't be the authentic and originally signed version. MakersPlace strives to make it possible to limit the number of 'authentic' copies of digital work. As an artist, you can upload his/her artwork to MakersPlace before sharing it elsewhere, for a 15% cut. An identity verification takes place, and then an Ethereum-based token is generated with your (artist) name, the art’s name, its impression, an edition number, and the date. An Ethereum token name, ID, contract ID, and creator’s ID are then all assigned so there’s a permanent record of authorship. As an art collector, you can use MakersPlace to find animations, photography, drawings, pixel art, and 3D creations. You can buy the art piece you like by credit card, or with Ether. Purchasing a unique digital creation means you have full ownership over it, which is then transferred and stored in your wallet.",
    website_url: "https://makersplace.com/",
    image: "https://cdn.coinranking.com/dapp/makersplace.png",
    number_of_nfts: 8587,
  },
  {
    dappslug: "decentraland",
    name: "Decentraland",
    full_description:
      "Decentraland is a virtual world, in which you can buy all sorts of digital items, build houses, visit a casino to win a car, or go enjoy digital art. You start by creating your own avatar, with which you are going to experience Decentraland. In Decentaland’s marketplace you can buy items to make your avatar unique. Think of wearables, like clothes and accessories, and new names. What makes Decentraland special is that it’s completely blockchain-based. All digital items are non-fungible tokens, tied to an Ethereum address. That means you have full ownership of your items in Decentraland. And the NFTs you trade in Decentraland, appear here (link to Decentraland NFTs) on Coinranking, in the complete list with unique tokens. Who started Decentraland. In 2015, a group of like-minded friends asked the question: do we want a centralized entity to control the future of virtual reality? Decentraland was the answer. Two years later it was founded, in Beijing, China, by Ari Meilich and Esteban Ordano. Decentraland is completely owned by the users. The ruling is just as its name says; decentralized. “If the Decentraland organization goes away, the world goes on”. What is MANA coin. MANA is the native cryptocurrency in Decentraland. It can be used to buy NFTs in Decentraland, like real estate, wearables, and digital art. Unlike Decentraland itself, which is an ERC-721 token, MANA is based on the ERC-20 standard.",
    website_url: "https://decentraland.org",
    image: "https://cdn.coinranking.com/dapp/decentraland.svg",
    number_of_nfts: 2217,
  },
  {
    dappslug: "axie-infinity",
    name: "Axie Infinity",
    full_description:
      "Axie Infinity is a digital pet universe where players can battle, raise, and collect fantasy creatures called Axies. Axie Infinity is inspired by Pokemon and is often referred to as the Pokemon NFTs. Axie highlights the benefits of blockchain technology through play to earn gameplay and a player-owned economy. Axie Infinity was founded in 2018 and its headquarter is in Vietnam. Axie Infinity is Ethereum-based and all Axies are represented as ERC-721 tokens. They function as game characters that can be used in various games in the Axie Infinity universe. Besides collecting and raising, you can make a team of Axies to battle in the arena. To get started, you first need to connect your Ethereum wallet. The team highly recommends using MetaMask. Since the game runs on Ethereum, you’ll need some ETH in your wallet to begin with. Then, you’re able to adopt your first Axie. But you can also buy, sell, and trade them on marketplaces.",
    website_url: "https://axieinfinity.com",
    image: "https://cdn.coinranking.com/dapp/axie-infinity.png",
    number_of_nfts: 79910,
  },
  {
    dappslug: "superrare",
    name: "SuperRare",
    full_description:
      "SuperRare is a marketplace that allows you to collect and trade unique & one-of-a-kind digital artworks. Each artwork is created by an artist in the Artist Network, and secured on the Ethereum blockchain as a non-fungible token that you can own and trade.In 2017 SuperRare was founded by John Crain, Charles Crain, and Johnathan Perkin. They are also the founders of Pixura, the company that builds the technology SuperRare runs on. All transactions are made using ETH, the native cryptocurrency to the Ethereum network, which powers SuperRare. The SuperRare team thinks that collecting is a social event and due that belief they introduced ‘social collecting’. This concept allows artists and collectors to interact about art with each other very easily. It’s all about connecting and collecting. The platform displays top collectors and popular artists, how many art pieces they’ve purchased or created, and how much ETH is spent/earned.",
    website_url: "https://superrare.co/",
    image: "https://cdn.coinranking.com/dapp/superrare.jpg",
    number_of_nfts: 14706,
  },
  {
    dappslug: "sorare",
    name: "Sorare",
    full_description:
      "Sorare is a fantasy football game where you can buy, trade, and play with digital cards. Every card is an official digital collectible, certified by a club or league. Sorare’s are non-fungible tokens, based on the Ethereum blockchain. Every card has its level of scarcity and uniqueness; the three levels are Rare, Super Rare and Unique. Each season the Superare team defines the level of supply of each player card so that everyone knows how scarce your card is, relative to the total supply of cards in circulation. Players can collect the football cards, trade them on the market, and participate in different gaming activities. Every Sorare card can be used to play in fantasy football tournaments on the platform. There are currently five-a-side games available. Sorare sells the player cards in packs, or you can purchase individual cards on the market with Ethereum or cash. In the tournaments, Sorare also rewards winners with additional cards and Ethereum payouts.",
    website_url: "https://sorare.com/",
    image: "https://cdn.coinranking.com/dapp/sorare.svg",
    number_of_nfts: 272841,
  },
  {
    dappslug: "odyssey-momentum",
    name: "Odyssey Momentum",
    full_description:
      "Odyssey Momentum is the premiere of Odyssey’s online mass collaboration arena: a completely new virtual world where connections, partnerships and valuable solutions are built. This arena will be used to co-create solutions for complex 21st century challenges, and opens for the first time during its online 49 hour flagship event, where 2.000 participants from all over the world will join. At this event, an immersive 3D experience is combined with a game and meeting design that is completely focused on collaboration.Odyssey Momentum takes place from November 13-15, 2020 and is organized by Odyssey, as part of the Odyssey incubation program for multi-stakeholder collaboration.What will happen during Odyssey Momentum: More than 2.000 participants and 105 selected teams will work together to build solutions for 21 challenges. These challenges are lead by corporations, governments, and nonprofits from the US, France, Germany, Sweden and the Netherlands (among them: Vattenfall, KLM Cargo, the Dutch National Police, the International Union for Conservation of Nature, the International Council for Environmental Law, E.On, Engie, VMware, and the Dutch Ministries of Defense and the Interior). For each challenge, five teams have been selected to prepare and co-create with these partners and their stakeholders.The challenges are tied directly to the UN Sustainable Development Goals, have a global societal and economic impact, and cover a variety of domains such as energy transition, acute healthcare, conflict prevention, conscious cities, critical infrastructure, logistics and supply chain, nature conservation, real estate, and digital identity. These complex problems can only be solved through mass collaboration and require a multi-stakeholder approach to achieve breakthrough solutions for collective progress. Reinventing Odyssey: from offline hackathon to online mass collaboration arena. Since 2017 Odyssey has organized Europe’s largest hackathon, specifically focusing on multi-stakeholder challenges tied to the UN Sustainable Development Goals. Thousands have already participated, and not without result. 2020, however, is different from any other year. Having 2.000 people from 50 countries work closely together for 49 hours in an old factory hall in the Dutch city of Groningen, simply isn’t feasible. Accelerated by the necessity of the COVID-19 crisis, Odyssey decided to go completely online. It quickly became clear that in order to take the event online, existing meeting platforms wouldn’t suffice. You can’t simply ask 2000 people to join a 49 hour Zoom, Teams or Hangouts meeting. Current event software platforms didn’t offer a solution either, as these don’t support multi-stakeholder collaboration processes. That is why over the past few months, Odyssey has developed its own platform, building a completely new stack integrating Unity, Miro, Twilio, with a high performance UI layer and scalable server infrastructure. This resulted in the online mass collaboration arena, which premieres during Odyssey Momentum. Odyssey’s online mass collaboration arena combines a unique gaming and meeting design that is completely focused on collaboration in a 3D experience, that will show the possibilities of the future. Through this platform, a pathway to meaningful interaction is facilitated between people building solutions, experts, problem owners, users, stakeholders as well as board members and investors. The ultimate goal is to achieve maximum results by collaborating in the most efficient way, and having a lot of fun while doing it.",
    website_url: "https://www.odyssey.org/momentum/",
    image: "https://cdn.coinranking.com/dapp/odyssey.jpg",
    number_of_nfts: 25,
  },
  {
    dappslug: "ethereum-name-service",
    name: "Ethereum Name Service",
    full_description:
      "Ethereum Name Service (ENS) is a completely distributed domain name system that enables you to have one easy-to-remember name for your cryptocurrency addresses and decentralized websites. ENS is created on the Ethereum blockchain, though, you can still create domain names for all your wallet addresses (so not just Ethereum.)</p><p>Thanks to lead developers Nick Johnson and Alex Van de Sande of the Ethereum Foundation, who initiated the development of the ENS in May 2017, sending or receiving crypto has become much easier. Anyone can use an Ethereum address to register a name, or multiple names. This means that you don’t need to type or copy the long addresses anymore. Instead, you can come up with your own name, if it’s still available. With this domain name you’re able to receive payments in any cryptocurrency and it allows you to access a website in a decentralized network.",
    website_url: "https://ens.domains",
    image: "https://cdn.coinranking.com/dapp/ethereum-name-service.svg",
    number_of_nfts: 143733,
  },
  {
    dappslug: "cryptovoxels-parcel",
    name: "Cryptovoxels Parcel",
    full_description:
      "Cryptovoxels is a virtual world built on the Ethereum blockchain. Players in Cryptovoxels can create avatars, buy land (parcels), and build art galleries and stores. This virtual reality allows users to socialize, attend events, and trade unique items (NFTs). The city in Cryptovoxels is called Origin City, which has streets that are owned by The Corporation. The parcels are owned by individual people. Everybody can buy a parcel with Ether and build on it. The parcel owners are able to add and remove blocks (voxels) and features on their parcels. They can also make their parcel a so-called sandbox parcel, which makes it free for anyone to build on. Everybody can explore the world even without an Ethereum wallet or a parcel. However, if you want to go try building, there are three options. One, purchase a parcel of your own and build on it. Two, build on one of the available sandbox parcels. Or three, use a space! Free editable non-grid space. And since building can be completely done in the browser, you don’t need any coding skills in Cryptovoxels.",
    website_url: "https://www.cryptovoxels.com",
    image: "https://cdn.coinranking.com/dapp/cryptovoxels-parcel.png",
    number_of_nfts: 1511,
  },
  {
    dappslug: "unstoppable-domains",
    name: "Unstoppable Domains",
    full_description:
      "Unstoppable Domains is a San Francisco-based company building domains on blockchains. It’s founded in 2018 by Matthew Gould, Braden Pezeshki, Bogdan Gusiev, and Bradley Kam.The project enables you to replace cryptocurrency addresses with easy-to-read domain names. To send cryptocurrency, all you need to know is the receiver’s blockchain domain; no more struggling with those long and confusing wallet addresses. Currently, Unstoppable Domains supports more than seventy cryptocurrencies, including bitcoin, ethereum, cardano, and dogecoin. Just like your cryptocurrencies, the domain name is stored in a wallet. Only you, as the owner, can access and manage it. Unstoppable Domains provides a wallet for holding the domain names, but not yet for cryptocurrencies. In order to send and receive coins using domain names, you need wallets that have integrated the project’s software. You can also use non-custodial (self-custody) crypto wallets to hold the domains.",
    website_url: "https://unstoppabledomains.com",
    image: "https://cdn.coinranking.com/dapp/unstoppable-domains.png",
    number_of_nfts: 62282,
  },
  {
    dappslug: "the-sandbox-land",
    name: "The Sandbox LAND",
    full_description:
      "The Sandbox is a decentralized virtual world that is all about gaming. The main purpose of this Ethereum-based metaverse is providing complete ownership of this world to its players. It enables you to create games yourself and play the games created by others. The game experiences are made out of voxel assets, that are monetized through non-fungible tokens. On a so-called LAND, a game can be built out of these voxels.</p><p>LAND can be bought using the SAND token. SAND is the utility token of the Sandbox and allows you to make transactions. SAND tokens are gained by playing games, renting out LAND, or bought with dollars on an exchange. And more SAND tokens (and other customized NFTs) can be obtained over time, by staking the SAND tokens. To take part in this world, you first need to create an avatar which you then connect to a wallet or a social media account",
    website_url: "https://www.sandbox.game",
    image: "https://cdn.coinranking.com/dapp/the-sandbox-land.png",
    number_of_nfts: 27221,
  },
  {
    dappslug: "bullrun-babes",
    name: "Bullrun Babes",
    full_description:
      "Bullrun Babes are exactly 8888 pixelated collectibles, all uniquely generated as NFT. The Babes include all kinds of characters, some scantily clad, some more masculine looking, and others wearing masks or something like that. There are three main tiers of the Babes; Gold, Diamond, and Rainbow cards. The chance of getting a Rainbow card is 3%, against 86% chance of getting Gold (with drawing). And then there are the Legend cards. Legends are even more unique since they have just one single copy in supply. You can get these cards in three ways; drawing, trading and buying. In the beginning, there weren’t any cards in existence, so the first ones had to be drawn. 8118 cards are available by drawing, the rest only by trading up. Ten Gold cards are exchangeable for one Diamond card, and four Diamond cards are worth one Rainbow card. In addition, you can always buy Babes on marketplaces.",
    website_url: "https://www.bullrunbabes.com/",
    image: "https://cdn.coinranking.com/dapp/bullrunbabes.png",
    number_of_nfts: 160,
  },
  {
    dappslug: "art-blocks",
    name: "Art Blocks",
    full_description:
      "Art Blocks is a generative art platform that allows collectors to mint NFTs, without knowing the outcome. Artists provide variables, linked as code to the platform, which will generate new combinations of the existing content randomly. The artworks are all different and unique and may appear as an image, animation, 3D model or yet something else. You connect your wallet to the platform, make your ETH transaction, and a completely new version of the content will be created by the algorithm.</p><p>Snowfro is the creator of Art blocks, and came up with the idea back in 2017, when he claimed a bunch of CryptoPunks zombies. These zombies are very rare, and Snowfro thought it might be unfair that he got a lot of those zombies, and others didn’t. The platform aims to enable collectors to afford art that otherwise could have been out of reach. By selling the zombies Snowfro was able to fund the development of Art Blocks.",
    website_url: "https://artblocks.io/",
    image: "https://cdn.coinranking.com/dapp/artblocks.png",
    number_of_nfts: 90444,
  },
  {
    dappslug: "cometh-spaceships",
    name: "Cometh Spaceships",
    full_description:
      "Cometh Spaceships, launched on 8 February 2021, is a blockchain game where players can win and utilize NFTs. The game is set in the galaxy, which is full of asteroids composed of NFT tokens. The goal of the game is to position your spaceship close to the asteroids when they pass by. When you are close enough, you can mine tokens. The better the ship, the more tokens you can earn. The spaceship NFTs are also available on OpenSea. MUST is the utility token within the Cometh ecosystem.The token is used to price in-game mechanisms and can also be staked to gain more and exclusive spaceships. MUST can be bought on Uniswap and be earned when other players are using your spaceship attraction to jump from one orbit to another. And MUST holders who provide liquidity to the ETH/MUST pool will earn more tokens as a reward.",
    website_url: "https://www.cometh.io",
    image: "https://cdn.coinranking.com/dapp/cometh-spaceships.png",
    number_of_nfts: 3465,
  },
  {
    dappslug: "autoglyphs",
    name: "Autoglyphs",
    full_description:
      "Autoglyphs are generative art running on the Ethereum blockchain, a new experimental project by Larva Labs (The creators of CryptoPunks). Each artwork is unique and created by code on the blockchain. The mechanism is self-controlled for the creation and ownership of an artwork. Larva Labs said it no longer controlled the code that generates the art, nor the code that manages the ownership of the Autoglyps. This emphasises the full ownership that collectors have over their artworks.</p><p>An Autoglyph could be created by anyone who was willing to donate the creation fee of 0.20 ETH  to a charity. However, there could only ever be 512 in existence, and all 512 Glyphs have already been claimed. The generator has shut itself off forever and the Glyphs will now only be available on the secondary market.",
    website_url: "https://www.larvalabs.com/autoglyphs",
    image: "https://cdn.coinranking.com/dapp/autoglyphs.png",
    number_of_nfts: 29,
  },
];

const socialDappData = [
  {
    url: "https://cryptokitties.co",
    name: "cryptokitties.co",
    type: "website",
    dappid: 1,
  },
  {
    url: "https://twitter.com/CryptoKitties",
    name: "@CryptoKitties",
    type: "twitter",
    dappid: 1,
  },
  {
    url: "https://www.reddit.com/r/CryptoKitties/",
    name: "r/CryptoKitties",
    type: "reddit",
    dappid: 1,
  },
  {
    url: "https://www.youtube.com/channel/UClUgQBJcxAmHjOQgV4QgVXg",
    name: "CryptoKitties",
    type: "youtube",
    dappid: 1,
  },
  {
    url: "https://www.facebook.com/CryptoKitties/",
    name: "CryptoKitties",
    type: "facebook",
    dappid: 1,
  },
  {
    url: "https://www.instagram.com/cryptokitties/",
    name: "CryptoKitties",
    type: "instagram",
    dappid: 1,
  },
  {
    url: "https://discord.com/invite/cryptokitties",
    name: "CryptoKitties",
    type: "discord",
    dappid: 1,
  },
  {
    url: "https://www.twitch.tv/directory/game/CryptoKitties",
    name: "CryptoKitties",
    type: "twitch",
    dappid: 1,
  },
  {
    url: "https://godsunchained.com/",
    name: "godsunchained.com",
    type: "website",
    dappid: 2,
  },
  {
    url: "https://twitter.com/GodsUnchained",
    name: "@GodsUnchained",
    type: "twitter",
    dappid: 2,
  },
  {
    url: "https://www.reddit.com/r/GodsUnchained/",
    name: "r/GodsUnchained",
    type: "reddit",
    dappid: 2,
  },
  {
    url: "https://www.youtube.com/channel/UCGQ1oWpKFfjsLYiTYALAlSA",
    name: "GodsUnchained",
    type: "youtube",
    dappid: 2,
  },
  {
    url: "https://www.facebook.com/godsunchained/",
    name: "GodsUnchained",
    type: "facebook",
    dappid: 2,
  },
  {
    url: "https://www.instagram.com/godsunchained/",
    name: "GodsUnchained",
    type: "instagram",
    dappid: 2,
  },
  {
    url: "https://discord.com/invite/godsunchained",
    name: "GodsUnchained",
    type: "discord",
    dappid: 2,
  },
  {
    url: "https://www.twitch.tv/directory/game/godsunchained",
    name: "GodsUnchained",
    type: "twitch",
    dappid: 2,
  },
  {
    url: "https://somniumspace.com/",
    name: "somniumspace.com",
    type: "website",
    dappid: 3,
  },
  {
    url: "https://twitter.com/somniumspace",
    name: "@SomniumSpace",
    type: "twitter",
    dappid: 3,
  },
  {
    url: "https://www.instagram.com/somniumspace",
    name: "somniumspace",
    type: "instagram",
    dappid: 3,
  },
  {
    url: "https://www.youtube.com/channel/UCabT6LiDZv4cXQRPDwY1-DA",
    name: "Somnium Space VR",
    type: "youtube",
    dappid: 3,
  },
  {
    url: "https://t.me/somniumspace",
    name: "Somnium Space",
    type: "telegram",
    dappid: 3,
  },
  {
    url: "https://www.facebook.com/SomniumSpace/",
    name: "Somnium Space",
    type: "facebook",
    dappid: 3,
  },
  {
    url: "https://discord.com/invite/somniumspace",
    name: "Somnium Space VR",
    type: "discord",
    dappid: 3,
  },
  {
    url: "https://rarible.com/",
    name: "rarible.com",
    type: "website",
    dappid: 4,
  },
  {
    url: "https://twitter.com/rariblecom",
    name: "@rariblecom",
    type: "twitter",
    dappid: 4,
  },
  {
    url: "https://t.me/rarible",
    name: "Rarible.com Community",
    type: "telegram",
    dappid: 4,
  },
  {
    url: "https://www.instagram.com/rariblecom/",
    name: "rariblecom",
    type: "instagram",
    dappid: 4,
  },
  {
    url: "https://discord.com/invite/cdaFbV5",
    name: "Rarible",
    type: "discord",
    dappid: 4,
  },
  {
    url: "https://makersplace.com/",
    name: "makersplace.com",
    type: "website",
    dappid: 5,
  },
  {
    url: "https://twitter.com/makersplaceco",
    name: "@makersplaceco",
    type: "twitter",
    dappid: 5,
  },
  {
    url: "https://www.facebook.com/makersplaceco",
    name: "makersplaceco",
    type: "facebook",
    dappid: 5,
  },
  {
    url: "https://www.instagram.com/makersplaceco/",
    name: "makersplaceco",
    type: "instagram",
    dappid: 5,
  },
  {
    url: "https://discord.com/invite/TXs8tZD",
    name: "MakersPlace",
    type: "discord",
    dappid: 5,
  },
  {
    url: "https://decentraland.org",
    name: "decentraland.org",
    type: "website",
    dappid: 6,
  },
  {
    url: "https://twitter.com/decentraland",
    name: "@decentraland",
    type: "twitter",
    dappid: 6,
  },
  {
    url: "https://www.reddit.com/r/decentraland/",
    name: "r/decentraland",
    type: "reddit",
    dappid: 6,
  },
  {
    url: "https://discord.com/invite/k5ydeZp",
    name: "Decentraland",
    type: "discord",
    dappid: 6,
  },
  {
    url: "https://github.com/decentraland",
    name: "Decentraland",
    type: "github",
    dappid: 6,
  },
  {
    url: "https://www.twitch.tv/directory/game/CryptoKitties",
    name: "CryptoKitties",
    type: "twitch",
    dappid: 6,
  },
  {
    url: "https://axieinfinity.com",
    name: "axieinfinity.com",
    type: "website",
    dappid: 7,
  },
  {
    url: "https://twitter.com/AxieInfinity",
    name: "@AxieInfinity",
    type: "twitter",
    dappid: 7,
  },
  {
    url: "https://www.reddit.com/r/AxieInfinity/",
    name: "r/AxieInfinity",
    type: "reddit",
    dappid: 7,
  },
  {
    url: "https://discord.gg/axie",
    name: "Axie",
    type: "discord",
    dappid: 7,
  },
  {
    url: "https://medium.com/@AxieInfinity",
    name: "Axie Infinity",
    type: "medium",
    dappid: 7,
  },
  {
    url: "https://www.facebook.com/AxieInfinity",
    name: "Axie Infinity",
    type: "facebook",
    dappid: 7,
  },
  {
    url: "https://superrare.co/",
    name: "superrare.co",
    type: "website",
    dappid: 8,
  },
  {
    url: "https://twitter.com/SuperRare_co",
    name: "@SuperRare_co",
    type: "twitter",
    dappid: 8,
  },
  {
    url: "https://www.instagram.com/superrare.co/",
    name: "superrare",
    type: "instagram",
    dappid: 8,
  },
  {
    url: "https://discord.com/invite/pGeAWrP",
    name: "SuperRare",
    type: "discord",
    dappid: 8,
  },
  {
    url: "https://medium.com/@SuperRare_co",
    name: "SuperRare_co",
    type: "medium",
    dappid: 8,
  },
  {
    url: "https://sorare.com/",
    name: "sorare.com",
    type: "website",
    dappid: 9,
  },
  {
    url: "https://twitter.com/sorarehq",
    name: "@sorarehq",
    type: "twitter",
    dappid: 9,
  },
  {
    url: "https://t.me/SorareFC",
    name: "SorareFC",
    type: "telegram",
    dappid: 9,
  },
  {
    url: "https://www.instagram.com/sorare_official/",
    name: "sorare_official",
    type: "instagram",
    dappid: 9,
  },
  {
    url: "https://discord.gg/TSjtHaM",
    name: "SoRare Discord",
    type: "discord",
    dappid: 9,
  },
  {
    url: "https://www.odyssey.org/momentum/",
    name: "odyssey.org",
    type: "website",
    dappid: 10,
  },
  {
    url: "https://t.me/odysseymomentum",
    name: "Odyssey",
    type: "telegram",
    dappid: 10,
  },
  {
    url: "https://www.instagram.com/odysseymomentum/",
    name: "odysseymomentum",
    type: "instagram",
    dappid: 10,
  },
  {
    url: "https://www.youtube.com/user/intobitcoin",
    name: "Odyssey",
    type: "youtube",
    dappid: 10,
  },
  {
    url: "https://twitter.com/OdysseyMomentum",
    name: "@OdysseyMomentum",
    type: "twitter",
    dappid: 10,
  },
  {
    url: "https://www.linkedin.com/company/odysseyprogram/",
    name: "Odyssey",
    type: "linkedin",
    dappid: 10,
  },
  {
    url: "https://ens.domains",
    name: "ens.domains",
    type: "website",
    dappid: 11,
  },
  {
    url: "https://twitter.com/ensdomains",
    name: "@ensdomains",
    type: "twitter",
    dappid: 11,
  },
  {
    url: "https://medium.com/the-ethereum-name-service",
    name: "The Ethereum Name Service",
    type: "medium",
    dappid: 11,
  },
  {
    url: "https://github.com/ensdomains",
    name: "ensdomains",
    type: "github",
    dappid: 11,
  },
  {
    url: "https://www.cryptovoxels.com",
    name: "cryptovoxels.com",
    type: "website",
    dappid: 12,
  },
  {
    url: "https://twitter.com/cryptovoxels",
    name: "@cryptovoxels",
    type: "twitter",
    dappid: 12,
  },
  {
    url: "https://discord.com/invite/Bv68xT4",
    name: "Cryptovoxels",
    type: "discord",
    dappid: 12,
  },
  {
    url: "https://www.reddit.com/r/cryptovoxels/",
    name: "Cryptovoxels",
    type: "reddit",
    dappid: 12,
  },
  {
    url: "https://unstoppabledomains.com",
    name: "unstoppabledomains.com",
    type: "website",
    dappid: 13,
  },
  {
    url: "https://twitter.com/unstoppableweb",
    name: "@unstoppableweb",
    type: "twitter",
    dappid: 13,
  },
  {
    url: "https://medium.com/unstoppabledomain",
    name: "unstoppabledomain",
    type: "medium",
    dappid: 13,
  },
  {
    url: "https://www.facebook.com/pages/category/Information-Technology-Company/Unstoppable-Domains-437586016802082/",
    name: "Unstoppable Domains",
    type: "facebook",
    dappid: 13,
  },
  {
    url: "https://www.youtube.com/channel/UCg3gV2yVjRytsgpc1ZPiqjg",
    name: "Unstoppable Domains",
    type: "youtube",
    dappid: 13,
  },
  {
    url: "https://www.sandbox.game",
    name: "sandbox.game",
    type: "website",
    dappid: 14,
  },
  {
    url: "https://twitter.com/thesandboxgame",
    name: "@thesandboxgame",
    type: "twitter",
    dappid: 14,
  },
  {
    url: "https://medium.com/sandbox-game",
    name: "sandbox-game",
    type: "medium",
    dappid: 14,
  },
  {
    url: "https://www.facebook.com/TheSandboxGame/",
    name: "TheSandboxGame",
    type: "facebook",
    dappid: 14,
  },
  {
    url: "https://www.youtube.com/channel/UCzv1t7voB-bxMmXLysT4h0w?sub_confirmation=1",
    name: "TheSandboxGame",
    type: "youtube",
    dappid: 14,
  },
  {
    url: "https://www.instagram.com/thesandboxgame/",
    name: "thesandboxgame",
    type: "instagram",
    dappid: 14,
  },
  {
    url: "https://t.me/sandboxgame",
    name: "sandboxgame",
    type: "telegram",
    dappid: 14,
  },
  {
    url: "https://www.twitch.tv/thesandboxgame",
    name: "thesandboxgame",
    type: "twitch",
    dappid: 14,
  },
  {
    url: "https://www.bullrunbabes.com/",
    name: "bullrunbabes.com",
    type: "website",
    dappid: 15,
  },
  {
    url: "https://www.twitter.com/bullrunbabes",
    name: "@bullrunbabes",
    type: "twitter",
    dappid: 15,
  },
  {
    url: "https://www.artblocks.io",
    name: "artblocks.io",
    type: "website",
    dappid: 16,
  },
  {
    url: "https://twitter.com/artblocks_io",
    name: "artblocks_io",
    type: "twitter",
    dappid: 16,
  },
  {
    url: "https://discord.gg/VGX9fyhWBn",
    name: "Art Blocks",
    type: "discord",
    dappid: 16,
  },
  {
    url: "https://www.cometh.io",
    name: "cometh.io",
    type: "website",
    dappid: 17,
  },
  {
    url: "https://t.me/cometh_io",
    name: "cometh_io",
    type: "telegram",
    dappid: 17,
  },
  {
    url: "https://twitter.com/MUSTCometh",
    name: "MUSTCometh",
    type: "twitter",
    dappid: 17,
  },
  {
    url: "https://github.com/cometh-game",
    name: "cometh-game",
    type: "github",
    dappid: 17,
  },
  {
    url: "https://medium.com/cometh",
    name: "cometh",
    type: "medium",
    dappid: 17,
  },
  {
    url: "https://www.larvalabs.com/autoglyphs",
    name: "larvalabs.com/autoglyphs",
    type: "website",
    dappid: 18,
  },
  {
    url: "http://twitter.com/larvalabs",
    name: "larvalabs",
    type: "twitter",
    dappid: 18,
  },
];

const userData = {
  firstName: "jonathon",
  lastName: "wilks",
};

async function seed() {
  const { id } = await prisma.user.create({
    data: userData,
  });
  const tradeData = [
    {
      userId: id,
      nftId: "fa12d105dbff3af8d6061562b087387ba1ac8a104d317173ca70f68462817898",
      quantity: 1,
      purchasePrice: 2000000,
      type: "BUY", // buy or sell (both post requests)
    },
    {
      userId: id,
      nftId: "fa12d105dbff3af8d6061562b087387ba1ac8a104d317173ca70f68462817898",
      quantity: 1,
      purchasePrice: 2000000,
      type: "BUY", // buy or sell (both post requests)
    },
  ];
  await prisma.trade.createMany({
    data: tradeData,
  });
}

seed();
