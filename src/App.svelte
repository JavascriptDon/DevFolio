<script>
  // @ts-nocheck
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
</script>

<main
  class="bg-body text-white font-Montserrat pb-12 scroll-behavior: smooth; overflow-scroll"
>
<!-- Header Section -->
  <header class="py-6">
    <!-- Nav Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <!-- Nav -->
      <div
        class="container mx-auto  max-w-8xl flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0"
          href="/devfolio"
        >
          <span class="ml-3 text-xl font-bold">Devfolio</span>
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a
            href="#home"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Home</a
          >
          <a
            href="#about"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >About Me</a
          >
          <a
            href="#portfolio"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Portfolio</a
          >
          <a
            href="#clients"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Clients</a
          >
        </nav>
        <button
          class="btn btn-primary px-6 py-2 bg-base font-bold  mt-4 md:mt-0"
          ><a href="#hire">Hire Me</a></button
        >
      </div>
    </Transition>
    <!-- Hero Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <!-- Hero -->
      <div
        class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40"
        id="home"
      >
        <div class="grid justify-center items-center order-1 col-span-1">
          <img
            class="lg:h-80 md:h-64 h-40 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt=""
          />
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1
            class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6"
          >
            <span class="block xl:inline text-gray-50">Hi, I’m John Doe.</span>
            <span class="block text-indigo-600 xl:inline"
              >Creative Web <Typewriter loop
                ><span>Technologist.</span><span>Designer.</span><span
                  >Coder.</span
                ></Typewriter
              ></span
            >
          </h1>
          <p class="text-xl text-gray-500 text-center font-medium md:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            class="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800"
            ><a href="#">Download Resume</a></button
          >
        </div>
      </div>
    </Transition>
  </header>

  <!-- About Section -->
  <section class="bg-gray-800 pattern py-20" id="about">
    <!-- About Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">About Me</h2>

        <p class="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>
      </div>
    </Transition>
  </section>

  <!-- Portfolio Section  -->
  <div
    class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    id="portfolio"
  >
    <!-- Portfolio Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <section class="w-full text-center">
        <h2
          id="work"
          class="secondary-title md:text-left text-4xl font-bold mb-6"
        >
          Portfolio
        </h2>
        <p class="section-paragraph md:text-left text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              class="w-full bg-nav h-36 lg:h-72 object-cover hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 1
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              class="w-full bg-nav h-36 lg:h-72 object-cover hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 2
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 3
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
              class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover object-center"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 4
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover object-center"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 5
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
          <div class="img-wrapper relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
              class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover object-center"
              alt=""
            />
            <div
              class="img-overlay w-full h-full absolute top-0 z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:bg-black"
            >
              <h2
                class="img__title relative mb-8 my-16 text-4xl font-Oswald font-thin text-white text-center transition duration 0.3s ease-in-out tracking-wider"
              >
                Project 6
              </h2>
              <a
                class="img__link relative block w-3/5 p-2.5 font-Montserrat font-medium text-white no-underline hover:bg-secondary text-center text-base border-solid border-2 border-white tracking-wider mx-auto transition duration 0.3 ease-in-out hover:text-gray-50"
                href="#">View Case Study</a
              >
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>

  <!-- Clients Section -->
  <div
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    id="clients"
  >
    <!-- Clients Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <section class="w-full">
        <h2
          id="clients"
          class="secondary-title md:text-left text-4xl font-bold mb-6 text-white"
        >
          Clients
        </h2>
        <p class="section-paragraph md:text-left text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>

        <!-- Clients -->
        <div class="space-y-12 my-16">
          <div
            class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out"
          >
            <!-- Client logo -->
            <div class="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"
                /></svg
              >
            </div>

            <!-- Client info -->
            <div
              class="flex flex-wrap justify-center text-center lg:text-left lg:block"
            >
              <h3 class="text-white text-3xl font-semibold">Company, inc.</h3>

              <div
                class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8"
              >
                <div class="badge">UI/UX</div>
                <div class="badge">Front-end Development</div>
                <div class="badge">OpenSource</div>
              </div>

              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper nulla nunc quis molestie volutpat elementum at.
                Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent
                arcu eget orci est orci nullam. Leo purus est pellentesque massa
                at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse
                porta id elementum, massa.
              </p>
              <a
                class="mt-10 text-gray-50 inline-flex items-center font-bold"
                href="#"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out"
          >
            <!-- Client logo -->
            <div class="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"
                /></svg
              >
            </div>

            <!-- Client info -->
            <div
              class="flex flex-wrap justify-center text-center lg:text-left lg:block"
            >
              <h3 class="text-white text-3xl font-semibold">Company, inc.</h3>

              <div
                class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8"
              >
                <div class="badge">UI/UX</div>
                <div class="badge">Front-end Development</div>
                <div class="badge">OpenSource</div>
              </div>

              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper nulla nunc quis molestie volutpat elementum at.
                Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent
                arcu eget orci est orci nullam. Leo purus est pellentesque massa
                at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse
                porta id elementum, massa.
              </p>
              <a
                class="mt-10 text-gray-50 inline-flex items-center font-bold"
                href="#"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap hover:scale-110 transition duration-300 ease-in-out"
          >
            <!-- Client logo -->
            <div class="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"
                /></svg
              >
            </div>

            <!-- Client info -->
            <div
              class="flex flex-wrap justify-center text-center lg:text-left lg:block"
            >
              <h3 class="text-white text-3xl font-semibold">Company, inc.</h3>

              <div
                class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8"
              >
                <div class="badge">UI/UX</div>
                <div class="badge">Front-end Development</div>
                <div class="badge">OpenSource</div>
              </div>

              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper nulla nunc quis molestie volutpat elementum at.
                Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent
                arcu eget orci est orci nullam. Leo purus est pellentesque massa
                at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse
                porta id elementum, massa.
              </p>
              <a
                class="mt-10 text-gray-50 inline-flex items-center font-bold"
                href="#"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>

  <!-- Hire Me Section -->
  <div
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    id="hire"
  >
    <!-- Hire Me Transition-->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <section class="w-full">
        <h2
          id="hire"
          class="secondary-title md:text-left mb-6 font-bold text-4xl"
        >
          Hire me
        </h2>
        <p class="section-paragraph md:text-left text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div class="space-y-12">
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for=""
                >Name</label
              >
              <input
                type="name"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for=""
                >Email</label
              >
              <input
                type="email"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for=""
                >Message</label
              >
              <textarea
                type="message"
                class="text-black w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              />
            </div>
            <button
              class="btn btn-primary px-6 py-2 bg-theme text-white font-bold"
              >Send It!</button
            >
          </div>

          <div class="mt-12">
            <!-- Contact info -->
            <p class="md:text-left text-error">555-555-555</p>
            <a
              href="mailto:email@mydomain.com"
              class="md:text-left text-error underline mt-3 block uppercase"
              >email@mydomain.com</a
            >

            <!-- Socials -->
            <div class="flex mt-20 space-x-6">
              <!-- Facebook -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                >
                  <path
                    d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!-- Twitter -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                    fill="white"
                  /></svg
                >
              </a>

              <!-- LinkedIn -->
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                >
                  <path
                    d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>
  <!-- Footer Section -->
  <section class="w-full">
    <!-- Footer Transition-->
    <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <footer>
      <div class="copyright md:text-center text-gray-500"><a href="#home">© Copyright 2022 Devfolio</a></div>
    </footer>
    </Transition>
</section>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .img-overlay:after {
    content: "";
    z-index: -10;
    transition: all 0.3s ease;
  }
  .img__title {
    top: -200px;
  }
  .img__link {
    top: 200px;
  }
  .img-wrapper:hover .img__title {
    top: 0;
  }
  .img-wrapper:hover .img__link {
    top: 0;
  }
  .img-wrapper:hover .img-overlay:after {
    opacity: 0.75;
  }
  @media only screen and (min-width: 305px) {
    .img-wrapper:hover .img__title {
      margin-top: auto;
    }
  }
</style>
