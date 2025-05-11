'use client';

const IPage = () => {
  const handleSetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
    const key = (e.target as HTMLFormElement).key.value;
    const value = (e.target as HTMLFormElement).value.value;
    document.cookie = `${key}=${value}; path=/; max-age=360000`; // 100 ساعت
  };

  return (
    <div>
      <h1>simple set cookie in client</h1>
      <form onSubmit={handleSetCookie}>
        <input type="text" name="key" placeholder='key' />
        <input type="text" name="value" placeholder='value' />
        <button type="submit">set cookie</button>
      </form>
    </div>
  );
};

export default IPage;
