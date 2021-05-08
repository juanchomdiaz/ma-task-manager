const Topbar = ({ pageTitle }) => {
  return (
    <div class="d-flex">
      <div class="p-2 flex-grow-1">
        <h1>{pageTitle}</h1>
      </div>
      <div class="p-2">Search</div>
      <div class="p-2">Notifications</div>
      <div class="p-2">Logged in user</div>
    </div>
  );
};

export default Topbar;
