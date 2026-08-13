# `entityresolutionMatchingWorkflow` Submodule <a name="`entityresolutionMatchingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionMatchingWorkflow <a name="EntityresolutionMatchingWorkflow" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflow(scope Construct, id *string, config EntityresolutionMatchingWorkflowConfig) EntityresolutionMatchingWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig">EntityresolutionMatchingWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig">EntityresolutionMatchingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig">PutIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig">PutInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig">PutOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques">PutResolutionTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig">ResetIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncrementalRunConfig` <a name="PutIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig"></a>

```go
func PutIncrementalRunConfig(value EntityresolutionMatchingWorkflowIncrementalRunConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---

##### `PutInputSourceConfig` <a name="PutInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig"></a>

```go
func PutInputSourceConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutputSourceConfig` <a name="PutOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig"></a>

```go
func PutOutputSourceConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResolutionTechniques` <a name="PutResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques"></a>

```go
func PutResolutionTechniques(value EntityresolutionMatchingWorkflowResolutionTechniques)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIncrementalRunConfig` <a name="ResetIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig"></a>

```go
func ResetIncrementalRunConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EntityresolutionMatchingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EntityresolutionMatchingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionMatchingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig">IncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig">OutputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques">ResolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput">IncrementalRunConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput">InputSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput">OutputSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput">ResolutionTechniquesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncrementalRunConfig`<sup>Required</sup> <a name="IncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig"></a>

```go
func IncrementalRunConfig() EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a>

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig"></a>

```go
func InputSourceConfig() EntityresolutionMatchingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a>

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig"></a>

```go
func OutputSourceConfig() EntityresolutionMatchingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a>

---

##### `ResolutionTechniques`<sup>Required</sup> <a name="ResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques"></a>

```go
func ResolutionTechniques() EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags"></a>

```go
func Tags() EntityresolutionMatchingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn"></a>

```go
func WorkflowArn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IncrementalRunConfigInput`<sup>Optional</sup> <a name="IncrementalRunConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput"></a>

```go
func IncrementalRunConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InputSourceConfigInput`<sup>Optional</sup> <a name="InputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput"></a>

```go
func InputSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OutputSourceConfigInput`<sup>Optional</sup> <a name="OutputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput"></a>

```go
func OutputSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ResolutionTechniquesInput`<sup>Optional</sup> <a name="ResolutionTechniquesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput"></a>

```go
func ResolutionTechniquesInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionMatchingWorkflowConfig <a name="EntityresolutionMatchingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InputSourceConfig: interface{},
	OutputSourceConfig: interface{},
	ResolutionTechniques: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques,
	RoleArn: *string,
	WorkflowName: *string,
	Description: *string,
	IncrementalRunConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig">InputSourceConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig">OutputSourceConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques">ResolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName">WorkflowName</a></code> | <code>*string</code> | The name of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description">Description</a></code> | <code>*string</code> | The description of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig">IncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig"></a>

```go
InputSourceConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}.

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig"></a>

```go
OutputSourceConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}.

---

##### `ResolutionTechniques`<sup>Required</sup> <a name="ResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques"></a>

```go
ResolutionTechniques EntityresolutionMatchingWorkflowResolutionTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}.

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

The name of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#workflow_name EntityresolutionMatchingWorkflow#workflow_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#description EntityresolutionMatchingWorkflow#description}

---

##### `IncrementalRunConfig`<sup>Optional</sup> <a name="IncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig"></a>

```go
IncrementalRunConfig EntityresolutionMatchingWorkflowIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}.

---

### EntityresolutionMatchingWorkflowIncrementalRunConfig <a name="EntityresolutionMatchingWorkflowIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig {
	IncrementalRunType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType">IncrementalRunType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}. |

---

##### `IncrementalRunType`<sup>Optional</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType"></a>

```go
IncrementalRunType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}.

---

### EntityresolutionMatchingWorkflowInputSourceConfig <a name="EntityresolutionMatchingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowInputSourceConfig {
	InputSourceArn: *string,
	SchemaArn: *string,
	ApplyNormalization: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn">InputSourceArn</a></code> | <code>*string</code> | An Glue table ARN for the input source table. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization">ApplyNormalization</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```go
InputSourceArn *string
```

- *Type:* *string

An Glue table ARN for the input source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#input_source_arn EntityresolutionMatchingWorkflow#input_source_arn}

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn"></a>

```go
SchemaArn *string
```

- *Type:* *string

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#schema_arn EntityresolutionMatchingWorkflow#schema_arn}

---

##### `ApplyNormalization`<sup>Optional</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization"></a>

```go
ApplyNormalization interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

### EntityresolutionMatchingWorkflowOutputSourceConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowOutputSourceConfig {
	Output: interface{},
	ApplyNormalization: interface{},
	CustomerProfilesIntegrationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig,
	KmsArn: *string,
	OutputS3Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output">Output</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization">ApplyNormalization</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig">CustomerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | The Customer Profiles integration configuration for the output source. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn">KmsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path">OutputS3Path</a></code> | <code>*string</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output"></a>

```go
Output interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}.

---

##### `ApplyNormalization`<sup>Optional</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization"></a>

```go
ApplyNormalization interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

##### `CustomerProfilesIntegrationConfig`<sup>Optional</sup> <a name="CustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig"></a>

```go
CustomerProfilesIntegrationConfig EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

The Customer Profiles integration configuration for the output source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#customer_profiles_integration_config EntityresolutionMatchingWorkflow#customer_profiles_integration_config}

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn"></a>

```go
KmsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}.

---

##### `OutputS3Path`<sup>Optional</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```go
OutputS3Path *string
```

- *Type:* *string

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#output_s3_path EntityresolutionMatchingWorkflow#output_s3_path}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig {
	DomainArn: *string,
	ObjectTypeArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn">DomainArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Customer Profiles domain. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn">ObjectTypeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Customer Profiles object type. |

---

##### `DomainArn`<sup>Optional</sup> <a name="DomainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn"></a>

```go
DomainArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Customer Profiles domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#domain_arn EntityresolutionMatchingWorkflow#domain_arn}

---

##### `ObjectTypeArn`<sup>Optional</sup> <a name="ObjectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn"></a>

```go
ObjectTypeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Customer Profiles object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#object_type_arn EntityresolutionMatchingWorkflow#object_type_arn}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigOutput <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput {
	Name: *string,
	Hashed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed">Hashed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}.

---

##### `Hashed`<sup>Optional</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed"></a>

```go
Hashed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}.

---

### EntityresolutionMatchingWorkflowResolutionTechniques <a name="EntityresolutionMatchingWorkflowResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniques {
	EnableRealTimeMatching: interface{},
	ProviderProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties,
	ResolutionType: *string,
	RuleBasedProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties,
	RuleConditionProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching">EnableRealTimeMatching</a></code> | <code>interface{}</code> | Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType">ResolutionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties">RuleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}. |

---

##### `EnableRealTimeMatching`<sup>Optional</sup> <a name="EnableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching"></a>

```go
EnableRealTimeMatching interface{}
```

- *Type:* interface{}

Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#enable_real_time_matching EntityresolutionMatchingWorkflow#enable_real_time_matching}

---

##### `ProviderProperties`<sup>Optional</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties"></a>

```go
ProviderProperties EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}.

---

##### `ResolutionType`<sup>Optional</sup> <a name="ResolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType"></a>

```go
ResolutionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}.

---

##### `RuleBasedProperties`<sup>Optional</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties"></a>

```go
RuleBasedProperties EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}.

---

##### `RuleConditionProperties`<sup>Optional</sup> <a name="RuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties"></a>

```go
RuleConditionProperties EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties {
	IntermediateSourceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration,
	ProviderConfiguration: *map[string]*string,
	ProviderServiceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration">ProviderConfiguration</a></code> | <code>*map[string]*string</code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn">ProviderServiceArn</a></code> | <code>*string</code> | Arn of the Provider service being used. |

---

##### `IntermediateSourceConfiguration`<sup>Optional</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```go
IntermediateSourceConfiguration EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}.

---

##### `ProviderConfiguration`<sup>Optional</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration"></a>

```go
ProviderConfiguration *map[string]*string
```

- *Type:* *map[string]*string

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#provider_configuration EntityresolutionMatchingWorkflow#provider_configuration}

---

##### `ProviderServiceArn`<sup>Optional</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn"></a>

```go
ProviderServiceArn *string
```

- *Type:* *string

Arn of the Provider service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#provider_service_arn EntityresolutionMatchingWorkflow#provider_service_arn}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration {
	IntermediateS3Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>*string</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `IntermediateS3Path`<sup>Optional</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```go
IntermediateS3Path *string
```

- *Type:* *string

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#intermediate_s3_path EntityresolutionMatchingWorkflow#intermediate_s3_path}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties {
	AttributeMatchingModel: *string,
	MatchPurpose: *string,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose">MatchPurpose</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules">Rules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `AttributeMatchingModel`<sup>Optional</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```go
AttributeMatchingModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}.

---

##### `MatchPurpose`<sup>Optional</sup> <a name="MatchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose"></a>

```go
MatchPurpose *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules {
	MatchingKeys: *[]*string,
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys">MatchingKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `MatchingKeys`<sup>Optional</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```go
MatchingKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties {
	MatchingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig">MatchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | Configuration for matching behavior within rule condition properties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules">Rules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `MatchingConfig`<sup>Optional</sup> <a name="MatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig"></a>

```go
MatchingConfig EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

Configuration for matching behavior within rule condition properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#matching_config EntityresolutionMatchingWorkflow#matching_config}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig {
	EnableTransitiveMatching: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching">EnableTransitiveMatching</a></code> | <code>interface{}</code> | Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups. |

---

##### `EnableTransitiveMatching`<sup>Optional</sup> <a name="EnableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching"></a>

```go
EnableTransitiveMatching interface{}
```

- *Type:* interface{}

Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#enable_transitive_matching EntityresolutionMatchingWorkflow#enable_transitive_matching}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules {
	Condition: *string,
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowTags <a name="EntityresolutionMatchingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

&entityresolutionmatchingworkflow.EntityresolutionMatchingWorkflowTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#key EntityresolutionMatchingWorkflow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_matching_workflow#value EntityresolutionMatchingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference <a name="EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType">ResetIncrementalRunType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncrementalRunType` <a name="ResetIncrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```go
func ResetIncrementalRunType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">IncrementalRunTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType">IncrementalRunType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalRunTypeInput`<sup>Optional</sup> <a name="IncrementalRunTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```go
func IncrementalRunTypeInput() *string
```

- *Type:* *string

---

##### `IncrementalRunType`<sup>Required</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```go
func IncrementalRunType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowInputSourceConfigList <a name="EntityresolutionMatchingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowInputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowInputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowInputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization">ResetApplyNormalization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyNormalization` <a name="ResetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization"></a>

```go
func ResetApplyNormalization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput">ApplyNormalizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">InputSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization">ApplyNormalization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyNormalizationInput`<sup>Optional</sup> <a name="ApplyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```go
func ApplyNormalizationInput() interface{}
```

- *Type:* interface{}

---

##### `InputSourceArnInput`<sup>Optional</sup> <a name="InputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```go
func InputSourceArnInput() *string
```

- *Type:* *string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```go
func SchemaArnInput() *string
```

- *Type:* *string

---

##### `ApplyNormalization`<sup>Required</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization"></a>

```go
func ApplyNormalization() interface{}
```

- *Type:* interface{}

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```go
func InputSourceArn() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn">ResetDomainArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn">ResetObjectTypeArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainArn` <a name="ResetDomainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn"></a>

```go
func ResetDomainArn()
```

##### `ResetObjectTypeArn` <a name="ResetObjectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn"></a>

```go
func ResetObjectTypeArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput">DomainArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput">ObjectTypeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn">DomainArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn">ObjectTypeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainArnInput`<sup>Optional</sup> <a name="DomainArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput"></a>

```go
func DomainArnInput() *string
```

- *Type:* *string

---

##### `ObjectTypeArnInput`<sup>Optional</sup> <a name="ObjectTypeArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput"></a>

```go
func ObjectTypeArnInput() *string
```

- *Type:* *string

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn"></a>

```go
func DomainArn() *string
```

- *Type:* *string

---

##### `ObjectTypeArn`<sup>Required</sup> <a name="ObjectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn"></a>

```go
func ObjectTypeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowOutputSourceConfigList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowOutputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowOutputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowOutputSourceConfigOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowOutputSourceConfigOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed">ResetHashed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHashed` <a name="ResetHashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed"></a>

```go
func ResetHashed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput">HashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed">Hashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashedInput`<sup>Optional</sup> <a name="HashedInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput"></a>

```go
func HashedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Hashed`<sup>Required</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed"></a>

```go
func Hashed() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig">PutCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization">ResetApplyNormalization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig">ResetCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">ResetOutputS3Path</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerProfilesIntegrationConfig` <a name="PutCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig"></a>

```go
func PutCustomerProfilesIntegrationConfig(value EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput"></a>

```go
func PutOutput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyNormalization` <a name="ResetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization"></a>

```go
func ResetApplyNormalization()
```

##### `ResetCustomerProfilesIntegrationConfig` <a name="ResetCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig"></a>

```go
func ResetCustomerProfilesIntegrationConfig()
```

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```go
func ResetKmsArn()
```

##### `ResetOutputS3Path` <a name="ResetOutputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```go
func ResetOutputS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig">CustomerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput">ApplyNormalizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput">CustomerProfilesIntegrationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput">OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">OutputS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization">ApplyNormalization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">OutputS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerProfilesIntegrationConfig`<sup>Required</sup> <a name="CustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig"></a>

```go
func CustomerProfilesIntegrationConfig() EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output"></a>

```go
func Output() EntityresolutionMatchingWorkflowOutputSourceConfigOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a>

---

##### `ApplyNormalizationInput`<sup>Optional</sup> <a name="ApplyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```go
func ApplyNormalizationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerProfilesIntegrationConfigInput`<sup>Optional</sup> <a name="CustomerProfilesIntegrationConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput"></a>

```go
func CustomerProfilesIntegrationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```go
func KmsArnInput() *string
```

- *Type:* *string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput"></a>

```go
func OutputInput() interface{}
```

- *Type:* interface{}

---

##### `OutputS3PathInput`<sup>Optional</sup> <a name="OutputS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```go
func OutputS3PathInput() *string
```

- *Type:* *string

---

##### `ApplyNormalization`<sup>Required</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization"></a>

```go
func ApplyNormalization() interface{}
```

- *Type:* interface{}

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `OutputS3Path`<sup>Required</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```go
func OutputS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties">PutProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties">PutRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties">PutRuleConditionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching">ResetEnableRealTimeMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties">ResetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType">ResetResolutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties">ResetRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties">ResetRuleConditionProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderProperties` <a name="PutProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties"></a>

```go
func PutProviderProperties(value EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---

##### `PutRuleBasedProperties` <a name="PutRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties"></a>

```go
func PutRuleBasedProperties(value EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---

##### `PutRuleConditionProperties` <a name="PutRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties"></a>

```go
func PutRuleConditionProperties(value EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---

##### `ResetEnableRealTimeMatching` <a name="ResetEnableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching"></a>

```go
func ResetEnableRealTimeMatching()
```

##### `ResetProviderProperties` <a name="ResetProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties"></a>

```go
func ResetProviderProperties()
```

##### `ResetResolutionType` <a name="ResetResolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType"></a>

```go
func ResetResolutionType()
```

##### `ResetRuleBasedProperties` <a name="ResetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties"></a>

```go
func ResetRuleBasedProperties()
```

##### `ResetRuleConditionProperties` <a name="ResetRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties"></a>

```go
func ResetRuleConditionProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties">RuleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput">EnableRealTimeMatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput">ProviderPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput">ResolutionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput">RuleBasedPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput">RuleConditionPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching">EnableRealTimeMatching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType">ResolutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties"></a>

```go
func ProviderProperties() EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties"></a>

```go
func RuleBasedProperties() EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `RuleConditionProperties`<sup>Required</sup> <a name="RuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties"></a>

```go
func RuleConditionProperties() EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a>

---

##### `EnableRealTimeMatchingInput`<sup>Optional</sup> <a name="EnableRealTimeMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput"></a>

```go
func EnableRealTimeMatchingInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderPropertiesInput`<sup>Optional</sup> <a name="ProviderPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput"></a>

```go
func ProviderPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ResolutionTypeInput`<sup>Optional</sup> <a name="ResolutionTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput"></a>

```go
func ResolutionTypeInput() *string
```

- *Type:* *string

---

##### `RuleBasedPropertiesInput`<sup>Optional</sup> <a name="RuleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```go
func RuleBasedPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `RuleConditionPropertiesInput`<sup>Optional</sup> <a name="RuleConditionPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput"></a>

```go
func RuleConditionPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRealTimeMatching`<sup>Required</sup> <a name="EnableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching"></a>

```go
func EnableRealTimeMatching() interface{}
```

- *Type:* interface{}

---

##### `ResolutionType`<sup>Required</sup> <a name="ResolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType"></a>

```go
func ResolutionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">ResetIntermediateS3Path</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntermediateS3Path` <a name="ResetIntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```go
func ResetIntermediateS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">IntermediateS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateS3PathInput`<sup>Optional</sup> <a name="IntermediateS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```go
func IntermediateS3PathInput() *string
```

- *Type:* *string

---

##### `IntermediateS3Path`<sup>Required</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```go
func IntermediateS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">PutIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">ResetIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">ResetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">ResetProviderServiceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntermediateSourceConfiguration` <a name="PutIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```go
func PutIntermediateSourceConfiguration(value EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `ResetIntermediateSourceConfiguration` <a name="ResetIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```go
func ResetIntermediateSourceConfiguration()
```

##### `ResetProviderConfiguration` <a name="ResetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```go
func ResetProviderConfiguration()
```

##### `ResetProviderServiceArn` <a name="ResetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```go
func ResetProviderServiceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">IntermediateSourceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">ProviderServiceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateSourceConfiguration`<sup>Required</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```go
func IntermediateSourceConfiguration() EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `IntermediateSourceConfigurationInput`<sup>Optional</sup> <a name="IntermediateSourceConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```go
func IntermediateSourceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigurationInput`<sup>Optional</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```go
func ProviderConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderServiceArnInput`<sup>Optional</sup> <a name="ProviderServiceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```go
func ProviderServiceArnInput() *string
```

- *Type:* *string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```go
func ProviderConfiguration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```go
func ProviderServiceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">ResetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose">ResetMatchPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributeMatchingModel` <a name="ResetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```go
func ResetAttributeMatchingModel()
```

##### `ResetMatchPurpose` <a name="ResetMatchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose"></a>

```go
func ResetMatchPurpose()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">AttributeMatchingModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput">MatchPurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose">MatchPurpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```go
func Rules() EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a>

---

##### `AttributeMatchingModelInput`<sup>Optional</sup> <a name="AttributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```go
func AttributeMatchingModelInput() *string
```

- *Type:* *string

---

##### `MatchPurposeInput`<sup>Optional</sup> <a name="MatchPurposeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput"></a>

```go
func MatchPurposeInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```go
func AttributeMatchingModel() *string
```

- *Type:* *string

---

##### `MatchPurpose`<sup>Required</sup> <a name="MatchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose"></a>

```go
func MatchPurpose() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">ResetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchingKeys` <a name="ResetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```go
func ResetMatchingKeys()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">MatchingKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingKeysInput`<sup>Optional</sup> <a name="MatchingKeysInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```go
func MatchingKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```go
func MatchingKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching">ResetEnableTransitiveMatching</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableTransitiveMatching` <a name="ResetEnableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching"></a>

```go
func ResetEnableTransitiveMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput">EnableTransitiveMatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching">EnableTransitiveMatching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableTransitiveMatchingInput`<sup>Optional</sup> <a name="EnableTransitiveMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput"></a>

```go
func EnableTransitiveMatchingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTransitiveMatching`<sup>Required</sup> <a name="EnableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching"></a>

```go
func EnableTransitiveMatching() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig">PutMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig">ResetMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingConfig` <a name="PutMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig"></a>

```go
func PutMatchingConfig(value EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingConfig` <a name="ResetMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig"></a>

```go
func ResetMatchingConfig()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig">MatchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput">MatchingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingConfig`<sup>Required</sup> <a name="MatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig"></a>

```go
func MatchingConfig() EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules"></a>

```go
func Rules() EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a>

---

##### `MatchingConfigInput`<sup>Optional</sup> <a name="MatchingConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput"></a>

```go
func MatchingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowTagsList <a name="EntityresolutionMatchingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionMatchingWorkflowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get"></a>

```go
func Get(index *f64) EntityresolutionMatchingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionMatchingWorkflowTagsOutputReference <a name="EntityresolutionMatchingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionmatchingworkflow"

entityresolutionmatchingworkflow.NewEntityresolutionMatchingWorkflowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionMatchingWorkflowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



