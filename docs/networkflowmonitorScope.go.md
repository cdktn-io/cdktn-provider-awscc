# `networkflowmonitorScope` Submodule <a name="`networkflowmonitorScope` Submodule" id="@cdktn/provider-awscc.networkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorScope <a name="NetworkflowmonitorScope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope awscc_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScope(scope Construct, id *string, config NetworkflowmonitorScopeConfig) NetworkflowmonitorScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkflowmonitorScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkflowmonitorScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList">NetworkflowmonitorScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList">NetworkflowmonitorScopeTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tags"></a>

```go
func Tags() NetworkflowmonitorScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList">NetworkflowmonitorScopeTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targets"></a>

```go
func Targets() NetworkflowmonitorScopeTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList">NetworkflowmonitorScopeTargetsList</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorScopeConfig <a name="NetworkflowmonitorScopeConfig" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Targets: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.targets">Targets</a></code> | <code>interface{}</code> | The targets for the scope. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the scope. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

The targets for the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#targets NetworkflowmonitorScope#targets}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}

---

### NetworkflowmonitorScopeTags <a name="NetworkflowmonitorScopeTags" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#key NetworkflowmonitorScope#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#value NetworkflowmonitorScope#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#key NetworkflowmonitorScope#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#value NetworkflowmonitorScope#value}.

---

### NetworkflowmonitorScopeTargets <a name="NetworkflowmonitorScopeTargets" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTargets {
	Region: *string,
	TargetIdentifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.region">Region</a></code> | <code>*string</code> | The AWS Region for the target resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | A target identifier is a pair of identifying information for a scope target. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS Region for the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargets.property.targetIdentifier"></a>

```go
TargetIdentifier NetworkflowmonitorScopeTargetsTargetIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

A target identifier is a pair of identifying information for a scope target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#target_identifier NetworkflowmonitorScope#target_identifier}

---

### NetworkflowmonitorScopeTargetsTargetIdentifier <a name="NetworkflowmonitorScopeTargetsTargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTargetsTargetIdentifier {
	TargetId: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId,
	TargetType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | A target ID is an internally-generated identifier for a target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetType">TargetType</a></code> | <code>*string</code> | The type of the target. Currently always ACCOUNT. |

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetId"></a>

```go
TargetId NetworkflowmonitorScopeTargetsTargetIdentifierTargetId
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

A target ID is an internally-generated identifier for a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#target_id NetworkflowmonitorScope#target_id}

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

The type of the target. Currently always ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}

---

### NetworkflowmonitorScopeTargetsTargetIdentifierTargetId <a name="NetworkflowmonitorScopeTargetsTargetIdentifierTargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId {
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.property.accountId">AccountId</a></code> | <code>*string</code> | The account ID for the target. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account ID for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorScopeTagsList <a name="NetworkflowmonitorScopeTagsList" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTagsOutputReference <a name="NetworkflowmonitorScopeTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetsList <a name="NetworkflowmonitorScopeTargetsList" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorScopeTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorScopeTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetsOutputReference <a name="NetworkflowmonitorScopeTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorScopeTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier">PutTargetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetIdentifier` <a name="PutTargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier"></a>

```go
func PutTargetIdentifier(value NetworkflowmonitorScopeTargetsTargetIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.putTargetIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifier">NetworkflowmonitorScopeTargetsTargetIdentifier</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifierInput">TargetIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier"></a>

```go
func TargetIdentifier() NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TargetIdentifierInput`<sup>Optional</sup> <a name="TargetIdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifierInput"></a>

```go
func TargetIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference <a name="NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId">PutTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetId` <a name="PutTargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId"></a>

```go
func PutTargetId(value NetworkflowmonitorScopeTargetsTargetIdentifierTargetId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.putTargetId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetId">NetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId"></a>

```go
func TargetId() NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() interface{}
```

- *Type:* interface{}

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference <a name="NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorScope.NetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



