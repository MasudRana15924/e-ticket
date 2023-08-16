import Image from "next/image";

export default function Helpline() {
  return (
    <div className="mt-12 lg:mt-16 lg:w-3/4 mx-auto">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-0 lg:px-0">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Admins</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat animi possimus voluptate? Atque sint necessitatibus laudantium eos ratione illo rem autem, adipisci dolorem, at rerum beatae nisi odio. Ipsum.</p>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Transport</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Know about Director
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat animi possimus voluptate? Atque sint necessitatibus laudantium eos ratione illo rem autem, adipisci dolorem, at rerum beatae nisi odio. Ipsum.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <Image width={500} height={50} src="https://img.freepik.com/free-photo/middle-aged-cheerful-dark-skinned-male-with-shining-smile_273609-28538.jpg?size=626&ext=jpg&ga=GA1.2.78409749.1684004130&semt=sph" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Mr ABC
                    </a>
                  </p>
                  <p class="text-gray-600">Director , Transport </p>
                  <p class="text-gray-600">call +880123456789 </p>
                </div>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Management</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Know about Transport Director
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat animi possimus voluptate? Atque sint necessitatibus laudantium eos ratione illo rem autem, adipisci dolorem, at rerum beatae nisi odio. Ipsum.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <Image width={500} height={50} src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.2.78409749.1684004130&semt=sph" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Mr XYZ
                    </a>
                  </p>
                  <p class="text-gray-600">A.DirectorTransport </p>
                  <p class="text-gray-600">call +880123456789 </p>
                </div>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Ticket Management</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Know About Ticket
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat animi possimus voluptate? Atque sint necessitatibus laudantium eos ratione illo rem autem, adipisci dolorem, at rerum beatae nisi odio. Ipsum.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <Image width={500} height={50} src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&ga=GA1.2.78409749.1684004130&semt=sph" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Mr DEF
                    </a>
                  </p>
                  <p class="text-gray-600">Head, Ticket Management</p>
                  <p class="text-gray-600">call +880123456789 </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  )
}