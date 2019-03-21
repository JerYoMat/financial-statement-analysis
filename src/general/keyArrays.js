
//Company Data
const companyKeys = ['companyname', 'primarysymbol', 'primaryexchange', 'siccode', 'sicdescription'];

const dateKeys = ['receiveddate', 'periodlengthcode', 'periodlength', 'periodenddate', 'fiscalyear','fiscalquarter'];

const periodenddate = ['periodenddate'];

const coreIsKeys = ['totalrevenue', 'ebit', 'netincome'];

const incomeKeys = ['totalrevenue', 'costofrevenue','grossprofit', 'researchdevelopmentexpense', 'ebit', 'incomebeforetaxes', 'netincome'];

const currentAssetKeys = ['cashandcashequivalents', 'cashcashequivalentsandshortterminvestments', 'othercurrentassets','inventoriesnet', 'totalcurrentassets']

const termAssetKeys = ['intangibleassets', 'propertyplantequipmentnet', 'goodwill', 'otherassets', 'totalassets']

const currentLiabilityKeys = ['othercurrentliabilities', 'totalshorttermdebt', 'totalcurrentliabilities']

const termLiabilityKeys = [ 'otherliabilities', 'totallongtermdebt', 'totalliabilities']

const equityKeys = ['retainedearnings',
'totalstockholdersequity']

const assetSideKeys = [...currentAssetKeys, ...termAssetKeys]
const liabilityAndEquiySideKeys = [...currentLiabilityKeys, ...termLiabilityKeys, ...equityKeys]

const balanceKeys = [...currentAssetKeys, ...termAssetKeys, ...currentLiabilityKeys, ...termLiabilityKeys, ...equityKeys]

const cashKeys = ['cashfromoperatingactivities','cashfrominvestingactivities', 'cashfromfinancingactivities', 'capitalexpenditures', 'cfdepreciationamortization', 'netchangeincash'];

const submissionKeys = ['formtype', 'audited', 'original', 'amended', 'preliminary', 'currencycode', 'crosscalculated', 'usdconversionrate'];

const financialPeriodKeys = ['periodenddate', ...incomeKeys, ...balanceKeys, ...cashKeys]

const altmanKeys = ['totalcurrentassets', 'totalcurrentliabilities', 'totalassets', 'retainedearnings', 'ebit', 'totalliabilities', 'marketcap']

export { companyKeys, dateKeys, incomeKeys, currentAssetKeys, termAssetKeys, currentLiabilityKeys, termLiabilityKeys, equityKeys, balanceKeys, cashKeys, submissionKeys, altmanKeys, assetSideKeys, liabilityAndEquiySideKeys, financialPeriodKeys, coreIsKeys, periodenddate };