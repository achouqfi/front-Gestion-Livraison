import React, { Component } from 'react'
import { RiHome8Fill,RiStore2Fill,RiMessage2Fill,RiShoppingCart2Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FaHistory } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import '../css/Style.css'
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
                style={{ display: 'flex', overflow: 'scroll initial' }}
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
                                <CDBSidebarMenuItem><span className="sideIcon"><RiMessage2Fill/></span>Commandes</CDBSidebarMenuItem>
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
                                <CDBSidebarMenuItem ><span className="sideIcon"><VscFeedback/></span>Vehicule</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/historique" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><FaHistory/></span>Historique</CDBSidebarMenuItem>
                            </NavLink>                            
                            <NavLink exact to="/prime" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><FaHistory/></span>Prime</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        )
    }
}

