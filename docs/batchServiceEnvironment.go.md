# `batchServiceEnvironment` Submodule <a name="`batchServiceEnvironment` Submodule" id="@cdktn/provider-awscc.batchServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchServiceEnvironment <a name="BatchServiceEnvironment" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment awscc_batch_service_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.NewBatchServiceEnvironment(scope Construct, id *string, config BatchServiceEnvironmentConfig) BatchServiceEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig">BatchServiceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig">BatchServiceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits">PutCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetServiceEnvironmentName">ResetServiceEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityLimits` <a name="PutCapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits"></a>

```go
func PutCapacityLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetServiceEnvironmentName` <a name="ResetServiceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetServiceEnvironmentName"></a>

```go
func ResetServiceEnvironmentName()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchServiceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.BatchServiceEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.BatchServiceEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.BatchServiceEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.BatchServiceEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BatchServiceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BatchServiceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BatchServiceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BatchServiceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList">BatchServiceEnvironmentCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentArn">ServiceEnvironmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimitsInput">CapacityLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentNameInput">ServiceEnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentTypeInput">ServiceEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentName">ServiceEnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimits"></a>

```go
func CapacityLimits() BatchServiceEnvironmentCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList">BatchServiceEnvironmentCapacityLimitsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentArn`<sup>Required</sup> <a name="ServiceEnvironmentArn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentArn"></a>

```go
func ServiceEnvironmentArn() *string
```

- *Type:* *string

---

##### `CapacityLimitsInput`<sup>Optional</sup> <a name="CapacityLimitsInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimitsInput"></a>

```go
func CapacityLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceEnvironmentNameInput`<sup>Optional</sup> <a name="ServiceEnvironmentNameInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentNameInput"></a>

```go
func ServiceEnvironmentNameInput() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentTypeInput`<sup>Optional</sup> <a name="ServiceEnvironmentTypeInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentTypeInput"></a>

```go
func ServiceEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceEnvironmentName`<sup>Required</sup> <a name="ServiceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentName"></a>

```go
func ServiceEnvironmentName() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentType`<sup>Required</sup> <a name="ServiceEnvironmentType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentType"></a>

```go
func ServiceEnvironmentType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchServiceEnvironmentCapacityLimits <a name="BatchServiceEnvironmentCapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

&batchserviceenvironment.BatchServiceEnvironmentCapacityLimits {
	CapacityUnit: *string,
	MaxCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.capacityUnit">CapacityUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#capacity_unit BatchServiceEnvironment#capacity_unit}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#max_capacity BatchServiceEnvironment#max_capacity}. |

---

##### `CapacityUnit`<sup>Optional</sup> <a name="CapacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.capacityUnit"></a>

```go
CapacityUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#capacity_unit BatchServiceEnvironment#capacity_unit}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#max_capacity BatchServiceEnvironment#max_capacity}.

---

### BatchServiceEnvironmentConfig <a name="BatchServiceEnvironmentConfig" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

&batchserviceenvironment.BatchServiceEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityLimits: interface{},
	ServiceEnvironmentType: *string,
	ServiceEnvironmentName: *string,
	State: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.capacityLimits">CapacityLimits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#capacity_limits BatchServiceEnvironment#capacity_limits}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#service_environment_type BatchServiceEnvironment#service_environment_type}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentName">ServiceEnvironmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#service_environment_name BatchServiceEnvironment#service_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#state BatchServiceEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.capacityLimits"></a>

```go
CapacityLimits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#capacity_limits BatchServiceEnvironment#capacity_limits}.

---

##### `ServiceEnvironmentType`<sup>Required</sup> <a name="ServiceEnvironmentType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentType"></a>

```go
ServiceEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#service_environment_type BatchServiceEnvironment#service_environment_type}.

---

##### `ServiceEnvironmentName`<sup>Optional</sup> <a name="ServiceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentName"></a>

```go
ServiceEnvironmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#service_environment_name BatchServiceEnvironment#service_environment_name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#state BatchServiceEnvironment#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_service_environment#tags BatchServiceEnvironment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchServiceEnvironmentCapacityLimitsList <a name="BatchServiceEnvironmentCapacityLimitsList" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.NewBatchServiceEnvironmentCapacityLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchServiceEnvironmentCapacityLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get"></a>

```go
func Get(index *f64) BatchServiceEnvironmentCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchServiceEnvironmentCapacityLimitsOutputReference <a name="BatchServiceEnvironmentCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchserviceenvironment"

batchserviceenvironment.NewBatchServiceEnvironmentCapacityLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchServiceEnvironmentCapacityLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetCapacityUnit">ResetCapacityUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityUnit` <a name="ResetCapacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetCapacityUnit"></a>

```go
func ResetCapacityUnit()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnitInput">CapacityUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnit">CapacityUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityUnitInput`<sup>Optional</sup> <a name="CapacityUnitInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```go
func CapacityUnitInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `CapacityUnit`<sup>Required</sup> <a name="CapacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnit"></a>

```go
func CapacityUnit() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



