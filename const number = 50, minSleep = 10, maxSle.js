const number = 20, minSleep = 20, maxSleep = 20;
let count = 0, totalBuy = 0, totalSell = 0;

clear();
console.log("\n__________START__________\n");

function delay(e) {
  return new Promise(t => setTimeout(t, e));
}

function click_max() {
    //0% bg-base-background-l0 top-0.5 h-2.5 w-2.5 rounded-full border-2 border-accent-blue
    //<div class="bg-base-background-l0 top-0.5 h-2.5 w-2.5 rounded-full border-2 border-base-background-l3" data-rac="" data-disabled="true" style="position: absolute; left: 100%; transform: translate(-50%, -50%); touch-action: none;"><div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input id="react-aria9635893208-:r10s:-5" aria-labelledby="react-aria9635893208-:r10s:" step="1" disabled="" aria-orientation="horizontal" aria-valuetext="NaN" aria-describedby="" aria-details="" type="range"></div></div>
  const e = document.getElementsByClassName("bg-accent-blue top-0.5 h-3.5 w-3.5 cursor-grab rounded-full")[0];
  if (e) {
    const t = e.getBoundingClientRect().left;
    const o = new PointerEvent("pointerdown", { bubbles: true, clientX: t });
    e.dispatchEvent(o);

    const n = 0.95 * window.innerWidth;
    const l = new PointerEvent("pointermove", { bubbles: true, clientX: n });
    e.dispatchEvent(l);

    const c = new PointerEvent("pointerup", { bubbles: true, clientX: n });
    e.dispatchEvent(c);
  } else {
    console.error("Element not found.");
  }
}
//flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-hidden hover:opacity-90 h-[32px] text-high-emphasis px-3 bg-base-background-l2
let market_element = document.getElementsByClassName('text-high-emphasis')[0];
if ("Market" == market_element.textContent) {
  console.log(" - Click Market trade");
  market_element.click();
}

const Start = async () => {
  console.log("--------------------------");
  console.log(`Total: Buy: ${totalBuy}  |  Sell: ${totalSell}`);

  //class="bg-base-background-l2 flex h-[48px] w-full overflow-hidden rounded-xl"
  let e = document.getElementsByClassName("w-full rounded-xl text-sm font-semibold");
  console.log(`element ${e}` );
  let t = e[0], o = e[1];
  console.log(`buy ${t} -- sell ${o}`);

  t.click();
  await delay(2000);
  click_max();
  await delay(2000);

  console.log(" - Click: BUY");
  //text-center font-semibold focus:ring-blue-200 focus:none focus:outline-hidden hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 h-12 rounded-xl text-base px-4 py-2 bg-green-primary-button-background text-green-primary-button-text !opacity-50
  let buy_btn = document.getElementsByClassName("text-center font-semibold focus:ring-blue-200 focus:none focus:outline-hidden hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 h-12 rounded-xl text-base px-4 py-2 bg-green-primary-button-background text-green-primary-button-text active:scale-98")[0];
  
  try {
    buy_btn.click();
    totalBuy++;
  } catch (e) {
    console.log("ERROR: BUY: ", e);
  }

  await delay(5000);
  o.click();
  await delay(2000);
  click_max();
  await delay(2000);

  console.log(" - Click: SELL");
//text-center font-semibold focus:ring-blue-200 focus:none focus:outline-hidden hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 h-12 rounded-xl text-base px-4 py-2 bg-red-primary-button-background text-red-primary-button-text !opacity-50
  let sell_btn = document.getElementsByClassName("text-center font-semibold focus:ring-blue-200 focus:none focus:outline-hidden hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 h-12 rounded-xl text-base px-4 py-2 bg-red-primary-button-background text-red-primary-button-text active:scale-98")[0];

  try {
    sell_btn.click();
    totalSell++;
  } catch (e) {
    console.log("ERROR: SELL: ", e);
  }

  const l = Math.floor(Math.random() * (maxSleep - minSleep + 1)) + minSleep;
  console.log(` - Waiting: ${l}s ...`);
  await delay(2000 * l);

  count++;

  if (count < number) {
    console.clear();
    await Start();
  }
};

Start();
