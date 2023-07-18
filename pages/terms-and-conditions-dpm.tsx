import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { PageData } from "@/types/PageData"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "terms-and-conditions-dpm",
      "common",
    ])),
  },
})

const tosContent: PageData = {
  title: "pageTitle",
  date: "updatedAt",
  content: [
    { text: ["content01"] },
    { text: ["content02"] },
    { text: ["content03"] },
    { text: ["content04"] },
  ],
  sections: [
    {
      title: "listTitle01",
      content: [
        { text: ["listContent01a"] },
        { text: ["listContent01b"] },
        { text: ["listContent01c"] },
        { text: ["listContent01d"] },
      ],
    },
    {
      title: "listTitle02",
      content: [
        { text: ["listContent02a"] },
        {
          text: ["listContent02b"],
          points: [
            { text: ["listContent02b1"] },
            { text: ["listContent02b2"] },
          ],
        },
        {
          text: ["listContent02c"],
          points: [
            { text: ["listContent02c1"] },
            { text: ["listContent02c2"] },
          ],
        },
        { text: ["listContent02d"] },
        { text: ["listContent02e"] },
        { text: ["listContent02f"] },
      ],
    },
    {
      title: "listTitle03",
      content: [
        { text: ["listSubtitle03"] },
        { text: ["listContent03a"] },
        { text: ["listContent03b"] },
        { text: ["listContent03c"] },
        { text: ["listContent03d"] },
        { text: ["listContent03e"] },
        { text: ["listContent03f"] },
        { text: ["listContent03g"] },
        {
          text: ["listContent03h"],
          points: [
            { text: ["listContent03h1"] },
            { text: ["listContent03h2"] },
            { text: ["listContent03h3"] },
            { text: ["listContent03h4"] },
          ],
        },
        { text: ["listContent03i"] },
      ],
    },
    {
      title: "listTitle04",
      content: [
        {
          text: ["listContent04a"],
          points: [
            { text: ["listContent04a1"] },
            { text: ["listContent04a2"] },
            { text: ["listContent04a3"] },
            { text: ["listContent04a4"] },
            { text: ["listContent04a5"] },
            { text: ["listContent04a6"] },
            { text: ["listContent04a7"] },
            { text: ["listContent04a8"] },
            { text: ["listContent04a9"] },
            { text: ["listContent04a10"] },
            { text: ["listContent04a11"] },
            { text: ["listContent04a12"] },
            { text: ["listContent04a13"] },
            { text: ["listContent04a14"] },
            { text: ["listContent04a15"] },
          ],
        },
      ],
    },
    {
      title: "listTitle05",
      content: [
        {
          text: ["listContent05a"],
          points: [
            { text: ["listContent05a1"] },
            { text: ["listContent05a2"] },
            { text: ["listContent05a3"] },
          ],
        },
        { text: ["listContent05b"] },
      ],
    },
    {
      title: "listTitle06",
      content: [
        {
          text: ["listContent06a"],
          points: [
            { text: ["listContent06a1"] },
            { text: ["listContent06a2"] },
            { text: ["listContent06a3"] },
            { text: ["listContent06a4"] },
            { text: ["listContent06a5"] },
            { text: ["listContent06a6"] },
            { text: ["listContent06a7"] },
          ],
        },
      ],
    },
    {
      title: "listTitle07",
      content: [{ text: ["listContent07a"] }, { text: ["listContent07b"] }],
    },
    {
      title: "listTitle08",
      content: [
        { text: ["listContent08a"] },
        {
          text: ["listContent08b"],
          points: [
            { text: ["listContent08b1"] },
            { text: ["listContent08b2"] },
            { text: ["listContent08b3"] },
            { text: ["listContent08b4"] },
          ],
        },
        { text: ["listContent08c"] },
        { text: ["listContent08d"] },
      ],
    },
    {
      title: "listTitle09",
      content: [{ text: ["listContent09a"] }],
    },
    {
      title: "listTitle10",
      content: [{ text: ["listContent10a"] }, { text: ["listContent10b"] }],
    },
    {
      title: "listTitle11",
      content: [
        { text: ["listContent11a"] },
        { text: ["listContent11b"] },
        { text: ["listContent11c"] },
        { text: ["listContent11d"] },
        { text: ["listContent11e"] },
        { text: ["listContent11f"] },
      ],
    },
    {
      title: "listTitle12",
      content: [{ text: ["listContent12a"] }],
    },
    {
      title: "listTitle13",
      content: [{ text: ["listContent13a"] }, { text: ["listContent13b"] }],
    },
  ],
}

const TermsAndConditionsDPM = () => {
  const { t } = useTranslation("terms-and-conditions-dpm")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/terms-and-conditions-dpm"
    >
      <NestedList content={tosContent} t={t} />
    </MainLayout>
  )
}

export default TermsAndConditionsDPM
