import {render,screen} from "@testing-library/react";
import Scoops from "../Scoops";
import userEvent from "@testing-library/user-event"



test("data from API rendered", async ()=>{
render(<Scoops/>)

    const imgs = await screen.findAllByRole("img")
    expect(imgs).toHaveLength(4);
})

test("add icecream rendered", async () =>{
    const user =userEvent.setup();
    render(<Scoops />)

    const totalPrice = screen.getByTestId(/totalPrice/i);
    expect(totalPrice).toHaveTextContent("0");

    const [btn1, btn2, btn3, btn4] = await screen.findAllByRole("button", {name:/add/i})

    await user.click(btn1);
    expect(totalPrice).toHaveTextContent("3")
})

test("delete button rendered", async () => {
    const user = userEvent.setup();
    render(<Scoops />)

    const totalPrice = screen.getByTestId(/totalPrice/i);

    const [del1, del2, del3, del4] = await screen.findAllByRole("button", {name:/delete/i})
    await user.click(del1)
    expect(totalPrice).toHaveTextContent("0")

})