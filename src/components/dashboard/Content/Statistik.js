import React, { useEffect } from "react";
import "./statistik.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col, Card, Layout } from "antd";
import icBed from "../../../asset/ic_dashboard/ic_bed_dashboard.png";
import icCloseContact from "../../../asset/ic_dashboard/ic_close_contact.png";
import icMedicalRecord from "../../../asset/ic_dashboard/ic_record_dashboard.png";
import { CurrentMonitoringList } from "../Table/CurrentMonitoringList";
import { CurrentStatus } from "../Table/CurrentStatus";
import { useDispatch, useSelector } from "react-redux";
import { getCountFirst} from "./statistik/api";

export const Statistik = () => {
  const dispatch = useDispatch();
  const countData = useSelector((state) => state.statistik.counts);

  useEffect(() => {
    dispatch(getCountFirst());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Row
        justify="center"
        className="patient-stat"
        style={{ height: "100%" }}
        data-aos="fade-up"
      >
        <Col span={8} className="card-center">
          <div className="site-card-border-less-wrapper">
            <Card className="card-stat" bordered={true} style={{ width: 300 }}>
              <img src={icBed} alt="" />
              <div className="first-row-desc">
                <h3>{countData ? countData.total_pasien : 0}</h3>
                <p>Pasien</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col span={8} className="card-center">
          <div className="site-card-border-less-wrapper">
            <Card bordered={true} style={{ width: 300 }}>
              <img src={icCloseContact} alt="" />
              <div className="first-row-desc">
                <h3>{countData ? countData.total_kontak_erat : 0}</h3>
                <p>Kontak Erat Pasien</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col span={8} className="card-center">
          <div className="site-card-border-less-wrapper">
            <Card bordered={true} style={{ width: 300 }}>
              <img src={icMedicalRecord} alt="" />
              <div className="first-row-desc">
                <h3>{countData ? countData.total_rekam_medis : 0}</h3>
                <p>Rekam Medis Pasien</p>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row
        justify="start"
        className="patient-stat"
        style={{ height: "100%", marginTop: "30px", marginLeft: '43px' }}
        data-aos="fade-up"
      >
        <Col span={12} className="card-center">
          <CurrentMonitoringList />
        </Col>
        <Col span={11} className="card-center">
          {/* <CurrentStatus /> */}
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};
