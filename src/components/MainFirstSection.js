// Hooks

// Components

// Style

import "../style/all.css";

// Icons

export default function MainFirstSection({ children }) {
  const items = [{ id: 1, content: children }];

  const itemsList = items.map((item) => {
    return (
      <>
        <div key={item.id}>{item.content}</div>
      </>
    );
  });

  return <>{itemsList}</>;
}
