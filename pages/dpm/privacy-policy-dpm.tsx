import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { PageData } from "@/types/PageData"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy-policy-dpm", "common"])),
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
      content: [
        { text: ["listContent01a"] },
        { text: ["listContent01b"] },
        { text: ["listContent01c"] },
      ],
    },
    {
      title: "listTitle02",
      content: [{ text: ["listContent02a"] }],
      subsections: [
        {
          title: "listTitle03",
          content: [
            {
              text: ["listContent03a"],
              points: [
                {
                  text: ["listContent03a1"],
                  points: [{ text: ["listContent03a1i"] }],
                },
                {
                  text: ["listContent03a2"],
                  points: [{ text: ["listContent03a2i"] }],
                },
                { text: ["listContent03a3"] },
              ],
            },
            { text: ["listContent03b"] },
            { text: ["listContent03c"] },
            { text: ["listContent03d"] },
          ],
        },
        {
          title: "listTitle04",
          content: [
            {
              points: [
                { text: ["listContent04a1"] },
                { text: ["listContent04a2"] },
              ],
            },
            { text: ["listContent04b"] },
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
            {
              text: ["listContent05b"],
              points: [
                { text: ["listContent05b1"] },
                { text: ["listContent05b2"] },
                { text: ["listContent05b3"] },
              ],
            },
            {
              text: ["listContent05c"],
              points: [
                { text: ["listContent05c1"] },
                { text: ["listContent05c2"] },
                { text: ["listContent05c3"] },
                { text: ["listContent05c4"] },
                { text: ["listContent05c5"] },
              ],
            },
            { text: ["listContent05d"] },
          ],
        },
        {
          title: "listTitle06",
          content: [
            { text: ["listContent06a"] },
            { text: ["listContent06b"] },
            { text: ["listContent06c"] },
            { text: ["listContent06d"] },
            { text: ["listContent06e"] },
          ],
        },
        {
          title: "listTitle07",
          content: [
            { text: ["listContent07a"] },
            { text: ["listContent07b"] },
            { text: ["listContent07c"] },
            { text: ["listContent07d"] },
          ],
        },
        {
          title: "listTitle08",
          content: [{ text: ["listContent08a"] }, { text: ["listContent08b"] }],
        },
        {
          title: "listTitle09",
          content: [{ text: ["listContent09a"] }, { text: ["listContent09b"] }],
        },
      ],
    },
  ],
}

const PrivacyPolicyDPM = () => {
  const { t } = useTranslation("privacy-policy-dpm")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/dpm/privacy-policy-dpm"
    >
      <NestedList content={privacyPolicyContent} t={t} />
    </MainLayout>
  )
}

export default PrivacyPolicyDPM
