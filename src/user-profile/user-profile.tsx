import { useState } from "react";
import Loader from "../loader/loader";
const url = `https://codeforces.com/api/user.status?from=1&handle=`

const fetchUserProfile = async (username:string, cb: any, setLoading: any) => {
  console.log('fetching');
  setLoading(true);
  window.localStorage.setItem('last-used-username', username);
  const mp: any = {};
  const response = await window.fetch(url + username);
  const result = await response.json();
  if (result?.status !== 'OK') {
    cb(mp);
    setLoading(false);
    window.localStorage.setItem('last-used-user', JSON.stringify(mp));
    return;
  }
  result?.result.forEach((r: any) => {
    if (r?.verdict === 'OK') {
      mp['http://codeforces.com/problemset/problem/' + r?.problem?.contestId + '/' + r?.problem?.index] = true;
      mp['https://codeforces.com/problemset/problem/' + r?.problem?.contestId + '/' + r?.problem?.index] = true;
    }
  });
  cb(mp);
  window.localStorage.setItem('last-used-user', JSON.stringify(mp));
  setLoading(false);
};

const UserProfile = (props: any) => {
  const [username, setUsername] = useState(window.localStorage.getItem('last-used-username') || '');
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
        <input 
          value={username}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="username" type="text" 
          placeholder="Username" 
          onChange = {(e: any) => setUsername(e.target.value)}>

          </input>
        </div>
      <button 
        disabled={loading}
        className={`${loading ? 'bg-gray-500 cursor-wait' : 'bg-blue-500 hover:bg-blue-700' }  text-white font-bold py-2 px-4 rounded my-4`} 
        onClick = {async() => await fetchUserProfile(username, props.setUser, setLoading)}>
          Fetch
      </button>
      <div className="flex justify-center mb-4">
        {loading && <Loader></Loader>}
      </div>
    </div>
  )
};
export default UserProfile;