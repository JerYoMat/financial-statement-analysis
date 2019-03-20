
//Company Data
const companyKeys = ['companyname', 'primarysymbol', 'primaryexchange', 'siccode', 'sicdescription'];

const DateKeys = ['receiveddate', 'periodlengthcode', 'periodlength', 'periodenddate', 'fiscalyear','fiscalquarter'];

const IncomeKeys = ['totalrevenue', 'costofrevenue','grossprofit', 'researchdevelopmentexpense', 'ebit', 'incomebeforetaxes', 'netincome'];

const BalanceKeys = ['cashandcashequivalents', 'cashcashequivalentsandshortterminvestments', 'othercurrentassets','inventoriesnet', 'totalcurrentassets', 'intangibleassets', 'propertyplantequipmentnet', 'goodwill', 'otherassets', 'totalassets', 'othercurrentliabilities', 'totalshorttermdebt', 'totalcurrentliabilities', 'otherliabilities', 'totallongtermdebt', 'totalliabilities', 'retainedearnings',
'totalstockholdersequity']

const cashKeys = ['cashfromoperatingactivities','cashfrominvestingactivities', 'cashfromfinancingactivities', 'capitalexpenditures', 'cfdepreciationamortization', 'netchangeincash'];

const submissionKeys = ['formtype', 'audited', 'original', 'amended', 'preliminary', 'currencycode', 'crosscalculated', 'usdconversionrate'];


const altmanKeys = ['totalcurrentassets', 'totalcurrentliabilities', 'totalassets', 'retainedearnings', 'ebit', 'totalliabilities']

export { companyKeys, DateKeys, IncomeKeys, BalanceKeys, cashKeys, submissionKeys, altmanKeys };