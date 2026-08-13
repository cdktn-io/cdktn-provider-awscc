# `sagemakerDataQualityJobDefinition` Submodule <a name="`sagemakerDataQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDataQualityJobDefinition <a name="SagemakerDataQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinition(scope Construct, id *string, config SagemakerDataQualityJobDefinitionConfig) SagemakerDataQualityJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification">PutDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig">PutDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput">PutDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig">PutDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources">PutJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig">ResetDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName">ResetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataQualityAppSpecification` <a name="PutDataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification"></a>

```go
func PutDataQualityAppSpecification(value SagemakerDataQualityJobDefinitionDataQualityAppSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `PutDataQualityBaselineConfig` <a name="PutDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig"></a>

```go
func PutDataQualityBaselineConfig(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `PutDataQualityJobInput` <a name="PutDataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput"></a>

```go
func PutDataQualityJobInput(value SagemakerDataQualityJobDefinitionDataQualityJobInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `PutDataQualityJobOutputConfig` <a name="PutDataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig"></a>

```go
func PutDataQualityJobOutputConfig(value SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources"></a>

```go
func PutJobResources(value SagemakerDataQualityJobDefinitionJobResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig"></a>

```go
func PutNetworkConfig(value SagemakerDataQualityJobDefinitionNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition"></a>

```go
func PutStoppingCondition(value SagemakerDataQualityJobDefinitionStoppingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataQualityBaselineConfig` <a name="ResetDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig"></a>

```go
func ResetDataQualityBaselineConfig()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetJobDefinitionName` <a name="ResetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName"></a>

```go
func ResetJobDefinitionName()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition"></a>

```go
func ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerDataQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification">DataQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig">DataQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput">DataQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig">DataQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput">DataQualityAppSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput">DataQualityBaselineConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput">DataQualityJobInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput">DataQualityJobOutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput">JobDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DataQualityAppSpecification`<sup>Required</sup> <a name="DataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification"></a>

```go
func DataQualityAppSpecification() SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a>

---

##### `DataQualityBaselineConfig`<sup>Required</sup> <a name="DataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig"></a>

```go
func DataQualityBaselineConfig() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a>

---

##### `DataQualityJobInput`<sup>Required</sup> <a name="DataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput"></a>

```go
func DataQualityJobInput() SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a>

---

##### `DataQualityJobOutputConfig`<sup>Required</sup> <a name="DataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig"></a>

```go
func DataQualityJobOutputConfig() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn"></a>

```go
func JobDefinitionArn() *string
```

- *Type:* *string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources"></a>

```go
func JobResources() SagemakerDataQualityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig"></a>

```go
func NetworkConfig() SagemakerDataQualityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition"></a>

```go
func StoppingCondition() SagemakerDataQualityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags"></a>

```go
func Tags() SagemakerDataQualityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a>

---

##### `DataQualityAppSpecificationInput`<sup>Optional</sup> <a name="DataQualityAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput"></a>

```go
func DataQualityAppSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `DataQualityBaselineConfigInput`<sup>Optional</sup> <a name="DataQualityBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput"></a>

```go
func DataQualityBaselineConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataQualityJobInputInput`<sup>Optional</sup> <a name="DataQualityJobInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput"></a>

```go
func DataQualityJobInputInput() interface{}
```

- *Type:* interface{}

---

##### `DataQualityJobOutputConfigInput`<sup>Optional</sup> <a name="DataQualityJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput"></a>

```go
func DataQualityJobOutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `JobDefinitionNameInput`<sup>Optional</sup> <a name="JobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput"></a>

```go
func JobDefinitionNameInput() *string
```

- *Type:* *string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput"></a>

```go
func JobResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput"></a>

```go
func NetworkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput"></a>

```go
func StoppingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName"></a>

```go
func JobDefinitionName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDataQualityJobDefinitionConfig <a name="SagemakerDataQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataQualityAppSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification,
	DataQualityJobInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput,
	DataQualityJobOutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig,
	JobResources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources,
	RoleArn: *string,
	DataQualityBaselineConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig,
	EndpointName: *string,
	JobDefinitionName: *string,
	NetworkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig,
	StoppingCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification">DataQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput">DataQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig">DataQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig">DataQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataQualityAppSpecification`<sup>Required</sup> <a name="DataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification"></a>

```go
DataQualityAppSpecification SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}

---

##### `DataQualityJobInput`<sup>Required</sup> <a name="DataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput"></a>

```go
DataQualityJobInput SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}

---

##### `DataQualityJobOutputConfig`<sup>Required</sup> <a name="DataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig"></a>

```go
DataQualityJobOutputConfig SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources"></a>

```go
JobResources SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}

---

##### `DataQualityBaselineConfig`<sup>Optional</sup> <a name="DataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig"></a>

```go
DataQualityBaselineConfig SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `JobDefinitionName`<sup>Optional</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```go
JobDefinitionName *string
```

- *Type:* *string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig"></a>

```go
NetworkConfig SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition"></a>

```go
StoppingCondition SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}

---

### SagemakerDataQualityJobDefinitionDataQualityAppSpecification <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification {
	ImageUri: *string,
	ContainerArguments: *[]*string,
	ContainerEntrypoint: *[]*string,
	Environment: *map[string]*string,
	PostAnalyticsProcessorSourceUri: *string,
	RecordPreprocessorSourceUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri">ImageUri</a></code> | <code>*string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}

---

##### `ContainerArguments`<sup>Optional</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments"></a>

```go
ContainerArguments *[]*string
```

- *Type:* *[]*string

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#container_arguments SagemakerDataQualityJobDefinition#container_arguments}

---

##### `ContainerEntrypoint`<sup>Optional</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint"></a>

```go
ContainerEntrypoint *[]*string
```

- *Type:* *[]*string

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}

---

##### `PostAnalyticsProcessorSourceUri`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```go
PostAnalyticsProcessorSourceUri *string
```

- *Type:* *string

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `RecordPreprocessorSourceUri`<sup>Optional</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```go
RecordPreprocessorSourceUri *string
```

- *Type:* *string

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfig <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig {
	BaseliningJobName: *string,
	ConstraintsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource,
	StatisticsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource">StatisticsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | The baseline statistics resource for a monitoring job. |

---

##### `BaseliningJobName`<sup>Optional</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName"></a>

```go
BaseliningJobName *string
```

- *Type:* *string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource"></a>

```go
ConstraintsResource SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}

---

##### `StatisticsResource`<sup>Optional</sup> <a name="StatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource"></a>

```go
StatisticsResource SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

The baseline statistics resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput {
	BatchTransformInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput,
	EndpointInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput"></a>

```go
BatchTransformInput SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput"></a>

```go
EndpointInput SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput {
	DataCapturedDestinationS3Uri: *string,
	DatasetFormat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat,
	ExcludeFeaturesAttribute: *string,
	LocalPath: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>*string</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `DataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```go
DataCapturedDestinationS3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `DatasetFormat`<sup>Optional</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```go
DatasetFormat SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}

---

##### `ExcludeFeaturesAttribute`<sup>Optional</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute"></a>

```go
ExcludeFeaturesAttribute *string
```

- *Type:* *string

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {
	Csv: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv,
	Json: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson,
	Parquet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet">Parquet</a></code> | <code>interface{}</code> | A flag indicate if the dataset format is Parquet. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```go
Csv SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```go
Json SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```go
Parquet interface{}
```

- *Type:* interface{}

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#parquet SagemakerDataQualityJobDefinition#parquet}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {
	Header: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>interface{}</code> | A boolean flag indicating if given CSV has header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {
	Line: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>interface{}</code> | A boolean flag indicating if it is JSON line format. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```go
Line interface{}
```

- *Type:* interface{}

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {
	EndpointName: *string,
	ExcludeFeaturesAttribute: *string,
	LocalPath: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>*string</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `ExcludeFeaturesAttribute`<sup>Optional</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute"></a>

```go
ExcludeFeaturesAttribute *string
```

- *Type:* *string

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {
	MonitoringOutputs: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code>interface{}</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs"></a>

```go
MonitoringOutputs interface{}
```

- *Type:* interface{}

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
	S3Output: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```go
S3Output SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
	LocalPath: *string,
	S3Uri: *string,
	S3UploadMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>*string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```go
S3UploadMode *string
```

- *Type:* *string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}

---

### SagemakerDataQualityJobDefinitionJobResources <a name="SagemakerDataQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionJobResources {
	ClusterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig"></a>

```go
ClusterConfig SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}

---

### SagemakerDataQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig {
	InstanceCount: *f64,
	InstanceType: *string,
	VolumeSizeInGb: *f64,
	VolumeKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}

---

### SagemakerDataQualityJobDefinitionNetworkConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionNetworkConfig {
	EnableInterContainerTrafficEncryption: interface{},
	EnableNetworkIsolation: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```go
EnableInterContainerTrafficEncryption interface{}
```

- *Type:* interface{}

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}

---

### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}

---

### SagemakerDataQualityJobDefinitionStoppingCondition <a name="SagemakerDataQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionStoppingCondition {
	MaxRuntimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | The maximum runtime allowed in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```go
MaxRuntimeInSeconds *f64
```

- *Type:* *f64

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerDataQualityJobDefinitionTags <a name="SagemakerDataQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#key SagemakerDataQualityJobDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_data_quality_job_definition#value SagemakerDataQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments">ResetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint">ResetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">ResetPostAnalyticsProcessorSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">ResetRecordPreprocessorSourceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerArguments` <a name="ResetContainerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```go
func ResetContainerArguments()
```

##### `ResetContainerEntrypoint` <a name="ResetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```go
func ResetContainerEntrypoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetPostAnalyticsProcessorSourceUri` <a name="ResetPostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```go
func ResetPostAnalyticsProcessorSourceUri()
```

##### `ResetRecordPreprocessorSourceUri` <a name="ResetRecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```go
func ResetRecordPreprocessorSourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput">ContainerArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput">ContainerEntrypointInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">PostAnalyticsProcessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">RecordPreprocessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerArgumentsInput`<sup>Optional</sup> <a name="ContainerArgumentsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```go
func ContainerArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypointInput`<sup>Optional</sup> <a name="ContainerEntrypointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```go
func ContainerEntrypointInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUriInput`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```go
func PostAnalyticsProcessorSourceUriInput() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUriInput`<sup>Optional</sup> <a name="RecordPreprocessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```go
func RecordPreprocessorSourceUriInput() *string
```

- *Type:* *string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments"></a>

```go
func ContainerArguments() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```go
func ContainerEntrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```go
func PostAnalyticsProcessorSourceUri() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUri`<sup>Required</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```go
func RecordPreprocessorSourceUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource">PutConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource">PutStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName">ResetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource">ResetConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource">ResetStatisticsResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```go
func PutConstraintsResource(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `PutStatisticsResource` <a name="PutStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource"></a>

```go
func PutStatisticsResource(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `ResetBaseliningJobName` <a name="ResetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```go
func ResetBaseliningJobName()
```

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```go
func ResetConstraintsResource()
```

##### `ResetStatisticsResource` <a name="ResetStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource"></a>

```go
func ResetStatisticsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource">StatisticsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput">BaseliningJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput">StatisticsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```go
func ConstraintsResource() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `StatisticsResource`<sup>Required</sup> <a name="StatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource"></a>

```go
func StatisticsResource() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a>

---

##### `BaseliningJobNameInput`<sup>Optional</sup> <a name="BaseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```go
func BaseliningJobNameInput() *string
```

- *Type:* *string

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```go
func ConstraintsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `StatisticsResourceInput`<sup>Optional</sup> <a name="StatisticsResourceInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput"></a>

```go
func StatisticsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```go
func BaseliningJobName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">ResetLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```go
func ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```go
func LineInput() interface{}
```

- *Type:* interface{}

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```go
func Line() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```go
func PutCsv(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```go
func PutJson(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```go
func Csv() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```go
func Json() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() interface{}
```

- *Type:* interface{}

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```go
func Parquet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">PutDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">ResetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat">ResetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute">ResetExcludeFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```go
func PutDatasetFormat(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetDataCapturedDestinationS3Uri` <a name="ResetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```go
func ResetDataCapturedDestinationS3Uri()
```

##### `ResetDatasetFormat` <a name="ResetDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```go
func ResetDatasetFormat()
```

##### `ResetExcludeFeaturesAttribute` <a name="ResetExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute"></a>

```go
func ResetExcludeFeaturesAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput">ExcludeFeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```go
func DatasetFormat() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```go
func DataCapturedDestinationS3UriInput() *string
```

- *Type:* *string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```go
func DatasetFormatInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeFeaturesAttributeInput`<sup>Optional</sup> <a name="ExcludeFeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```go
func ExcludeFeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```go
func DataCapturedDestinationS3Uri() *string
```

- *Type:* *string

---

##### `ExcludeFeaturesAttribute`<sup>Required</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute"></a>

```go
func ExcludeFeaturesAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute">ResetExcludeFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetExcludeFeaturesAttribute` <a name="ResetExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute"></a>

```go
func ResetExcludeFeaturesAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput">ExcludeFeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `ExcludeFeaturesAttributeInput`<sup>Optional</sup> <a name="ExcludeFeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```go
func ExcludeFeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `ExcludeFeaturesAttribute`<sup>Required</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute"></a>

```go
func ExcludeFeaturesAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput">PutBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput">PutEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput">ResetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput">ResetEndpointInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput"></a>

```go
func PutBatchTransformInput(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput"></a>

```go
func PutEndpointInput(value SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput"></a>

```go
func ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput"></a>

```go
func ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput"></a>

```go
func BatchTransformInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput"></a>

```go
func EndpointInput() SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```go
func BatchTransformInputInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput"></a>

```go
func EndpointInputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get"></a>

```go
func Get(index *f64) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```go
func PutS3Output(value SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```go
func S3OutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```go
func ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```go
func S3UploadModeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs">PutMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```go
func PutMonitoringOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```go
func MonitoringOutputs() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```go
func MonitoringOutputsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionJobResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionJobResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value SagemakerDataQualityJobDefinitionJobResourcesClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```go
func ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```go
func EnableInterContainerTrafficEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerDataQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```go
func ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```go
func MaxRuntimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionTagsList <a name="SagemakerDataQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerDataQualityJobDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get"></a>

```go
func Get(index *f64) SagemakerDataQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerDataQualityJobDefinitionTagsOutputReference <a name="SagemakerDataQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerDataQualityJobDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



