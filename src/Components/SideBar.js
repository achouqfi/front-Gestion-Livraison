import React, { Component } from 'react'
import { RiHome8Fill,RiStore2Fill,RiMessage2Fill,RiShoppingCart2Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FaHistory } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import {BiMoney} from 'react-icons/bi';
import {GiStorkDelivery} from 'react-icons/gi';
import '../Css/Style.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component {

    render() {
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
                                <CDBSidebarMenuItem ><span className="sideIcon"><RiHome8Fill/></span>Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/commande" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><GiStorkDelivery/></span>Commandes</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/livreur" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Livreurs</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/manager" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Managers</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/reslivraison" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Responsabe de livraison</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/vehicule" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><AiFillCar/></span>Vehicule</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/prime" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><BiMoney/></span>Prime</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/historique" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><FaHistory/></span>Historique</CDBSidebarMenuItem>
                            </NavLink>                            
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        )
    }
}

