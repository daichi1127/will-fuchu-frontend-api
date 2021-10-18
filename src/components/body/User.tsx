function User(props: any) {
  const user = props.location.state;

  console.log(user);
  return (
    <div>
      <p>{user.user_name}</p>
    </div>
  )
}

export default User;
