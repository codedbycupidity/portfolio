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
      fontSize: '22px',
      minWidth: '44px',
      minHeight: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Expand 
        duration={750} 
        toggled={checked}
        toggle={() => onChange(!checked)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        style={{ outline: 'none' }}
        aria-label={`Switch to ${checked ? 'light' : 'dark'} mode`}
        title={`Switch to ${checked ? 'light' : 'dark'} mode`}
      />
    </div>
  );
};

export default DarkModeToggle;