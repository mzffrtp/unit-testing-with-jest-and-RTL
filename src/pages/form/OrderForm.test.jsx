import {render,screen} from "@testing-library/react";
import OrderForm from "./OrderForm";
import  userEvent from "@testing-library/user-event";


test("btn activ when checkbox clicked", async() =>{
    const user = userEvent.setup();
    render(<OrderForm />);

    const termsCheck = screen.getByRole("checkbox", {name:/I accept the terms and conditions/i});
    const orderBtn = screen.getByText(/order/i);

    expect (termsCheck).not.toBeChecked()
    expect(orderBtn).toBeDisabled()

    await user.click(termsCheck);
    expect(orderBtn).toBeEnabled();

    await user.click(termsCheck)
    expect(orderBtn).toBeDisabled();
})