import React from 'react';
import 'hoc/Layout/Layout.scss';
import Button from "components/Button";
import Card from "components/Card"

const Layout = () => {
  return (
    <div className='layout'>
        <div className='layout-main'>
            <Button>Добавить желание</Button>
            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>

            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>
            <Card text="букет" url="url" price='1000'/>
        </div>
    </div>
  );
}

export default Layout;
