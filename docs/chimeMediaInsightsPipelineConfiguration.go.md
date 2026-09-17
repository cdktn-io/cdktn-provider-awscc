# `chimeMediaInsightsPipelineConfiguration` Submodule <a name="`chimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaInsightsPipelineConfiguration <a name="ChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfiguration(scope Construct, id *string, config ChimeMediaInsightsPipelineConfigurationConfig) ChimeMediaInsightsPipelineConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig">ChimeMediaInsightsPipelineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig">ChimeMediaInsightsPipelineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements">PutElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration">PutRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration">ResetRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElements` <a name="PutElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements"></a>

```go
func PutElements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRealTimeAlertConfiguration` <a name="PutRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration"></a>

```go
func PutRealTimeAlertConfiguration(value ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRealTimeAlertConfiguration` <a name="ResetRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration"></a>

```go
func ResetRealTimeAlertConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimeMediaInsightsPipelineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">MediaInsightsPipelineConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">MediaInsightsPipelineConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">RealTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput">ElementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput">MediaInsightsPipelineConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput">RealTimeAlertConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput">ResourceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">MediaInsightsPipelineConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">ResourceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```go
func Elements() ChimeMediaInsightsPipelineConfigurationElementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```go
func MediaInsightsPipelineConfigurationArn() *string
```

- *Type:* *string

---

##### `MediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```go
func MediaInsightsPipelineConfigurationId() *string
```

- *Type:* *string

---

##### `RealTimeAlertConfiguration`<sup>Required</sup> <a name="RealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```go
func RealTimeAlertConfiguration() ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```go
func Tags() ChimeMediaInsightsPipelineConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `ElementsInput`<sup>Optional</sup> <a name="ElementsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput"></a>

```go
func ElementsInput() interface{}
```

- *Type:* interface{}

---

##### `MediaInsightsPipelineConfigurationNameInput`<sup>Optional</sup> <a name="MediaInsightsPipelineConfigurationNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput"></a>

```go
func MediaInsightsPipelineConfigurationNameInput() *string
```

- *Type:* *string

---

##### `RealTimeAlertConfigurationInput`<sup>Optional</sup> <a name="RealTimeAlertConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput"></a>

```go
func RealTimeAlertConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceAccessRoleArnInput`<sup>Optional</sup> <a name="ResourceAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput"></a>

```go
func ResourceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `MediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```go
func MediaInsightsPipelineConfigurationName() *string
```

- *Type:* *string

---

##### `ResourceAccessRoleArn`<sup>Required</sup> <a name="ResourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```go
func ResourceAccessRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaInsightsPipelineConfigurationConfig <a name="ChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Elements: interface{},
	MediaInsightsPipelineConfigurationName: *string,
	ResourceAccessRoleArn: *string,
	RealTimeAlertConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements">Elements</a></code> | <code>interface{}</code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName">MediaInsightsPipelineConfigurationName</a></code> | <code>*string</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn">ResourceAccessRoleArn</a></code> | <code>*string</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration">RealTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements"></a>

```go
Elements interface{}
```

- *Type:* interface{}

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `MediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName"></a>

```go
MediaInsightsPipelineConfigurationName *string
```

- *Type:* *string

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `ResourceAccessRoleArn`<sup>Required</sup> <a name="ResourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn"></a>

```go
ResourceAccessRoleArn *string
```

- *Type:* *string

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `RealTimeAlertConfiguration`<sup>Optional</sup> <a name="RealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration"></a>

```go
RealTimeAlertConfiguration ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

### ChimeMediaInsightsPipelineConfigurationElements <a name="ChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElements {
	Type: *string,
	AmazonTranscribeCallAnalyticsProcessorConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration,
	AmazonTranscribeProcessorConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration,
	KinesisDataStreamSinkConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration,
	S3RecordingSinkConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type">Type</a></code> | <code>*string</code> | The element type. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration">AmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration">AmazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration">KinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration">S3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type"></a>

```go
Type *string
```

- *Type:* *string

The element type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

##### `AmazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="AmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```go
AmazonTranscribeCallAnalyticsProcessorConfiguration ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}.

---

##### `AmazonTranscribeProcessorConfiguration`<sup>Optional</sup> <a name="AmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration"></a>

```go
AmazonTranscribeProcessorConfiguration ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}.

---

##### `KinesisDataStreamSinkConfiguration`<sup>Optional</sup> <a name="KinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration"></a>

```go
KinesisDataStreamSinkConfiguration ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}.

---

##### `S3RecordingSinkConfiguration`<sup>Optional</sup> <a name="S3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration"></a>

```go
S3RecordingSinkConfiguration ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}.

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
	CallAnalyticsStreamCategories: *[]*string,
	ContentIdentificationType: *string,
	ContentRedactionType: *string,
	EnablePartialResultsStabilization: interface{},
	FilterPartialResults: interface{},
	LanguageCode: *string,
	LanguageModelName: *string,
	PartialResultsStability: *string,
	PiiEntityTypes: *string,
	PostCallAnalyticsSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings,
	VocabularyFilterMethod: *string,
	VocabularyFilterName: *string,
	VocabularyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories">CallAnalyticsStreamCategories</a></code> | <code>*[]*string</code> | The categories to send to the insights target. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>interface{}</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults">FilterPartialResults</a></code> | <code>interface{}</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language code in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings">PostCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | The name of the custom vocabulary. |

---

##### `CallAnalyticsStreamCategories`<sup>Optional</sup> <a name="CallAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories"></a>

```go
CallAnalyticsStreamCategories *[]*string
```

- *Type:* *[]*string

The categories to send to the insights target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories ChimeMediaInsightsPipelineConfiguration#call_analytics_stream_categories}

---

##### `ContentIdentificationType`<sup>Optional</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType"></a>

```go
ContentIdentificationType *string
```

- *Type:* *string

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `ContentRedactionType`<sup>Optional</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType"></a>

```go
ContentRedactionType *string
```

- *Type:* *string

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `EnablePartialResultsStabilization`<sup>Optional</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```go
EnablePartialResultsStabilization interface{}
```

- *Type:* interface{}

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `FilterPartialResults`<sup>Optional</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults"></a>

```go
FilterPartialResults interface{}
```

- *Type:* interface{}

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language code in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `LanguageModelName`<sup>Optional</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName"></a>

```go
LanguageModelName *string
```

- *Type:* *string

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `PartialResultsStability`<sup>Optional</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability"></a>

```go
PartialResultsStability *string
```

- *Type:* *string

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `PiiEntityTypes`<sup>Optional</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes"></a>

```go
PiiEntityTypes *string
```

- *Type:* *string

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `PostCallAnalyticsSettings`<sup>Optional</sup> <a name="PostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings"></a>

```go
PostCallAnalyticsSettings ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}.

---

##### `VocabularyFilterMethod`<sup>Optional</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod"></a>

```go
VocabularyFilterMethod *string
```

- *Type:* *string

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `VocabularyFilterName`<sup>Optional</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName"></a>

```go
VocabularyFilterName *string
```

- *Type:* *string

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `VocabularyName`<sup>Optional</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName"></a>

```go
VocabularyName *string
```

- *Type:* *string

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
	ContentRedactionOutput: *string,
	DataAccessRoleArn: *string,
	OutputEncryptionKmsKeyId: *string,
	OutputLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput">ContentRedactionOutput</a></code> | <code>*string</code> | The content redaction output settings. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | The ARN of the role used by Transcribe to upload post-call analysis. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId">OutputEncryptionKmsKeyId</a></code> | <code>*string</code> | The ID of the KMS key used to encrypt the output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | The URL of the Amazon S3 bucket for post-call data. |

---

##### `ContentRedactionOutput`<sup>Optional</sup> <a name="ContentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput"></a>

```go
ContentRedactionOutput *string
```

- *Type:* *string

The content redaction output settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output ChimeMediaInsightsPipelineConfiguration#content_redaction_output}

---

##### `DataAccessRoleArn`<sup>Optional</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

The ARN of the role used by Transcribe to upload post-call analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn ChimeMediaInsightsPipelineConfiguration#data_access_role_arn}

---

##### `OutputEncryptionKmsKeyId`<sup>Optional</sup> <a name="OutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId"></a>

```go
OutputEncryptionKmsKeyId *string
```

- *Type:* *string

The ID of the KMS key used to encrypt the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimeMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation"></a>

```go
OutputLocation *string
```

- *Type:* *string

The URL of the Amazon S3 bucket for post-call data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_location ChimeMediaInsightsPipelineConfiguration#output_location}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration {
	ContentIdentificationType: *string,
	ContentRedactionType: *string,
	EnablePartialResultsStabilization: interface{},
	FilterPartialResults: interface{},
	IdentifyLanguage: interface{},
	IdentifyMultipleLanguages: interface{},
	LanguageCode: *string,
	LanguageModelName: *string,
	LanguageOptions: *string,
	PartialResultsStability: *string,
	PiiEntityTypes: *string,
	PreferredLanguage: *string,
	ShowSpeakerLabel: interface{},
	VocabularyFilterMethod: *string,
	VocabularyFilterName: *string,
	VocabularyFilterNames: *string,
	VocabularyName: *string,
	VocabularyNames: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>interface{}</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults">FilterPartialResults</a></code> | <code>interface{}</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage">IdentifyLanguage</a></code> | <code>interface{}</code> | Turns language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages">IdentifyMultipleLanguages</a></code> | <code>interface{}</code> | Turns multiple language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions">LanguageOptions</a></code> | <code>*string</code> | The language options for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | The preferred language for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel">ShowSpeakerLabel</a></code> | <code>interface{}</code> | Enables speaker partitioning. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames">VocabularyFilterNames</a></code> | <code>*string</code> | The names of the custom vocabulary filters. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | The name of the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames">VocabularyNames</a></code> | <code>*string</code> | The names of the custom vocabularies. |

---

##### `ContentIdentificationType`<sup>Optional</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType"></a>

```go
ContentIdentificationType *string
```

- *Type:* *string

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `ContentRedactionType`<sup>Optional</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType"></a>

```go
ContentRedactionType *string
```

- *Type:* *string

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `EnablePartialResultsStabilization`<sup>Optional</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```go
EnablePartialResultsStabilization interface{}
```

- *Type:* interface{}

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `FilterPartialResults`<sup>Optional</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults"></a>

```go
FilterPartialResults interface{}
```

- *Type:* interface{}

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `IdentifyLanguage`<sup>Optional</sup> <a name="IdentifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage"></a>

```go
IdentifyLanguage interface{}
```

- *Type:* interface{}

Turns language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language ChimeMediaInsightsPipelineConfiguration#identify_language}

---

##### `IdentifyMultipleLanguages`<sup>Optional</sup> <a name="IdentifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages"></a>

```go
IdentifyMultipleLanguages interface{}
```

- *Type:* interface{}

Turns multiple language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages ChimeMediaInsightsPipelineConfiguration#identify_multiple_languages}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `LanguageModelName`<sup>Optional</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName"></a>

```go
LanguageModelName *string
```

- *Type:* *string

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `LanguageOptions`<sup>Optional</sup> <a name="LanguageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions"></a>

```go
LanguageOptions *string
```

- *Type:* *string

The language options for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_options ChimeMediaInsightsPipelineConfiguration#language_options}

---

##### `PartialResultsStability`<sup>Optional</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability"></a>

```go
PartialResultsStability *string
```

- *Type:* *string

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `PiiEntityTypes`<sup>Optional</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes"></a>

```go
PiiEntityTypes *string
```

- *Type:* *string

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

The preferred language for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language ChimeMediaInsightsPipelineConfiguration#preferred_language}

---

##### `ShowSpeakerLabel`<sup>Optional</sup> <a name="ShowSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel"></a>

```go
ShowSpeakerLabel interface{}
```

- *Type:* interface{}

Enables speaker partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label ChimeMediaInsightsPipelineConfiguration#show_speaker_label}

---

##### `VocabularyFilterMethod`<sup>Optional</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod"></a>

```go
VocabularyFilterMethod *string
```

- *Type:* *string

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `VocabularyFilterName`<sup>Optional</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName"></a>

```go
VocabularyFilterName *string
```

- *Type:* *string

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `VocabularyFilterNames`<sup>Optional</sup> <a name="VocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames"></a>

```go
VocabularyFilterNames *string
```

- *Type:* *string

The names of the custom vocabulary filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_names}

---

##### `VocabularyName`<sup>Optional</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName"></a>

```go
VocabularyName *string
```

- *Type:* *string

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

##### `VocabularyNames`<sup>Optional</sup> <a name="VocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames"></a>

```go
VocabularyNames *string
```

- *Type:* *string

The names of the custom vocabularies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names ChimeMediaInsightsPipelineConfiguration#vocabulary_names}

---

### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration {
	InsightsTarget: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget">InsightsTarget</a></code> | <code>*string</code> | The ARN of the Kinesis Data Stream sink. |

---

##### `InsightsTarget`<sup>Optional</sup> <a name="InsightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget"></a>

```go
InsightsTarget *string
```

- *Type:* *string

The ARN of the Kinesis Data Stream sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target ChimeMediaInsightsPipelineConfiguration#insights_target}

---

### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration {
	Destination: *string,
	RecordingFileFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination">Destination</a></code> | <code>*string</code> | The default URI of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat">RecordingFileFormat</a></code> | <code>*string</code> | The recording file format. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The default URI of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#destination ChimeMediaInsightsPipelineConfiguration#destination}

---

##### `RecordingFileFormat`<sup>Optional</sup> <a name="RecordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat"></a>

```go
RecordingFileFormat *string
```

- *Type:* *string

The recording file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format ChimeMediaInsightsPipelineConfiguration#recording_file_format}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration {
	Disabled: interface{},
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled">Disabled</a></code> | <code>interface{}</code> | Turns off real-time alerts. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules">Rules</a></code> | <code>interface{}</code> | The rules in the alert. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Turns off real-time alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#disabled ChimeMediaInsightsPipelineConfiguration#disabled}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

The rules in the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rules ChimeMediaInsightsPipelineConfiguration#rules}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules {
	IssueDetectionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration,
	KeywordMatchConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration,
	SentimentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration">IssueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration">KeywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration">SentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type">Type</a></code> | <code>*string</code> | The type of alert rule. |

---

##### `IssueDetectionConfiguration`<sup>Optional</sup> <a name="IssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration"></a>

```go
IssueDetectionConfiguration ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}.

---

##### `KeywordMatchConfiguration`<sup>Optional</sup> <a name="KeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration"></a>

```go
KeywordMatchConfiguration ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}.

---

##### `SentimentConfiguration`<sup>Optional</sup> <a name="SentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration"></a>

```go
SentimentConfiguration ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration {
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName">RuleName</a></code> | <code>*string</code> | The name of the issue detection rule. |

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The name of the issue detection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration {
	Keywords: *[]*string,
	Negate: interface{},
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords">Keywords</a></code> | <code>*[]*string</code> | The keywords or phrases to match. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate">Negate</a></code> | <code>interface{}</code> | Matches keywords on their presence or absence. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName">RuleName</a></code> | <code>*string</code> | The name of the keyword match rule. |

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords"></a>

```go
Keywords *[]*string
```

- *Type:* *[]*string

The keywords or phrases to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keywords ChimeMediaInsightsPipelineConfiguration#keywords}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Matches keywords on their presence or absence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#negate ChimeMediaInsightsPipelineConfiguration#negate}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The name of the keyword match rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration {
	RuleName: *string,
	SentimentType: *string,
	TimePeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName">RuleName</a></code> | <code>*string</code> | The name of the sentiment rule. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType">SentimentType</a></code> | <code>*string</code> | The type of sentiment. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod">TimePeriod</a></code> | <code>*f64</code> | The analysis interval in seconds. |

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The name of the sentiment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `SentimentType`<sup>Optional</sup> <a name="SentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType"></a>

```go
SentimentType *string
```

- *Type:* *string

The type of sentiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type ChimeMediaInsightsPipelineConfiguration#sentiment_type}

---

##### `TimePeriod`<sup>Optional</sup> <a name="TimePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod"></a>

```go
TimePeriod *f64
```

- *Type:* *f64

The analysis interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#time_period ChimeMediaInsightsPipelineConfiguration#time_period}

---

### ChimeMediaInsightsPipelineConfigurationTags <a name="ChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

&chimemediainsightspipelineconfiguration.ChimeMediaInsightsPipelineConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings">PutPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories">ResetCallAnalyticsStreamCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType">ResetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType">ResetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">ResetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults">ResetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName">ResetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability">ResetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes">ResetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings">ResetPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod">ResetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName">ResetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName">ResetVocabularyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostCallAnalyticsSettings` <a name="PutPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings"></a>

```go
func PutPostCallAnalyticsSettings(value ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `ResetCallAnalyticsStreamCategories` <a name="ResetCallAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories"></a>

```go
func ResetCallAnalyticsStreamCategories()
```

##### `ResetContentIdentificationType` <a name="ResetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```go
func ResetContentIdentificationType()
```

##### `ResetContentRedactionType` <a name="ResetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```go
func ResetContentRedactionType()
```

##### `ResetEnablePartialResultsStabilization` <a name="ResetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```go
func ResetEnablePartialResultsStabilization()
```

##### `ResetFilterPartialResults` <a name="ResetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```go
func ResetFilterPartialResults()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetLanguageModelName` <a name="ResetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```go
func ResetLanguageModelName()
```

##### `ResetPartialResultsStability` <a name="ResetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```go
func ResetPartialResultsStability()
```

##### `ResetPiiEntityTypes` <a name="ResetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```go
func ResetPiiEntityTypes()
```

##### `ResetPostCallAnalyticsSettings` <a name="ResetPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings"></a>

```go
func ResetPostCallAnalyticsSettings()
```

##### `ResetVocabularyFilterMethod` <a name="ResetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```go
func ResetVocabularyFilterMethod()
```

##### `ResetVocabularyFilterName` <a name="ResetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```go
func ResetVocabularyFilterName()
```

##### `ResetVocabularyName` <a name="ResetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName"></a>

```go
func ResetVocabularyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">PostCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput">CallAnalyticsStreamCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">ContentIdentificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput">ContentRedactionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">EnablePartialResultsStabilizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput">FilterPartialResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput">LanguageModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput">PartialResultsStabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput">PiiEntityTypesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput">PostCallAnalyticsSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">VocabularyFilterMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">VocabularyFilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput">VocabularyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">CallAnalyticsStreamCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">FilterPartialResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostCallAnalyticsSettings`<sup>Required</sup> <a name="PostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```go
func PostCallAnalyticsSettings() ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `CallAnalyticsStreamCategoriesInput`<sup>Optional</sup> <a name="CallAnalyticsStreamCategoriesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput"></a>

```go
func CallAnalyticsStreamCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentIdentificationTypeInput`<sup>Optional</sup> <a name="ContentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```go
func ContentIdentificationTypeInput() *string
```

- *Type:* *string

---

##### `ContentRedactionTypeInput`<sup>Optional</sup> <a name="ContentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```go
func ContentRedactionTypeInput() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="EnablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```go
func EnablePartialResultsStabilizationInput() interface{}
```

- *Type:* interface{}

---

##### `FilterPartialResultsInput`<sup>Optional</sup> <a name="FilterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```go
func FilterPartialResultsInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `LanguageModelNameInput`<sup>Optional</sup> <a name="LanguageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```go
func LanguageModelNameInput() *string
```

- *Type:* *string

---

##### `PartialResultsStabilityInput`<sup>Optional</sup> <a name="PartialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```go
func PartialResultsStabilityInput() *string
```

- *Type:* *string

---

##### `PiiEntityTypesInput`<sup>Optional</sup> <a name="PiiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```go
func PiiEntityTypesInput() *string
```

- *Type:* *string

---

##### `PostCallAnalyticsSettingsInput`<sup>Optional</sup> <a name="PostCallAnalyticsSettingsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput"></a>

```go
func PostCallAnalyticsSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `VocabularyFilterMethodInput`<sup>Optional</sup> <a name="VocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```go
func VocabularyFilterMethodInput() *string
```

- *Type:* *string

---

##### `VocabularyFilterNameInput`<sup>Optional</sup> <a name="VocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```go
func VocabularyFilterNameInput() *string
```

- *Type:* *string

---

##### `VocabularyNameInput`<sup>Optional</sup> <a name="VocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```go
func VocabularyNameInput() *string
```

- *Type:* *string

---

##### `CallAnalyticsStreamCategories`<sup>Required</sup> <a name="CallAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```go
func CallAnalyticsStreamCategories() *[]*string
```

- *Type:* *[]*string

---

##### `ContentIdentificationType`<sup>Required</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```go
func ContentIdentificationType() *string
```

- *Type:* *string

---

##### `ContentRedactionType`<sup>Required</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```go
func ContentRedactionType() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilization`<sup>Required</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```go
func EnablePartialResultsStabilization() interface{}
```

- *Type:* interface{}

---

##### `FilterPartialResults`<sup>Required</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```go
func FilterPartialResults() interface{}
```

- *Type:* interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `LanguageModelName`<sup>Required</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```go
func LanguageModelName() *string
```

- *Type:* *string

---

##### `PartialResultsStability`<sup>Required</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```go
func PartialResultsStability() *string
```

- *Type:* *string

---

##### `PiiEntityTypes`<sup>Required</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```go
func PiiEntityTypes() *string
```

- *Type:* *string

---

##### `VocabularyFilterMethod`<sup>Required</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```go
func VocabularyFilterMethod() *string
```

- *Type:* *string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```go
func VocabularyFilterName() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput">ResetContentRedactionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn">ResetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId">ResetOutputEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentRedactionOutput` <a name="ResetContentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput"></a>

```go
func ResetContentRedactionOutput()
```

##### `ResetDataAccessRoleArn` <a name="ResetDataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn"></a>

```go
func ResetDataAccessRoleArn()
```

##### `ResetOutputEncryptionKmsKeyId` <a name="ResetOutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId"></a>

```go
func ResetOutputEncryptionKmsKeyId()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput">ContentRedactionOutputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput">OutputEncryptionKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">ContentRedactionOutput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">OutputEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentRedactionOutputInput`<sup>Optional</sup> <a name="ContentRedactionOutputInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput"></a>

```go
func ContentRedactionOutputInput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `OutputEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="OutputEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput"></a>

```go
func OutputEncryptionKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput"></a>

```go
func OutputLocationInput() *string
```

- *Type:* *string

---

##### `ContentRedactionOutput`<sup>Required</sup> <a name="ContentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```go
func ContentRedactionOutput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `OutputEncryptionKmsKeyId`<sup>Required</sup> <a name="OutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```go
func OutputEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType">ResetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType">ResetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">ResetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults">ResetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage">ResetIdentifyLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages">ResetIdentifyMultipleLanguages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName">ResetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions">ResetLanguageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability">ResetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes">ResetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel">ResetShowSpeakerLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod">ResetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName">ResetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames">ResetVocabularyFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName">ResetVocabularyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames">ResetVocabularyNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentIdentificationType` <a name="ResetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```go
func ResetContentIdentificationType()
```

##### `ResetContentRedactionType` <a name="ResetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```go
func ResetContentRedactionType()
```

##### `ResetEnablePartialResultsStabilization` <a name="ResetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```go
func ResetEnablePartialResultsStabilization()
```

##### `ResetFilterPartialResults` <a name="ResetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```go
func ResetFilterPartialResults()
```

##### `ResetIdentifyLanguage` <a name="ResetIdentifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage"></a>

```go
func ResetIdentifyLanguage()
```

##### `ResetIdentifyMultipleLanguages` <a name="ResetIdentifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages"></a>

```go
func ResetIdentifyMultipleLanguages()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetLanguageModelName` <a name="ResetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```go
func ResetLanguageModelName()
```

##### `ResetLanguageOptions` <a name="ResetLanguageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions"></a>

```go
func ResetLanguageOptions()
```

##### `ResetPartialResultsStability` <a name="ResetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```go
func ResetPartialResultsStability()
```

##### `ResetPiiEntityTypes` <a name="ResetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```go
func ResetPiiEntityTypes()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetShowSpeakerLabel` <a name="ResetShowSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel"></a>

```go
func ResetShowSpeakerLabel()
```

##### `ResetVocabularyFilterMethod` <a name="ResetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```go
func ResetVocabularyFilterMethod()
```

##### `ResetVocabularyFilterName` <a name="ResetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```go
func ResetVocabularyFilterName()
```

##### `ResetVocabularyFilterNames` <a name="ResetVocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames"></a>

```go
func ResetVocabularyFilterNames()
```

##### `ResetVocabularyName` <a name="ResetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName"></a>

```go
func ResetVocabularyName()
```

##### `ResetVocabularyNames` <a name="ResetVocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames"></a>

```go
func ResetVocabularyNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">ContentIdentificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput">ContentRedactionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">EnablePartialResultsStabilizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput">FilterPartialResultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput">IdentifyLanguageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput">IdentifyMultipleLanguagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput">LanguageModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput">LanguageOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput">PartialResultsStabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput">PiiEntityTypesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput">ShowSpeakerLabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">VocabularyFilterMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">VocabularyFilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput">VocabularyFilterNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput">VocabularyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput">VocabularyNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">FilterPartialResults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">IdentifyLanguage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">IdentifyMultipleLanguages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">LanguageOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">ShowSpeakerLabel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">VocabularyFilterNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">VocabularyNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentIdentificationTypeInput`<sup>Optional</sup> <a name="ContentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```go
func ContentIdentificationTypeInput() *string
```

- *Type:* *string

---

##### `ContentRedactionTypeInput`<sup>Optional</sup> <a name="ContentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```go
func ContentRedactionTypeInput() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="EnablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```go
func EnablePartialResultsStabilizationInput() interface{}
```

- *Type:* interface{}

---

##### `FilterPartialResultsInput`<sup>Optional</sup> <a name="FilterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```go
func FilterPartialResultsInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifyLanguageInput`<sup>Optional</sup> <a name="IdentifyLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput"></a>

```go
func IdentifyLanguageInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifyMultipleLanguagesInput`<sup>Optional</sup> <a name="IdentifyMultipleLanguagesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput"></a>

```go
func IdentifyMultipleLanguagesInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `LanguageModelNameInput`<sup>Optional</sup> <a name="LanguageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```go
func LanguageModelNameInput() *string
```

- *Type:* *string

---

##### `LanguageOptionsInput`<sup>Optional</sup> <a name="LanguageOptionsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput"></a>

```go
func LanguageOptionsInput() *string
```

- *Type:* *string

---

##### `PartialResultsStabilityInput`<sup>Optional</sup> <a name="PartialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```go
func PartialResultsStabilityInput() *string
```

- *Type:* *string

---

##### `PiiEntityTypesInput`<sup>Optional</sup> <a name="PiiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```go
func PiiEntityTypesInput() *string
```

- *Type:* *string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `ShowSpeakerLabelInput`<sup>Optional</sup> <a name="ShowSpeakerLabelInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput"></a>

```go
func ShowSpeakerLabelInput() interface{}
```

- *Type:* interface{}

---

##### `VocabularyFilterMethodInput`<sup>Optional</sup> <a name="VocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```go
func VocabularyFilterMethodInput() *string
```

- *Type:* *string

---

##### `VocabularyFilterNameInput`<sup>Optional</sup> <a name="VocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```go
func VocabularyFilterNameInput() *string
```

- *Type:* *string

---

##### `VocabularyFilterNamesInput`<sup>Optional</sup> <a name="VocabularyFilterNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput"></a>

```go
func VocabularyFilterNamesInput() *string
```

- *Type:* *string

---

##### `VocabularyNameInput`<sup>Optional</sup> <a name="VocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```go
func VocabularyNameInput() *string
```

- *Type:* *string

---

##### `VocabularyNamesInput`<sup>Optional</sup> <a name="VocabularyNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput"></a>

```go
func VocabularyNamesInput() *string
```

- *Type:* *string

---

##### `ContentIdentificationType`<sup>Required</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```go
func ContentIdentificationType() *string
```

- *Type:* *string

---

##### `ContentRedactionType`<sup>Required</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```go
func ContentRedactionType() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilization`<sup>Required</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```go
func EnablePartialResultsStabilization() interface{}
```

- *Type:* interface{}

---

##### `FilterPartialResults`<sup>Required</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```go
func FilterPartialResults() interface{}
```

- *Type:* interface{}

---

##### `IdentifyLanguage`<sup>Required</sup> <a name="IdentifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```go
func IdentifyLanguage() interface{}
```

- *Type:* interface{}

---

##### `IdentifyMultipleLanguages`<sup>Required</sup> <a name="IdentifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```go
func IdentifyMultipleLanguages() interface{}
```

- *Type:* interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `LanguageModelName`<sup>Required</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```go
func LanguageModelName() *string
```

- *Type:* *string

---

##### `LanguageOptions`<sup>Required</sup> <a name="LanguageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```go
func LanguageOptions() *string
```

- *Type:* *string

---

##### `PartialResultsStability`<sup>Required</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```go
func PartialResultsStability() *string
```

- *Type:* *string

---

##### `PiiEntityTypes`<sup>Required</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```go
func PiiEntityTypes() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ShowSpeakerLabel`<sup>Required</sup> <a name="ShowSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```go
func ShowSpeakerLabel() interface{}
```

- *Type:* interface{}

---

##### `VocabularyFilterMethod`<sup>Required</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```go
func VocabularyFilterMethod() *string
```

- *Type:* *string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```go
func VocabularyFilterName() *string
```

- *Type:* *string

---

##### `VocabularyFilterNames`<sup>Required</sup> <a name="VocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```go
func VocabularyFilterNames() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

##### `VocabularyNames`<sup>Required</sup> <a name="VocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```go
func VocabularyNames() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget">ResetInsightsTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInsightsTarget` <a name="ResetInsightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget"></a>

```go
func ResetInsightsTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput">InsightsTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">InsightsTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsightsTargetInput`<sup>Optional</sup> <a name="InsightsTargetInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput"></a>

```go
func InsightsTargetInput() *string
```

- *Type:* *string

---

##### `InsightsTarget`<sup>Required</sup> <a name="InsightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```go
func InsightsTarget() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsList <a name="ChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeMediaInsightsPipelineConfigurationElementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```go
func Get(index *f64) ChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration">PutAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration">PutAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration">PutKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration">PutS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration">ResetAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration">ResetAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration">ResetKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration">ResetS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="PutAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```go
func PutAmazonTranscribeCallAnalyticsProcessorConfiguration(value ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `PutAmazonTranscribeProcessorConfiguration` <a name="PutAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration"></a>

```go
func PutAmazonTranscribeProcessorConfiguration(value ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `PutKinesisDataStreamSinkConfiguration` <a name="PutKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration"></a>

```go
func PutKinesisDataStreamSinkConfiguration(value ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `PutS3RecordingSinkConfiguration` <a name="PutS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration"></a>

```go
func PutS3RecordingSinkConfiguration(value ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `ResetAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="ResetAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```go
func ResetAmazonTranscribeCallAnalyticsProcessorConfiguration()
```

##### `ResetAmazonTranscribeProcessorConfiguration` <a name="ResetAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration"></a>

```go
func ResetAmazonTranscribeProcessorConfiguration()
```

##### `ResetKinesisDataStreamSinkConfiguration` <a name="ResetKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration"></a>

```go
func ResetKinesisDataStreamSinkConfiguration()
```

##### `ResetS3RecordingSinkConfiguration` <a name="ResetS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration"></a>

```go
func ResetS3RecordingSinkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">AmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">AmazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">KinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">S3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput">AmazonTranscribeCallAnalyticsProcessorConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput">AmazonTranscribeProcessorConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput">KinesisDataStreamSinkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput">S3RecordingSinkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Required</sup> <a name="AmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```go
func AmazonTranscribeCallAnalyticsProcessorConfiguration() ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `AmazonTranscribeProcessorConfiguration`<sup>Required</sup> <a name="AmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```go
func AmazonTranscribeProcessorConfiguration() ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `KinesisDataStreamSinkConfiguration`<sup>Required</sup> <a name="KinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```go
func KinesisDataStreamSinkConfiguration() ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `S3RecordingSinkConfiguration`<sup>Required</sup> <a name="S3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```go
func S3RecordingSinkConfiguration() ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `AmazonTranscribeCallAnalyticsProcessorConfigurationInput`<sup>Optional</sup> <a name="AmazonTranscribeCallAnalyticsProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput"></a>

```go
func AmazonTranscribeCallAnalyticsProcessorConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AmazonTranscribeProcessorConfigurationInput`<sup>Optional</sup> <a name="AmazonTranscribeProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput"></a>

```go
func AmazonTranscribeProcessorConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisDataStreamSinkConfigurationInput`<sup>Optional</sup> <a name="KinesisDataStreamSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput"></a>

```go
func KinesisDataStreamSinkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3RecordingSinkConfigurationInput`<sup>Optional</sup> <a name="S3RecordingSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput"></a>

```go
func S3RecordingSinkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat">ResetRecordingFileFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetRecordingFileFormat` <a name="ResetRecordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat"></a>

```go
func ResetRecordingFileFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput">RecordingFileFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">RecordingFileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `RecordingFileFormatInput`<sup>Optional</sup> <a name="RecordingFileFormatInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput"></a>

```go
func RecordingFileFormatInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `RecordingFileFormat`<sup>Required</sup> <a name="RecordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```go
func RecordingFileFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```go
func Rules() ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords"></a>

```go
func ResetKeywords()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput">KeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput"></a>

```go
func KeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```go
func Get(index *f64) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration">PutIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration">PutKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration">PutSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration">ResetIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration">ResetKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration">ResetSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssueDetectionConfiguration` <a name="PutIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration"></a>

```go
func PutIssueDetectionConfiguration(value ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `PutKeywordMatchConfiguration` <a name="PutKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration"></a>

```go
func PutKeywordMatchConfiguration(value ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `PutSentimentConfiguration` <a name="PutSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration"></a>

```go
func PutSentimentConfiguration(value ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `ResetIssueDetectionConfiguration` <a name="ResetIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration"></a>

```go
func ResetIssueDetectionConfiguration()
```

##### `ResetKeywordMatchConfiguration` <a name="ResetKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration"></a>

```go
func ResetKeywordMatchConfiguration()
```

##### `ResetSentimentConfiguration` <a name="ResetSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration"></a>

```go
func ResetSentimentConfiguration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">IssueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">KeywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">SentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput">IssueDetectionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput">KeywordMatchConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput">SentimentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssueDetectionConfiguration`<sup>Required</sup> <a name="IssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```go
func IssueDetectionConfiguration() ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `KeywordMatchConfiguration`<sup>Required</sup> <a name="KeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```go
func KeywordMatchConfiguration() ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `SentimentConfiguration`<sup>Required</sup> <a name="SentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```go
func SentimentConfiguration() ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `IssueDetectionConfigurationInput`<sup>Optional</sup> <a name="IssueDetectionConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput"></a>

```go
func IssueDetectionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KeywordMatchConfigurationInput`<sup>Optional</sup> <a name="KeywordMatchConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput"></a>

```go
func KeywordMatchConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SentimentConfigurationInput`<sup>Optional</sup> <a name="SentimentConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput"></a>

```go
func SentimentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType">ResetSentimentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod">ResetTimePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSentimentType` <a name="ResetSentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType"></a>

```go
func ResetSentimentType()
```

##### `ResetTimePeriod` <a name="ResetTimePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod"></a>

```go
func ResetTimePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput">SentimentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput">TimePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">SentimentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">TimePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SentimentTypeInput`<sup>Optional</sup> <a name="SentimentTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput"></a>

```go
func SentimentTypeInput() *string
```

- *Type:* *string

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput"></a>

```go
func TimePeriodInput() *f64
```

- *Type:* *f64

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SentimentType`<sup>Required</sup> <a name="SentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```go
func SentimentType() *string
```

- *Type:* *string

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```go
func TimePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationTagsList <a name="ChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeMediaInsightsPipelineConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```go
func Get(index *f64) ChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediainsightspipelineconfiguration"

chimemediainsightspipelineconfiguration.NewChimeMediaInsightsPipelineConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



