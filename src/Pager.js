import React from 'react';

export default function Pager({ pages, currentPage, onNext }) {
  const isNextDisabled = pages <= currentPage;
  return <NextPageButton onClick={onNext} disabled={isNextDisabled} />;
}

export function NextPageButton({ onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled}>Next</button>;
}
