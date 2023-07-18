import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import NestedList from "@/components/NestedList"
import { PPContent } from "@/pages/privacy-policy"
import DPMNestedList from "@/components/DPM/DPMNestedList"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy-policy-dpm", "common"])),
  },
})

const PrivacyPolicyDPM = () => {
  const { t } = useTranslation("privacy-policy-dpm")

  const content = {
    title: "DPM Privacy Policy",
    date: "Last updated: 2023-18-07",
    description: (
      <>
        <>
          <p>
            This policy describes the privacy practices of Desmos Profile
            Manager (“
            <strong>DPM</strong>”) and related content, features, and
            functionality (collectively, the “<strong>Platform</strong>”) and
            the various services that we offer to you on or through the Platform
            (the “<strong>Services</strong>”). Users of our Services are
            referred to as “<strong>users</strong>” or “you”.
          </p>
          <br />
          <p>
            <strong>
              Please read this policy and the DPM Terms of Use carefully before
              engaging with the Platform or using the Services.
            </strong>
          </p>
          <br />
          <p>
            <strong>
              If you are uncomfortable with the immutable, permanent and
              transparent nature of entries on a blockchain, you should not
              engage with the Platform or use the Services.
            </strong>
          </p>
          <br />
          <p>
            By engaging with our Platform and using our Services, you accept the
            privacy practices as set out in this policy, as may be modified or
            supplemented from time to time. If you are engaging with our
            Platform or using our Services as a representative of an
            organization, you are accepting these practices on their behalf.
          </p>
          <br />
          <p>
            If you have any questions about this policy or any privacy issues
            related to your use of our Services, please contact us by email to{" "}
            <strong>privacy@desmos.network</strong>.
          </p>
        </>
      </>
    ),
    sections: [
      {
        title: "About us",
        description: undefined,
        subsections: [
          {
            content: (
              <p>
                Desmos is a Proof of Stake blockchain protocol offered by Desmos
                Labs that allows developers to build social networking or
                social-enabled apps. Desmos Labs also offers decentralized
                applications built on the Desmos protocol.
              </p>
            ),
          },
          {
            content: (
              <p>
                DPM is a Web3 mobile wallet offered by Desmos Labs that
                interacts with the Desmos blockchain, as well as other supported
                blockchains including but not limited to Cosmos-based
                blockchains (e.g. Cosmos Hub, Osmosis, Juno, Crypto.org, etc.),
                EVM-based blockchains (e.g. Ethereum, Binance Smart Chain,
                etc.), Solana, and others.
              </p>
            ),
          },
          {
            content: (
              <p>
                Desmos Labs Limited is a company incorporated in Hong Kong with
                company registration number 3210522, having its registered
                office at Flat 3B, Tontex Industrial Building, 2-4 Sheung Hei
                Street, San Po Kong, Kowloon, Hong Kong.
              </p>
            ),
          },
        ],
      },
      {
        title: "Data Collection and Data Retention",
        description: (
          <p>
            For the purpose of this policy, “<strong>personal data</strong>”
            refers to any information which is related to an identified or
            identifiable + natural person. "Personal data” and “personal
            information” are used interchangeably.
          </p>
        ),
        subsections: [
          {
            content: "Data Collection",
            pointsHeader: (
              <p>
                Previous explicit approval from you, the information we
                automatically collect from you through the Services (or
                third-party services we engage) includes:
              </p>
            ),
            pointsFooter: (
              <>
                <p>
                  <strong>NOTE:</strong> Due to the immutable, permanent and
                  transparent nature of blockchain protocols and applications,
                  you must carefully consider what information you choose to
                  publish about yourself (through the creation of the Profile)
                  or share with others, since you may not be able to erase,
                  remove or delete it, nor control who has access to it.
                </p>
                <p>
                  We <strong>do not collect</strong> sensitive data or special
                  category data about you. This includes details about your
                  race, ethnic origin, politics, religion, trade union
                  membership, genetics, biometrics, health, or sexual
                  orientation.
                </p>
                <p>
                  We <strong>do not knowingly collect</strong> or use personal
                  data from minors.
                </p>
              </>
            ),
            points: [
              {
                content: (
                  <p>
                    Information about your computer or mobile device that you
                    use to access our Platform or our Services, such as device
                    information, unique identifiers, operating system, and
                    timezone.
                  </p>
                ),
                subpoints: [
                  {
                    content: (
                      <p>
                        These informations are collected through a third-party,
                        open-source service:{" "}
                        <a href="https://posthog.com/">PostHog</a>.
                      </p>
                    ),
                  },
                ],
              },
              {
                content: (
                  <p>
                    Information about your online activities and actions on the
                    Platform, such as your usage data, navigation path,
                    frequency of visit, and length of access to the Platform,
                    whether you are returning or new user.
                  </p>
                ),
                subpoints: [
                  {
                    content: (
                      <p>
                        These informations are collected through a third-party,
                        open-source service:{" "}
                        <a href="https://posthog.com/">PostHog</a>.
                      </p>
                    ),
                  },
                ],
              },
              {
                content: (
                  <p>
                    In the future, we may use Firebase to handle in-app
                    notifications for our users. Firebase may collect certain
                    information from our users, including device information,
                    unique identifiers, and interaction data.
                  </p>
                ),
              },
            ],
          },
          {
            content: "Data Retention",
            pointsFooter: (
              <p>
                However, due to the immutable, permanent and transparent nature
                of blockchain protocols and applications, we are unable to
                erase, remove or delete your information recorded on-chain, or
                any files that have been posted to the InterPlanetary File
                System or similar decentralized storage systems even after the
                retention period has expired.
              </p>
            ),
            points: [
              {
                content: (
                  <p>
                    We only keep your personal information for as long as
                    necessary to fulfill the purposes for which your personal
                    information is collected, including for the purposes of
                    fulfilling any legal, accounting, or reporting requirements.
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    The encrypted private keys of the wallets generated or
                    imported by the users are stored only on the device of the
                    user and are not stored in any centralized or online
                    service. The private keys will be deleted from the device
                    upon the deletion of the application.
                  </p>
                ),
              },
            ],
          },
        ],
      },
      {
        title: "How we use personal information",
        description: undefined,
        subsections: [
          {
            content: (
              <p>
                <strong>We use</strong> your personal information as necessary
                to deliver our Services to you, including:
              </p>
            ),
            points: [
              { content: <p>to operate the Services and our business;</p> },
              {
                content: (
                  <p>
                    to maintain and improve our Services or certain
                    functionalities or features of our Services;
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    to process your transactions or your interactions with
                    Desmos blockchain.
                  </p>
                ),
              },
            ],
          },
          {
            content: (
              <p>
                In addition, we use your personal information for legitimate
                business purposes, including:
              </p>
            ),
            points: [
              {
                content: (
                  <p>
                    to investigate issues such as security breaches,
                    cyberattacks or scams;
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    to comply with applicable laws and regulations, or to defend
                    legal actions against you, us or other users of the
                    Platform; and
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    to enforce the Terms of Use that govern the use of the
                    Platform and the Services.
                  </p>
                ),
              },
            ],
          },
          {
            content: (
              <p>
                <strong>We share</strong> your personal information with the
                following parties:
              </p>
            ),
            pointsFooter: (
              <p>
                We require our third-party service providers to maintain
                confidentiality and security of all personal information that
                they process for us or on our behalf. We also require that they
                implement and maintain reasonable security measures to protect
                the confidentiality of your personal information.
              </p>
            ),
            points: [
              {
                content: (
                  <p>
                    service providers (including companies and individuals) that
                    help us operate the Services, such as web traffic tracking,
                    analytics, storage, or payment solutions;
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    professional advisors, including lawyers, attorneys,
                    auditors, bankers, and insurers where necessary;
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    law enforcement, judicial, regulatory or governmental
                    authorities where applicable;
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    parties that acquire control over all or any substantial
                    portion of the business or assets of Desmos Labs, such as in
                    a business merger, acquisition or reorganization or
                    transactions with similar nature; and
                  </p>
                ),
              },
              {
                content: (
                  <p>
                    third-party platforms where you have enabled features or
                    functionality that connect the Services with any third
                    party’s services, in which case you must review the terms
                    and conditions and privacy policy of such third party.
                  </p>
                ),
              },
            ],
          },
        ],
      },
      {
        title: "Your choices",
        description: undefined,
        subsections: [
          {
            content: (
              <p>
                You may update or correct any personal information we hold in
                our systems anytime by contacting us at{" "}
                <a href="mailto:privacy@desmos.network">
                  privacy@desmos.network
                </a>
              </p>
            ),
          },
          {
            points: [],
            pointsHeader: (
              <p>
                <strong>
                  However, due to the immutable, permanent and transparent
                  nature of blockchain protocols and applications, we are unable
                  to erase, remove or delete your information recorded on-chain,
                  or any files that have been posted to the InterPlanetary File
                  System or similar decentralized storage systems.
                </strong>
              </p>
            ),
          },
          {
            content: (
              <p>
                You may opt out of our notifications. However, you may not opt
                out of receiving notifications that are transactional (such as
                completion of on-chain transaction) or administrative (such as
                announcement related to security breaches or cyberattacks).
              </p>
            ),
          },
          {
            content: (
              <p>
                You may opt out from user tracking, such as user’s behavioral
                tracking, from the application’s settings page.
              </p>
            ),
          },
          {
            pointsHeader: (
              <p>
                If you have any questions or feedback regarding how we address
                your requests concerning your personal data, please contact us
                at{" "}
                <a href="mailto:privacy@desmos.network">
                  privacy@desmos.network
                </a>
                .
              </p>
            ),
            points: [],
          },
        ],
      },
      {
        title: "Security and transfer of your personal data",
        description: undefined,
        subsections: [
          {
            content: (
              <p>
                We employ a number of technical and organizational measures to
                safeguard the security of the personal information we collect or
                store on your device. These measures include encryption of the
                private keys and secure storage on the device. However, no
                method of transmission over the internet, or method of
                electronic storage, is 100% secure. Therefore, we cannot
                guarantee its absolute security.
              </p>
            ),
          },
          {
            content: (
              <p>
                Within Desmos Labs, access to your personal information is
                restricted to personnel or service providers on a strictly
                need-to-know basis.
              </p>
            ),
          },
          {
            content: (
              <p>
                We collect personal information globally. We may transfer,
                process and store your personal information outside your country
                of residence, and the parties with whom we share your personal
                information may operate in a country outside your country of
                residence.
              </p>
            ),
          },
          {
            content: (
              <p>
                Some of the countries in which the parties with whom we share
                your personal information operate may not have the privacy and
                data protection laws that are equivalent to those in your
                country of residence. When we share information with these
                parties, we use our best endeavors (such as by entering into
                contractual terms) to safeguard the security of the information
                transferred.
              </p>
            ),
          },
        ],
      },
      {
        title: "Update or amendment",
        description: undefined,
        subsections: [
          {
            pointsHeader: (
              <>
                <p>
                  We reserve the right to update or amend this policy at any
                  time to reflect changes in our practices or services. We will
                  notify you of any material changes to this policy by posting
                  the updated policy on our website or through our application.
                </p>
                <p>
                  Your continued use of our application after any changes to
                  this policy will constitute your acceptance of such changes.
                </p>
              </>
            ),
            points: [],
          },
        ],
      },
      {
        title: "Contact us",
        description: undefined,
        subsections: [
          {
            pointsHeader: (
              <>
                <p>If you have any questions about this Privacy Policy,</p>
                <p>
                  You may reach us by email at{" "}
                  <a href="mailto:privacy@desmos.network">
                    privacy@desmos.network
                  </a>
                  , or at the following address:
                </p>
                <p>
                  Flat 3B, Tontex Industrial Building,
                  <br />
                  2-4 Sheung Hei Street, San Po Kong,
                  <br />
                  Kowloon, Hong Kong.
                </p>
              </>
            ),
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
      pageRoute="/privacy-policy-dpm"
    >
      <DPMNestedList content={content} />
    </MainLayout>
  )
}

export default PrivacyPolicyDPM
