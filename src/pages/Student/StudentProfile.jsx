import { capitalCase } from "change-case";

import { useState } from "react";
// @mui
import { Container, Tab, Box, Tabs } from "@mui/material";
// routes

// hooks
import useTabs from "../../hooks/useTabs";

// components
import Page from "../../components/Page";
import Iconify from "../../components/Iconify";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
// sections

import React from "react";
import StudentDetailsForm from "./StudentDetailsForm";
import AdmissionDetails from "./AdmissionDetails"
import LocalGuardianForm from "./LocalGuardianForm";
import ParentsDetails from "./ParentsDetails";
import ContactDetails from "./ContactDetails";

// ----------------------------------------------------------------------

export default function StudentProfile() {
  const { currentTab, onChangeTab } = useTabs("Student Details");
  const ACCOUNT_TABS = [
    {
      value: "Student Details",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <StudentDetailsForm />,
    },
    {
      value: "Guardian Details",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <LocalGuardianForm />,
    },
    {
      value: "Parent Details",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <ParentsDetails />,
    },
    {
      value: "Contact Details",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <ContactDetails />,
    },
    {
      value: "Admission Details",
      icon: <Iconify icon={"ic:round-account-box"} width={20} height={20} />,
      component: <AdmissionDetails/>,
    },
  ];

  return (
    <Page title="Stduent Profile">
      <Container maxWidth="lg">
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={onChangeTab}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={tab.value}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>

        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
