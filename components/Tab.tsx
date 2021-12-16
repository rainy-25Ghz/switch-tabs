import React from 'react';
export interface TabProps {
  children: React.ReactNode;
}
export const Tab = (props: TabProps) => {
  return (
    <div className="tab">
      {props.children}
      <div className="selected-tab" />
    </div>
  );
};
