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
    <div>
    <span>Username:</span>
    <input placeholder="Enter Username" onChange = {(e: any) => setUsername(e.target.value)}></input>
    <button onClick = {async() => await fetchUserProfile(username, props.setUser)}>Fetch</button>
    </div>
  )
};
export default UserProfile;