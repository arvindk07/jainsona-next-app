"use client";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/919599203236", "_blank");
  };

  return (
    <div
      className="fixed bottom-4 right-4 h-10 w-10 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <img src="/whats_app_icon.png" alt="whatsapp" className="h-full w-full" />
    </div>
  );
};

export default WhatsAppButton;
