import React from 'react';
export interface TabItemProps {
  children: React.ReactNode;
  onClick?: () => void;

}
export const TabItem = (props: TabItemProps) => {
  function onClick(){
    props.onClick();
    
  }
  return (
    <div className="tab-item" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
