import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={"bg-black py-14 px-4"}>
        <div
          className={
            "lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-32"
          }
        >
          <div className={"text-primary-800 mb-8 lg:mb-0"}>
            <Image
              alt="Image"
              className={"object-contain grayscale mb-5"}
              height={58}
              src="/footer-logo.png?v=1"
              width={216}
            />
            <p className={"mb-5"}>
              Moonicorn ($MOONI): A meme token blending fun, innovation, and
              utility, inspired by moonicorns and the &quot;to the moon&quot;
              dream!
            </p>
            <p>© 2024, Moonicorn</p>
          </div>
          <div className={"col-span-2 gap-y-4 grid grid-cols-1 md:grid-cols-3"}>
            <div className={""}>
              <h6 className={"font-semibold text-primary-800 uppercase mb-6"}>
                Quick Links
              </h6>
              <ul>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"#home"}>
                    Home
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={"hover:text-primary-300"}
                    href={"#whatsMoonicorn"}
                  >
                    What is Moonicorn
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={"hover:text-primary-300"}
                    href={"#gettingStarted"}
                  >
                    Wallet
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"#spin-wheel"}>
                    Spin a Wheel
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"#faq"}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className={""}>
              <h6 className={"font-semibold text-primary-800 uppercase mb-6"}>
                Foundation
              </h6>
              <ul>
                <li className={"mb-4"}>
                  <a
                    className={"hover:text-primary-300"}
                    href={"https://discord.gg/jWG2u2nt36"}
                  >
                    About
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"/"}>
                    Manifesto{" "}
                    <span className={"text-xs text-secondary"}>
                      (coming soon)
                    </span>
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"/"}>
                    Advisors{" "}
                    <span className={"text-xs text-secondary"}>
                      (coming soon)
                    </span>
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"/"}>
                    Blog{" "}
                    <span className={"text-xs text-secondary"}>
                      (coming soon)
                    </span>
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a className={"hover:text-primary-300"} href={"/roadmap"}>
                    Roadmap
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={"hover:text-primary-300"}
                    href={
                      "https://www.figma.com/proto/dC4VZyUQv4idO9Q9d85ABk/MOONICORN%2F-White-Paper?page-id=0%3A1&node-id=22-279277&node-type=frame&viewport=154%2C-172%2C0.23&t=Y8eF026bcm6KGoKT-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A279277&hide-ui=1"
                    }
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            <div className={""}>
              <h6 className={"font-semibold text-primary-800 uppercase mb-6"}>
                Community
              </h6>
              <ul>
                <li className={"mb-4"}>
                  <a
                    className={
                      "hover:text-primary-300 inline-flex items-center gap-x-2"
                    }
                    href={"https://x.com/moonitomoon"}
                  >
                    <svg
                      fill="none"
                      height="15"
                      viewBox="0 0 18 15"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6396 1.81464C16.989 2.1034 16.2987 2.29261 15.5917 2.3759C16.3366 1.93061 16.8939 1.22937 17.1595 0.403174C16.4597 0.818729 15.6939 1.11152 14.8954 1.26889C14.5618 0.912942 14.1587 0.629319 13.7111 0.435613C13.2634 0.241907 12.7807 0.14225 12.2929 0.142825C10.3241 0.142825 8.72775 1.73914 8.72775 3.70834C8.72775 3.98739 8.75915 4.25938 8.82018 4.52079C5.85685 4.37192 3.22936 2.9527 1.47077 0.795462C1.15358 1.33962 0.987012 1.95842 0.988169 2.58828C0.988169 3.82511 1.61752 4.91661 2.57426 5.55584C2.00805 5.53787 1.45434 5.38487 0.959241 5.10958L0.958888 5.15473C0.958888 6.88193 2.18796 8.32267 3.81921 8.65075C3.29396 8.79294 2.74324 8.81369 2.20878 8.71143C2.6628 10.1278 3.97937 11.159 5.53935 11.1876C4.27647 12.1789 2.71679 12.7166 1.11129 12.714C0.823775 12.714 0.539789 12.6971 0.260742 12.6639C1.89095 13.7117 3.78842 14.2679 5.72632 14.2659C12.2848 14.2659 15.8708 8.83314 15.8708 4.12145C15.8708 3.96693 15.8676 3.81277 15.8609 3.65966C16.5591 3.15562 17.1615 2.53077 17.6396 1.81464Z"
                        fill="#848895"
                      />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={
                      "hover:text-primary-300 inline-flex items-center gap-x-2"
                    }
                    href={"https://discord.gg/jWG2u2nt36"}
                  >
                    <svg
                      fill="none"
                      height="15"
                      viewBox="0 0 20 15"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.69854 0.904297C6.06312 0.904297 4.14739 1.6426 3.80369 1.79014C3.45999 1.93769 3.0785 2.39829 2.64563 3.15847C2.21217 3.91865 1.86434 4.8073 1.29919 6.11447C0.734626 7.42164 0.602934 9.94174 0.621832 10.7109C0.640729 11.48 0.733445 12.0809 1.56316 12.5359C2.39229 12.9903 3.12574 13.4661 3.89759 13.7522C4.67002 14.0383 5.19679 14.2442 5.55466 13.9581C5.91253 13.6719 6.14816 13.171 6.14816 13.171C6.14816 13.171 6.48713 12.7238 5.84698 12.4557C5.20683 12.1869 4.88675 11.999 4.91451 11.7218C4.94285 11.4447 4.98951 11.2927 5.14954 11.3286C5.30958 11.3645 5.68694 12.008 7.13673 12.3031C8.58652 12.5982 9.99969 12.5538 9.99969 12.5538C9.99969 12.5538 11.4135 12.5987 12.8632 12.3031C14.313 12.008 14.6898 11.3645 14.8498 11.3286C15.0099 11.2927 15.0565 11.4447 15.0849 11.7213C15.1132 11.999 14.7931 12.1869 14.153 12.4557C13.5128 12.7238 13.8518 13.171 13.8518 13.171C13.8518 13.171 14.0874 13.6714 14.4453 13.9581C14.8026 14.2442 15.33 14.0383 16.1018 13.7522C16.8736 13.4661 17.6077 12.9909 18.4368 12.5359C19.2665 12.0809 19.3592 11.48 19.3781 10.7109C19.397 9.9423 19.2654 7.42164 18.7002 6.11447C18.1356 4.8073 17.7872 3.91865 17.3538 3.15847C16.9215 2.39829 16.5394 1.93769 16.1963 1.78958C15.8526 1.6426 13.9363 0.904297 13.3008 0.904297C12.6654 0.904297 12.4776 1.32506 12.4776 1.32506L12.2562 1.79014C12.2562 1.79014 10.768 1.52142 10.0097 1.52086C9.25147 1.52086 7.74381 1.79014 7.74381 1.79014L7.52236 1.3245C7.52236 1.3245 7.33456 0.904297 6.69854 0.904297ZM6.76764 6.4853H6.79126C7.71783 6.4853 8.46841 7.25558 8.46841 8.20539C8.46841 9.15575 7.71783 9.92547 6.79126 9.92547C5.86469 9.92547 5.11411 9.15575 5.11411 8.20539C5.11352 7.26456 5.85052 6.49821 6.76764 6.4853ZM13.2087 6.4853H13.2323C14.1495 6.49821 14.8859 7.26512 14.8859 8.20539C14.8859 9.15575 14.1353 9.92547 13.2087 9.92547C12.2816 9.92547 11.5316 9.15575 11.5316 8.20539C11.5316 7.25558 12.2816 6.4853 13.2087 6.4853Z"
                        fill="#848895"
                      />
                    </svg>
                    Discord
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={
                      "hover:text-primary-300 inline-flex items-center gap-x-2"
                    }
                    href={"https://t.me/+zltPoaKA1d43NjU1"}
                  >
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 18 17"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9331 2.33718L15.2215 15.1251C15.017 16.0276 14.4835 16.2522 13.7253 15.8271L9.59373 12.7825L7.60021 14.6999C7.37963 14.9205 7.19506 15.1051 6.7699 15.1051L7.0667 10.8972L14.7242 3.97777C15.0571 3.68097 14.652 3.51648 14.2067 3.81331L4.74021 9.77402L0.664783 8.49847C-0.221701 8.22167 -0.237717 7.61195 0.849275 7.18679L16.7899 1.04558C17.5279 0.768821 18.1738 1.20999 17.9331 2.33718Z"
                        fill="#848895"
                      />
                    </svg>
                    Telegram
                  </a>
                </li>
                <li className={"mb-4"}>
                  <a
                    className={
                      "hover:text-primary-300 inline-flex items-center gap-x-2"
                    }
                    href={"https://instagram.com/moonitomoon/"}
                  >
                    <svg
                      height="16"
                      viewBox="0 0 448 512"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        fill="#848895"
                      />
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
