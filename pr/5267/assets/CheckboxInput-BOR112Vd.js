import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{E as ee,N as r,P as i,T as a}from"./ime-cU6wEDvZ.js";import{F as o,t as s}from"./utils-CWsdskp6.js";import{t as c}from"./jsx-runtime-DqZldVDK.js";import{n as l}from"./useTooltip-BVneQO_f.js";import{n as u,t as d}from"./useMergedRefs-C7At_pUq.js";import{n as f,t as p}from"./Spinner-uM_yA6N7.js";import{n as m,r as h}from"./hooks-D80Z1_Vt.js";import{t as g}from"./Tooltip-vlXKe97t.js";import{a as te,n as _,r as v,t as y}from"./Indicator-BFlk8urq.js";import{i as b,n as x,r as S,t as C}from"./FieldStatus-BXyLxHH2.js";import{n as w,t as T}from"./useResolvedRequired-CTayv7sr.js";var E,D,O=e((()=>{E=t(n(),1),D=(0,E.createContext)(null),D.displayName=`CheckboxListContext`}));function k({label:e,isLabelHidden:t=!1,description:n,onChange:r,changeAction:a,isLoading:s=!1,value:c,isDisabled:d=!1,htmlName:p,disabledMessage:m,isReadOnly:g=!1,isOptional:v=!1,isRequired:y=!1,size:b=`md`,onFocus:x,onBlur:T,labelIcon:E,status:O,width:k,xstyle:F,className:I,style:ne,ref:re,...L}){let R=(0,A.useId)(),z=(0,A.useId)(),B=(0,A.useId)(),V=w({isRequired:y,isOptional:v}),[,H]=(0,A.useTransition)(),[U,W]=(0,A.useOptimistic)(c),G=s||U!==c,K=d&&!!m,q=(0,A.use)(D),J=d&&(K||(q?.hasDisabledMessage??!1)),Y=l({placement:`above`,focusTrigger:`always`,isEnabled:K}),ie=te(`checkbox`),X=(0,A.useRef)(null),{focusProps:ae}=h(X,d),Z=U===`indeterminate`,Q=U===!0,oe=(0,A.useCallback)(e=>{e&&(e.indeterminate=Z)},[Z]),$=[];n&&$.push(z),O?.message&&$.push(B),K&&$.push(Y.describedBy);let se=$.length>0?$.join(` `):void 0;return(0,j.jsxs)(`div`,{...o(ee(`checkbox-input`,{size:b}),i(k!=null&&P.width(k),F),I,ne),children:[(0,j.jsxs)(`div`,{ref:e=>{Y.interactionRef(e)},...i(M.container,t&&M.containerLabelHidden,!d&&_),children:[(0,j.jsxs)(`div`,{...i(M.checkboxWrapper,N[b]),...ae,children:[(0,j.jsx)(`input`,{...L,ref:u(re,oe,Y.positionRef),id:R,type:`checkbox`,name:d?void 0:p,checked:Q,disabled:d&&!J,"aria-disabled":J?`true`:void 0,form:J?``:void 0,readOnly:g,required:y,"aria-required":V?`true`:void 0,onChange:e=>{if(d||G||g)return;let t=e.target.checked;r?.(t,e),a&&!e.defaultPrevented&&H(async()=>{W(t),await a(t,e)})},onFocus:x,onBlur:T,"aria-readonly":g||void 0,"aria-describedby":se,"aria-invalid":O?.type===`error`?!0:void 0,"aria-busy":G||void 0,...i(M.input,N[b],d&&M.inputDisabled)}),(0,j.jsx)(`span`,{ref:X,className:`astryxjp7ctv`,children:(0,j.jsx)(ie,{state:Z?`indeterminate`:Q?`checked`:`unchecked`,size:b,isDisabled:d,children:G?(0,j.jsx)(f,{size:`sm`,shade:`inherit`}):null})})]}),(0,j.jsx)(`div`,{className:`astryx78zum5 astryxdt5ytf astryx1lsbc85`,children:(0,j.jsx)(S,{label:e,inputID:R,isLabelHidden:t,isDisabled:d,isOptional:v,isRequired:y,labelIcon:E,description:n,descriptionID:z})})]}),O?.message&&(0,j.jsx)(C,{type:O.type,message:O.message,id:B,variant:`detached`}),K&&Y.renderTooltip(m)]})}var A,j,M,N,P,F=e((()=>{A=t(n(),1),r(),b(),x(),p(),g(),s(),v(),m(),T(),y(),a(),O(),d(),j=c(),M={container:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kOIVth:`astryx1txdalj`,$$css:!0},containerLabelHidden:{kOIVth:`astryxxhr3t`,$$css:!0},checkboxWrapper:{kVAEAm:`astryx1n2onr6`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kHBbk8:`astryxc8icb0`,$$css:!0},input:{kVAEAm:`astryx10l6tqk`,kogj98:`astryx1ghz6dp`,kmVPX3:`astryx1717udv`,kSiTet:`astryxg01cxk`,kkrTdU:`astryx1ypdohk`,kY2c9j:`astryx1vjfegm`,k7Eaqz:`astryxkagaj0`,kAzted:`astryx80b3aj`,k87sOh:`astryxijlfn0`,kLqNvP:`astryx1hsn8va`,k3aq6I:`astryx8i4i9p`,$$css:!0},inputDisabled:{kkrTdU:`astryx1h6gzvc`,$$css:!0}},N={sm:{kzqmXN:`astryxw4jnvo`,kZKoxP:`astryx1qx5ct2`,$$css:!0},md:{kzqmXN:`astryxvy4d1p`,kZKoxP:`astryxxk0z11`,$$css:!0}},P={width:e=>[{kzqmXN:e==null?e:`astryx5lhr3w`,$$css:!0},{"--x-width":(e=>typeof e==`number`?e+`px`:e??void 0)(e)}]},k.displayName=`CheckboxInput`,k.__docgenInfo={description:`A checkbox input component for toggling boolean values.

@example
\`\`\`
<CheckboxInput
  label="Accept terms"
  value={accepted}
  onChange={setAccepted}
/>
<CheckboxInput
  label="Subscribe"
  description="Receive weekly updates"
  value={subscribed}
  onChange={setSubscribed}
/>
\`\`\``,methods:[],displayName:`CheckboxInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:"Ref forwarded to the underlying `<input>` element"},label:{required:!0,tsType:{name:`string`},description:`Label text for the checkbox (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`},{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the checkbox state changes.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  checked: boolean,
  e: ChangeEvent<HTMLInputElement>,
) => void | Promise<void>`,signature:{arguments:[{type:{name:`boolean`},name:`checked`},{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`e`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange if not prevented.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},value:{required:!0,tsType:{name:`union`,raw:`boolean | 'indeterminate'`,elements:[{name:`boolean`},{name:`literal`,value:`'indeterminate'`}]},description:`Whether the checkbox is checked, unchecked, or indeterminate.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},htmlName:{required:!1,tsType:{name:`string`},description:`The HTML name attribute for the underlying checkbox input.
Useful for form submissions.`},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the checkbox is disabled. When set together with
\`isDisabled\`, the checkbox shows a tooltip with this text on hover and
keyboard focus, and the control stays focusable (via \`aria-disabled\`) so
the reason is discoverable by keyboard and assistive technology.
Activation stays blocked.

Use this instead of wrapping a disabled checkbox in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<CheckboxInput
  label="Accept terms"
  value={accepted}
  isDisabled
  disabledMessage="Terms are managed by your administrator"
/>
\`\`\``},isReadOnly:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:`false`,computed:!1}},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},size:{required:!1,tsType:{name:`unknown`},description:`The size of the checkbox.
- 'sm': Compact size (28px row height)
- 'md': Default size (36px row height)
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the checkbox receives focus.`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`e`}],return:{name:`void`}}},description:`Callback fired when the checkbox loses focus.`},labelIcon:{required:!1,tsType:{name:`union`,raw:`ReactNode | IconType`,elements:[{name:`ReactNode`},{name:`ComponentType`,elements:[{name:`SVGProps`,elements:[{name:`SVGSVGElement`}],raw:`SVGProps<SVGSVGElement>`}],raw:`ComponentType<SVGProps<SVGSVGElement>>`}]},description:`Icon to display before the label text.`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the checkbox.
When set with a message, displays a colored message box below the checkbox.`}},composes:[`Omit`]}}));export{O as i,F as n,D as r,k as t};