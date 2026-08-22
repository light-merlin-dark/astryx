import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{E as r,M as ee,N as i,P as a,T as o,j as s,n as te}from"./ime-cU6wEDvZ.js";import{F as ne,Q as c,Tt as l,a as re,at as ie,ct as u,j as ae,mt as oe,o as d,t as f,y as se}from"./utils-CWsdskp6.js";import{t as p}from"./jsx-runtime-DqZldVDK.js";import{n as ce}from"./useTooltip-BVneQO_f.js";import{n as le,t as m}from"./useMergedRefs-C7At_pUq.js";import{n as ue,t as h}from"./Spinner-uM_yA6N7.js";import{n as g,t as _}from"./VisuallyHidden-DDrJpIxj.js";import{n as v,r as de}from"./SizeContext-fcGnTOs5.js";import{r as fe,t as pe}from"./i18n-BFM6n1PK.js";import{t as me}from"./Icon-c22PvhYu.js";import{t as he}from"./Icon-5B0tL1Wv.js";import{a as ge,i as y}from"./hooks-D80Z1_Vt.js";import{t as b}from"./Tooltip-vlXKe97t.js";import{n as _e}from"./usePopover-Bzm_FYt9.js";import{t as ve}from"./Popover-crsbkwns.js";import{i as ye,n as be,o as xe,t as x}from"./Calendar-At3mQlO4.js";import{t as Se}from"./Field-BiW3EH1b.js";import{a as Ce,c as S,n as we,o as Te,s as Ee,t as C}from"./Field-Bb455rNT.js";import{n as De,t as w}from"./useResolvedRequired-CTayv7sr.js";import{a as T,i as Oe,n as E,r as ke}from"./InputGroupContext-BonpDGzu.js";function D({label:e,isLabelHidden:t=!1,description:n,isOptional:i=!1,isRequired:o=!1,isDisabled:s=!1,disabledMessage:u,value:d,onChange:f,changeAction:p,isLoading:m=!1,min:h,max:_,dateConstraints:v,placeholder:pe,size:he,status:y,statusVariant:b=`attached`,labelTooltip:ve,hasClear:ye=!1,numberOfMonths:x=1,weekStartsOn:C,format:w=`date_long`,width:T,xstyle:E,className:D,style:M,ref:N,...Ae}){let P=fe(),je=De({isRequired:o,isOptional:i}),Me=pe??P(`@astryx.dateInput.placeholder`),F=de(he,`md`),I=(0,O.useId)(),Ne=(0,O.useId)(),Pe=(0,O.useId)(),Fe=(0,O.useId)(),L=(0,O.useRef)(null),Ie=(0,O.useRef)(null),R=(0,O.useRef)(void 0),z=ke(),[,Le]=(0,O.useTransition)(),[B,Re]=(0,O.useOptimistic)(d),V=m||B!==d,H=s||V,U=s&&!!u,W=ce({placement:`above`,focusTrigger:`always`,isEnabled:U}),{isDateDisabled:G}=xe({min:h,max:_,dateConstraints:v}),{statusIcon:ze,describedBy:Be}=ge({status:y,statusVariant:b,isInGroup:!!z}),{ariaLabelledBy:Ve,ariaDescribedBy:He}=se(Ne,[n?Pe:null,b!==`tooltip`&&y?.message?Fe:null,Be,U?W.describedBy:null],z),[K,q]=(0,O.useState)(null),J=(0,O.useRef)(d);d!==J.current&&(J.current=d,d!==R.current&&(R.current=void 0,K!==null&&q(null)));let Ue=(0,O.useCallback)(e=>typeof w==`function`?w(e):ie(oe(e),w),[w]),We=K===null?B&&/^\d{4}-\d{2}-\d{2}$/.test(B)?Ue(B):``:K,Y=K===null||!K.trim()?!0:c(K)!==null,X=_e({dialogLabel:P(`@astryx.dateInput.dialogLabel`),closeButtonLabel:P(`@astryx.dateInput.closeCalendar`),onHide:()=>{ae()&&L.current?.focus()}}),Ge=(0,O.useCallback)(()=>{H||(X.isOpen?X.hide():X.show())},[H,X]),Ke=(0,O.useCallback)(()=>{!H&&!X.isOpen&&X.show({skipAutoFocus:!0})},[H,X]),Z=(0,O.useCallback)(e=>{V||(f?.(e),p&&Le(async()=>{Re(e),await p(e)}))},[V,f,p,Le,Re]),qe=(0,O.useCallback)(()=>{Z(void 0),L.current?.focus()},[Z]),Je=(0,O.useCallback)(e=>{Z(e),q(null),X.hide()},[Z,X]),Ye=(0,O.useCallback)(e=>{if(H)return;let t=e.target.value;q(t);let n=c(t);if(n&&l(n)!==d&&!G(n)){let e=l(n);R.current=e,Z(e),Ie.current?.navigateTo(e)}},[d,Z,G,H]),Q=(0,O.useCallback)(()=>{if(K===null)return;if(!K.trim()){d!==void 0&&Z(void 0),q(null);return}let e=c(K);if(e&&!G(e)){let t=l(e);t!==d&&Z(t)}q(null)},[K,d,Z,G]),Xe=(0,O.useCallback)(()=>{Q()},[Q]),Ze=(0,O.useCallback)(e=>{te(e.nativeEvent)||(e.key===`Escape`&&X.isOpen?(e.preventDefault(),X.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!X.isOpen?(e.preventDefault(),H||X.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),Q()))},[X,Q,H]),$=(0,k.jsxs)(`div`,{ref:e=>{X.triggerRef(e),W.ref(e)},...Ae,...ne(r(`date-input`,{size:F,status:y?.type??null,disabled:s?`disabled`:null}),a(S.base,j[F],H&&S.disabled,y&&Ce[y.type],y&&!H&&Ee[y.type],y&&Te[y.type],z&&Oe.inGroup,E),D,M),children:[z&&(0,k.jsx)(g,{id:Ne,children:e}),(0,k.jsx)(`button`,{type:`button`,onClick:Ge,disabled:H,"aria-label":X.isOpen?P(`@astryx.dateInput.toggleCalendarClose`):P(`@astryx.dateInput.openCalendar`),...a(re.focusVisible,A.iconButton,H&&A.iconButtonDisabled),children:(0,k.jsx)(me,{icon:`calendar`,size:`sm`,color:`secondary`,...r(`date-input-toggle-icon`,{state:X.isOpen?`expanded`:`collapsed`})})}),(0,k.jsx)(`input`,{ref:le(N,L),id:I,type:`text`,role:`combobox`,value:We,onChange:Ye,onBlur:Xe,onClick:Ke,onKeyDown:Ze,placeholder:Me,disabled:H&&!U,"aria-disabled":U?`true`:void 0,readOnly:U||void 0,"aria-labelledby":Ve,"aria-describedby":He,"aria-required":je?`true`:void 0,"aria-invalid":y?.type===`error`||!Y?`true`:void 0,"aria-busy":V||void 0,"aria-expanded":X.isOpen,"aria-haspopup":`dialog`,"aria-controls":X.isOpen?X.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!H<<1|!Y<<0]}),(0,k.jsx)(g,{as:`div`,role:`alert`,"aria-live":`assertive`,children:Y?``:P(`@astryx.dateInput.invalidDate`)}),ye&&d!==void 0&&!H&&(0,k.jsx)(we,{label:P(`@astryx.dateInput.clear`,{label:e}),onClick:qe,iconClassName:ee(`date-input-clear-icon`)}),V&&(0,k.jsx)(ue,{size:`sm`}),ze,X.render((0,k.jsx)(be,{handleRef:Ie,mode:`single`,value:B,onChange:Je,min:h,max:_,dateConstraints:v,numberOfMonths:x,weekStartsOn:C}),{placement:`below`,alignment:`start`}),U&&W.renderTooltip(u)]});return z?$:(0,k.jsx)(Se,{label:e,isLabelHidden:t,description:n,inputID:I,descriptionID:n?Pe:void 0,isOptional:i,isRequired:o,isDisabled:s,status:y?{type:y.type,message:y.message,messageID:y.message?Fe:void 0}:void 0,statusVariant:b,labelTooltip:ve,width:T,children:$})}var O,k,A,j,M=e((()=>{O=t(n(),1),i(),C(),he(),_(),E(),T(),v(),h(),x(),ye(),y(),w(),ve(),b(),f(),u(),k=p(),o(),d(),s(),pe(),m(),A={iconButton:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmVPX3:`astryx1717udv`,kg3NbH:null,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,k8WAf4:null,kLKAdn:null,kGO01o:null,kogj98:`astryx1ghz6dp`,kUOVxO:null,keTefX:null,koQZXg:null,k71WvV:null,km5ZXQ:null,kqGvvJ:null,keoZOQ:null,k1K539:null,kMzoRj:`astryxc342km`,kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,ksu8eU:`astryxng3xce`,kJRH4f:null,kVhnKS:null,k4WBpm:null,k8ry5P:null,kSWEuD:null,kDUl1X:null,kPef9Z:null,kfdmCh:null,kWkggS:`astryxjbqb8w`,kkrTdU:`astryx1ypdohk`,kaIpWk:`astryxh6dtrn`,krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},iconButtonDisabled:{kkrTdU:`astryx1h6gzvc`,$$css:!0}},j={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},D.displayName=`DateInput`,D.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
/>
\`\`\``,methods:[],displayName:`DateInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the field stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`The selected date in ISO format (YYYY-MM-DD).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the date changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Minimum selectable date in ISO format.`},max:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Maximum selectable date in ISO format.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions. Date is disabled if ANY function returns false.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no date is selected.
@default "Select a date"`},size:{required:!1,tsType:{name:`unknown`},description:`The size of the input.
- 'sm': Compact size (18px height)
- 'md': Default size (26px height)
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.
When set, displays a colored border and status icon.
If message is provided, displays below the input.`},statusVariant:{required:!1,tsType:{name:`FieldStatusVariantMap`},description:`How the status message is placed relative to the input.
- 'attached': message overlaps directly below the input (bordered treatment)
- 'detached': message floats below as a separate element with spacing
- 'tooltip': no message box; the status icon becomes a focusable info-tip button that reveals the message on hover, keyboard focus, or tap
@default 'attached'`,defaultValue:{value:`'attached'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a date is set.
When clicked, resets the value to undefined and returns focus to the input.
@default false`,defaultValue:{value:`false`,computed:!1}},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar popover.
@default 1`,defaultValue:{value:`1`,computed:!1}},weekStartsOn:{required:!1,tsType:{name:`union`,raw:`DayOfWeek | DayOfWeekName`,elements:[{name:`union`,raw:`0 | 1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},{name:`union`,raw:`| 'sun'
| 'mon'
| 'tue'
| 'wed'
| 'thu'
| 'fri'
| 'sat'`,elements:[{name:`literal`,value:`'sun'`},{name:`literal`,value:`'mon'`},{name:`literal`,value:`'tue'`},{name:`literal`,value:`'wed'`},{name:`literal`,value:`'thu'`},{name:`literal`,value:`'fri'`},{name:`literal`,value:`'sat'`}]}]},description:`First day of week in the calendar popover. Accepts a number
(0 = Sunday … 6 = Saturday) or a three-letter day name ('sun'–'sat',
case-insensitive).
@default 0`},format:{required:!1,tsType:{name:`union`,raw:`DateInputFormat | ((value: ISODateString) => string)`,elements:[{name:`Extract`,elements:[{name:`union`,raw:`| 'relative'
| 'relative_short'
| 'auto'
| 'date'
| 'date_long'
| 'date_weekday'
| 'date_time'
| 'time'
| 'system_date'
| 'system_date_time'
| 'system_time'
| 'unix_seconds'`,elements:[{name:`literal`,value:`'relative'`},{name:`literal`,value:`'relative_short'`},{name:`literal`,value:`'auto'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'date_time'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'system_date'`},{name:`literal`,value:`'system_date_time'`},{name:`literal`,value:`'system_time'`},{name:`literal`,value:`'unix_seconds'`}]},{name:`union`,raw:`'date' | 'date_long' | 'date_weekday' | 'system_date'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'system_date'`}]}],raw:`Extract<
  TimestampFormat,
  'date' | 'date_long' | 'date_weekday' | 'system_date'
>`},{name:`unknown`}]},description:`How the committed date value is displayed in the text field. Accepts a
named format reused from \`Timestamp\`'s \`format\` vocabulary (so the same
literal renders the same date shape in both components) or a function that
maps the ISO value to a custom display string.

- \`'date_long'\` (default): long-month date, e.g. "March 21, 2026"
- \`'date'\`: short-month date, e.g. "Mar 21, 2026"
- \`'date_weekday'\`: short weekday + date, e.g. "Wed, Mar 21, 2026"
- \`'system_date'\`: ISO 8601 calendar date, e.g. "2026-03-21"
- \`(value: ISODateString) => string\`: fully custom display string

Formatting applies only to the committed value — never to text the user is
actively typing. A custom function's output that \`parseDateInput\` cannot
read back can't be re-committed after an edit; external \`value\` changes
always recompute the display from the ISO value.

@default 'date_long'
@example
\`\`\`
<DateInput label="Ship date" value={date} onChange={setDate} format="date" />
<DateInput
  label="Ship date"
  value={date}
  onChange={setDate}
  format={iso => new Date(iso + 'T00:00').toDateString()}
/>
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),N=e((()=>{M()}));export{D as n,M as r,N as t};