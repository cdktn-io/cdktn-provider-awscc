# `sagemakerAiWorkloadConfig` Submodule <a name="`sagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAiWorkloadConfig <a name="SagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfig(scope Construct, id *string, config SagemakerAiWorkloadConfigConfig) SagemakerAiWorkloadConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig">SagemakerAiWorkloadConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig">SagemakerAiWorkloadConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs">PutAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig">PutDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs">ResetAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig">ResetDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiWorkloadConfigs` <a name="PutAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs"></a>

```go
func PutAiWorkloadConfigs(value SagemakerAiWorkloadConfigAiWorkloadConfigs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `PutDatasetConfig` <a name="PutDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig"></a>

```go
func PutDatasetConfig(value SagemakerAiWorkloadConfigDatasetConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAiWorkloadConfigs` <a name="ResetAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs"></a>

```go
func ResetAiWorkloadConfigs()
```

##### `ResetDatasetConfig` <a name="ResetDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig"></a>

```go
func ResetDatasetConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.SagemakerAiWorkloadConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.SagemakerAiWorkloadConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.SagemakerAiWorkloadConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.SagemakerAiWorkloadConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerAiWorkloadConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">AiWorkloadConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs">AiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig">DatasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput">AiWorkloadConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput">AiWorkloadConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput">DatasetConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName">AiWorkloadConfigName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiWorkloadConfigArn`<sup>Required</sup> <a name="AiWorkloadConfigArn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```go
func AiWorkloadConfigArn() *string
```

- *Type:* *string

---

##### `AiWorkloadConfigs`<sup>Required</sup> <a name="AiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```go
func AiWorkloadConfigs() SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DatasetConfig`<sup>Required</sup> <a name="DatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig"></a>

```go
func DatasetConfig() SagemakerAiWorkloadConfigDatasetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags"></a>

```go
func Tags() SagemakerAiWorkloadConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a>

---

##### `AiWorkloadConfigNameInput`<sup>Optional</sup> <a name="AiWorkloadConfigNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput"></a>

```go
func AiWorkloadConfigNameInput() *string
```

- *Type:* *string

---

##### `AiWorkloadConfigsInput`<sup>Optional</sup> <a name="AiWorkloadConfigsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput"></a>

```go
func AiWorkloadConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetConfigInput`<sup>Optional</sup> <a name="DatasetConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput"></a>

```go
func DatasetConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AiWorkloadConfigName`<sup>Required</sup> <a name="AiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```go
func AiWorkloadConfigName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigs <a name="SagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigAiWorkloadConfigs {
	WorkloadSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec">WorkloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | The workload specification that defines benchmark parameters. |

---

##### `WorkloadSpec`<sup>Optional</sup> <a name="WorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec"></a>

```go
WorkloadSpec SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

The workload specification that defines benchmark parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#workload_spec SagemakerAiWorkloadConfig#workload_spec}

---

### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec {
	Inline: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline">Inline</a></code> | <code>*string</code> | An inline YAML or JSON string that defines benchmark parameters. |

---

##### `Inline`<sup>Optional</sup> <a name="Inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline"></a>

```go
Inline *string
```

- *Type:* *string

An inline YAML or JSON string that defines benchmark parameters.

The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#inline SagemakerAiWorkloadConfig#inline}

---

### SagemakerAiWorkloadConfigConfig <a name="SagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AiWorkloadConfigName: *string,
	AiWorkloadConfigs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs,
	DatasetConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName">AiWorkloadConfigName</a></code> | <code>*string</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs">AiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig">DatasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiWorkloadConfigName`<sup>Required</sup> <a name="AiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName"></a>

```go
AiWorkloadConfigName *string
```

- *Type:* *string

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `AiWorkloadConfigs`<sup>Optional</sup> <a name="AiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs"></a>

```go
AiWorkloadConfigs SagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `DatasetConfig`<sup>Optional</sup> <a name="DatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig"></a>

```go
DatasetConfig SagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

### SagemakerAiWorkloadConfigDatasetConfig <a name="SagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigDatasetConfig {
	InputDataConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig">InputDataConfig</a></code> | <code>interface{}</code> | An array of input data channel configurations for the workload. |

---

##### `InputDataConfig`<sup>Optional</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig"></a>

```go
InputDataConfig interface{}
```

- *Type:* interface{}

An array of input data channel configurations for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#input_data_config SagemakerAiWorkloadConfig#input_data_config}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig {
	ChannelName: *string,
	DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The logical name for the data channel. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | The data source for this channel. |

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The logical name for the data channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#channel_name SagemakerAiWorkloadConfig#channel_name}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource"></a>

```go
DataSource SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

The data source for this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#data_source SagemakerAiWorkloadConfig#data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource {
	S3DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | The Amazon S3 data source configuration. |

---

##### `S3DataSource`<sup>Optional</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource"></a>

```go
S3DataSource SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

The Amazon S3 data source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_data_source SagemakerAiWorkloadConfig#s3_data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI of the data. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_uri SagemakerAiWorkloadConfig#s3_uri}

---

### SagemakerAiWorkloadConfigTags <a name="SagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

&sagemakeraiworkloadconfig.SagemakerAiWorkloadConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key">Key</a></code> | <code>*string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#key SagemakerAiWorkloadConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#value SagemakerAiWorkloadConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec">PutWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec">ResetWorkloadSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkloadSpec` <a name="PutWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec"></a>

```go
func PutWorkloadSpec(value SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `ResetWorkloadSpec` <a name="ResetWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec"></a>

```go
func ResetWorkloadSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">WorkloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput">WorkloadSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkloadSpec`<sup>Required</sup> <a name="WorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```go
func WorkloadSpec() SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `WorkloadSpecInput`<sup>Optional</sup> <a name="WorkloadSpecInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput"></a>

```go
func WorkloadSpecInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline">ResetInline</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInline` <a name="ResetInline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline"></a>

```go
func ResetInline()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput">InlineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">Inline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineInput`<sup>Optional</sup> <a name="InlineInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput"></a>

```go
func InlineInput() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```go
func Inline() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource">ResetS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `ResetS3DataSource` <a name="ResetS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource"></a>

```go
func ResetS3DataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```go
func Get(index *f64) SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource"></a>

```go
func PutDataSource(value SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource"></a>

```go
func ResetDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```go
func DataSource() SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigDatasetConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerAiWorkloadConfigDatasetConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig">ResetInputDataConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig"></a>

```go
func PutInputDataConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputDataConfig` <a name="ResetInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig"></a>

```go
func ResetInputDataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```go
func InputDataConfig() SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput"></a>

```go
func InputDataConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigTagsList <a name="SagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerAiWorkloadConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get"></a>

```go
func Get(index *f64) SagemakerAiWorkloadConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerAiWorkloadConfigTagsOutputReference <a name="SagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeraiworkloadconfig"

sagemakeraiworkloadconfig.NewSagemakerAiWorkloadConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerAiWorkloadConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



