import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { PageData } from "@/types/PageData"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy-policy", "common"])),
  },
})

const privacyPolicyContent: PageData = {
  title: "pageTitle",
  date: "updatedAt",
  content: [
    { text: ["content01"] },
    { text: ["content02"] },
    { text: ["content03"] },
    { text: ["content04"] },
    { text: ["content05"] },
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
            {
              text: ["listContent02b01"],
              points: [
                { text: ["listContent02b01i"] },
                { text: ["listContent02b01ii"] },
                { text: ["listContent02b01iii"] },
                { text: ["listContent02b01iv"] },
                { text: ["listContent02b01v"] },
              ],
            },
            {
              text: ["listContent02b02"],
              points: [
                { text: ["listContent02b02i"] },
                { text: ["listContent02b02ii"] },
                { text: ["listContent02b02iii"] },
              ],
            },
          ],
        },
        { text: ["listContent02c"] },
        { text: ["listContent02d"] },
        { text: ["listContent02e"] },
      ],
    },
    {
      title: "listTitle03",
      content: [
        {
          text: ["listContent03a"],
          points: [
            { text: ["listContent03a1"] },
            { text: ["listContent03a2"] },
            { text: ["listContent03a3"] },
            { text: ["listContent03a4"] },
            { text: ["listContent03a5"] },
          ],
        },
        {
          text: ["listContent03b"],
          points: [
            { text: ["listContent03b1"] },
            { text: ["listContent03b2"] },
            { text: ["listContent03b3"] },
            { text: ["listContent03b4"] },
            { text: ["listContent03b5"] },
          ],
        },
        { text: ["listContent03c"] },
      ],
    },
    {
      title: "listTitle04",
      content: [
        { text: ["listContent04a"] },
        {
          text: ["listContent04b"],
          points: [
            { text: ["listContent04b1"] },
            { text: ["listContent04b2"] },
            { text: ["listContent04b3"] },
            { text: ["listContent04b4"] },
            { text: ["listContent04b5"] },
            { text: ["listContent04b6"] },
          ],
        },
        { text: ["listContent04c"] },
      ],
    },
    {
      title: "listTitle05",
      content: [
        { text: ["listContent05a"] },
        { text: ["listContent05b"] },
        { text: ["listContent05c"] },
        { text: ["listContent05d"] },
        { text: ["listContent05e"] },
      ],
    },
    {
      title: "listTitle06",
      content: [{ text: ["listContent06a"] }],
    },
    {
      title: "listTitle07",
      content: [{ text: ["listContent07a"] }, { text: ["listContent07b"] }],
    },
    {
      title: "listTitle08",
      content: [
        { text: ["listContent08a"] },
        { text: ["listContent08b"] },
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
      content: [{ text: ["listContent10a"] }],
    },
  ],
}

const Privacy = () => {
  const { t } = useTranslation("privacy-policy")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/privacy-policy"
    >
      <NestedList content={privacyPolicyContent} t={t} />
    </MainLayout>
  )
}

export default Privacy
