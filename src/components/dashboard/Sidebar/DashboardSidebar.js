import React from "react";
import { Divider, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import IcAmado from "../../../asset/ic_amado.png";

import {
  PieChartOutlined,
  TeamOutlined,
  PushpinOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

export const DashboardSidebar = () => {
  let location = useLocation();

  const routeKey = {
    "/statistik": "1",
    "/patients": "3",
    "/lokasi-pasien": "4",
    "/kontak-erat": "5",
    "/rekam-medis": "6",
    "/rekam-medis/": "6",
    "/oksigen": "7",
    "/ruangan": "8",
    "/profil": "9",
    "/konfirmasi": "2",
  };

  const keySelected = routeKey[`${location.pathname}`];


  return (
    <Sider className="sidebar" style={{ overflow: "scroll" }}>
      <div className="logo">
        <h1>Amado</h1>
        <img src={IcAmado} alt="ucib amado" />
      </div>

      <Menu theme="light" mode="inline" selectedKeys={`${keySelected}`}>
        <p className="item-divider">Pasien</p>
        <Divider className="menu-divider" />
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/statistik">Statistik</Link>
        </Menu.Item>
        {/* <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/konfirmasi">Konfrimasi Pasien</Link>
        </Menu.Item> */}
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <Link to="/patients">Daftar Pasien</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PushpinOutlined />}>
          <Link to="/lokasi-pasien">Lokasi Pasien</Link>
        </Menu.Item>
        {/* <Menu.Item key="5" icon={<PushpinOutlined />}>
          <Link to="/kontak-erat">Lokasi Kontak Erat</Link>
        </Menu.Item> */}
        <Menu.Item key="6" icon={<FileTextOutlined />}>
          <Link to="/rekam-medis">Rekam Medis</Link>
        </Menu.Item>

        {/* <p className="item-divider">Rumah Sakit</p>
        <Divider className="menu-divider" />
        <Menu.Item key="7" icon={<FileTextOutlined />}>
          <Link to="/oksigen">Stok Oximeter</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="8" icon={<FileTextOutlined />}>
          <Link to="/ruangan">Ruangan</Link>
        </Menu.Item> */}

        <p className="item-divider">Lainnya</p>
        <Divider className="menu-divider" />
        <Menu.Item key="9" icon={<FileTextOutlined />}>
          <Link to="/profil">Profil</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
