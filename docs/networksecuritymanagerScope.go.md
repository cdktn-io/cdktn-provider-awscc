# `networksecuritymanagerScope` Submodule <a name="`networksecuritymanagerScope` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerScope <a name="NetworksecuritymanagerScope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope awscc_networksecuritymanager_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScope(scope Construct, id *string, config NetworksecuritymanagerScopeConfig) NetworksecuritymanagerScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration">ResetScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeDescription">ResetScopeDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScopeConfiguration` <a name="ResetScopeConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration"></a>

```go
func ResetScopeConfiguration()
```

##### `ResetScopeDescription` <a name="ResetScopeDescription" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeDescription"></a>

```go
func ResetScopeDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList">NetworksecuritymanagerScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput">ScopeConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescriptionInput">ScopeDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeNameInput">ScopeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration">ScopeConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescription">ScopeDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeName">ScopeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags"></a>

```go
func Tags() NetworksecuritymanagerScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList">NetworksecuritymanagerScopeTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ScopeConfigurationInput`<sup>Optional</sup> <a name="ScopeConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput"></a>

```go
func ScopeConfigurationInput() *string
```

- *Type:* *string

---

##### `ScopeDescriptionInput`<sup>Optional</sup> <a name="ScopeDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescriptionInput"></a>

```go
func ScopeDescriptionInput() *string
```

- *Type:* *string

---

##### `ScopeNameInput`<sup>Optional</sup> <a name="ScopeNameInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeNameInput"></a>

```go
func ScopeNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration"></a>

```go
func ScopeConfiguration() *string
```

- *Type:* *string

---

##### `ScopeDescription`<sup>Required</sup> <a name="ScopeDescription" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescription"></a>

```go
func ScopeDescription() *string
```

- *Type:* *string

---

##### `ScopeName`<sup>Required</sup> <a name="ScopeName" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeName"></a>

```go
func ScopeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerScopeConfig <a name="NetworksecuritymanagerScopeConfig" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ScopeName: *string,
	ScopeConfiguration: *string,
	ScopeDescription: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeName">ScopeName</a></code> | <code>*string</code> | The name of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration">ScopeConfiguration</a></code> | <code>*string</code> | The scope configuration as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeDescription">ScopeDescription</a></code> | <code>*string</code> | A description of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the scope. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScopeName`<sup>Required</sup> <a name="ScopeName" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeName"></a>

```go
ScopeName *string
```

- *Type:* *string

The name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_name NetworksecuritymanagerScope#scope_name}

---

##### `ScopeConfiguration`<sup>Optional</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration"></a>

```go
ScopeConfiguration *string
```

- *Type:* *string

The scope configuration as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `ScopeDescription`<sup>Optional</sup> <a name="ScopeDescription" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeDescription"></a>

```go
ScopeDescription *string
```

- *Type:* *string

A description of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_description NetworksecuritymanagerScope#scope_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}

---

### NetworksecuritymanagerScopeTags <a name="NetworksecuritymanagerScopeTags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#key NetworksecuritymanagerScope#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#value NetworksecuritymanagerScope#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#key NetworksecuritymanagerScope#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#value NetworksecuritymanagerScope#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerScopeTagsList <a name="NetworksecuritymanagerScopeTagsList" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeTagsOutputReference <a name="NetworksecuritymanagerScopeTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



