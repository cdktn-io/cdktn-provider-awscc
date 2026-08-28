# `sagemakerModelExplainabilityJobDefinition` Submodule <a name="`sagemakerModelExplainabilityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelExplainabilityJobDefinition <a name="SagemakerModelExplainabilityJobDefinition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinition(scope Construct, id *string, config SagemakerModelExplainabilityJobDefinitionConfig) SagemakerModelExplainabilityJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig">SagemakerModelExplainabilityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig">SagemakerModelExplainabilityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putJobResources">PutJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityAppSpecification">PutModelExplainabilityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityBaselineConfig">PutModelExplainabilityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobInput">PutModelExplainabilityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobOutputConfig">PutModelExplainabilityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetJobDefinitionName">ResetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetModelExplainabilityBaselineConfig">ResetModelExplainabilityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putJobResources"></a>

```go
func PutJobResources(value SagemakerModelExplainabilityJobDefinitionJobResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources">SagemakerModelExplainabilityJobDefinitionJobResources</a>

---

##### `PutModelExplainabilityAppSpecification` <a name="PutModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityAppSpecification"></a>

```go
func PutModelExplainabilityAppSpecification(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a>

---

##### `PutModelExplainabilityBaselineConfig` <a name="PutModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityBaselineConfig"></a>

```go
func PutModelExplainabilityBaselineConfig(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a>

---

##### `PutModelExplainabilityJobInput` <a name="PutModelExplainabilityJobInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobInput"></a>

```go
func PutModelExplainabilityJobInput(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a>

---

##### `PutModelExplainabilityJobOutputConfig` <a name="PutModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobOutputConfig"></a>

```go
func PutModelExplainabilityJobOutputConfig(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putModelExplainabilityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putNetworkConfig"></a>

```go
func PutNetworkConfig(value SagemakerModelExplainabilityJobDefinitionNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putStoppingCondition"></a>

```go
func PutStoppingCondition(value SagemakerModelExplainabilityJobDefinitionStoppingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition">SagemakerModelExplainabilityJobDefinitionStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetJobDefinitionName` <a name="ResetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetJobDefinitionName"></a>

```go
func ResetJobDefinitionName()
```

##### `ResetModelExplainabilityBaselineConfig` <a name="ResetModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetModelExplainabilityBaselineConfig"></a>

```go
func ResetModelExplainabilityBaselineConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetStoppingCondition"></a>

```go
func ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerModelExplainabilityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerModelExplainabilityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelExplainabilityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification">ModelExplainabilityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig">ModelExplainabilityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput">ModelExplainabilityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig">ModelExplainabilityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList">SagemakerModelExplainabilityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionNameInput">JobDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecificationInput">ModelExplainabilityAppSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfigInput">ModelExplainabilityBaselineConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInputInput">ModelExplainabilityJobInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfigInput">ModelExplainabilityJobOutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn"></a>

```go
func JobDefinitionArn() *string
```

- *Type:* *string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobResources"></a>

```go
func JobResources() SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a>

---

##### `ModelExplainabilityAppSpecification`<sup>Required</sup> <a name="ModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification"></a>

```go
func ModelExplainabilityAppSpecification() SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a>

---

##### `ModelExplainabilityBaselineConfig`<sup>Required</sup> <a name="ModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig"></a>

```go
func ModelExplainabilityBaselineConfig() SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a>

---

##### `ModelExplainabilityJobInput`<sup>Required</sup> <a name="ModelExplainabilityJobInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput"></a>

```go
func ModelExplainabilityJobInput() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a>

---

##### `ModelExplainabilityJobOutputConfig`<sup>Required</sup> <a name="ModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig"></a>

```go
func ModelExplainabilityJobOutputConfig() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.networkConfig"></a>

```go
func NetworkConfig() SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.stoppingCondition"></a>

```go
func StoppingCondition() SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tags"></a>

```go
func Tags() SagemakerModelExplainabilityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList">SagemakerModelExplainabilityJobDefinitionTagsList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `JobDefinitionNameInput`<sup>Optional</sup> <a name="JobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionNameInput"></a>

```go
func JobDefinitionNameInput() *string
```

- *Type:* *string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobResourcesInput"></a>

```go
func JobResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ModelExplainabilityAppSpecificationInput`<sup>Optional</sup> <a name="ModelExplainabilityAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecificationInput"></a>

```go
func ModelExplainabilityAppSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `ModelExplainabilityBaselineConfigInput`<sup>Optional</sup> <a name="ModelExplainabilityBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfigInput"></a>

```go
func ModelExplainabilityBaselineConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelExplainabilityJobInputInput`<sup>Optional</sup> <a name="ModelExplainabilityJobInputInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInputInput"></a>

```go
func ModelExplainabilityJobInputInput() interface{}
```

- *Type:* interface{}

---

##### `ModelExplainabilityJobOutputConfigInput`<sup>Optional</sup> <a name="ModelExplainabilityJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfigInput"></a>

```go
func ModelExplainabilityJobOutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.networkConfigInput"></a>

```go
func NetworkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.stoppingConditionInput"></a>

```go
func StoppingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.jobDefinitionName"></a>

```go
func JobDefinitionName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelExplainabilityJobDefinitionConfig <a name="SagemakerModelExplainabilityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	JobResources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources,
	ModelExplainabilityAppSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification,
	ModelExplainabilityJobInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput,
	ModelExplainabilityJobOutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig,
	RoleArn: *string,
	EndpointName: *string,
	JobDefinitionName: *string,
	ModelExplainabilityBaselineConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig,
	NetworkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig,
	StoppingCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources">SagemakerModelExplainabilityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityAppSpecification">ModelExplainabilityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityJobInput">ModelExplainabilityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityJobOutputConfig">ModelExplainabilityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityBaselineConfig">ModelExplainabilityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition">SagemakerModelExplainabilityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.jobResources"></a>

```go
JobResources SagemakerModelExplainabilityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources">SagemakerModelExplainabilityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#job_resources SagemakerModelExplainabilityJobDefinition#job_resources}

---

##### `ModelExplainabilityAppSpecification`<sup>Required</sup> <a name="ModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityAppSpecification"></a>

```go
ModelExplainabilityAppSpecification SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_app_specification SagemakerModelExplainabilityJobDefinition#model_explainability_app_specification}

---

##### `ModelExplainabilityJobInput`<sup>Required</sup> <a name="ModelExplainabilityJobInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityJobInput"></a>

```go
ModelExplainabilityJobInput SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_job_input SagemakerModelExplainabilityJobDefinition#model_explainability_job_input}

---

##### `ModelExplainabilityJobOutputConfig`<sup>Required</sup> <a name="ModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityJobOutputConfig"></a>

```go
ModelExplainabilityJobOutputConfig SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_job_output_config SagemakerModelExplainabilityJobDefinition#model_explainability_job_output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#role_arn SagemakerModelExplainabilityJobDefinition#role_arn}

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_name SagemakerModelExplainabilityJobDefinition#endpoint_name}

---

##### `JobDefinitionName`<sup>Optional</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.jobDefinitionName"></a>

```go
JobDefinitionName *string
```

- *Type:* *string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#job_definition_name SagemakerModelExplainabilityJobDefinition#job_definition_name}

---

##### `ModelExplainabilityBaselineConfig`<sup>Optional</sup> <a name="ModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.modelExplainabilityBaselineConfig"></a>

```go
ModelExplainabilityBaselineConfig SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_baseline_config SagemakerModelExplainabilityJobDefinition#model_explainability_baseline_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.networkConfig"></a>

```go
NetworkConfig SagemakerModelExplainabilityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#network_config SagemakerModelExplainabilityJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.stoppingCondition"></a>

```go
StoppingCondition SagemakerModelExplainabilityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition">SagemakerModelExplainabilityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#stopping_condition SagemakerModelExplainabilityJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#tags SagemakerModelExplainabilityJobDefinition#tags}

---

### SagemakerModelExplainabilityJobDefinitionJobResources <a name="SagemakerModelExplainabilityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionJobResources {
	ClusterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResources.property.clusterConfig"></a>

```go
ClusterConfig SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#cluster_config SagemakerModelExplainabilityJobDefinition#cluster_config}

---

### SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig {
	InstanceCount: *f64,
	InstanceType: *string,
	VolumeSizeInGb: *f64,
	VolumeKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#instance_count SagemakerModelExplainabilityJobDefinition#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#instance_type SagemakerModelExplainabilityJobDefinition#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#volume_size_in_gb SagemakerModelExplainabilityJobDefinition#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#volume_kms_key_id SagemakerModelExplainabilityJobDefinition#volume_kms_key_id}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification {
	ConfigUri: *string,
	ImageUri: *string,
	Environment: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.configUri">ConfigUri</a></code> | <code>*string</code> | The S3 URI to an analysis configuration file. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.imageUri">ImageUri</a></code> | <code>*string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Sets the environment variables in the Docker container. |

---

##### `ConfigUri`<sup>Required</sup> <a name="ConfigUri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.configUri"></a>

```go
ConfigUri *string
```

- *Type:* *string

The S3 URI to an analysis configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#config_uri SagemakerModelExplainabilityJobDefinition#config_uri}

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#image_uri SagemakerModelExplainabilityJobDefinition#image_uri}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#environment SagemakerModelExplainabilityJobDefinition#environment}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig {
	BaseliningJobName: *string,
	ConstraintsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `BaseliningJobName`<sup>Optional</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.property.baseliningJobName"></a>

```go
BaseliningJobName *string
```

- *Type:* *string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#baselining_job_name SagemakerModelExplainabilityJobDefinition#baselining_job_name}

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.property.constraintsResource"></a>

```go
ConstraintsResource SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#constraints_resource SagemakerModelExplainabilityJobDefinition#constraints_resource}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_uri SagemakerModelExplainabilityJobDefinition#s3_uri}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput {
	BatchTransformInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput,
	EndpointInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.property.batchTransformInput"></a>

```go
BatchTransformInput SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#batch_transform_input SagemakerModelExplainabilityJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.property.endpointInput"></a>

```go
EndpointInput SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_input SagemakerModelExplainabilityJobDefinition#endpoint_input}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput {
	DataCapturedDestinationS3Uri: *string,
	DatasetFormat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat,
	FeaturesAttribute: *string,
	InferenceAttribute: *string,
	LocalPath: *string,
	ProbabilityAttribute: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `DataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```go
DataCapturedDestinationS3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#data_captured_destination_s3_uri SagemakerModelExplainabilityJobDefinition#data_captured_destination_s3_uri}

---

##### `DatasetFormat`<sup>Optional</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.datasetFormat"></a>

```go
DatasetFormat SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#dataset_format SagemakerModelExplainabilityJobDefinition#dataset_format}

---

##### `FeaturesAttribute`<sup>Optional</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.featuresAttribute"></a>

```go
FeaturesAttribute *string
```

- *Type:* *string

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#features_attribute SagemakerModelExplainabilityJobDefinition#features_attribute}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#inference_attribute SagemakerModelExplainabilityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path SagemakerModelExplainabilityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#probability_attribute SagemakerModelExplainabilityJobDefinition#probability_attribute}

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_data_distribution_type SagemakerModelExplainabilityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_input_mode SagemakerModelExplainabilityJobDefinition#s3_input_mode}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat {
	Csv: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv,
	Json: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson,
	Parquet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.parquet">Parquet</a></code> | <code>interface{}</code> | A flag indicating if the dataset format is Parquet. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```go
Csv SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#csv SagemakerModelExplainabilityJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```go
Json SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#json SagemakerModelExplainabilityJobDefinition#json}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```go
Parquet interface{}
```

- *Type:* interface{}

A flag indicating if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#parquet SagemakerModelExplainabilityJobDefinition#parquet}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv {
	Header: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>interface{}</code> | A boolean flag indicating if given CSV has header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#header SagemakerModelExplainabilityJobDefinition#header}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson {
	Line: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>interface{}</code> | A boolean flag indicating if it is JSON line format. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```go
Line interface{}
```

- *Type:* interface{}

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#line SagemakerModelExplainabilityJobDefinition#line}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput {
	EndpointName: *string,
	FeaturesAttribute: *string,
	InferenceAttribute: *string,
	LocalPath: *string,
	ProbabilityAttribute: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_name SagemakerModelExplainabilityJobDefinition#endpoint_name}

---

##### `FeaturesAttribute`<sup>Optional</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.featuresAttribute"></a>

```go
FeaturesAttribute *string
```

- *Type:* *string

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#features_attribute SagemakerModelExplainabilityJobDefinition#features_attribute}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#inference_attribute SagemakerModelExplainabilityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path SagemakerModelExplainabilityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#probability_attribute SagemakerModelExplainabilityJobDefinition#probability_attribute}

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_data_distribution_type SagemakerModelExplainabilityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_input_mode SagemakerModelExplainabilityJobDefinition#s3_input_mode}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig {
	MonitoringOutputs: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code>interface{}</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.property.monitoringOutputs"></a>

```go
MonitoringOutputs interface{}
```

- *Type:* interface{}

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#monitoring_outputs SagemakerModelExplainabilityJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#kms_key_id SagemakerModelExplainabilityJobDefinition#kms_key_id}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs {
	S3Output: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```go
S3Output SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_output SagemakerModelExplainabilityJobDefinition#s3_output}

---

### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output {
	LocalPath: *string,
	S3Uri: *string,
	S3UploadMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>*string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path SagemakerModelExplainabilityJobDefinition#local_path}

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_uri SagemakerModelExplainabilityJobDefinition#s3_uri}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```go
S3UploadMode *string
```

- *Type:* *string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_upload_mode SagemakerModelExplainabilityJobDefinition#s3_upload_mode}

---

### SagemakerModelExplainabilityJobDefinitionNetworkConfig <a name="SagemakerModelExplainabilityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig {
	EnableInterContainerTrafficEncryption: interface{},
	EnableNetworkIsolation: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```go
EnableInterContainerTrafficEncryption interface{}
```

- *Type:* interface{}

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#enable_inter_container_traffic_encryption SagemakerModelExplainabilityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#enable_network_isolation SagemakerModelExplainabilityJobDefinition#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#vpc_config SagemakerModelExplainabilityJobDefinition#vpc_config}

---

### SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#security_group_ids SagemakerModelExplainabilityJobDefinition#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#subnets SagemakerModelExplainabilityJobDefinition#subnets}

---

### SagemakerModelExplainabilityJobDefinitionStoppingCondition <a name="SagemakerModelExplainabilityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition {
	MaxRuntimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | The maximum runtime allowed in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```go
MaxRuntimeInSeconds *f64
```

- *Type:* *f64

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#max_runtime_in_seconds SagemakerModelExplainabilityJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelExplainabilityJobDefinitionTags <a name="SagemakerModelExplainabilityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

&sagemakermodelexplainabilityjobdefinition.SagemakerModelExplainabilityJobDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#key SagemakerModelExplainabilityJobDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#value SagemakerModelExplainabilityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference <a name="SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUriInput">ConfigUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri">ConfigUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigUriInput`<sup>Optional</sup> <a name="ConfigUriInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUriInput"></a>

```go
func ConfigUriInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `ConfigUri`<sup>Required</sup> <a name="ConfigUri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri"></a>

```go
func ConfigUri() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.putConstraintsResource">PutConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resetBaseliningJobName">ResetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resetConstraintsResource">ResetConstraintsResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.putConstraintsResource"></a>

```go
func PutConstraintsResource(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a>

---

##### `ResetBaseliningJobName` <a name="ResetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```go
func ResetBaseliningJobName()
```

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resetConstraintsResource"></a>

```go
func ResetConstraintsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobNameInput">BaseliningJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource"></a>

```go
func ConstraintsResource() SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `BaseliningJobNameInput`<sup>Optional</sup> <a name="BaseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```go
func BaseliningJobNameInput() *string
```

- *Type:* *string

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```go
func ConstraintsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName"></a>

```go
func BaseliningJobName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">ResetLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```go
func ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```go
func LineInput() interface{}
```

- *Type:* interface{}

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```go
func Line() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```go
func PutCsv(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```go
func PutJson(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```go
func Csv() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```go
func Json() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() interface{}
```

- *Type:* interface{}

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```go
func Parquet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.putDatasetFormat">PutDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">ResetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetDatasetFormat">ResetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetFeaturesAttribute">ResetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```go
func PutDatasetFormat(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetDataCapturedDestinationS3Uri` <a name="ResetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```go
func ResetDataCapturedDestinationS3Uri()
```

##### `ResetDatasetFormat` <a name="ResetDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```go
func ResetDatasetFormat()
```

##### `ResetFeaturesAttribute` <a name="ResetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetFeaturesAttribute"></a>

```go
func ResetFeaturesAttribute()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttributeInput">FeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```go
func DatasetFormat() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```go
func DataCapturedDestinationS3UriInput() *string
```

- *Type:* *string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```go
func DatasetFormatInput() interface{}
```

- *Type:* interface{}

---

##### `FeaturesAttributeInput`<sup>Optional</sup> <a name="FeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttributeInput"></a>

```go
func FeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```go
func DataCapturedDestinationS3Uri() *string
```

- *Type:* *string

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```go
func FeaturesAttribute() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetFeaturesAttribute">ResetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetFeaturesAttribute` <a name="ResetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetFeaturesAttribute"></a>

```go
func ResetFeaturesAttribute()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttributeInput">FeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `FeaturesAttributeInput`<sup>Optional</sup> <a name="FeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttributeInput"></a>

```go
func FeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```go
func FeaturesAttribute() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putBatchTransformInput">PutBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putEndpointInput">PutEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resetBatchTransformInput">ResetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resetEndpointInput">ResetEndpointInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putBatchTransformInput"></a>

```go
func PutBatchTransformInput(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putEndpointInput"></a>

```go
func PutEndpointInput(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resetBatchTransformInput"></a>

```go
func ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resetEndpointInput"></a>

```go
func ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput"></a>

```go
func BatchTransformInput() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput"></a>

```go
func EndpointInput() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInputInput"></a>

```go
func BatchTransformInputInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInputInput"></a>

```go
func EndpointInputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get"></a>

```go
func Get(index *f64) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```go
func PutS3Output(value SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```go
func S3OutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```go
func ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```go
func S3UploadModeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference <a name="SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.putMonitoringOutputs">PutMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```go
func PutMonitoringOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```go
func MonitoringOutputs() SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```go
func MonitoringOutputsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```go
func ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```go
func EnableInterContainerTrafficEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```go
func ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```go
func MaxRuntimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionTagsList <a name="SagemakerModelExplainabilityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelExplainabilityJobDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.get"></a>

```go
func Get(index *f64) SagemakerModelExplainabilityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelExplainabilityJobDefinitionTagsOutputReference <a name="SagemakerModelExplainabilityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelexplainabilityjobdefinition"

sagemakermodelexplainabilityjobdefinition.NewSagemakerModelExplainabilityJobDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelExplainabilityJobDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelExplainabilityJobDefinition.SagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



