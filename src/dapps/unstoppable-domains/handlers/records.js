export const keyToCryptoKey = {
  ETH: 'crypto.ETH.address',
  BTC: 'crypto.BTC.address',
  ZIL: 'crypto.ZIL.address',
  LTC: 'crypto.LTC.address',
  ETC: 'crypto.ETC.address',
  EQL: 'crypto.EQL.address',
  LINK: 'crypto.LINK.address',
  USDC: 'crypto.USDC.address',
  BAT: 'crypto.BAT.address',
  REP: 'crypto.REP.address',
  ZRX: 'crypto.ZRX.address',
  DAI: 'crypto.DAI.address',
  BCH: 'crypto.BCH.address',
  XMR: 'crypto.XMR.address',
  DASH: 'crypto.DASH.address',
  NEO: 'crypto.NEO.address',
  SWTH: 'crypto.SWTH.address',
  DOGE: 'crypto.DOGE.address',
  XRP: 'crypto.XRP.address',
  ZEC: 'crypto.ZEC.address',
  ADA: 'crypto.ADA.address',
  EOS: 'crypto.EOS.address',
  XLM: 'crypto.XLM.address',
  BNB: 'crypto.BNB.address',
  BTG: 'crypto.BTG.address',
  NANO: 'crypto.NANO.address',
  WAVES: 'crypto.WAVES.address',
  KMD: 'crypto.KMD.address',
  AE: 'crypto.AE.address',
  RSK: 'crypto.RSK.address',
  WAN: 'crypto.WAN.address',
  STRAT: 'crypto.STRAT.address',
  UBQ: 'crypto.UBQ.address',
  XTZ: 'crypto.XTZ.address',
  IOTA: 'crypto.IOTA.address',
  VET: 'crypto.VET.address',
  QTUM: 'crypto.QTUM.address',
  ICX: 'crypto.ICX.address',
  DGB: 'crypto.DGB.address',
  XZC: 'crypto.XZC.address',
  BURST: 'crypto.BURST.address',
  DCR: 'crypto.DCR.address',
  XEM: 'crypto.XEM.address',
  LSK: 'crypto.LSK.address',
  ATOM: 'crypto.ATOM.address',
  ONG: 'crypto.ONG.address',
  ONT: 'crypto.ONT.address',
  SMART: 'crypto.SMART.address',
  TPAY: 'crypto.TPAY.address',
  GRS: 'crypto.GRS.address',
  BSV: 'crypto.BSV.address',
  GAS: 'crypto.GAS.address',
  TRX: 'crypto.TRX.address',
  VTHO: 'crypto.VTHO.address',
  BCD: 'crypto.BCD.address',
  BTT: 'crypto.BTT.address',
  KIN: 'crypto.KIN.address',
  RVN: 'crypto.RVN.address',
  ARK: 'crypto.ARK.address',
  XVG: 'crypto.XVG.address',
  ALGO: 'crypto.ALGO.address',
  NEBL: 'crypto.NEBL.address',
  XPM: 'crypto.XPM.address',
  ONE: 'crypto.ONE.address',
  BNTY: 'crypto.BNTY.address'
};

function inverse(obj) {
  const retobj = {};
  for (const key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}
export const cryptoKeyToKey = inverse(keyToCryptoKey);

const keyValueRegexes = {
  BTC: new RegExp('^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'),
  ZIL: new RegExp('^zil[a-zA-Z0-9]{39}$'),
  ETH: new RegExp('^0x[a-fA-F0-9]{40}$'),
  ETC: new RegExp('^0x[a-fA-F0-9]{40}$'),
  LINK: new RegExp('^0x[a-fA-F0-9]{40}$'),
  LTC: new RegExp('^L[a-km-zA-HJ-NP-Z1-9]{26,33}$'),
  USDC: new RegExp('^0x[a-fA-F0-9]{40}$'),
  BAT: new RegExp('^0x[a-fA-F0-9]{40}$'),
  REP: new RegExp('^0x[a-fA-F0-9]{40}$'),
  ZRX: new RegExp('^0x[a-fA-F0-9]{40}$'),
  EQL: new RegExp('^bnb[0-9a-z]{39}$'),
  DAI: new RegExp('^0x[a-fA-F0-9]{40}$'),
  BNTY: new RegExp('^0x[a-fA-F0-9]{40}$'),
  BCH: new RegExp(
    '^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$'
  ),
  XMR: new RegExp('^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$'),
  DASH: new RegExp('^X[1-9A-HJ-NP-Za-km-z]{33}$'),
  NEO: new RegExp('^A[0-9a-zA-Z]{33}$'),
  SWTH: new RegExp('^A[0-9a-zA-Z]{33}$'),
  DOGE: new RegExp('^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$'),
  XRP: new RegExp('^r[1-9a-km-zA-HJ-NP-Z]{24,34}$'),
  ZEC: new RegExp(
    '^z([a-zA-Z0-9]){94}$|^zs([a-zA-Z0-9]){75}$|^t([a-zA-Z0-9]){34}$'
  ),
  ADA: new RegExp('^[1-9a-km-zA-HJ-NP-Z]{104}$|^A[1-9A-HJ-NP-Za-km-z]{58}$'),
  EOS: new RegExp('^[a-z][a-z1-5.]{10}[a-z1-5]$'),
  XLM: new RegExp('^G[A-Z2-7]{55}$'),
  BNB: new RegExp('^bnb[0-9a-z]{39}$'),
  BTG: new RegExp('^[GA][a-km-zA-HJ-NP-Z1-9]{33}$'),
  NANO: new RegExp('^nano_[1-9a-z]{60}$'),
  WAVES: new RegExp('^3[a-km-zA-HJ-NP-Z1-9]{34}$'),
  KMD: new RegExp('^R[a-km-zA-Z1-9]{33}$'),
  AE: new RegExp('^ak_[a-km-zA-Z1-9]{48,52}$'),
  RSK: new RegExp('^0x[a-fA-F0-9]{40}$'),
  WAN: new RegExp('^0x[a-fA-F0-9]{40}$'),
  STRAT: new RegExp('^S[a-km-zA-HJ-NP-Z1-9]{33}$'),
  UBQ: new RegExp('^0x[a-km-zA-HJ-NP-Z0-9]{40}$'),
  XTZ: new RegExp('^(tz|KT)[a-km-zA-HJ-NP-Z1-9]{34}$'),
  IOTA: new RegExp('^[A-Z0-9]{90}$'),
  VET: new RegExp('^0x[a-km-zA-HJ-NP-Z0-9]{40}$'),
  QTUM: new RegExp('^Q[a-km-zA-HJ-NP-Z1-9]{33}$'),
  ICX: new RegExp('^[a-km-zA-HJ-NP-Z0-9]{42}$'),
  DGB: new RegExp('^D[a-km-zA-HJ-NP-Z1-9]{33}$'),
  XZC: new RegExp('^[a-km-zA-HJ-NP-Z1-9]{34}$'),
  BURST: new RegExp('^BURST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{5}'),
  ATOM: new RegExp('^(cosmos)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$'),
  XEM: new RegExp('^N[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{39}$'),
  LSK: new RegExp('/^d{1,21}[L]$/'),
  ONG: new RegExp('^[a-zA-Z0-9]{34}$'),
  ONT: new RegExp('^[a-zA-Z0-9]{34}$'),
  ONE: new RegExp('^one[a-zA-Z0-9]{39}$'),
  SMART: new RegExp('^[a-zA-Z0-9]{34}$'),
  TPAY: new RegExp('^[a-zA-Z0-9]{34}$'),
  GRS: new RegExp('^[a-zA-Z0-9]{34}$'),
  BSV: new RegExp('^[a-zA-Z0-9]{34}$|^bitcoincash:[a-zA-Z0-9]{42}$'),
  TRX: new RegExp('^[a-zA-Z0-9]{34}$'),
  VTHO: new RegExp('^[a-zA-Z0-9]{42}$'),
  BCD: new RegExp('^[a-zA-Z0-9]{34}$'),
  BTT: new RegExp('^[a-zA-Z0-9]{34}$'),
  KIN: new RegExp('^[a-zA-Z0-9]{56}$'),
  RVN: new RegExp('^[a-zA-Z0-9]{34}$'),
  ARK: new RegExp('^[a-zA-Z0-9]{34}$'),
  XVG: new RegExp('^[a-zA-Z0-9]{34}$'),
  ALGO: new RegExp('^[a-zA-Z0-9]{58}$'),
  NEBL: new RegExp('^[a-zA-Z0-9]{34}$'),
  XPM: new RegExp('^[a-zA-Z0-9]{34}$')
};

export const isValidRecordKeyValue = (key, value) => {
  if (!value) {
    return true;
  }
  value = value.trim();
  if (value) {
    if (key === 'LTC' && value.startsWith('ltc1') && value.length === 43) {
      return true;
    } else if (keyValueRegexes[key] && !keyValueRegexes[key].test(value)) {
      return false;
    }
  }
  return true;
};

const UdRecordToLabelMap = {
  'ipfs.html.value': 'Ipfs Hash',
  'whois.email.value': 'Email',
  'whois.for_sale.value': 'Is For Sale?',
  'dweb.ipfs.hash': 'Ipfs Hash'
};

export const parseUDRecordToLabel = key => {
  if (key.startsWith('crypto')) {
    const labels = key.split('.');
    const ticker = labels[1];
    if (key.includes('version')) {
      const version = labels.splice(-2)[0];
      return `${ticker} - ${version} Address`;
    }
    return `${ticker} Address`;
  }
  return UdRecordToLabelMap[key];
}
