# `connectContactFlowModule` Submodule <a name="`connectContactFlowModule` Submodule" id="@cdktn/provider-awscc.connectContactFlowModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModule <a name="ConnectContactFlowModule" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module awscc_connect_contact_flow_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.NewConnectContactFlowModule(scope Construct, id *string, config ConnectContactFlowModuleConfig) ConnectContactFlowModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration">PutExternalInvocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetExternalInvocationConfiguration">ResetExternalInvocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalInvocationConfiguration` <a name="PutExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration"></a>

```go
func PutExternalInvocationConfiguration(value ConnectContactFlowModuleExternalInvocationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalInvocationConfiguration` <a name="ResetExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetExternalInvocationConfiguration"></a>

```go
func ResetExternalInvocationConfiguration()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectContactFlowModule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.ConnectContactFlowModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.ConnectContactFlowModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.ConnectContactFlowModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.ConnectContactFlowModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectContactFlowModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectContactFlowModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectContactFlowModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectContactFlowModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleArn">ContactFlowModuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfiguration">ExternalInvocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference">ConnectContactFlowModuleExternalInvocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList">ConnectContactFlowModuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfigurationInput">ExternalInvocationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactFlowModuleArn`<sup>Required</sup> <a name="ContactFlowModuleArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleArn"></a>

```go
func ContactFlowModuleArn() *string
```

- *Type:* *string

---

##### `ExternalInvocationConfiguration`<sup>Required</sup> <a name="ExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfiguration"></a>

```go
func ExternalInvocationConfiguration() ConnectContactFlowModuleExternalInvocationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference">ConnectContactFlowModuleExternalInvocationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tags"></a>

```go
func Tags() ConnectContactFlowModuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList">ConnectContactFlowModuleTagsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalInvocationConfigurationInput`<sup>Optional</sup> <a name="ExternalInvocationConfigurationInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfigurationInput"></a>

```go
func ExternalInvocationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleConfig <a name="ConnectContactFlowModuleConfig" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

&connectcontactflowmodule.ConnectContactFlowModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	InstanceArn: *string,
	Name: *string,
	Description: *string,
	ExternalInvocationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration,
	Settings: *string,
	State: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content">Content</a></code> | <code>*string</code> | The content of the contact flow module in JSON format. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The identifier of the Amazon Connect instance (ARN). |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.externalInvocationConfiguration">ExternalInvocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a></code> | Defines the external invocation configuration of the flow module resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.settings">Settings</a></code> | <code>*string</code> | The schema of the settings for contact flow module in JSON Schema V4 format. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.state">State</a></code> | <code>*string</code> | The state of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the contact flow module in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#content ConnectContactFlowModule#content}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The identifier of the Amazon Connect instance (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#instance_arn ConnectContactFlowModule#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#name ConnectContactFlowModule#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#description ConnectContactFlowModule#description}

---

##### `ExternalInvocationConfiguration`<sup>Optional</sup> <a name="ExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.externalInvocationConfiguration"></a>

```go
ExternalInvocationConfiguration ConnectContactFlowModuleExternalInvocationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

Defines the external invocation configuration of the flow module resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#external_invocation_configuration ConnectContactFlowModule#external_invocation_configuration}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

The schema of the settings for contact flow module in JSON Schema V4 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#settings ConnectContactFlowModule#settings}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#state ConnectContactFlowModule#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#tags ConnectContactFlowModule#tags}

---

### ConnectContactFlowModuleExternalInvocationConfiguration <a name="ConnectContactFlowModuleExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

&connectcontactflowmodule.ConnectContactFlowModuleExternalInvocationConfiguration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the flow module resource is enabled for external invocation. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the flow module resource is enabled for external invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#enabled ConnectContactFlowModule#enabled}

---

### ConnectContactFlowModuleTags <a name="ConnectContactFlowModuleTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

&connectcontactflowmodule.ConnectContactFlowModuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#key ConnectContactFlowModule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module#value ConnectContactFlowModule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectContactFlowModuleExternalInvocationConfigurationOutputReference <a name="ConnectContactFlowModuleExternalInvocationConfigurationOutputReference" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.NewConnectContactFlowModuleExternalInvocationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectContactFlowModuleExternalInvocationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectContactFlowModuleTagsList <a name="ConnectContactFlowModuleTagsList" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.NewConnectContactFlowModuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectContactFlowModuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get"></a>

```go
func Get(index *f64) ConnectContactFlowModuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectContactFlowModuleTagsOutputReference <a name="ConnectContactFlowModuleTagsOutputReference" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectcontactflowmodule"

connectcontactflowmodule.NewConnectContactFlowModuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectContactFlowModuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



