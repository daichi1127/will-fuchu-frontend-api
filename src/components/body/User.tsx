function User(props: any) {
  const user = props.location.state;

  return (
    <div>
      <p>{user.user_name}</p>
    </div>
  )
}

export default User;
