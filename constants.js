var conAddress = {
    bsc: {
        staking: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        token: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
        cryptoBlades: '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271',
        character: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
        weapon: '0x7e091b0a220356b157131c831258a9c98ac8031a',
        shield: '0xf9E9F6019631bBE7db1B71Ec4262778eb6C3c520',
        market: '0x90099dA42806b21128A094C713347C7885aF79e2',
        skillPair: '0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c',
        tokenPair: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16'
    },
    heco: {
        staking: '0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF',
        token: '0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405',
        cryptoBlades: '0x29869EDb088466a49f75654d8F04edd16Bf60e75',
        character: '0xF6092CDEaabd02069cB56E2b770367AAcf49dfba',
        weapon: '0xa0f254436E43239D2B3947A9D590C495738B6A4C',
        shield: '0xb4eD70aC5B00ca0fd9526089489979e116E45ec0',
        market: '0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440',
        skillPair: '0x7c9739ecD7882157b1C526a832FfD5A50860078d',
        tokenPair: '0x3289250099cF4cF9e59Fd728a93F36594C1369f0'
    },
    oec: {
        staking: '0xC5707a6a16CCe1963Ec3E6cdEE0A91e4876Be395',
        token: '0xcC137b0713E0DC63b1fA136272014F2A54Dd7aCB',
        cryptoBlades: '0x98145a2fEBac238280bbdEDc2757dC162318b16e',
        character: '0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38',
        weapon: '0x364759180A6484e57ECD73C042264A6Da75770e8',
        shield: '0x8c52FabF2442b0EB83518DaB93A8073Ce5B0BA15',
        market: '0x5ea2373e281E92FE3c53dc36cE855D89BF25F6F8',
        skillPair: '0x2d9cdad4b89d91e6a44ec1c8b227b0c2b0d4e2cf',
        tokenPair: '0xa75bd9f086bbc1168b01fd5e750986b5170c2b26'
    },
    poly: {
        staking: '0xE34e7cA8e64884E3b5Cd48991ba229d8302E85da',
        token: '0x863D6074aFaF02D9D41A5f8Ea83278DF7089aA86',
        cryptoBlades: '0x070b1A95898B927A900A1F9F42b114154648E51A',
        character: '0x929059Fef67b88CE2F4127e59B50bEA123981998',
        weapon: '0xD9C5449EfB3f99952F73e824688724aAFB81dE6E',
        shield: '0x68a288c2A96e2cd5c45769e02f2bbc2E90BAE39B',
        market: '0xeE6e8467268eA752b027676B3EBcD4eB05749874',
        skillPair: '0x42ba6f3aF9d8A2A30F5e55362c45e7121a932b77',
        tokenPair: '0x65d43b64e3b31965cd5ea367d4c2b94c03084797'
    },
    avax: {
        staking: '0x96438Debb1419bF0B53119Edae6e664c931504CA',
        token: '0x483416eB3aFA601B9C6385f63CeC0C82B6aBf1fb',
        cryptoBlades: '0x46419526a59ec1d73b72620ae16da091bE8486bd',
        character: '0x28857ccCCa599f0876792094870758A18F581Dc0',
        weapon: '0xe8f172B51186A4c8127D5eE05617dCA6aAf478fE',
        shield: '0x1609BD8ea43b1c23dE90071B82CD08FA098DdCF3',
        market: '0x9469ED8d4b86e4442b4AA848bB94B9f9130f123E',
        skillPair: '0xF52B3Df311182F43202806ee0E72aCB92d777879',
        tokenPair: '0xe28984e1ee8d431346d32bec9ec800efb643eef4'
    }
};

var nodes = {
    bsc: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com',
    oec: 'https://exchainrpc.okex.org',
    poly: 'https://polygon-rpc.com/',
    avax: 'https://api.avax.network/ext/bc/C/rpc'
};

var bscChars = {
    water1: {
        a: '16092',
        b: '16091',
        c: '16105',
        d: '16106',
        weapon: '8768',
        stamMult: '5',
    },    
};

var oecChars = {
    lightning: {
        a: '16092',
        b: '16091',
        c: '16105',
        d: '16106',
        weapon: '8768',
        stamMult: '5',
    },

    earth: {
        a: '10457',
        b: '10452',
        c: '12788',
        d: '13547',
        weapon: '27396',
        stamMult: '5',
    },  
    
    water: {
        a: '16981',
        b: '17038',
        c: '17039',
        d: '17040',
        weapon: '28346',
        stamMult: '5',
    }
};