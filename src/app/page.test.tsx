import {render, screen} from "@testing-library/react";
import Home from "./page";

describe('Home page', function () {
    it('should render', function () {
        render(<Home />)
        expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Hello World")
    });
});
