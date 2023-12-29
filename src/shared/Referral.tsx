import {EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from 'react-share'

const Referral = () => {
    const shareUrl = "https://investment-k4tl.vercel.app/";

  return (
    <div className="sticky top-0 z-50 w-full  overflow-scroll custom-scrollbar">
      <h1 className="font-bold text-slate-400 text-3xl ml-4 mt-1">Share And Referrals</h1>
      <p className="text-sm text-gray-400 mt-1 ml-4">You could share our website to your friends and 
      family on social media platform like...</p>

      <FacebookShareButton url={shareUrl} className='ml-4 mt-5'>
        <FacebookIcon size={50} round={true}/>
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl} className='ml-4'>
        <WhatsappIcon size={50} round={true}/>
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl} className='ml-4'>
        <LinkedinIcon size={50} round={true}/>
      </LinkedinShareButton>

      <TelegramShareButton url={shareUrl} className='ml-4'>
        <TelegramIcon size={50} round={true}/>
      </TelegramShareButton>

      <TwitterShareButton url={shareUrl} className='ml-4'>
        <TwitterIcon size={50} round={true}/>
      </TwitterShareButton>

      <EmailShareButton url={shareUrl} className='ml-4'>
        <EmailIcon size={50} round={true}/>
      </EmailShareButton>
    </div>
  );
}

export default Referral;
