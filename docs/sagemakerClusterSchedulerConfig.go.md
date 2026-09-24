# `sagemakerClusterSchedulerConfig` Submodule <a name="`sagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerClusterSchedulerConfig <a name="SagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfig(scope Construct, id *string, config SagemakerClusterSchedulerConfigConfig) SagemakerClusterSchedulerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig">PutSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedulerConfig` <a name="PutSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig"></a>

```go
func PutSchedulerConfig(value SagemakerClusterSchedulerConfigSchedulerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">ClusterSchedulerConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">ClusterSchedulerConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">ClusterSchedulerConfigVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput">SchedulerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterSchedulerConfigArn`<sup>Required</sup> <a name="ClusterSchedulerConfigArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```go
func ClusterSchedulerConfigArn() *string
```

- *Type:* *string

---

##### `ClusterSchedulerConfigId`<sup>Required</sup> <a name="ClusterSchedulerConfigId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```go
func ClusterSchedulerConfigId() *string
```

- *Type:* *string

---

##### `ClusterSchedulerConfigVersion`<sup>Required</sup> <a name="ClusterSchedulerConfigVersion" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```go
func ClusterSchedulerConfigVersion() *f64
```

- *Type:* *f64

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```go
func SchedulerConfig() SagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags"></a>

```go
func Tags() SagemakerClusterSchedulerConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a>

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchedulerConfigInput`<sup>Optional</sup> <a name="SchedulerConfigInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput"></a>

```go
func SchedulerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterSchedulerConfigConfig <a name="SagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

&sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterArn: *string,
	Name: *string,
	SchedulerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name">Name</a></code> | <code>*string</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description">Description</a></code> | <code>*string</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags of the cluster policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig"></a>

```go
SchedulerConfig SagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

### SagemakerClusterSchedulerConfigSchedulerConfig <a name="SagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

&sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfigSchedulerConfig {
	FairShare: *string,
	IdleResourceSharing: *string,
	PriorityClasses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare">FairShare</a></code> | <code>*string</code> | When enabled, entities borrow idle compute based on assigned FairShareWeight. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing">IdleResourceSharing</a></code> | <code>*string</code> | Configuration for sharing idle compute resources across entities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses">PriorityClasses</a></code> | <code>interface{}</code> | List of priority class configurations. |

---

##### `FairShare`<sup>Optional</sup> <a name="FairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare"></a>

```go
FairShare *string
```

- *Type:* *string

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

##### `IdleResourceSharing`<sup>Optional</sup> <a name="IdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing"></a>

```go
IdleResourceSharing *string
```

- *Type:* *string

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

##### `PriorityClasses`<sup>Optional</sup> <a name="PriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses"></a>

```go
PriorityClasses interface{}
```

- *Type:* interface{}

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

&sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses {
	Name: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name">Name</a></code> | <code>*string</code> | Name of the priority class. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight">Weight</a></code> | <code>*f64</code> | Weight of the priority class. Range 0-100, default 0. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the priority class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight of the priority class. Range 0-100, default 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}

---

### SagemakerClusterSchedulerConfigTags <a name="SagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

&sagemakerclusterschedulerconfig.SagemakerClusterSchedulerConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfigSchedulerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses">PutPriorityClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare">ResetFairShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing">ResetIdleResourceSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses">ResetPriorityClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPriorityClasses` <a name="PutPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses"></a>

```go
func PutPriorityClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFairShare` <a name="ResetFairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare"></a>

```go
func ResetFairShare()
```

##### `ResetIdleResourceSharing` <a name="ResetIdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing"></a>

```go
func ResetIdleResourceSharing()
```

##### `ResetPriorityClasses` <a name="ResetPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses"></a>

```go
func ResetPriorityClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">PriorityClasses</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput">FairShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput">IdleResourceSharingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput">PriorityClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">FairShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">IdleResourceSharing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityClasses`<sup>Required</sup> <a name="PriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```go
func PriorityClasses() SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `FairShareInput`<sup>Optional</sup> <a name="FairShareInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput"></a>

```go
func FairShareInput() *string
```

- *Type:* *string

---

##### `IdleResourceSharingInput`<sup>Optional</sup> <a name="IdleResourceSharingInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput"></a>

```go
func IdleResourceSharingInput() *string
```

- *Type:* *string

---

##### `PriorityClassesInput`<sup>Optional</sup> <a name="PriorityClassesInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput"></a>

```go
func PriorityClassesInput() interface{}
```

- *Type:* interface{}

---

##### `FairShare`<sup>Required</sup> <a name="FairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```go
func FairShare() *string
```

- *Type:* *string

---

##### `IdleResourceSharing`<sup>Required</sup> <a name="IdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```go
func IdleResourceSharing() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```go
func Get(index *f64) SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerClusterSchedulerConfigTagsList <a name="SagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerClusterSchedulerConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get"></a>

```go
func Get(index *f64) SagemakerClusterSchedulerConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerClusterSchedulerConfigTagsOutputReference <a name="SagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerclusterschedulerconfig"

sagemakerclusterschedulerconfig.NewSagemakerClusterSchedulerConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerClusterSchedulerConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



