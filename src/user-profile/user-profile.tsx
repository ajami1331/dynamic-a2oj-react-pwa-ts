import { useState } from "react";
const url = `https://codeforces.com/api/user.status?from=1&handle=`

const fetchUserProfile = async (username:string, cb: any) => {
  const mp: any = {};
  const response = await window.fetch(url + username);
  const result = await response.json();
  if (result?.status !== 'OK') {
    cb(mp);
    return;
  }
  result?.result.forEach((r: any) => {
    if (r?.verdict === 'OK') {
      mp['http://codeforces.com/problemset/problem/' + r?.problem?.contestId + '/' + r?.problem?.index] = true;
      mp['https://codeforces.com/problemset/problem/' + r?.problem?.contestId + '/' + r?.problem?.index] = true;
    }
  });
  cb(mp);
};

const UserProfile = (props: any) => {
  const [username, setUsername] = useState('');
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="username" type="text" 
          placeholder="Username" 
          onChange = {(e: any) => setUsername(e.target.value)}>

          </input>
        </div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick = {async() => await fetchUserProfile(username, props.setUser)}>
          Fetch
      </button>
    </div>
  )
};
export default UserProfile;