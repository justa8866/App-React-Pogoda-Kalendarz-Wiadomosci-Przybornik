import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

export enum NavActionKind {
  profileMenuAnchorElSet = 'profileMenuAnchorElSet',
  mobileMenuAnchorElSet = 'mobileMenuAnchorElSet',
}

interface INavContextAction {
  type: NavActionKind;
  payload: HTMLElement | null;
}

interface INavContextState {
  profileMenuAnchorEl: HTMLElement | null;
  mobileMenuAnchorEl: HTMLElement | null;
}

const navReducer = (state: INavContextState, action: INavContextAction) => {
  switch (action.type) {
    case NavActionKind.profileMenuAnchorElSet:
      return {
        ...state,
        profileMenuAnchorEl: action.payload,
      };
    case NavActionKind.mobileMenuAnchorElSet:
      return {
        ...state,
        mobileMenuAnchorEl: action.payload,
      };
    default:
      return state;
  }
};

const initialState: INavContextState = {
  profileMenuAnchorEl: null,
  mobileMenuAnchorEl: null,
};

const useValue = () => useReducer(navReducer, initialState);

const NavContext = createContext<[INavContextState, Dispatch<INavContextAction>] | null>(null);

export const useNav = () => {
  const value = useContext(NavContext);
  if (value === null) throw new Error('Please add NavProvider');

  return value;
};

type Props = {
  children?: ReactNode;
};

const NavProvider: FunctionComponent<Props> = ({ children }: Props) => (
  <NavContext.Provider value={useValue()}>{children}</NavContext.Provider>
);

export default NavProvider;
