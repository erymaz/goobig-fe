import tw from 'twin.macro';
import { ReactComponent as Ticket } from 'assets/svg/ticket_white.svg';
import { ReactComponent as Hammer } from 'assets/svg/hammer_white.svg';
import { ReactComponent as Gem } from 'assets/svg/gem_white.svg';
import { ReactComponent as Percent } from 'assets/svg/percent_white.svg';
import { ReactComponent as Doller } from 'assets/svg/doller_white.svg';
import { ReactComponent as Crown } from 'assets/svg/crown_white.svg';

export const Section3 = () => {
  return (
    <>
      <div className="desktop">
        <div tw='pt-[66px] pb-32 bg-[#FBF8FB] flex flex-col items-center'>
          <div tw='font-bold text-5xl leading-[130%] text-[#191819]'>
            Greater value for your NFTs
          </div>
          <div tw='font-medium text-2xl leading-9 text-[#5204A8]'>
            The most innovative NFT marketplace
          </div>
          <div tw='mt-[71px] flex w-[1136px]'>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#CC2FAC] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Ticket />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    NFT raffles
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    Sellers earn more, faster. Buyers have a chance to own NFTs for a fraction of the price
                  </div>
                </div>
              </div>
            </div>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#FF7582] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Doller />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    Rewards & staking
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    Earn <span tw='font-bold'>$GBIG</span> every time you trade NFTs
                  </div>
                </div>
              </div>
            </div>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#5EB84F] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Gem />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    Lending
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    Extract liquidity without selling.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tw='mt-[76px] flex w-[1136px]'>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#A042D2] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Percent />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    User levels
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    Earn activity points & increase you level
                  </div>
                </div>
              </div>
            </div>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#CE50CE] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Hammer />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    Auction Creator
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    Various auction types to sell your NFT for more
                  </div>
                </div>
              </div>
            </div>
            <div tw='flex-1'>
              <div tw='flex'>
                <div tw='w-[78px] h-[78px] bg-[#323133] rounded-[20px] flex justify-center items-center mt-[3px]'>
                  <Crown />
                </div>
                <div tw='flex-1 ml-4'>
                  <div tw='font-bold text-[20px] leading-[30px] text-[#191819]'>
                    Access to benefits
                  </div>
                  <div tw='font-normal text-base text-[#4B494C] w-[240px] mt-[3px]'>
                    The higher your level the bigger the benefits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div tw="flex flex-col items-center pt-[78px] pb-[75px] bg-[#FBF8FF]">
          <div tw='w-72 font-bold text-4xl leading-[130%] text-[#191819] text-center'>
            Greater value for your NFTs
          </div>
          <div tw='font-medium text-2xl leading-9 text-[#5204A8] mt-4 text-center'>
            The most innovative NFT marketplace
          </div>

          <div tw='mt-[60px] flex flex-col px-10'>
            <div tw='flex mb-7'>
              <img tw="w-[76px] h-[76px]" src="assets/png/nft_raffle.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  NFT raffles
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  Sellers earn more, faster. Buyers have a chance to own NFTs for a fraction of the price
                </div>
              </div>
            </div>
            <div tw='flex mb-7'>
              <img tw="w-[76px] h-[76px]" src="assets/png/reward_staking.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  Rewards & Staking
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  Earn $GBIG every time you trade NFTs
                </div>
              </div>
            </div>
            <div tw='flex mb-7'>
              <img tw="w-[76px] h-[76px]" src="assets/png/lending.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  Lending
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  Extract liquidity without selling.
                </div>
              </div>
            </div>
            <div tw='flex mb-7'>
              <img tw="w-[76px] h-[76px]" src="assets/png/user_level.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  User levels
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  Earn activity points & increase you level
                </div>
              </div>
            </div>
            <div tw='flex mb-7'>
              <img tw="w-[76px] h-[76px]" src="assets/png/auction.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  Auction Creator
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  Various auction types to sell your NFT for more
                </div>
              </div>
            </div>
            <div tw='flex'>
              <img tw="w-[76px] h-[76px]" src="assets/png/benefits.png" />
              <div tw='ml-4'>
                <div tw='font-bold text-[18px] text-[#191819]'>
                  Access to benefits
                </div>
                <div tw='font-normal text-sm text-[#4B494C] w-full mt-[3px]'>
                  The higher your level the bigger the benefits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}