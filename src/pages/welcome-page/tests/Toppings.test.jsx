import {render, screen} from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import Toppings from "../Toppings"

test("toppings rendered in cart", async ()=>{
    const user = userEvent.setup();
    render(<Toppings />)

    const totalPrice = screen.getByTestId("totalPrice")
    expect(totalPrice).toHaveTextContent("0")
    
    const topping1 = await screen.findByRole("checkbox",{name:/mochi/i})
    await user.click(topping1);
    expect(totalPrice).toHaveTextContent("2")

    await user.click(topping1)
    expect(totalPrice).toHaveTextContent("0")

})