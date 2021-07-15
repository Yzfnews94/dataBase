import React, { FormEvent } from 'react';
import { Button } from 'antd';

const LoginScreen =  () => {
  const handleSubmit = (event: FormEvent) => {
    console.log('我要提交相关的代码结果', event);
  };

   return (
     <form onClick={handleSubmit}>
       <div>
         <label htmlFor="useName">用户名</label>
         <input />
       </div>
       <div>
         <label htmlFor="password">密码</label>
         <input />
       </div>
       <Button type="primary">登录</Button>
     </form>
   )
};
export default LoginScreen;