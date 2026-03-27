import React from 'react';

export interface AdvanceContextType {
  qNumber: number;
  totalQ?: number;
  qNext?: number;
  infoQuestions?: number[];
}

const AdvanceContext = React.createContext<AdvanceContextType>({
  qNumber: 1,
});

export default AdvanceContext;
