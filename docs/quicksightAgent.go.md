# `quicksightAgent` Submodule <a name="`quicksightAgent` Submodule" id="@cdktn/provider-awscc.quicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAgent <a name="QuicksightAgent" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgent(scope Construct, id *string, config QuicksightAgentConfig) QuicksightAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig">QuicksightAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig">QuicksightAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput">PutCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors">ResetActionConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle">ResetAgentLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput">ResetCustomPromptInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId">ResetIconId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces">ResetSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts">ResetStarterPrompts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage">ResetWelcomeMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPromptInput` <a name="PutCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput"></a>

```go
func PutCustomPromptInput(value QuicksightAgentCustomPromptInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putCustomPromptInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActionConnectors` <a name="ResetActionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetActionConnectors"></a>

```go
func ResetActionConnectors()
```

##### `ResetAgentLifecycle` <a name="ResetAgentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetAgentLifecycle"></a>

```go
func ResetAgentLifecycle()
```

##### `ResetCustomPromptInput` <a name="ResetCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetCustomPromptInput"></a>

```go
func ResetCustomPromptInput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIconId` <a name="ResetIconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetIconId"></a>

```go
func ResetIconId()
```

##### `ResetSpaces` <a name="ResetSpaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetSpaces"></a>

```go
func ResetSpaces()
```

##### `ResetStarterPrompts` <a name="ResetStarterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetStarterPrompts"></a>

```go
func ResetStarterPrompts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWelcomeMessage` <a name="ResetWelcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.resetWelcomeMessage"></a>

```go
func ResetWelcomeMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.QuicksightAgent_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.QuicksightAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.QuicksightAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.QuicksightAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput">CustomPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface">CustomPromptInterface</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput">ActionConnectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput">AgentLifecycleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput">CustomPromptInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput">IconIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput">SpacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput">StarterPromptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput">WelcomeMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors">ActionConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle">AgentLifecycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId">IconId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces">Spaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts">StarterPrompts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `CustomPromptInput`<sup>Required</sup> <a name="CustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInput"></a>

```go
func CustomPromptInput() QuicksightAgentCustomPromptInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference">QuicksightAgentCustomPromptInputOutputReference</a>

---

##### `CustomPromptInterface`<sup>Required</sup> <a name="CustomPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInterface"></a>

```go
func CustomPromptInterface() QuicksightAgentCustomPromptInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference">QuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tags"></a>

```go
func Tags() QuicksightAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList">QuicksightAgentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ActionConnectorsInput`<sup>Optional</sup> <a name="ActionConnectorsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectorsInput"></a>

```go
func ActionConnectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `AgentLifecycleInput`<sup>Optional</sup> <a name="AgentLifecycleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycleInput"></a>

```go
func AgentLifecycleInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `CustomPromptInputInput`<sup>Optional</sup> <a name="CustomPromptInputInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.customPromptInputInput"></a>

```go
func CustomPromptInputInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IconIdInput`<sup>Optional</sup> <a name="IconIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconIdInput"></a>

```go
func IconIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpacesInput`<sup>Optional</sup> <a name="SpacesInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spacesInput"></a>

```go
func SpacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StarterPromptsInput`<sup>Optional</sup> <a name="StarterPromptsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPromptsInput"></a>

```go
func StarterPromptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WelcomeMessageInput`<sup>Optional</sup> <a name="WelcomeMessageInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessageInput"></a>

```go
func WelcomeMessageInput() *string
```

- *Type:* *string

---

##### `ActionConnectors`<sup>Required</sup> <a name="ActionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.actionConnectors"></a>

```go
func ActionConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentLifecycle`<sup>Required</sup> <a name="AgentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.agentLifecycle"></a>

```go
func AgentLifecycle() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IconId`<sup>Required</sup> <a name="IconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.iconId"></a>

```go
func IconId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Spaces`<sup>Required</sup> <a name="Spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.spaces"></a>

```go
func Spaces() *[]*string
```

- *Type:* *[]*string

---

##### `StarterPrompts`<sup>Required</sup> <a name="StarterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.starterPrompts"></a>

```go
func StarterPrompts() *[]*string
```

- *Type:* *[]*string

---

##### `WelcomeMessage`<sup>Required</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.welcomeMessage"></a>

```go
func WelcomeMessage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAgentConfig <a name="QuicksightAgentConfig" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AgentId: *string,
	AwsAccountId: *string,
	Name: *string,
	ActionConnectors: *[]*string,
	AgentLifecycle: *string,
	CustomPromptInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAgent.QuicksightAgentCustomPromptInput,
	Description: *string,
	IconId: *string,
	Spaces: *[]*string,
	StarterPrompts: *[]*string,
	Tags: interface{},
	WelcomeMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId">AgentId</a></code> | <code>*string</code> | The unique identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | The ID of the Amazon Web Services account where the agent is being created. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name">Name</a></code> | <code>*string</code> | The display name of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors">ActionConnectors</a></code> | <code>*[]*string</code> | A list of ActionConnector ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle">AgentLifecycle</a></code> | <code>*string</code> | The lifecycle stage of the agent. PREVIEW or PUBLISHED. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput">CustomPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a></code> | Custom prompt configuration. Specify either ExistingPrompt or NewPrompt. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description">Description</a></code> | <code>*string</code> | A description of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId">IconId</a></code> | <code>*string</code> | The icon identifier for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces">Spaces</a></code> | <code>*[]*string</code> | A list of Space ARNs (max 10) attached to the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts">StarterPrompts</a></code> | <code>*[]*string</code> | A list of up to 3 starter prompts displayed to users. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to associate with the agent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | The welcome message displayed when a user opens the agent. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

The unique identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#agent_id QuicksightAgent#agent_id}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

The ID of the Amazon Web Services account where the agent is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#aws_account_id QuicksightAgent#aws_account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#name QuicksightAgent#name}

---

##### `ActionConnectors`<sup>Optional</sup> <a name="ActionConnectors" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.actionConnectors"></a>

```go
ActionConnectors *[]*string
```

- *Type:* *[]*string

A list of ActionConnector ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#action_connectors QuicksightAgent#action_connectors}

---

##### `AgentLifecycle`<sup>Optional</sup> <a name="AgentLifecycle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.agentLifecycle"></a>

```go
AgentLifecycle *string
```

- *Type:* *string

The lifecycle stage of the agent. PREVIEW or PUBLISHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#agent_lifecycle QuicksightAgent#agent_lifecycle}

---

##### `CustomPromptInput`<sup>Optional</sup> <a name="CustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.customPromptInput"></a>

```go
CustomPromptInput QuicksightAgentCustomPromptInput
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput">QuicksightAgentCustomPromptInput</a>

Custom prompt configuration. Specify either ExistingPrompt or NewPrompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#custom_prompt_input QuicksightAgent#custom_prompt_input}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#description QuicksightAgent#description}

---

##### `IconId`<sup>Optional</sup> <a name="IconId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.iconId"></a>

```go
IconId *string
```

- *Type:* *string

The icon identifier for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#icon_id QuicksightAgent#icon_id}

---

##### `Spaces`<sup>Optional</sup> <a name="Spaces" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.spaces"></a>

```go
Spaces *[]*string
```

- *Type:* *[]*string

A list of Space ARNs (max 10) attached to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#spaces QuicksightAgent#spaces}

---

##### `StarterPrompts`<sup>Optional</sup> <a name="StarterPrompts" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.starterPrompts"></a>

```go
StarterPrompts *[]*string
```

- *Type:* *[]*string

A list of up to 3 starter prompts displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#starter_prompts QuicksightAgent#starter_prompts}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to associate with the agent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#tags QuicksightAgent#tags}

---

##### `WelcomeMessage`<sup>Optional</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentConfig.property.welcomeMessage"></a>

```go
WelcomeMessage *string
```

- *Type:* *string

The welcome message displayed when a user opens the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#welcome_message QuicksightAgent#welcome_message}

---

### QuicksightAgentCustomPromptInput <a name="QuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentCustomPromptInput {
	ExistingPrompt: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt,
	NewPrompt: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt">ExistingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a></code> | Reference to an existing custom prompt profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt">NewPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a></code> | Parameters for creating a new custom prompt configuration. |

---

##### `ExistingPrompt`<sup>Optional</sup> <a name="ExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.existingPrompt"></a>

```go
ExistingPrompt QuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

Reference to an existing custom prompt profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#existing_prompt QuicksightAgent#existing_prompt}

---

##### `NewPrompt`<sup>Optional</sup> <a name="NewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInput.property.newPrompt"></a>

```go
NewPrompt QuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

Parameters for creating a new custom prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#new_prompt QuicksightAgent#new_prompt}

---

### QuicksightAgentCustomPromptInputExistingPrompt <a name="QuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentCustomPromptInputExistingPrompt {
	ModelProfileId: *string,
	QbsAwsAccountId: *string,
	SubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId">ModelProfileId</a></code> | <code>*string</code> | The identifier of the model profile. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId">QbsAwsAccountId</a></code> | <code>*string</code> | The QBS AWS account identifier. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The subscription identifier. |

---

##### `ModelProfileId`<sup>Optional</sup> <a name="ModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.modelProfileId"></a>

```go
ModelProfileId *string
```

- *Type:* *string

The identifier of the model profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#model_profile_id QuicksightAgent#model_profile_id}

---

##### `QbsAwsAccountId`<sup>Optional</sup> <a name="QbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.qbsAwsAccountId"></a>

```go
QbsAwsAccountId *string
```

- *Type:* *string

The QBS AWS account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#qbs_aws_account_id QuicksightAgent#qbs_aws_account_id}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The subscription identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#subscription_id QuicksightAgent#subscription_id}

---

### QuicksightAgentCustomPromptInputNewPrompt <a name="QuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentCustomPromptInputNewPrompt {
	CustomInstructions: *string,
	Identity: *string,
	OutputStyle: *string,
	ResponseLength: *string,
	Tone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions">CustomInstructions</a></code> | <code>*string</code> | Custom instructions for the agent behavior. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity">Identity</a></code> | <code>*string</code> | The identity or persona of the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle">OutputStyle</a></code> | <code>*string</code> | The output style for the agent responses. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength">ResponseLength</a></code> | <code>*string</code> | The desired response length for the agent. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone">Tone</a></code> | <code>*string</code> | The tone used in agent responses. |

---

##### `CustomInstructions`<sup>Optional</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.customInstructions"></a>

```go
CustomInstructions *string
```

- *Type:* *string

Custom instructions for the agent behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#custom_instructions QuicksightAgent#custom_instructions}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

The identity or persona of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#identity QuicksightAgent#identity}

---

##### `OutputStyle`<sup>Optional</sup> <a name="OutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.outputStyle"></a>

```go
OutputStyle *string
```

- *Type:* *string

The output style for the agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#output_style QuicksightAgent#output_style}

---

##### `ResponseLength`<sup>Optional</sup> <a name="ResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.responseLength"></a>

```go
ResponseLength *string
```

- *Type:* *string

The desired response length for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#response_length QuicksightAgent#response_length}

---

##### `Tone`<sup>Optional</sup> <a name="Tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt.property.tone"></a>

```go
Tone *string
```

- *Type:* *string

The tone used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#tone QuicksightAgent#tone}

---

### QuicksightAgentCustomPromptInterface <a name="QuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentCustomPromptInterface {

}
```


### QuicksightAgentTags <a name="QuicksightAgentTags" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

&quicksightagent.QuicksightAgentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#key QuicksightAgent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_agent#value QuicksightAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="QuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentCustomPromptInputExistingPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAgentCustomPromptInputExistingPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId">ResetModelProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId">ResetQbsAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelProfileId` <a name="ResetModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetModelProfileId"></a>

```go
func ResetModelProfileId()
```

##### `ResetQbsAwsAccountId` <a name="ResetQbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetQbsAwsAccountId"></a>

```go
func ResetQbsAwsAccountId()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput">ModelProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput">QbsAwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">ModelProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">QbsAwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelProfileIdInput`<sup>Optional</sup> <a name="ModelProfileIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileIdInput"></a>

```go
func ModelProfileIdInput() *string
```

- *Type:* *string

---

##### `QbsAwsAccountIdInput`<sup>Optional</sup> <a name="QbsAwsAccountIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountIdInput"></a>

```go
func QbsAwsAccountIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `ModelProfileId`<sup>Required</sup> <a name="ModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```go
func ModelProfileId() *string
```

- *Type:* *string

---

##### `QbsAwsAccountId`<sup>Required</sup> <a name="QbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```go
func QbsAwsAccountId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAgentCustomPromptInputNewPromptOutputReference <a name="QuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentCustomPromptInputNewPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAgentCustomPromptInputNewPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions">ResetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle">ResetOutputStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength">ResetResponseLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone">ResetTone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomInstructions` <a name="ResetCustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetCustomInstructions"></a>

```go
func ResetCustomInstructions()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetOutputStyle` <a name="ResetOutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetOutputStyle"></a>

```go
func ResetOutputStyle()
```

##### `ResetResponseLength` <a name="ResetResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetResponseLength"></a>

```go
func ResetResponseLength()
```

##### `ResetTone` <a name="ResetTone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.resetTone"></a>

```go
func ResetTone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput">CustomInstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput">OutputStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput">ResponseLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput">ToneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">CustomInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">OutputStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">ResponseLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">Tone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInstructionsInput`<sup>Optional</sup> <a name="CustomInstructionsInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructionsInput"></a>

```go
func CustomInstructionsInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `OutputStyleInput`<sup>Optional</sup> <a name="OutputStyleInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyleInput"></a>

```go
func OutputStyleInput() *string
```

- *Type:* *string

---

##### `ResponseLengthInput`<sup>Optional</sup> <a name="ResponseLengthInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLengthInput"></a>

```go
func ResponseLengthInput() *string
```

- *Type:* *string

---

##### `ToneInput`<sup>Optional</sup> <a name="ToneInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.toneInput"></a>

```go
func ToneInput() *string
```

- *Type:* *string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```go
func CustomInstructions() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `OutputStyle`<sup>Required</sup> <a name="OutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```go
func OutputStyle() *string
```

- *Type:* *string

---

##### `ResponseLength`<sup>Required</sup> <a name="ResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```go
func ResponseLength() *string
```

- *Type:* *string

---

##### `Tone`<sup>Required</sup> <a name="Tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```go
func Tone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAgentCustomPromptInputOutputReference <a name="QuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentCustomPromptInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAgentCustomPromptInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt">PutExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt">PutNewPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt">ResetExistingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt">ResetNewPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExistingPrompt` <a name="PutExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt"></a>

```go
func PutExistingPrompt(value QuicksightAgentCustomPromptInputExistingPrompt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putExistingPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPrompt">QuicksightAgentCustomPromptInputExistingPrompt</a>

---

##### `PutNewPrompt` <a name="PutNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt"></a>

```go
func PutNewPrompt(value QuicksightAgentCustomPromptInputNewPrompt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.putNewPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPrompt">QuicksightAgentCustomPromptInputNewPrompt</a>

---

##### `ResetExistingPrompt` <a name="ResetExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetExistingPrompt"></a>

```go
func ResetExistingPrompt()
```

##### `ResetNewPrompt` <a name="ResetNewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.resetNewPrompt"></a>

```go
func ResetNewPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">ExistingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt">NewPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput">ExistingPromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput">NewPromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingPrompt`<sup>Required</sup> <a name="ExistingPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```go
func ExistingPrompt() QuicksightAgentCustomPromptInputExistingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputExistingPromptOutputReference">QuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `NewPrompt`<sup>Required</sup> <a name="NewPrompt" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```go
func NewPrompt() QuicksightAgentCustomPromptInputNewPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputNewPromptOutputReference">QuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `ExistingPromptInput`<sup>Optional</sup> <a name="ExistingPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.existingPromptInput"></a>

```go
func ExistingPromptInput() interface{}
```

- *Type:* interface{}

---

##### `NewPromptInput`<sup>Optional</sup> <a name="NewPromptInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.newPromptInput"></a>

```go
func NewPromptInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAgentCustomPromptInterfaceOutputReference <a name="QuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentCustomPromptInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAgentCustomPromptInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">CustomInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">ModelProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">OutputStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">PromptSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">QbsAwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">ResponseLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone">Tone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```go
func CustomInstructions() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `ModelProfileId`<sup>Required</sup> <a name="ModelProfileId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```go
func ModelProfileId() *string
```

- *Type:* *string

---

##### `OutputStyle`<sup>Required</sup> <a name="OutputStyle" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```go
func OutputStyle() *string
```

- *Type:* *string

---

##### `PromptSummary`<sup>Required</sup> <a name="PromptSummary" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```go
func PromptSummary() *string
```

- *Type:* *string

---

##### `QbsAwsAccountId`<sup>Required</sup> <a name="QbsAwsAccountId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```go
func QbsAwsAccountId() *string
```

- *Type:* *string

---

##### `ResponseLength`<sup>Required</sup> <a name="ResponseLength" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```go
func ResponseLength() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `Tone`<sup>Required</sup> <a name="Tone" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```go
func Tone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightAgentCustomPromptInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentCustomPromptInterface">QuicksightAgentCustomPromptInterface</a>

---


### QuicksightAgentTagsList <a name="QuicksightAgentTagsList" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAgentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get"></a>

```go
func Get(index *f64) QuicksightAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAgentTagsOutputReference <a name="QuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightagent"

quicksightagent.NewQuicksightAgentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAgentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAgent.QuicksightAgentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



