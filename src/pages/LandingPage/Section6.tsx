import tw from 'twin.macro';
export const Section6 = () => {
  return (
    <>
      <div className="desktop">
        <div tw="pt-[38px] flex justify-center pb-[58px]">
          <div tw="w-[159px]"></div>
          <div tw='mt-36 w-[420px]'>
            <div tw='font-bold text-5xl leading-[130%] text-[#191819]'>
              Bigger rewards for everyone
            </div>
            <div tw='font-normal text-xl leading-[30px] text-[#5204A8] mt-[21px]'>
              Earn · Stake · Level up
            </div>
            <div tw='w-[317px] h-[91px] mt-[30px] bg-no-repeat' style={{backgroundImage: 'url("assets/png/$GBIG.png")'}}></div>
            <div tw='text-[#4B494C] text-[18px] leading-[150%]  font-normal mt-[11px] w-[338px]'>
              We pay you to trade. More activity means more rewards.
            </div>
          </div>
          <div tw='w-[774px] h-[421px] ml-[87px]' style={{backgroundImage: 'url("assets/png/bk01.png")'}}></div>
        </div>
      </div>
      <div className="mobile">
        <div tw="pt-[78px] flex flex-col items-center pb-[58px]">
          <div tw='w-72 font-bold text-center text-4xl leading-[130%] text-[#191819]'>
            Bigger rewards for everyone
          </div>
          <div tw='font-normal text-xl text-[#5204A8] mt-[21px]'>
            Earn · Stake · Level up
          </div>
          <img tw='w-[181px] h-[52px] mt-[30px] bg-no-repeat' src="assets/png/$GBIG.png" />
          <div tw='text-[#4B494C] text-[18px] text-center font-normal mt-8'>
            We pay you to trade.
          </div>
          <div tw='text-[#4B494C] text-[18px] text-center font-normal'>
            More activity means more rewards.
          </div>
          <img tw='w-full' src="assets/png/bk03.png" />
        </div>
      </div>
    </>
  )
}