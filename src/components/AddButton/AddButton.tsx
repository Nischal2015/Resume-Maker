import { PlusIcon, ChevronDownIcon } from '@heroicons/react/solid';
import styles from './AddButton.module.css';

function AddButton({
  text,
  onClick,
  state,
}: {
  text?: string;
  onClick?: () => void;
  state: boolean;
}): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      <div className={styles.buttonText}>
        {state ? (
          <ChevronDownIcon height={24} width={24} />
        ) : (
          <PlusIcon height={24} width={24} />
        )}
        {text && <span>{text}</span>}
      </div>
    </button>
  );
}

export default AddButton;
