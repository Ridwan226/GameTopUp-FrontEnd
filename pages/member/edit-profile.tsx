import {useEffect, useState} from 'react';
import Image from 'next/image';
import TextInput from '../../components/atoms/TextInput';
import SideBar from '../../components/organisms/SideBar';
import Cookies from 'js-cookie';
import {JwtPayloadTypes, UserTypes} from '../../services/datatypes';
import jwtDecode from 'jwt-decode';
import {updateProfile} from '../../services/member';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
export default function EditProfile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE2;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append('image', user.avatar);
    data.append('name', user.name);
    const response = await updateProfile(data);
    if (response.error === true) {
      toast.error(response.message);
    } else {
      toast.success('Terupdate');
      router.push('/sign-in');
      Cookies.remove('token');
    }
  };

  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20"></div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width="90"
                        height="90"
                        className="avatar img-fluid"
                        style={{borderRadius: '100%'}}
                      />
                    ) : (
                      <img
                        src={user.avatar}
                        width="90"
                        height="90"
                        className="avatar img-fluid"
                        style={{borderRadius: '100%'}}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <TextInput
                  label="Full Name"
                  value={user.name}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <TextInput label=" Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30">
                <TextInput label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  onClick={onSubmit}
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill">
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
