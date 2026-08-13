# `networkflowmonitorMonitor` Submodule <a name="`networkflowmonitorMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorMonitor <a name="NetworkflowmonitorMonitor" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor awscc_networkflowmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitor(scope Construct, id *string, config NetworkflowmonitorMonitorConfig) NetworkflowmonitorMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig">NetworkflowmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources">PutLocalResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources">PutRemoteResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResources">ResetRemoteResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetScopeArn">ResetScopeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocalResources` <a name="PutLocalResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources"></a>

```go
func PutLocalResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteResources` <a name="PutRemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources"></a>

```go
func PutRemoteResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRemoteResources` <a name="ResetRemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResources"></a>

```go
func ResetRemoteResources()
```

##### `ResetScopeArn` <a name="ResetScopeArn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetScopeArn"></a>

```go
func ResetScopeArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NetworkflowmonitorMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NetworkflowmonitorMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NetworkflowmonitorMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NetworkflowmonitorMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkflowmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkflowmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkflowmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResources">LocalResources</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList">NetworkflowmonitorMonitorLocalResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorStatus">MonitorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResources">RemoteResources</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList">NetworkflowmonitorMonitorRemoteResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList">NetworkflowmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourcesInput">LocalResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourcesInput">RemoteResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput">ScopeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalResources`<sup>Required</sup> <a name="LocalResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResources"></a>

```go
func LocalResources() NetworkflowmonitorMonitorLocalResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList">NetworkflowmonitorMonitorLocalResourcesList</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MonitorStatus`<sup>Required</sup> <a name="MonitorStatus" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorStatus"></a>

```go
func MonitorStatus() *string
```

- *Type:* *string

---

##### `RemoteResources`<sup>Required</sup> <a name="RemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResources"></a>

```go
func RemoteResources() NetworkflowmonitorMonitorRemoteResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList">NetworkflowmonitorMonitorRemoteResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags"></a>

```go
func Tags() NetworkflowmonitorMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList">NetworkflowmonitorMonitorTagsList</a>

---

##### `LocalResourcesInput`<sup>Optional</sup> <a name="LocalResourcesInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourcesInput"></a>

```go
func LocalResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `RemoteResourcesInput`<sup>Optional</sup> <a name="RemoteResourcesInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourcesInput"></a>

```go
func RemoteResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput"></a>

```go
func ScopeArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorConfig <a name="NetworkflowmonitorMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

&networkflowmonitormonitor.NetworkflowmonitorMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LocalResources: interface{},
	MonitorName: *string,
	RemoteResources: interface{},
	ScopeArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResources">LocalResources</a></code> | <code>interface{}</code> | The local resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>*string</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResources">RemoteResources</a></code> | <code>interface{}</code> | The remote resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the scope for the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the monitor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalResources`<sup>Required</sup> <a name="LocalResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResources"></a>

```go
LocalResources interface{}
```

- *Type:* interface{}

The local resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#local_resources NetworkflowmonitorMonitor#local_resources}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}

---

##### `RemoteResources`<sup>Optional</sup> <a name="RemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResources"></a>

```go
RemoteResources interface{}
```

- *Type:* interface{}

The remote resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#remote_resources NetworkflowmonitorMonitor#remote_resources}

---

##### `ScopeArn`<sup>Optional</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn"></a>

```go
ScopeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the scope for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}

---

### NetworkflowmonitorMonitorLocalResources <a name="NetworkflowmonitorMonitorLocalResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

&networkflowmonitormonitor.NetworkflowmonitorMonitorLocalResources {
	Identifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier of the local resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.type">Type</a></code> | <code>*string</code> | The type of the local resource. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier of the local resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the local resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}

---

### NetworkflowmonitorMonitorRemoteResources <a name="NetworkflowmonitorMonitorRemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

&networkflowmonitormonitor.NetworkflowmonitorMonitorRemoteResources {
	Identifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier of the remote resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.type">Type</a></code> | <code>*string</code> | The type of the remote resource. |

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier of the remote resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the remote resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}

---

### NetworkflowmonitorMonitorTags <a name="NetworkflowmonitorMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

&networkflowmonitormonitor.NetworkflowmonitorMonitorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#key NetworkflowmonitorMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#value NetworkflowmonitorMonitor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#key NetworkflowmonitorMonitor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkflowmonitor_monitor#value NetworkflowmonitorMonitor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorMonitorLocalResourcesList <a name="NetworkflowmonitorMonitorLocalResourcesList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorLocalResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorMonitorLocalResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorMonitorLocalResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorMonitorLocalResourcesOutputReference <a name="NetworkflowmonitorMonitorLocalResourcesOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorLocalResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorMonitorLocalResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorMonitorRemoteResourcesList <a name="NetworkflowmonitorMonitorRemoteResourcesList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorRemoteResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorMonitorRemoteResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorMonitorRemoteResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorMonitorRemoteResourcesOutputReference <a name="NetworkflowmonitorMonitorRemoteResourcesOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorRemoteResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorMonitorRemoteResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorMonitorTagsList <a name="NetworkflowmonitorMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorMonitorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorMonitorTagsOutputReference <a name="NetworkflowmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitormonitor"

networkflowmonitormonitor.NewNetworkflowmonitorMonitorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorMonitorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



