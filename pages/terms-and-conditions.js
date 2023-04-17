import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "components/list-nested"
import MainLayout from "@/layouts/main"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "terms-and-conditions",
      "common",
    ])),
  },
})

function TermsAndConditions() {
  const { t } = useTranslation("terms-and-conditions")

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
                content: "listContent02b1",
              },
              {
                content: "listContent02b2",
              },
            ],
          },
          {
            content: "listContent02c",
            points: [
              {
                content: "listContent02c1",
              },
              {
                content: "listContent02c2",
              },
            ],
          },
          {
            content: "listContent02d",
          },
          {
            content: "listContent02e",
          },
          {
            content: "listContent02f",
          },
          {
            content: "listContent02g",
          },
        ],
      },
      {
        title: "listTitle03",
        description: "listSubtitle03",
        subsections: [
          {
            content: "listContent03a",
          },
          {
            content: "listContent03b",
          },
          {
            content: "listContent03c",
          },
          {
            content: "listContent03d",
          },
          {
            content: "listContent03e",
          },
          {
            content: "listContent03f",
          },
          {
            content: "listContent03g",
          },
          {
            content: "listContent03h",
          },
          {
            content: "listContent03i",
          },
          {
            content: "listContent03j",
          },
          {
            content: "listContent03k",
          },
          {
            content: "listContent03l",
            pointsFooter: "listContent03l4Description",
            points: [
              {
                content: "listContent03l1",
              },
              {
                content: "listContent03l2",
              },
              {
                content: "listContent03l3",
              },
              {
                content: "listContent03l4",
              },
            ],
          },
          {
            content: "listContent03m",
          },
        ],
      },
      {
        title: "listTitle04",
        description: null,
        subsections: [
          {
            content: null,
            pointsHeader: "listContent04a",
            points: [
              {
                content: "listContent04a1",
              },
              {
                content: "listContent04a2",
              },
              {
                content: "listContent04a3",
              },
              {
                content: "listContent04a4",
              },
              {
                content: "listContent04a5",
              },
              {
                content: "listContent04a6",
              },
              {
                content: "listContent04a7",
              },
              {
                content: "listContent04a8",
              },
              {
                content: "listContent04a9",
              },
              {
                content: "listContent04a10",
              },
              {
                content: "listContent04a11",
              },
              {
                content: "listContent04a12",
              },
              {
                content: "listContent04a13",
              },
              {
                content: "listContent04a14",
              },
              {
                content: "listContent04a15",
              },
            ],
          },
        ],
      },
      {
        title: "listTitle05",
        description: null,
        subsections: [
          {
            content: "listContent05a",
            points: [
              {
                content: "listContent05a1",
              },
              {
                content: "listContent05a2",
              },
              {
                content: "listContent05a3",
              },
            ],
          },
          {
            content: "listContent05b",
          },
        ],
      },
      {
        title: "listTitle06",
        description: null,
        subsections: [
          {
            content: "listContent06a",
            points: [
              {
                content: "listContent06a1",
              },
              {
                content: "listContent06a2",
              },
              {
                content: "listContent06a3",
              },
              {
                content: "listContent06a4",
              },
              {
                content: "listContent06a5",
              },
            ],
          },
          {
            content: "listContent06b",
            points: [
              {
                content: "listContent06b1",
              },
              {
                content: "listContent06b2",
              },
            ],
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
        ],
      },
      {
        title: "listTitle09",
        description: null,
        subsections: [
          {
            content: "listContent09a",
          },
          {
            content: "listContent09b",
            points: [
              {
                content: "listContent09b1",
              },
              {
                content: "listContent09b2",
              },
              {
                content: "listContent09b3",
              },
              {
                content: "listContent09b4",
              },
            ],
          },
          {
            content: "listContent09c",
          },
          {
            content: "listContent09d",
          },
        ],
      },
      {
        title: "listTitle10",
        description: null,
        subsections: [
          {
            content: "listContent10a",
          },
          {
            content: "listContent10b",
          },
        ],
      },
      {
        title: "listTitle11",
        description: null,
        subsections: [
          {
            content: "listContent11a",
          },
          {
            content: "listContent11b",
            points: [
              {
                content: "listContent11b1",
              },
              {
                content: "listContent11b2",
              },
            ],
          },
          {
            content: "listContent11c",
          },
        ],
      },
      {
        title: "listTitle12",
        description: null,
        subsections: [
          {
            content: "listContent12a",
          },
          {
            content: "listContent12b",
          },
        ],
      },
      {
        title: "listTitle13",
        description: null,
        subsections: [
          {
            content: "listContent13a",
          },
          {
            content: "listContent13b",
          },
          {
            content: "listContent13c",
          },
          {
            content: "listContent13d",
          },
          {
            content: "listContent13e",
          },
          {
            content: "listContent13f",
          },
        ],
      },
      {
        title: "listTitle14",
        description: null,
        subsections: [
          {
            content: null,
            pointsHeader: "listContent14a",
            points: [],
          },
        ],
      },
      {
        title: "listTitle15",
        description: null,
        subsections: [
          {
            content: "listContent15a",
          },
          {
            content: "listContent15b",
          },
        ],
      },
    ],
  }

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/terms-and-conditions"
    >
      <NestedList content={content} t={t} />
    </MainLayout>
  )
}

export default TermsAndConditions
