import React from 'react';
import { useForm} from "react-hook-form";
import {ILoginFields} from "../../interface/interface";
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import loginImg from '../../assets/vector/loginImg.png'
import logo from '../../assets/vector/loginLogo.svg'




const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset


    } = useForm<ILoginFields>({mode: "onBlur"})
    return (
        <section className='login'>


            <form  action=""  className='login__form'>
                <div className="login__logo">

                    <img src={logo} alt=""/>


                    <h2 className='login__title'>Добро пожаловать!</h2>
                </div>

                <label  className='login__label'>
                    <p>Логин</p>

                    <Input placeholder='Введите логин'  {...register('email',{
                        required: 'Email is require field',
                        pattern: {
                            value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                            message: 'Please enter valid email',
                        },
                    })}  className='login__field' type="email"/>
                    {errors?.email && (<div style={{color: 'red'}}>{errors.email.message}</div>)}

                </label>
                <label  className='login__label'>

                    <p>Пароль</p>

                    <Input placeholder='Введите пароль' {...register("password")}  className='login__field' type="password"/>
                </label>
                <div className='login__bot'>

                    {/*<button className='login__btn' type={"submit"}>Войти</button>*/}
                    <Button className='login__btn'
                            size='md'
                            height='48px'
                            width='450px'
                            colorScheme='orange'

                    >
                        Button
                    </Button>


                </div>

            </form>

            <img style={{width:'700px'}} src={loginImg} alt=""/>
        </section>
    );
};

export default Login;
