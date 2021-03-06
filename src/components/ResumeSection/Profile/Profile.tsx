import { usePersonalStore } from '../../../store';
import RichTextEditor from '../../RichTextEditor';

function Profile() {
  const [updatePersonal, profile] = usePersonalStore((state) => [
    state.setStore,
    state.profile,
  ]);
  return (
    <RichTextEditor storeFunc={updatePersonal} name="profile" value={profile} />
  );
}

export default Profile;
