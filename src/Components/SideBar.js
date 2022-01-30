import React, { Component } from 'react'
import { RiHome8Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AiFillCar } from "react-icons/ai";
import {BiMoney} from 'react-icons/bi';
import {GiStorkDelivery} from 'react-icons/gi';
import '../Css/Style.css'
import { useCookies } from "react-cookie";
// import { useHistory } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default function SideBar(){
    const [cookies, setCookie,removeCookie] = useCookies();
    // const history = useHistory();

    function logout(){
        if (cookies.role === 'adminG') {
            removeCookie('role');
            window.location="/admin"
            // history.push('/admin')
        }else if(cookies.role === 'manager') {
            removeCookie('role');
            window.location="/RouteManager"
            // history.push('/RouteManager')
        }else if(cookies.role === 'resLivraison'){
            removeCookie('role');
            window.location="/RouteLivreur"
            // history.push('/RouteLivreur')
        }else if(cookies.role === 'resLivraison'){
            removeCookie('role');
            window.location="/RouteResLivraison"
            // history.push('/RouteResLivraison')
        }
    }

        return (
            <div
                style={{ display: 'flex', overflow: 'scroll initial', height:'100vh' }}
            >
                <CDBSidebar textColor="#fff" backgroundColor="#003f5c">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a
                            href="/"
                            className="text-decoration-none"
                            style={{ color: 'inherit' }}
                        >
                            Menu
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>              
                            <NavLink exact to="/" activeClassName="activeClicked" >
                                {cookies?.role === 'adminG' && ( <CDBSidebarMenuItem ><span className="sideIcon"><RiHome8Fill/></span>Home</CDBSidebarMenuItem>)}
                            </NavLink>

                            <NavLink exact to="/commande" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><GiStorkDelivery/></span>Commandes</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/livreur" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Livreurs</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/manager" activeClassName="activeClicked">
                                {cookies?.role === 'adminG' && (<CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Managers</CDBSidebarMenuItem>)}
                            </NavLink>
                            <NavLink exact to="/reslivraison" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Responsabe de livraison</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/vehicule" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><AiFillCar/></span>Vehicule</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/prime" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><BiMoney/></span>Prime</CDBSidebarMenuItem>
                            </NavLink  >
                            <CDBSidebarMenuItem onClick={(e)=>logout()} ><span  className="sideIcon"><ExitToAppIcon/></span>Logout</CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        )
}

