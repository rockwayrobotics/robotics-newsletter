---
title: 'Something else'
publishedAt: 2023-08-24
description: 'The index page is sorted by date'
slug: 'something-else'
isPublish: true
---

# Something

```astro
---
import { Img } from 'astro-imagetools/components';
import { landing_image_url } from '../../content/landing.ts';
---

<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="relative mb-10 flex flex-col gap-16">
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:24px_22px]"
      >
      </div>
      <div class="flex flex-col items-start gap-8 sm:gap-10">
        <div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
          <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            <span class="opacity-50"
              >Build Wonder. <br />Build Respect. <br />Build Bridges.<br /> Build
            </span><span class="opacity-100">Robots</span>.
          </h1>
        </div>
      </div>
    </div>
    <div class="overflow-hidden rounded-3xl">
      <Img src={landing_image_url} alt="A remote image" />
    </div>
  </div>
</section>
```

**Bold**

_italic_
