import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { PageData } from "@/types/PageData"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "terms-and-conditions",
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
  ],
  sections: [
    {
      title: "listTitle01",
      content: [{ text: ["listContent01a"] }, { text: ["listContent01b"] }],
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
        { text: ["listContent02g"] },
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
        { text: ["listContent03h"] },
        { text: ["listContent03i"] },
        { text: ["listContent03j"] },
        { text: ["listContent03k"] },
        {
          text: ["listContent03l"],
          points: [
            { text: ["listContent03l1"] },
            { text: ["listContent03l2"] },
            { text: ["listContent03l3"] },
            { text: ["listContent03l4"] },
          ],
          pointsFooter: ["listContent03l4Description"],
        },
        { text: ["listContent03m"] },
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
          ],
        },
        {
          text: ["listContent06b"],
          points: [
            { text: ["listContent06b1"] },
            { text: ["listContent06b2"] },
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
      content: [{ text: ["listContent08a"] }, { text: ["listContent08b"] }],
    },
    {
      title: "listTitle09",
      content: [
        { text: ["listContent09a"] },
        {
          text: ["listContent09b"],
          points: [
            { text: ["listContent09b1"] },
            { text: ["listContent09b2"] },
            { text: ["listContent09b3"] },
            { text: ["listContent09b4"] },
          ],
        },
        { text: ["listContent09c"] },
        { text: ["listContent09d"] },
      ],
    },
    {
      title: "listTitle10",
      content: [{ text: ["listContent10a"] }, { text: ["listContent10b"] }],
    },
    {
      title: "listTitle11",
      content: [
        { text: ["listContent11a"] },
        {
          text: ["listContent11b"],
          points: [
            { text: ["listContent11b1"] },
            { text: ["listContent11b2"] },
          ],
        },
        { text: ["listContent11c"] },
      ],
    },
    {
      title: "listTitle12",
      content: [{ text: ["listContent12a"] }, { text: ["listContent12b"] }],
    },
    {
      title: "listTitle13",
      content: [
        { text: ["listContent13a"] },
        { text: ["listContent13b"] },
        { text: ["listContent13c"] },
        { text: ["listContent13d"] },
        { text: ["listContent13e"] },
        { text: ["listContent13f"] },
      ],
    },
    {
      title: "listTitle14",
      content: [{ text: ["listContent14a"] }],
    },
    {
      title: "listTitle15",
      content: [{ text: ["listContent15a"] }, { text: ["listContent15b"] }],
    },
  ],
}

const TermsAndConditions = () => {
  const { t } = useTranslation("terms-and-conditions")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/terms-and-conditions"
    >
      <NestedList content={tosContent} t={t} />
    </MainLayout>
  )
}

export default TermsAndConditions
