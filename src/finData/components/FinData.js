import StandardizeData from '../general/StandardizeData';
import RawData from '../../general/static-2-fin-data.json';

const FinData = () => {
  const companyKeys = [];
  const dateKeys = [];
  const incomeStatementKeys = [];
  const BalanceSheetKeys=[];

  const financialsArray = StandardizeData(RawData)
  financialsArray.map((financialPeriod) => {
    console.log(financialPeriod)
  })
}

for (x in person) {
  console.log(x)
  console.log(person[x])
 }