import tw from 'twin.macro';
import { ReactComponent as Percentage } from 'assets/svg/percentage.svg';
export const Section2 = () => {
  return (
    <>
      <div className="desktop">
        <div tw="flex w-[1154px] m-auto">
          <Percentage tw="flex-1" />
          <div tw="flex-1 pt-[111px] pl-9">
            <div tw="font-bold text-4xl leading-[72px] text-[#191819]">Dynamic Fees Model</div>
            <div tw="font-normal text-2xl leading-9 text-[#5204A8]">The more the users, the less the fees</div>
            <div tw="mt-[21px] font-normal text-lg text-[#4B494C]">Goobig has created a rewards and fees model that truly encapsulates web 3’s core principal of ownership.</div>
            <div tw="mt-[47px] flex">
              <div tw="flex-1">
                <div tw='w-[145px] h-[43px]' style={{background: 'url("assets/png/goobig.png") no-repeat'}}/>
                <div tw="mt-[15px] font-medium text-lg text-[#4B494C]">Dynamic 1.5% to 0.5%</div>
              </div>
              <div tw="flex-1">
                <div tw='w-[192px] h-[44px]' style={{background: 'url("assets/png/opensea.png") no-repeat'}}/>
                <div tw="mt-[14px] font-medium text-lg text-[#4B494C]">Fixed 2.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div tw="flex flex-col items-center pt-[78px] text-center">
          <div tw="w-72 font-bold text-4xl leading-[52px] text-[#191819]">Dynamic Fees Model</div>
          <div tw="w-72 font-normal text-xl leading-9 text-[#5204A8] mt-4">The more the users, the less the fees</div>
          <div tw="px-4 mt-5 font-normal text-lg text-[#4B494C]">Goobig has created a rewards and fees model that truly encapsulates web 3’s core principal of ownership.</div>
          <img tw="w-full" src="assets/png/percent.png" />
        </div>
      </div>
    </>
  )
}