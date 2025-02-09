import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import TypographyH4 from "@/components/ui/typographyH4";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetState } from "@/store/slices/formSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnPreviewClick = () => {
    navigate("/form-preview", {});
  };

  const handleOnResetClick = () => {
    dispatch(resetState());
  };
  return (
    <Card className="h-[40px] p-2 pt-1 rounded-none">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 justify-start ">
          <img src={logo} alt="logo" width="30px" height={"30px"} />
          <TypographyH4> Form builder </TypographyH4>
        </div>
        <div className="flex gap-2">
          <Button className="h-6" onClick={handleOnResetClick}>
            {" "}
            Reset
          </Button>
          <Button className="h-6" onClick={handleOnPreviewClick}>
            {" "}
            Preview Form
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Header;
