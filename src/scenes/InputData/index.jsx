import React from 'react';
import JsonView from '@uiw/react-json-view';
import data from "../../Database/jsondata"

// const jsonObject = {
//   string: 'Lorem ipsum dolor sit amet',
//   integer: 42,
//   float: 114.514,
//   boolean: true,
//   null: null,
//   nestedObject: {
//     key: 'value',
//     array: [1, 2, 3],
//   },
// };

const customTheme = {
  '--w-rjv-font-family': 'monospace',
  '--w-rjv-color': '#9cdcfe',
  '--w-rjv-key-number': '#268bd2',
  '--w-rjv-key-string': '#9cdcfe',
  '--w-rjv-background-color': '#1e1e1e',
  '--w-rjv-line-color': '#36334280',
  '--w-rjv-arrow-color': '#838383',
  '--w-rjv-edit-color': 'var(--w-rjv-color)',
  '--w-rjv-info-color': '#9c9c9c7a',
  '--w-rjv-update-color': '#9cdcfe',
  '--w-rjv-copied-color': '#9cdcfe',
  '--w-rjv-copied-success-color': '#28a745',
  '--w-rjv-curlybraces-color': '#d4d4d4',
  '--w-rjv-colon-color': '#d4d4d4',
  '--w-rjv-brackets-color': '#d4d4d4',
  '--w-rjv-ellipsis-color': '#cb4b16',
  '--w-rjv-quotes-color': '#9cdcfe',
  '--w-rjv-quotes-string-color': '#ce9178',
  '--w-rjv-type-string-color': '#ce9178',
  '--w-rjv-type-int-color': '#b5cea8',
  '--w-rjv-type-float-color': '#b5cea8',
  '--w-rjv-type-bigint-color': '#b5cea8',
  '--w-rjv-type-boolean-color': '#569cd6',
  '--w-rjv-type-date-color': '#b5cea8',
  '--w-rjv-type-url-color': '#3b89cf',
  '--w-rjv-type-null-color': '#569cd6',
  '--w-rjv-type-nan-color': '#859900',
  '--w-rjv-type-undefined-color': '#569cd6',
};

export default function App() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto', backgroundColor: '#282c34', padding: '20px' }}>
      <JsonView
        value={data}
        keyName="root"
        style={customTheme}
        collapsed={false}
        displayDataTypes={false}
        indentWidth={4}
      />
    </div>
  );
}
