# `sagemakerModelQualityJobDefinition` Submodule <a name="`sagemakerModelQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelQualityJobDefinition <a name="SagemakerModelQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinition(scope Construct, id *string, config SagemakerModelQualityJobDefinitionConfig) SagemakerModelQualityJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig">SagemakerModelQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig">SagemakerModelQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources">PutJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification">PutModelQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig">PutModelQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput">PutModelQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig">PutModelQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetJobDefinitionName">ResetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetModelQualityBaselineConfig">ResetModelQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources"></a>

```go
func PutJobResources(value SagemakerModelQualityJobDefinitionJobResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---

##### `PutModelQualityAppSpecification` <a name="PutModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification"></a>

```go
func PutModelQualityAppSpecification(value SagemakerModelQualityJobDefinitionModelQualityAppSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---

##### `PutModelQualityBaselineConfig` <a name="PutModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig"></a>

```go
func PutModelQualityBaselineConfig(value SagemakerModelQualityJobDefinitionModelQualityBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---

##### `PutModelQualityJobInput` <a name="PutModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput"></a>

```go
func PutModelQualityJobInput(value SagemakerModelQualityJobDefinitionModelQualityJobInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---

##### `PutModelQualityJobOutputConfig` <a name="PutModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig"></a>

```go
func PutModelQualityJobOutputConfig(value SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig"></a>

```go
func PutNetworkConfig(value SagemakerModelQualityJobDefinitionNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition"></a>

```go
func PutStoppingCondition(value SagemakerModelQualityJobDefinitionStoppingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetJobDefinitionName` <a name="ResetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetJobDefinitionName"></a>

```go
func ResetJobDefinitionName()
```

##### `ResetModelQualityBaselineConfig` <a name="ResetModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetModelQualityBaselineConfig"></a>

```go
func ResetModelQualityBaselineConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetStoppingCondition"></a>

```go
func ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerModelQualityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerModelQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification">ModelQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig">ModelQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput">ModelQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig">ModelQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput">JobDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput">ModelQualityAppSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput">ModelQualityBaselineConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput">ModelQualityJobInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput">ModelQualityJobOutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn"></a>

```go
func JobDefinitionArn() *string
```

- *Type:* *string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources"></a>

```go
func JobResources() SagemakerModelQualityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `ModelQualityAppSpecification`<sup>Required</sup> <a name="ModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification"></a>

```go
func ModelQualityAppSpecification() SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a>

---

##### `ModelQualityBaselineConfig`<sup>Required</sup> <a name="ModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig"></a>

```go
func ModelQualityBaselineConfig() SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a>

---

##### `ModelQualityJobInput`<sup>Required</sup> <a name="ModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput"></a>

```go
func ModelQualityJobInput() SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a>

---

##### `ModelQualityJobOutputConfig`<sup>Required</sup> <a name="ModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig"></a>

```go
func ModelQualityJobOutputConfig() SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig"></a>

```go
func NetworkConfig() SagemakerModelQualityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition"></a>

```go
func StoppingCondition() SagemakerModelQualityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags"></a>

```go
func Tags() SagemakerModelQualityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `JobDefinitionNameInput`<sup>Optional</sup> <a name="JobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput"></a>

```go
func JobDefinitionNameInput() *string
```

- *Type:* *string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput"></a>

```go
func JobResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ModelQualityAppSpecificationInput`<sup>Optional</sup> <a name="ModelQualityAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput"></a>

```go
func ModelQualityAppSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `ModelQualityBaselineConfigInput`<sup>Optional</sup> <a name="ModelQualityBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput"></a>

```go
func ModelQualityBaselineConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelQualityJobInputInput`<sup>Optional</sup> <a name="ModelQualityJobInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput"></a>

```go
func ModelQualityJobInputInput() interface{}
```

- *Type:* interface{}

---

##### `ModelQualityJobOutputConfigInput`<sup>Optional</sup> <a name="ModelQualityJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput"></a>

```go
func ModelQualityJobOutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput"></a>

```go
func NetworkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput"></a>

```go
func StoppingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName"></a>

```go
func JobDefinitionName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelQualityJobDefinitionConfig <a name="SagemakerModelQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	JobResources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources,
	ModelQualityAppSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification,
	ModelQualityJobInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput,
	ModelQualityJobOutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig,
	RoleArn: *string,
	EndpointName: *string,
	JobDefinitionName: *string,
	ModelQualityBaselineConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig,
	NetworkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig,
	StoppingCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification">ModelQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput">ModelQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig">ModelQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig">ModelQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources"></a>

```go
JobResources SagemakerModelQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#job_resources SagemakerModelQualityJobDefinition#job_resources}

---

##### `ModelQualityAppSpecification`<sup>Required</sup> <a name="ModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification"></a>

```go
ModelQualityAppSpecification SagemakerModelQualityJobDefinitionModelQualityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_app_specification SagemakerModelQualityJobDefinition#model_quality_app_specification}

---

##### `ModelQualityJobInput`<sup>Required</sup> <a name="ModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput"></a>

```go
ModelQualityJobInput SagemakerModelQualityJobDefinitionModelQualityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_input SagemakerModelQualityJobDefinition#model_quality_job_input}

---

##### `ModelQualityJobOutputConfig`<sup>Required</sup> <a name="ModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig"></a>

```go
ModelQualityJobOutputConfig SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_output_config SagemakerModelQualityJobDefinition#model_quality_job_output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#role_arn SagemakerModelQualityJobDefinition#role_arn}

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `JobDefinitionName`<sup>Optional</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```go
JobDefinitionName *string
```

- *Type:* *string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#job_definition_name SagemakerModelQualityJobDefinition#job_definition_name}

---

##### `ModelQualityBaselineConfig`<sup>Optional</sup> <a name="ModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig"></a>

```go
ModelQualityBaselineConfig SagemakerModelQualityJobDefinitionModelQualityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_baseline_config SagemakerModelQualityJobDefinition#model_quality_baseline_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig"></a>

```go
NetworkConfig SagemakerModelQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#network_config SagemakerModelQualityJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition"></a>

```go
StoppingCondition SagemakerModelQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#stopping_condition SagemakerModelQualityJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#tags SagemakerModelQualityJobDefinition#tags}

---

### SagemakerModelQualityJobDefinitionJobResources <a name="SagemakerModelQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionJobResources {
	ClusterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig"></a>

```go
ClusterConfig SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#cluster_config SagemakerModelQualityJobDefinition#cluster_config}

---

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig {
	InstanceCount: *f64,
	InstanceType: *string,
	VolumeSizeInGb: *f64,
	VolumeKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#instance_count SagemakerModelQualityJobDefinition#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#instance_type SagemakerModelQualityJobDefinition#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#volume_size_in_gb SagemakerModelQualityJobDefinition#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#volume_kms_key_id SagemakerModelQualityJobDefinition#volume_kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityAppSpecification <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification {
	ImageUri: *string,
	ProblemType: *string,
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
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri">ImageUri</a></code> | <code>*string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType">ProblemType</a></code> | <code>*string</code> | The status of the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#image_uri SagemakerModelQualityJobDefinition#image_uri}

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType"></a>

```go
ProblemType *string
```

- *Type:* *string

The status of the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#problem_type SagemakerModelQualityJobDefinition#problem_type}

---

##### `ContainerArguments`<sup>Optional</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments"></a>

```go
ContainerArguments *[]*string
```

- *Type:* *[]*string

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#container_arguments SagemakerModelQualityJobDefinition#container_arguments}

---

##### `ContainerEntrypoint`<sup>Optional</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint"></a>

```go
ContainerEntrypoint *[]*string
```

- *Type:* *[]*string

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#container_entrypoint SagemakerModelQualityJobDefinition#container_entrypoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#environment SagemakerModelQualityJobDefinition#environment}

---

##### `PostAnalyticsProcessorSourceUri`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```go
PostAnalyticsProcessorSourceUri *string
```

- *Type:* *string

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#post_analytics_processor_source_uri SagemakerModelQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `RecordPreprocessorSourceUri`<sup>Optional</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```go
RecordPreprocessorSourceUri *string
```

- *Type:* *string

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#record_preprocessor_source_uri SagemakerModelQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfig <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig {
	BaseliningJobName: *string,
	ConstraintsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `BaseliningJobName`<sup>Optional</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName"></a>

```go
BaseliningJobName *string
```

- *Type:* *string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#baselining_job_name SagemakerModelQualityJobDefinition#baselining_job_name}

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource"></a>

```go
ConstraintsResource SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#constraints_resource SagemakerModelQualityJobDefinition#constraints_resource}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput {
	GroundTruthS3Input: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input,
	BatchTransformInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput,
	EndpointInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | Ground truth input provided in S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input"></a>

```go
GroundTruthS3Input SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#ground_truth_s3_input SagemakerModelQualityJobDefinition#ground_truth_s3_input}

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput"></a>

```go
BatchTransformInput SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#batch_transform_input SagemakerModelQualityJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput"></a>

```go
EndpointInput SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_input SagemakerModelQualityJobDefinition#endpoint_input}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput {
	DataCapturedDestinationS3Uri: *string,
	DatasetFormat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat,
	EndTimeOffset: *string,
	InferenceAttribute: *string,
	LocalPath: *string,
	ProbabilityAttribute: *string,
	ProbabilityThresholdAttribute: *f64,
	S3DataDistributionType: *string,
	S3InputMode: *string,
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `DataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```go
DataCapturedDestinationS3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#data_captured_destination_s3_uri SagemakerModelQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `DatasetFormat`<sup>Optional</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```go
DatasetFormat SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#dataset_format SagemakerModelQualityJobDefinition#dataset_format}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute"></a>

```go
ProbabilityThresholdAttribute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat {
	Csv: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv,
	Json: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson,
	Parquet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet">Parquet</a></code> | <code>interface{}</code> | A flag indicating if the dataset format is Parquet. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```go
Csv SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#csv SagemakerModelQualityJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```go
Json SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#json SagemakerModelQualityJobDefinition#json}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```go
Parquet interface{}
```

- *Type:* interface{}

A flag indicating if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#parquet SagemakerModelQualityJobDefinition#parquet}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv {
	Header: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>interface{}</code> | A boolean flag indicating if given CSV has header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#header SagemakerModelQualityJobDefinition#header}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson {
	Line: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>interface{}</code> | A boolean flag indicating if it is JSON line format. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```go
Line interface{}
```

- *Type:* interface{}

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#line SagemakerModelQualityJobDefinition#line}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput {
	EndpointName: *string,
	EndTimeOffset: *string,
	InferenceAttribute: *string,
	LocalPath: *string,
	ProbabilityAttribute: *string,
	ProbabilityThresholdAttribute: *f64,
	S3DataDistributionType: *string,
	S3InputMode: *string,
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute"></a>

```go
ProbabilityThresholdAttribute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig {
	MonitoringOutputs: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code>interface{}</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs"></a>

```go
MonitoringOutputs interface{}
```

- *Type:* interface{}

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#monitoring_outputs SagemakerModelQualityJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#kms_key_id SagemakerModelQualityJobDefinition#kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs {
	S3Output: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```go
S3Output SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_output SagemakerModelQualityJobDefinition#s3_output}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output {
	LocalPath: *string,
	S3Uri: *string,
	S3UploadMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>*string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```go
S3UploadMode *string
```

- *Type:* *string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#s3_upload_mode SagemakerModelQualityJobDefinition#s3_upload_mode}

---

### SagemakerModelQualityJobDefinitionNetworkConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionNetworkConfig {
	EnableInterContainerTrafficEncryption: interface{},
	EnableNetworkIsolation: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```go
EnableInterContainerTrafficEncryption interface{}
```

- *Type:* interface{}

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#enable_inter_container_traffic_encryption SagemakerModelQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#enable_network_isolation SagemakerModelQualityJobDefinition#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#vpc_config SagemakerModelQualityJobDefinition#vpc_config}

---

### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#security_group_ids SagemakerModelQualityJobDefinition#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#subnets SagemakerModelQualityJobDefinition#subnets}

---

### SagemakerModelQualityJobDefinitionStoppingCondition <a name="SagemakerModelQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionStoppingCondition {
	MaxRuntimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | The maximum runtime allowed in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```go
MaxRuntimeInSeconds *f64
```

- *Type:* *f64

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelQualityJobDefinitionTags <a name="SagemakerModelQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

&sagemakermodelqualityjobdefinition.SagemakerModelQualityJobDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#key SagemakerModelQualityJobDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_quality_job_definition#value SagemakerModelQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionJobResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionJobResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value SagemakerModelQualityJobDefinitionJobResourcesClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerArguments">ResetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerEntrypoint">ResetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">ResetPostAnalyticsProcessorSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">ResetRecordPreprocessorSourceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerArguments` <a name="ResetContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```go
func ResetContainerArguments()
```

##### `ResetContainerEntrypoint` <a name="ResetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```go
func ResetContainerEntrypoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetPostAnalyticsProcessorSourceUri` <a name="ResetPostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```go
func ResetPostAnalyticsProcessorSourceUri()
```

##### `ResetRecordPreprocessorSourceUri` <a name="ResetRecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```go
func ResetRecordPreprocessorSourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput">ContainerArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput">ContainerEntrypointInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">PostAnalyticsProcessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">RecordPreprocessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType">ProblemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerArgumentsInput`<sup>Optional</sup> <a name="ContainerArgumentsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```go
func ContainerArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypointInput`<sup>Optional</sup> <a name="ContainerEntrypointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```go
func ContainerEntrypointInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUriInput`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```go
func PostAnalyticsProcessorSourceUriInput() *string
```

- *Type:* *string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput"></a>

```go
func ProblemTypeInput() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUriInput`<sup>Optional</sup> <a name="RecordPreprocessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```go
func RecordPreprocessorSourceUriInput() *string
```

- *Type:* *string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments"></a>

```go
func ContainerArguments() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```go
func ContainerEntrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```go
func PostAnalyticsProcessorSourceUri() *string
```

- *Type:* *string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType"></a>

```go
func ProblemType() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUri`<sup>Required</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```go
func RecordPreprocessorSourceUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource">PutConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetBaseliningJobName">ResetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetConstraintsResource">ResetConstraintsResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```go
func PutConstraintsResource(value SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---

##### `ResetBaseliningJobName` <a name="ResetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```go
func ResetBaseliningJobName()
```

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```go
func ResetConstraintsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput">BaseliningJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```go
func ConstraintsResource() SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `BaseliningJobNameInput`<sup>Optional</sup> <a name="BaseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```go
func BaseliningJobNameInput() *string
```

- *Type:* *string

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```go
func ConstraintsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```go
func BaseliningJobName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">ResetLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```go
func ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```go
func LineInput() interface{}
```

- *Type:* interface{}

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```go
func Line() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```go
func PutCsv(value SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```go
func PutJson(value SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```go
func Csv() SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```go
func Json() SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() interface{}
```

- *Type:* interface{}

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```go
func Parquet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">PutDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">ResetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat">ResetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute">ResetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```go
func PutDatasetFormat(value SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetDataCapturedDestinationS3Uri` <a name="ResetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```go
func ResetDataCapturedDestinationS3Uri()
```

##### `ResetDatasetFormat` <a name="ResetDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```go
func ResetDatasetFormat()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute"></a>

```go
func ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```go
func DatasetFormat() SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```go
func DataCapturedDestinationS3UriInput() *string
```

- *Type:* *string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```go
func DatasetFormatInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```go
func ProbabilityThresholdAttributeInput() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```go
func DataCapturedDestinationS3Uri() *string
```

- *Type:* *string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```go
func ProbabilityThresholdAttribute() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute">ResetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute"></a>

```go
func ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```go
func ProbabilityThresholdAttributeInput() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```go
func ProbabilityThresholdAttribute() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput">PutBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput">PutEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input">PutGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetBatchTransformInput">ResetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetEndpointInput">ResetEndpointInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput"></a>

```go
func PutBatchTransformInput(value SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput"></a>

```go
func PutEndpointInput(value SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---

##### `PutGroundTruthS3Input` <a name="PutGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input"></a>

```go
func PutGroundTruthS3Input(value SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetBatchTransformInput"></a>

```go
func ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetEndpointInput"></a>

```go
func ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput">GroundTruthS3InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput"></a>

```go
func BatchTransformInput() SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput"></a>

```go
func EndpointInput() SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a>

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input"></a>

```go
func GroundTruthS3Input() SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```go
func BatchTransformInputInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput"></a>

```go
func EndpointInputInput() interface{}
```

- *Type:* interface{}

---

##### `GroundTruthS3InputInput`<sup>Optional</sup> <a name="GroundTruthS3InputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput"></a>

```go
func GroundTruthS3InputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get"></a>

```go
func Get(index *f64) SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```go
func PutS3Output(value SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```go
func S3OutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```go
func ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```go
func S3UploadModeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs">PutMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```go
func PutMonitoringOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```go
func MonitoringOutputs() SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```go
func MonitoringOutputsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```go
func ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```go
func EnableInterContainerTrafficEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelQualityJobDefinitionStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```go
func ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```go
func MaxRuntimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionTagsList <a name="SagemakerModelQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelQualityJobDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get"></a>

```go
func Get(index *f64) SagemakerModelQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelQualityJobDefinitionTagsOutputReference <a name="SagemakerModelQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelqualityjobdefinition"

sagemakermodelqualityjobdefinition.NewSagemakerModelQualityJobDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelQualityJobDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



