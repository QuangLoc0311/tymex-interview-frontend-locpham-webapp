import { FilterSection } from 'src/pages/Products/components/FilterSection/FilterSection';
import { mount } from '@cypress/react18';
import { MetaType } from 'src/pages/Products/components/types';

type TDataTest = {
  meta: MetaType;
};

const dataTest: TDataTest = {
  meta: {
    search: 'Assassin',
    category: 'Mythic',
    tier: 'Premium',
    theme: 'Halloween',
    sortBy: ['price', 'createdAt'],
    sortDirection: ['desc', 'asc'],
  },
};

describe('Filter Section', () => {
  it('contains all the required filter', () => {
    mount(<FilterSection meta={dataTest.meta} />);
  });
});
