import React from 'react';
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

interface DarkModeToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ checked, onChange }) => {
  return (
    <div style={{ 
      color: checked ? '#EABEC3' : '#C88B95',
      fontSize: '22px'
    }}>
      <Expand 
        duration={750} 
        toggled={checked}
        toggle={() => onChange(!checked)}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        style={{ outline: 'none' }}
      />
    </div>
  );
};

export default DarkModeToggle;