function User({ displayName,name }) {
//   const name = "Kushal";
  return (
    <div>
      <button onClick={() => displayName(name)}>Display User</button>
    </div>
  );
}
export default User;
