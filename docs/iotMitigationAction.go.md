# `iotMitigationAction` Submodule <a name="`iotMitigationAction` Submodule" id="@cdktn/provider-awscc.iotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotMitigationAction <a name="IotMitigationAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationAction(scope Construct, id *string, config IotMitigationActionConfig) IotMitigationAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig">IotMitigationActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig">IotMitigationActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams">PutActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName">ResetActionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionParams` <a name="PutActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams"></a>

```go
func PutActionParams(value IotMitigationActionActionParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActionName` <a name="ResetActionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName"></a>

```go
func ResetActionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.IotMitigationAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.IotMitigationAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.IotMitigationAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.IotMitigationAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotMitigationAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams">ActionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn">MitigationActionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId">MitigationActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput">ActionParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams"></a>

```go
func ActionParams() IotMitigationActionActionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MitigationActionArn`<sup>Required</sup> <a name="MitigationActionArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn"></a>

```go
func MitigationActionArn() *string
```

- *Type:* *string

---

##### `MitigationActionId`<sup>Required</sup> <a name="MitigationActionId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId"></a>

```go
func MitigationActionId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags"></a>

```go
func Tags() IotMitigationActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ActionParamsInput`<sup>Optional</sup> <a name="ActionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput"></a>

```go
func ActionParamsInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotMitigationActionActionParams <a name="IotMitigationActionActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParams {
	AddThingsToThingGroupParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams,
	EnableIoTLoggingParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams,
	PublishFindingToSnsParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams,
	ReplaceDefaultPolicyVersionParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams,
	UpdateCaCertificateParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams,
	UpdateDeviceCertificateParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams">AddThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams">EnableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams">PublishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | Parameters, to define a mitigation action that publishes findings to Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams">ReplaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | Parameters to define a mitigation action that adds a blank policy to restrict permissions. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams">UpdateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the CA certificate to inactive. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams">UpdateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the device certificate to inactive. |

---

##### `AddThingsToThingGroupParams`<sup>Optional</sup> <a name="AddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams"></a>

```go
AddThingsToThingGroupParams IotMitigationActionActionParamsAddThingsToThingGroupParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}

---

##### `EnableIoTLoggingParams`<sup>Optional</sup> <a name="EnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams"></a>

```go
EnableIoTLoggingParams IotMitigationActionActionParamsEnableIoTLoggingParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}

---

##### `PublishFindingToSnsParams`<sup>Optional</sup> <a name="PublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams"></a>

```go
PublishFindingToSnsParams IotMitigationActionActionParamsPublishFindingToSnsParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

Parameters, to define a mitigation action that publishes findings to Amazon SNS.

You can implement your own custom actions in response to the Amazon SNS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}

---

##### `ReplaceDefaultPolicyVersionParams`<sup>Optional</sup> <a name="ReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams"></a>

```go
ReplaceDefaultPolicyVersionParams IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

Parameters to define a mitigation action that adds a blank policy to restrict permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}

---

##### `UpdateCaCertificateParams`<sup>Optional</sup> <a name="UpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams"></a>

```go
UpdateCaCertificateParams IotMitigationActionActionParamsUpdateCaCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

Parameters to define a mitigation action that changes the state of the CA certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}

---

##### `UpdateDeviceCertificateParams`<sup>Optional</sup> <a name="UpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams"></a>

```go
UpdateDeviceCertificateParams IotMitigationActionActionParamsUpdateDeviceCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

Parameters to define a mitigation action that changes the state of the device certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}

---

### IotMitigationActionActionParamsAddThingsToThingGroupParams <a name="IotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsAddThingsToThingGroupParams {
	OverrideDynamicGroups: interface{},
	ThingGroupNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups">OverrideDynamicGroups</a></code> | <code>interface{}</code> | Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames">ThingGroupNames</a></code> | <code>*[]*string</code> | The list of groups to which you want to add the things that triggered the mitigation action. |

---

##### `OverrideDynamicGroups`<sup>Optional</sup> <a name="OverrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

```go
OverrideDynamicGroups interface{}
```

- *Type:* interface{}

Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}

---

##### `ThingGroupNames`<sup>Optional</sup> <a name="ThingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames"></a>

```go
ThingGroupNames *[]*string
```

- *Type:* *[]*string

The list of groups to which you want to add the things that triggered the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}

---

### IotMitigationActionActionParamsEnableIoTLoggingParams <a name="IotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsEnableIoTLoggingParams {
	LogLevel: *string,
	RoleArnForLogging: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel">LogLevel</a></code> | <code>*string</code> | Specifies which types of information are logged. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging">RoleArnForLogging</a></code> | <code>*string</code> | The ARN of the IAM role used for logging. |

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Specifies which types of information are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}

---

##### `RoleArnForLogging`<sup>Optional</sup> <a name="RoleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging"></a>

```go
RoleArnForLogging *string
```

- *Type:* *string

The ARN of the IAM role used for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}

---

### IotMitigationActionActionParamsPublishFindingToSnsParams <a name="IotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsPublishFindingToSnsParams {
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn">TopicArn</a></code> | <code>*string</code> | The ARN of the topic to which you want to publish the findings. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

The ARN of the topic to which you want to publish the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}

---

### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
	TemplateName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName">TemplateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}. |

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}.

---

### IotMitigationActionActionParamsUpdateCaCertificateParams <a name="IotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsUpdateCaCertificateParams {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionActionParamsUpdateDeviceCertificateParams {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionConfig <a name="IotMitigationActionConfig" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActionParams: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotMitigationAction.IotMitigationActionActionParams,
	RoleArn: *string,
	ActionName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams">ActionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName">ActionName</a></code> | <code>*string</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams"></a>

```go
ActionParams IotMitigationActionActionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

### IotMitigationActionTags <a name="IotMitigationActionTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

&iotmitigationaction.IotMitigationActionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#key IotMitigationAction#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#value IotMitigationAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups">ResetOverrideDynamicGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames">ResetThingGroupNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverrideDynamicGroups` <a name="ResetOverrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups"></a>

```go
func ResetOverrideDynamicGroups()
```

##### `ResetThingGroupNames` <a name="ResetThingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames"></a>

```go
func ResetThingGroupNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput">OverrideDynamicGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput">ThingGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">OverrideDynamicGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">ThingGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverrideDynamicGroupsInput`<sup>Optional</sup> <a name="OverrideDynamicGroupsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput"></a>

```go
func OverrideDynamicGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ThingGroupNamesInput`<sup>Optional</sup> <a name="ThingGroupNamesInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput"></a>

```go
func ThingGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OverrideDynamicGroups`<sup>Required</sup> <a name="OverrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```go
func OverrideDynamicGroups() interface{}
```

- *Type:* interface{}

---

##### `ThingGroupNames`<sup>Required</sup> <a name="ThingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```go
func ThingGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging">ResetRoleArnForLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetRoleArnForLogging` <a name="ResetRoleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging"></a>

```go
func ResetRoleArnForLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput">RoleArnForLoggingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">RoleArnForLogging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `RoleArnForLoggingInput`<sup>Optional</sup> <a name="RoleArnForLoggingInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput"></a>

```go
func RoleArnForLoggingInput() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `RoleArnForLogging`<sup>Required</sup> <a name="RoleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```go
func RoleArnForLogging() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsOutputReference <a name="IotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams">PutAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams">PutEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams">PutPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams">PutReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams">PutUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams">PutUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams">ResetAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams">ResetEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams">ResetPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams">ResetReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams">ResetUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams">ResetUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddThingsToThingGroupParams` <a name="PutAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams"></a>

```go
func PutAddThingsToThingGroupParams(value IotMitigationActionActionParamsAddThingsToThingGroupParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `PutEnableIoTLoggingParams` <a name="PutEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams"></a>

```go
func PutEnableIoTLoggingParams(value IotMitigationActionActionParamsEnableIoTLoggingParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `PutPublishFindingToSnsParams` <a name="PutPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams"></a>

```go
func PutPublishFindingToSnsParams(value IotMitigationActionActionParamsPublishFindingToSnsParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `PutReplaceDefaultPolicyVersionParams` <a name="PutReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams"></a>

```go
func PutReplaceDefaultPolicyVersionParams(value IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `PutUpdateCaCertificateParams` <a name="PutUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams"></a>

```go
func PutUpdateCaCertificateParams(value IotMitigationActionActionParamsUpdateCaCertificateParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `PutUpdateDeviceCertificateParams` <a name="PutUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams"></a>

```go
func PutUpdateDeviceCertificateParams(value IotMitigationActionActionParamsUpdateDeviceCertificateParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `ResetAddThingsToThingGroupParams` <a name="ResetAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams"></a>

```go
func ResetAddThingsToThingGroupParams()
```

##### `ResetEnableIoTLoggingParams` <a name="ResetEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams"></a>

```go
func ResetEnableIoTLoggingParams()
```

##### `ResetPublishFindingToSnsParams` <a name="ResetPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams"></a>

```go
func ResetPublishFindingToSnsParams()
```

##### `ResetReplaceDefaultPolicyVersionParams` <a name="ResetReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams"></a>

```go
func ResetReplaceDefaultPolicyVersionParams()
```

##### `ResetUpdateCaCertificateParams` <a name="ResetUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams"></a>

```go
func ResetUpdateCaCertificateParams()
```

##### `ResetUpdateDeviceCertificateParams` <a name="ResetUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams"></a>

```go
func ResetUpdateDeviceCertificateParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">AddThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">EnableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">PublishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">ReplaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">UpdateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">UpdateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput">AddThingsToThingGroupParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput">EnableIoTLoggingParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput">PublishFindingToSnsParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput">ReplaceDefaultPolicyVersionParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput">UpdateCaCertificateParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput">UpdateDeviceCertificateParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddThingsToThingGroupParams`<sup>Required</sup> <a name="AddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```go
func AddThingsToThingGroupParams() IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `EnableIoTLoggingParams`<sup>Required</sup> <a name="EnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```go
func EnableIoTLoggingParams() IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `PublishFindingToSnsParams`<sup>Required</sup> <a name="PublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```go
func PublishFindingToSnsParams() IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `ReplaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="ReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```go
func ReplaceDefaultPolicyVersionParams() IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `UpdateCaCertificateParams`<sup>Required</sup> <a name="UpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```go
func UpdateCaCertificateParams() IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `UpdateDeviceCertificateParams`<sup>Required</sup> <a name="UpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```go
func UpdateDeviceCertificateParams() IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `AddThingsToThingGroupParamsInput`<sup>Optional</sup> <a name="AddThingsToThingGroupParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput"></a>

```go
func AddThingsToThingGroupParamsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIoTLoggingParamsInput`<sup>Optional</sup> <a name="EnableIoTLoggingParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput"></a>

```go
func EnableIoTLoggingParamsInput() interface{}
```

- *Type:* interface{}

---

##### `PublishFindingToSnsParamsInput`<sup>Optional</sup> <a name="PublishFindingToSnsParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput"></a>

```go
func PublishFindingToSnsParamsInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceDefaultPolicyVersionParamsInput`<sup>Optional</sup> <a name="ReplaceDefaultPolicyVersionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput"></a>

```go
func ReplaceDefaultPolicyVersionParamsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateCaCertificateParamsInput`<sup>Optional</sup> <a name="UpdateCaCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput"></a>

```go
func UpdateCaCertificateParamsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateDeviceCertificateParamsInput`<sup>Optional</sup> <a name="UpdateDeviceCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput"></a>

```go
func UpdateDeviceCertificateParamsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName"></a>

```go
func ResetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionTagsList <a name="IotMitigationActionTagsList" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotMitigationActionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get"></a>

```go
func Get(index *f64) IotMitigationActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotMitigationActionTagsOutputReference <a name="IotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotmitigationaction"

iotmitigationaction.NewIotMitigationActionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotMitigationActionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



