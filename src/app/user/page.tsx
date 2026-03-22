type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[] | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "shaodre" },
        { id: 2, name: "teste" },
      ]);
    }, 2000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  console.log(userList);

  return (
    <div className="mt-20 text-white">
      {userList?.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

export default function UserListPage() {
  return (
    <>
      <h2>User List</h2>
      <UserList />
    </>
  );
}
