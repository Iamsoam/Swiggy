import {render ,screen} from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'




test("contact component should render on screen",()=>{
          render(<Contact/>)

    const heading = screen.getByRole('heading')


    expect(heading).toBeInTheDocument();


    

})