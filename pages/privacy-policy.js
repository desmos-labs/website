import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/list-nested"
import MainLayout from "@/layouts/main"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy-policy", "common"])),
  },
})

function PrivacyPolicy() {
  const { t } = useTranslation("privacy-policy")

  const content = {
    title: "pageTitle",
    date: "updatedAt",
    description: "content",
    sections: [
      {
        title: "listTitle01",
        description: null,
        subsections: [
          {
            content: "listContent01a",
          },
          {
            content: "listContent01b",
          },
        ],
      },
      {
        title: "listTitle02",
        description: null,
        subsections: [
          {
            content: "listContent02a",
          },
          {
            content: "listContent02b",
            points: [
              {
                content: "listContent02b01",
                subpoints: [
                  { content: "listContent02b01i" },
                  { content: "listContent02b01ii" },
                  { content: "listContent02b01iii" },
                  { content: "listContent02b01iv" },
                  { content: "listContent02b01v" },
                ],
              },
              {
                content: "listContent02b02",
                subpoints: [
                  { content: "listContent02b02i" },
                  { content: "listContent02b02ii" },
                  { content: "listContent02b02iii" },
                ],
              },
            ],
          },
          {
            content: "listContent02c",
          },
          {
            content: "listContent02d",
          },
          {
            content: "listContent02e",
          },
        ],
      },
      {
        title: "listTitle03",
        description: null,
        subsections: [
          {
            content: "listContent03a",
            points: [
              { content: "listContent03a1" },
              { content: "listContent03a2" },
              { content: "listContent03a3" },
              { content: "listContent03a4" },
              { content: "listContent03a5" },
            ],
          },
          {
            content: "listContent03b",
            points: [
              { content: "listContent03b1" },
              { content: "listContent03b2" },
              { content: "listContent03b3" },
              { content: "listContent03b4" },
              { content: "listContent03b5" },
            ],
          },
          { content: "listContent03c" },
        ],
      },
      {
        title: "listTitle04",
        description: null,
        subsections: [
          {
            content: "listContent04a",
          },
          {
            content: "listContent04b",
            points: [
              { content: "listContent04b1" },
              { content: "listContent04b2" },
              { content: "listContent04b3" },
              { content: "listContent04b4" },
              { content: "listContent04b5" },
              { content: "listContent04b6" },
            ],
          },
          { content: "listContent04c" },
        ],
      },
      {
        title: "listTitle05",
        description: null,
        subsections: [
          {
            content: "listContent05a",
          },
          {
            content: "listContent05b",
          },
          { content: "listContent05c" },
          {
            content: "listContent05d",
          },
          {
            content: "listContent05e",
          },
        ],
      },
      {
        title: "listTitle06",
        description: null,
        subsections: [
          {
            content: "listContent06a",
          },
        ],
      },
      {
        title: "listTitle07",
        description: null,
        subsections: [
          {
            content: "listContent07a",
          },
          {
            content: "listContent07b",
          },
        ],
      },
      {
        title: "listTitle08",
        description: null,
        subsections: [
          {
            content: "listContent08a",
          },
          {
            content: "listContent08b",
          },
          {
            content: "listContent08c",
          },
          {
            content: "listContent08d",
          },
        ],
      },
      {
        title: "listTitle09",
        description: null,
        subsections: [
          {
            pointsHeader: "listContent09a",
            points: [],
          },
        ],
      },
      {
        title: "listTitle10",
        description: null,
        subsections: [
          {
            pointsHeader: "listContent10a",
            points: [],
          },
        ],
      },
    ],
  }

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/privacy-policy"
    >
      <NestedList content={content} t={t} />
    </MainLayout>
  )
}

export default PrivacyPolicy
