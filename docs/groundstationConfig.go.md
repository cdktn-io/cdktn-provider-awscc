# `groundstationConfig` Submodule <a name="`groundstationConfig` Submodule" id="@cdktn/provider-awscc.groundstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationConfig <a name="GroundstationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config awscc_groundstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfig(scope Construct, id *string, config GroundstationConfigConfig) GroundstationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig">GroundstationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig">GroundstationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData">PutConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigData` <a name="PutConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData"></a>

```go
func PutConfigData(value GroundstationConfigConfigData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.GroundstationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.GroundstationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.GroundstationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.GroundstationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroundstationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroundstationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData">ConfigData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput">ConfigDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigData`<sup>Required</sup> <a name="ConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData"></a>

```go
func ConfigData() GroundstationConfigConfigDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags"></a>

```go
func Tags() GroundstationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ConfigDataInput`<sup>Optional</sup> <a name="ConfigDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput"></a>

```go
func ConfigDataInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationConfigConfig <a name="GroundstationConfigConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigData: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigData,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData">ConfigData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigData`<sup>Required</sup> <a name="ConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData"></a>

```go
ConfigData GroundstationConfigConfigData
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}.

---

### GroundstationConfigConfigData <a name="GroundstationConfigConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigData {
	AntennaDownlinkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig,
	AntennaDownlinkDemodDecodeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig,
	AntennaUplinkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig,
	DataflowEndpointConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig,
	S3RecordingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig,
	TelemetrySinkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig,
	TrackingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig,
	UplinkEchoConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig">AntennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig">AntennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig">AntennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig">DataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig">S3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig">TelemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig">TrackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig">UplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}. |

---

##### `AntennaDownlinkConfig`<sup>Optional</sup> <a name="AntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig"></a>

```go
AntennaDownlinkConfig GroundstationConfigConfigDataAntennaDownlinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}.

---

##### `AntennaDownlinkDemodDecodeConfig`<sup>Optional</sup> <a name="AntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig"></a>

```go
AntennaDownlinkDemodDecodeConfig GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}.

---

##### `AntennaUplinkConfig`<sup>Optional</sup> <a name="AntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig"></a>

```go
AntennaUplinkConfig GroundstationConfigConfigDataAntennaUplinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}.

---

##### `DataflowEndpointConfig`<sup>Optional</sup> <a name="DataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig"></a>

```go
DataflowEndpointConfig GroundstationConfigConfigDataDataflowEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}.

---

##### `S3RecordingConfig`<sup>Optional</sup> <a name="S3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig"></a>

```go
S3RecordingConfig GroundstationConfigConfigDataS3RecordingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}.

---

##### `TelemetrySinkConfig`<sup>Optional</sup> <a name="TelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig"></a>

```go
TelemetrySinkConfig GroundstationConfigConfigDataTelemetrySinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}.

---

##### `TrackingConfig`<sup>Optional</sup> <a name="TrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig"></a>

```go
TrackingConfig GroundstationConfigConfigDataTrackingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}.

---

##### `UplinkEchoConfig`<sup>Optional</sup> <a name="UplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig"></a>

```go
UplinkEchoConfig GroundstationConfigConfigDataUplinkEchoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkConfig {
	SpectrumConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `SpectrumConfig`<sup>Optional</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig"></a>

```go
SpectrumConfig GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig {
	Bandwidth: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth,
	CenterFrequency: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency,
	Polarization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization">Polarization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth"></a>

```go
Bandwidth GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `CenterFrequency`<sup>Optional</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency"></a>

```go
CenterFrequency GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `Polarization`<sup>Optional</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization"></a>

```go
Polarization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig {
	DecodeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig,
	DemodulationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig,
	SpectrumConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig">DecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig">DemodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `DecodeConfig`<sup>Optional</sup> <a name="DecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig"></a>

```go
DecodeConfig GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}.

---

##### `DemodulationConfig`<sup>Optional</sup> <a name="DemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig"></a>

```go
DemodulationConfig GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}.

---

##### `SpectrumConfig`<sup>Optional</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig"></a>

```go
SpectrumConfig GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {
	UnvalidatedJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `UnvalidatedJson`<sup>Optional</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson"></a>

```go
UnvalidatedJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {
	UnvalidatedJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `UnvalidatedJson`<sup>Optional</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson"></a>

```go
UnvalidatedJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {
	Bandwidth: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth,
	CenterFrequency: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency,
	Polarization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization">Polarization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth"></a>

```go
Bandwidth GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `CenterFrequency`<sup>Optional</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency"></a>

```go
CenterFrequency GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `Polarization`<sup>Optional</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization"></a>

```go
Polarization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaUplinkConfig {
	SpectrumConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig,
	TargetEirp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp,
	TransmitDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp">TargetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled">TransmitDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}. |

---

##### `SpectrumConfig`<sup>Optional</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig"></a>

```go
SpectrumConfig GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

##### `TargetEirp`<sup>Optional</sup> <a name="TargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp"></a>

```go
TargetEirp GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}.

---

##### `TransmitDisabled`<sup>Optional</sup> <a name="TransmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled"></a>

```go
TransmitDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig {
	CenterFrequency: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency,
	Polarization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization">Polarization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `CenterFrequency`<sup>Optional</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency"></a>

```go
CenterFrequency GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `Polarization`<sup>Optional</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization"></a>

```go
Polarization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp {
	Units: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataDataflowEndpointConfig <a name="GroundstationConfigConfigDataDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataDataflowEndpointConfig {
	DataflowEndpointName: *string,
	DataflowEndpointRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName">DataflowEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion">DataflowEndpointRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}. |

---

##### `DataflowEndpointName`<sup>Optional</sup> <a name="DataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName"></a>

```go
DataflowEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}.

---

##### `DataflowEndpointRegion`<sup>Optional</sup> <a name="DataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion"></a>

```go
DataflowEndpointRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}.

---

### GroundstationConfigConfigDataS3RecordingConfig <a name="GroundstationConfigConfigDataS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataS3RecordingConfig {
	BucketArn: *string,
	Prefix: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}.

---

### GroundstationConfigConfigDataTelemetrySinkConfig <a name="GroundstationConfigConfigDataTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataTelemetrySinkConfig {
	TelemetrySinkData: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData,
	TelemetrySinkType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData">TelemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType">TelemetrySinkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}. |

---

##### `TelemetrySinkData`<sup>Optional</sup> <a name="TelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData"></a>

```go
TelemetrySinkData GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}.

---

##### `TelemetrySinkType`<sup>Optional</sup> <a name="TelemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType"></a>

```go
TelemetrySinkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData {
	KinesisDataStreamData: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData">KinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}. |

---

##### `KinesisDataStreamData`<sup>Optional</sup> <a name="KinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData"></a>

```go
KinesisDataStreamData GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData {
	KinesisDataStreamArn: *string,
	KinesisRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn">KinesisDataStreamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn">KinesisRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}. |

---

##### `KinesisDataStreamArn`<sup>Optional</sup> <a name="KinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn"></a>

```go
KinesisDataStreamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}.

---

##### `KinesisRoleArn`<sup>Optional</sup> <a name="KinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn"></a>

```go
KinesisRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}.

---

### GroundstationConfigConfigDataTrackingConfig <a name="GroundstationConfigConfigDataTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataTrackingConfig {
	Autotrack: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack">Autotrack</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}. |

---

##### `Autotrack`<sup>Optional</sup> <a name="Autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack"></a>

```go
Autotrack *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}.

---

### GroundstationConfigConfigDataUplinkEchoConfig <a name="GroundstationConfigConfigDataUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigConfigDataUplinkEchoConfig {
	AntennaUplinkConfigArn: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn">AntennaUplinkConfigArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}. |

---

##### `AntennaUplinkConfigArn`<sup>Optional</sup> <a name="AntennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn"></a>

```go
AntennaUplinkConfigArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}.

---

### GroundstationConfigTags <a name="GroundstationConfigTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

&groundstationconfig.GroundstationConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#key GroundstationConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#key GroundstationConfig#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig">PutSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig">ResetSpectrumConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpectrumConfig` <a name="PutSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig"></a>

```go
func PutSpectrumConfig(value GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---

##### `ResetSpectrumConfig` <a name="ResetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig"></a>

```go
func ResetSpectrumConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput">SpectrumConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a>

---

##### `SpectrumConfigInput`<sup>Optional</sup> <a name="SpectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput"></a>

```go
func SpectrumConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth">PutBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency">PutCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency">ResetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization">ResetPolarization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBandwidth` <a name="PutBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth"></a>

```go
func PutBandwidth(value GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---

##### `PutCenterFrequency` <a name="PutCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```go
func PutCenterFrequency(value GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetCenterFrequency` <a name="ResetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```go
func ResetCenterFrequency()
```

##### `ResetPolarization` <a name="ResetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```go
func ResetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput">BandwidthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">CenterFrequencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```go
func Bandwidth() GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```go
func BandwidthInput() interface{}
```

- *Type:* interface{}

---

##### `CenterFrequencyInput`<sup>Optional</sup> <a name="CenterFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```go
func CenterFrequencyInput() interface{}
```

- *Type:* interface{}

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```go
func PolarizationInput() *string
```

- *Type:* *string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson">ResetUnvalidatedJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnvalidatedJson` <a name="ResetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson"></a>

```go
func ResetUnvalidatedJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput">UnvalidatedJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnvalidatedJsonInput`<sup>Optional</sup> <a name="UnvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput"></a>

```go
func UnvalidatedJsonInput() *string
```

- *Type:* *string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson"></a>

```go
func UnvalidatedJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson">ResetUnvalidatedJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnvalidatedJson` <a name="ResetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson"></a>

```go
func ResetUnvalidatedJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput">UnvalidatedJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnvalidatedJsonInput`<sup>Optional</sup> <a name="UnvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput"></a>

```go
func UnvalidatedJsonInput() *string
```

- *Type:* *string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson"></a>

```go
func UnvalidatedJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig">PutDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig">PutDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig">PutSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig">ResetDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig">ResetDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig">ResetSpectrumConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDecodeConfig` <a name="PutDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig"></a>

```go
func PutDecodeConfig(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---

##### `PutDemodulationConfig` <a name="PutDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig"></a>

```go
func PutDemodulationConfig(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---

##### `PutSpectrumConfig` <a name="PutSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig"></a>

```go
func PutSpectrumConfig(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---

##### `ResetDecodeConfig` <a name="ResetDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig"></a>

```go
func ResetDecodeConfig()
```

##### `ResetDemodulationConfig` <a name="ResetDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig"></a>

```go
func ResetDemodulationConfig()
```

##### `ResetSpectrumConfig` <a name="ResetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig"></a>

```go
func ResetSpectrumConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig">DecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig">DemodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput">DecodeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput">DemodulationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput">SpectrumConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecodeConfig`<sup>Required</sup> <a name="DecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig"></a>

```go
func DecodeConfig() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a>

---

##### `DemodulationConfig`<sup>Required</sup> <a name="DemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig"></a>

```go
func DemodulationConfig() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a>

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a>

---

##### `DecodeConfigInput`<sup>Optional</sup> <a name="DecodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput"></a>

```go
func DecodeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DemodulationConfigInput`<sup>Optional</sup> <a name="DemodulationConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput"></a>

```go
func DemodulationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SpectrumConfigInput`<sup>Optional</sup> <a name="SpectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput"></a>

```go
func SpectrumConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth">PutBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency">PutCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency">ResetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization">ResetPolarization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBandwidth` <a name="PutBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth"></a>

```go
func PutBandwidth(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---

##### `PutCenterFrequency` <a name="PutCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```go
func PutCenterFrequency(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetCenterFrequency` <a name="ResetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```go
func ResetCenterFrequency()
```

##### `ResetPolarization` <a name="ResetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization"></a>

```go
func ResetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput">BandwidthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput">CenterFrequencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```go
func Bandwidth() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```go
func BandwidthInput() interface{}
```

- *Type:* interface{}

---

##### `CenterFrequencyInput`<sup>Optional</sup> <a name="CenterFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```go
func CenterFrequencyInput() interface{}
```

- *Type:* interface{}

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```go
func PolarizationInput() *string
```

- *Type:* *string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaUplinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaUplinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaUplinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig">PutSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp">PutTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig">ResetSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp">ResetTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled">ResetTransmitDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpectrumConfig` <a name="PutSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig"></a>

```go
func PutSpectrumConfig(value GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---

##### `PutTargetEirp` <a name="PutTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp"></a>

```go
func PutTargetEirp(value GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---

##### `ResetSpectrumConfig` <a name="ResetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig"></a>

```go
func ResetSpectrumConfig()
```

##### `ResetTargetEirp` <a name="ResetTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp"></a>

```go
func ResetTargetEirp()
```

##### `ResetTransmitDisabled` <a name="ResetTransmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled"></a>

```go
func ResetTransmitDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp">TargetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput">SpectrumConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput">TargetEirpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput">TransmitDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled">TransmitDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a>

---

##### `TargetEirp`<sup>Required</sup> <a name="TargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp"></a>

```go
func TargetEirp() GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a>

---

##### `SpectrumConfigInput`<sup>Optional</sup> <a name="SpectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput"></a>

```go
func SpectrumConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TargetEirpInput`<sup>Optional</sup> <a name="TargetEirpInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput"></a>

```go
func TargetEirpInput() interface{}
```

- *Type:* interface{}

---

##### `TransmitDisabledInput`<sup>Optional</sup> <a name="TransmitDisabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput"></a>

```go
func TransmitDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `TransmitDisabled`<sup>Required</sup> <a name="TransmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled"></a>

```go
func TransmitDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency">PutCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency">ResetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization">ResetPolarization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCenterFrequency` <a name="PutCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```go
func PutCenterFrequency(value GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---

##### `ResetCenterFrequency` <a name="ResetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```go
func ResetCenterFrequency()
```

##### `ResetPolarization` <a name="ResetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```go
func ResetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">CenterFrequencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `CenterFrequencyInput`<sup>Optional</sup> <a name="CenterFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```go
func CenterFrequencyInput() interface{}
```

- *Type:* interface{}

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```go
func PolarizationInput() *string
```

- *Type:* *string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits"></a>

```go
func ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataDataflowEndpointConfigOutputReference <a name="GroundstationConfigConfigDataDataflowEndpointConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataDataflowEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataDataflowEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName">ResetDataflowEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion">ResetDataflowEndpointRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataflowEndpointName` <a name="ResetDataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName"></a>

```go
func ResetDataflowEndpointName()
```

##### `ResetDataflowEndpointRegion` <a name="ResetDataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion"></a>

```go
func ResetDataflowEndpointRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput">DataflowEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput">DataflowEndpointRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName">DataflowEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion">DataflowEndpointRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowEndpointNameInput`<sup>Optional</sup> <a name="DataflowEndpointNameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput"></a>

```go
func DataflowEndpointNameInput() *string
```

- *Type:* *string

---

##### `DataflowEndpointRegionInput`<sup>Optional</sup> <a name="DataflowEndpointRegionInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput"></a>

```go
func DataflowEndpointRegionInput() *string
```

- *Type:* *string

---

##### `DataflowEndpointName`<sup>Required</sup> <a name="DataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName"></a>

```go
func DataflowEndpointName() *string
```

- *Type:* *string

---

##### `DataflowEndpointRegion`<sup>Required</sup> <a name="DataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion"></a>

```go
func DataflowEndpointRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataOutputReference <a name="GroundstationConfigConfigDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig">PutAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig">PutAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig">PutAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig">PutDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig">PutS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig">PutTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig">PutTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig">PutUplinkEchoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig">ResetAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig">ResetAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig">ResetAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig">ResetDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig">ResetS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig">ResetTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig">ResetTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig">ResetUplinkEchoConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAntennaDownlinkConfig` <a name="PutAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig"></a>

```go
func PutAntennaDownlinkConfig(value GroundstationConfigConfigDataAntennaDownlinkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---

##### `PutAntennaDownlinkDemodDecodeConfig` <a name="PutAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig"></a>

```go
func PutAntennaDownlinkDemodDecodeConfig(value GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---

##### `PutAntennaUplinkConfig` <a name="PutAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig"></a>

```go
func PutAntennaUplinkConfig(value GroundstationConfigConfigDataAntennaUplinkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---

##### `PutDataflowEndpointConfig` <a name="PutDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig"></a>

```go
func PutDataflowEndpointConfig(value GroundstationConfigConfigDataDataflowEndpointConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---

##### `PutS3RecordingConfig` <a name="PutS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig"></a>

```go
func PutS3RecordingConfig(value GroundstationConfigConfigDataS3RecordingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---

##### `PutTelemetrySinkConfig` <a name="PutTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig"></a>

```go
func PutTelemetrySinkConfig(value GroundstationConfigConfigDataTelemetrySinkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---

##### `PutTrackingConfig` <a name="PutTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig"></a>

```go
func PutTrackingConfig(value GroundstationConfigConfigDataTrackingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---

##### `PutUplinkEchoConfig` <a name="PutUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig"></a>

```go
func PutUplinkEchoConfig(value GroundstationConfigConfigDataUplinkEchoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---

##### `ResetAntennaDownlinkConfig` <a name="ResetAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig"></a>

```go
func ResetAntennaDownlinkConfig()
```

##### `ResetAntennaDownlinkDemodDecodeConfig` <a name="ResetAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig"></a>

```go
func ResetAntennaDownlinkDemodDecodeConfig()
```

##### `ResetAntennaUplinkConfig` <a name="ResetAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig"></a>

```go
func ResetAntennaUplinkConfig()
```

##### `ResetDataflowEndpointConfig` <a name="ResetDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig"></a>

```go
func ResetDataflowEndpointConfig()
```

##### `ResetS3RecordingConfig` <a name="ResetS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig"></a>

```go
func ResetS3RecordingConfig()
```

##### `ResetTelemetrySinkConfig` <a name="ResetTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig"></a>

```go
func ResetTelemetrySinkConfig()
```

##### `ResetTrackingConfig` <a name="ResetTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig"></a>

```go
func ResetTrackingConfig()
```

##### `ResetUplinkEchoConfig` <a name="ResetUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig"></a>

```go
func ResetUplinkEchoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig">AntennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig">AntennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig">AntennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig">DataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig">S3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig">TelemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig">TrackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig">UplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput">AntennaDownlinkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput">AntennaDownlinkDemodDecodeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput">AntennaUplinkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput">DataflowEndpointConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput">S3RecordingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput">TelemetrySinkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput">TrackingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput">UplinkEchoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntennaDownlinkConfig`<sup>Required</sup> <a name="AntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig"></a>

```go
func AntennaDownlinkConfig() GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a>

---

##### `AntennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="AntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig"></a>

```go
func AntennaDownlinkDemodDecodeConfig() GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a>

---

##### `AntennaUplinkConfig`<sup>Required</sup> <a name="AntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig"></a>

```go
func AntennaUplinkConfig() GroundstationConfigConfigDataAntennaUplinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a>

---

##### `DataflowEndpointConfig`<sup>Required</sup> <a name="DataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig"></a>

```go
func DataflowEndpointConfig() GroundstationConfigConfigDataDataflowEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a>

---

##### `S3RecordingConfig`<sup>Required</sup> <a name="S3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig"></a>

```go
func S3RecordingConfig() GroundstationConfigConfigDataS3RecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a>

---

##### `TelemetrySinkConfig`<sup>Required</sup> <a name="TelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig"></a>

```go
func TelemetrySinkConfig() GroundstationConfigConfigDataTelemetrySinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a>

---

##### `TrackingConfig`<sup>Required</sup> <a name="TrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig"></a>

```go
func TrackingConfig() GroundstationConfigConfigDataTrackingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a>

---

##### `UplinkEchoConfig`<sup>Required</sup> <a name="UplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig"></a>

```go
func UplinkEchoConfig() GroundstationConfigConfigDataUplinkEchoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a>

---

##### `AntennaDownlinkConfigInput`<sup>Optional</sup> <a name="AntennaDownlinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput"></a>

```go
func AntennaDownlinkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AntennaDownlinkDemodDecodeConfigInput`<sup>Optional</sup> <a name="AntennaDownlinkDemodDecodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput"></a>

```go
func AntennaDownlinkDemodDecodeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AntennaUplinkConfigInput`<sup>Optional</sup> <a name="AntennaUplinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput"></a>

```go
func AntennaUplinkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataflowEndpointConfigInput`<sup>Optional</sup> <a name="DataflowEndpointConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput"></a>

```go
func DataflowEndpointConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3RecordingConfigInput`<sup>Optional</sup> <a name="S3RecordingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput"></a>

```go
func S3RecordingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TelemetrySinkConfigInput`<sup>Optional</sup> <a name="TelemetrySinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput"></a>

```go
func TelemetrySinkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TrackingConfigInput`<sup>Optional</sup> <a name="TrackingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput"></a>

```go
func TrackingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `UplinkEchoConfigInput`<sup>Optional</sup> <a name="UplinkEchoConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput"></a>

```go
func UplinkEchoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataS3RecordingConfigOutputReference <a name="GroundstationConfigConfigDataS3RecordingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataS3RecordingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataS3RecordingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataTelemetrySinkConfigOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataTelemetrySinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataTelemetrySinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData">PutTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData">ResetTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType">ResetTelemetrySinkType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTelemetrySinkData` <a name="PutTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData"></a>

```go
func PutTelemetrySinkData(value GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---

##### `ResetTelemetrySinkData` <a name="ResetTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData"></a>

```go
func ResetTelemetrySinkData()
```

##### `ResetTelemetrySinkType` <a name="ResetTelemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType"></a>

```go
func ResetTelemetrySinkType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData">TelemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput">TelemetrySinkDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput">TelemetrySinkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType">TelemetrySinkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TelemetrySinkData`<sup>Required</sup> <a name="TelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData"></a>

```go
func TelemetrySinkData() GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a>

---

##### `TelemetrySinkDataInput`<sup>Optional</sup> <a name="TelemetrySinkDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput"></a>

```go
func TelemetrySinkDataInput() interface{}
```

- *Type:* interface{}

---

##### `TelemetrySinkTypeInput`<sup>Optional</sup> <a name="TelemetrySinkTypeInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput"></a>

```go
func TelemetrySinkTypeInput() *string
```

- *Type:* *string

---

##### `TelemetrySinkType`<sup>Required</sup> <a name="TelemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType"></a>

```go
func TelemetrySinkType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn">ResetKinesisDataStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn">ResetKinesisRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKinesisDataStreamArn` <a name="ResetKinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn"></a>

```go
func ResetKinesisDataStreamArn()
```

##### `ResetKinesisRoleArn` <a name="ResetKinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn"></a>

```go
func ResetKinesisRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput">KinesisDataStreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput">KinesisRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn">KinesisDataStreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn">KinesisRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KinesisDataStreamArnInput`<sup>Optional</sup> <a name="KinesisDataStreamArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput"></a>

```go
func KinesisDataStreamArnInput() *string
```

- *Type:* *string

---

##### `KinesisRoleArnInput`<sup>Optional</sup> <a name="KinesisRoleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput"></a>

```go
func KinesisRoleArnInput() *string
```

- *Type:* *string

---

##### `KinesisDataStreamArn`<sup>Required</sup> <a name="KinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn"></a>

```go
func KinesisDataStreamArn() *string
```

- *Type:* *string

---

##### `KinesisRoleArn`<sup>Required</sup> <a name="KinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn"></a>

```go
func KinesisRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData">PutKinesisDataStreamData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData">ResetKinesisDataStreamData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisDataStreamData` <a name="PutKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData"></a>

```go
func PutKinesisDataStreamData(value GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---

##### `ResetKinesisDataStreamData` <a name="ResetKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData"></a>

```go
func ResetKinesisDataStreamData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData">KinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput">KinesisDataStreamDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KinesisDataStreamData`<sup>Required</sup> <a name="KinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData"></a>

```go
func KinesisDataStreamData() GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a>

---

##### `KinesisDataStreamDataInput`<sup>Optional</sup> <a name="KinesisDataStreamDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput"></a>

```go
func KinesisDataStreamDataInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataTrackingConfigOutputReference <a name="GroundstationConfigConfigDataTrackingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataTrackingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataTrackingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack">ResetAutotrack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutotrack` <a name="ResetAutotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack"></a>

```go
func ResetAutotrack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput">AutotrackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack">Autotrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutotrackInput`<sup>Optional</sup> <a name="AutotrackInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput"></a>

```go
func AutotrackInput() *string
```

- *Type:* *string

---

##### `Autotrack`<sup>Required</sup> <a name="Autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack"></a>

```go
func Autotrack() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigConfigDataUplinkEchoConfigOutputReference <a name="GroundstationConfigConfigDataUplinkEchoConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigConfigDataUplinkEchoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationConfigConfigDataUplinkEchoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn">ResetAntennaUplinkConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAntennaUplinkConfigArn` <a name="ResetAntennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn"></a>

```go
func ResetAntennaUplinkConfigArn()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput">AntennaUplinkConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn">AntennaUplinkConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntennaUplinkConfigArnInput`<sup>Optional</sup> <a name="AntennaUplinkConfigArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput"></a>

```go
func AntennaUplinkConfigArnInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AntennaUplinkConfigArn`<sup>Required</sup> <a name="AntennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn"></a>

```go
func AntennaUplinkConfigArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigTagsList <a name="GroundstationConfigTagsList" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get"></a>

```go
func Get(index *f64) GroundstationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationConfigTagsOutputReference <a name="GroundstationConfigTagsOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationconfig"

groundstationconfig.NewGroundstationConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



