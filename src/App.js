import React from 'react';
import './App.css';

let data = {
  label: 'Label 1',
  checked: false,
  childNodes: [
    {
      label: 'Label 2',
      checked: false
    },
    {
      label: 'Label 3',
      checked: false
    },
    {
      label: 'Label 4',
      checked: false
    },
    {
      label: 'Label 5',
      checked: false
    },
    {
      label: 'Label 6',
      checked: false
    },
    {
      label: 'Label 7',
      checked: false
    },
    {
      label: 'Label 8',
      checked: false
    },
    {
      label: 'Label 9',
      checked: false
    },
    {
      label: 'Label 10',
      checked: false,
      childNodes: [
        {
          label: 'Label 11',
          checked: false
        },
        {
          label: 'Label 12',
          checked: false
        },
        {
          label: 'Label 13',
          checked: false
        },
        {
          label: 'Label 1',
          checked: false,
          childNodes: [
            {
              label: 'Label 2',
              checked: false
            },
            {
              label: 'Label 3',
              checked: false
            },
            {
              label: 'Label 4',
              checked: false
            },
            {
              label: 'Label 5',
              checked: false
            },
            {
              label: 'Label 6',
              checked: false
            },
            {
              label: 'Label 7',
              checked: false
            },
            {
              label: 'Label 8',
              checked: false
            },
            {
              label: 'Label 9',
              checked: false
            },
            {
              label: 'Label 10',
              checked: false,
              childNodes: [
                {
                  label: 'Label 11',
                  checked: false
                },
                {
                  label: 'Label 12',
                  checked: false
                },
                {
                  label: 'Label 13',
                  checked: false
                },
                {
                  label: 'Label 1',
                  checked: false,
                  childNodes: [
                    {
                      label: 'Label 2',
                      checked: false
                    },
                    {
                      label: 'Label 3',
                      checked: false
                    },
                    {
                      label: 'Label 4',
                      checked: false
                    },
                    {
                      label: 'Label 5',
                      checked: false
                    },
                    {
                      label: 'Label 6',
                      checked: false
                    },
                    {
                      label: 'Label 7',
                      checked: false
                    },
                    {
                      label: 'Label 8',
                      checked: false
                    },
                    {
                      label: 'Label 9',
                      checked: false
                    },
                    {
                      label: 'Label 10',
                      checked: false,
                      childNodes: [
                        {
                          label: 'Label 11',
                          checked: false
                        },
                        {
                          label: 'Label 12',
                          checked: false
                        },
                        {
                          label: 'Label 13',
                          checked: false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const Node = ({ label, checked, childNodes, onCheckedChange }) => {
  const handleCheckedChange = event => {
    onCheckedChange({ checked: event.target.checked, label });
  };

  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" onChange={handleCheckedChange} /> {label}
        </label>
        <ul>
          {childNodes &&
            childNodes.length &&
            childNodes.map(child => (
              <li key={child.label}>
                <Node {...child} onCheckedChange={onCheckedChange} />
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};

const changeCheckedInTree = ({ tree, label, checked }) => {
  return {
    ...tree,
    checked: tree.label === label ? checked : tree.checked,
    childNodes:
      tree.childNodes &&
      tree.childNodes.map(childNode =>
        changeCheckedInTree({ tree: childNode, label, checked })
      )
  };
};

const App = () => {
  const handleCheckedChange = ({ checked, label }) => {
    data = changeCheckedInTree({ tree: data, label, checked });
  };

  const handleShowIt = () => {
    console.warn({ data });
  };

  return (
    <div>
      <Node {...data} onCheckedChange={handleCheckedChange} />
      <p>
        <button type="button" onClick={handleShowIt}>
          Show it
        </button>
      </p>
    </div>
  );
};

export default App;
