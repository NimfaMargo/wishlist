import React, { useState } from 'react';
import classes from './Layout.module.css';
import Button from "../../components/Button";
import Card from "../../components/Card"

const Layout = () => {
  return (
    <div className={classes.Layout}>
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
  );
}

export default Layout;
