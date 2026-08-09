# `sagemakerModelBiasJobDefinition` Submodule <a name="`sagemakerModelBiasJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelBiasJobDefinition <a name="SagemakerModelBiasJobDefinition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinition(scope Construct, id *string, config SagemakerModelBiasJobDefinitionConfig) SagemakerModelBiasJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig">SagemakerModelBiasJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig">SagemakerModelBiasJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources">PutJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification">PutModelBiasAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig">PutModelBiasBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput">PutModelBiasJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig">PutModelBiasJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetJobDefinitionName">ResetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetModelBiasBaselineConfig">ResetModelBiasBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources"></a>

```go
func PutJobResources(value SagemakerModelBiasJobDefinitionJobResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

---

##### `PutModelBiasAppSpecification` <a name="PutModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification"></a>

```go
func PutModelBiasAppSpecification(value SagemakerModelBiasJobDefinitionModelBiasAppSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---

##### `PutModelBiasBaselineConfig` <a name="PutModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig"></a>

```go
func PutModelBiasBaselineConfig(value SagemakerModelBiasJobDefinitionModelBiasBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---

##### `PutModelBiasJobInput` <a name="PutModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput"></a>

```go
func PutModelBiasJobInput(value SagemakerModelBiasJobDefinitionModelBiasJobInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---

##### `PutModelBiasJobOutputConfig` <a name="PutModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig"></a>

```go
func PutModelBiasJobOutputConfig(value SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig"></a>

```go
func PutNetworkConfig(value SagemakerModelBiasJobDefinitionNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition"></a>

```go
func PutStoppingCondition(value SagemakerModelBiasJobDefinitionStoppingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetJobDefinitionName` <a name="ResetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetJobDefinitionName"></a>

```go
func ResetJobDefinitionName()
```

##### `ResetModelBiasBaselineConfig` <a name="ResetModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetModelBiasBaselineConfig"></a>

```go
func ResetModelBiasBaselineConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetStoppingCondition"></a>

```go
func ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerModelBiasJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerModelBiasJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelBiasJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference">SagemakerModelBiasJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecification">ModelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig">ModelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInput">ModelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig">ModelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference">SagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList">SagemakerModelBiasJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionNameInput">JobDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecificationInput">ModelBiasAppSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfigInput">ModelBiasBaselineConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInputInput">ModelBiasJobInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfigInput">ModelBiasJobOutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionArn"></a>

```go
func JobDefinitionArn() *string
```

- *Type:* *string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResources"></a>

```go
func JobResources() SagemakerModelBiasJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference">SagemakerModelBiasJobDefinitionJobResourcesOutputReference</a>

---

##### `ModelBiasAppSpecification`<sup>Required</sup> <a name="ModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecification"></a>

```go
func ModelBiasAppSpecification() SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a>

---

##### `ModelBiasBaselineConfig`<sup>Required</sup> <a name="ModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig"></a>

```go
func ModelBiasBaselineConfig() SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a>

---

##### `ModelBiasJobInput`<sup>Required</sup> <a name="ModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInput"></a>

```go
func ModelBiasJobInput() SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a>

---

##### `ModelBiasJobOutputConfig`<sup>Required</sup> <a name="ModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig"></a>

```go
func ModelBiasJobOutputConfig() SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfig"></a>

```go
func NetworkConfig() SagemakerModelBiasJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingCondition"></a>

```go
func StoppingCondition() SagemakerModelBiasJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference">SagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tags"></a>

```go
func Tags() SagemakerModelBiasJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList">SagemakerModelBiasJobDefinitionTagsList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `JobDefinitionNameInput`<sup>Optional</sup> <a name="JobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionNameInput"></a>

```go
func JobDefinitionNameInput() *string
```

- *Type:* *string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResourcesInput"></a>

```go
func JobResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ModelBiasAppSpecificationInput`<sup>Optional</sup> <a name="ModelBiasAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecificationInput"></a>

```go
func ModelBiasAppSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `ModelBiasBaselineConfigInput`<sup>Optional</sup> <a name="ModelBiasBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfigInput"></a>

```go
func ModelBiasBaselineConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelBiasJobInputInput`<sup>Optional</sup> <a name="ModelBiasJobInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInputInput"></a>

```go
func ModelBiasJobInputInput() interface{}
```

- *Type:* interface{}

---

##### `ModelBiasJobOutputConfigInput`<sup>Optional</sup> <a name="ModelBiasJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfigInput"></a>

```go
func ModelBiasJobOutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfigInput"></a>

```go
func NetworkConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingConditionInput"></a>

```go
func StoppingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionName"></a>

```go
func JobDefinitionName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelBiasJobDefinitionConfig <a name="SagemakerModelBiasJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	JobResources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources,
	ModelBiasAppSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification,
	ModelBiasJobInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput,
	ModelBiasJobOutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig,
	RoleArn: *string,
	EndpointName: *string,
	JobDefinitionName: *string,
	ModelBiasBaselineConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig,
	NetworkConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig,
	StoppingCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasAppSpecification">ModelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobInput">ModelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobOutputConfig">ModelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobDefinitionName">JobDefinitionName</a></code> | <code>*string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasBaselineConfig">ModelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobResources"></a>

```go
JobResources SagemakerModelBiasJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#job_resources SagemakerModelBiasJobDefinition#job_resources}

---

##### `ModelBiasAppSpecification`<sup>Required</sup> <a name="ModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasAppSpecification"></a>

```go
ModelBiasAppSpecification SagemakerModelBiasJobDefinitionModelBiasAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_app_specification SagemakerModelBiasJobDefinition#model_bias_app_specification}

---

##### `ModelBiasJobInput`<sup>Required</sup> <a name="ModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobInput"></a>

```go
ModelBiasJobInput SagemakerModelBiasJobDefinitionModelBiasJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_input SagemakerModelBiasJobDefinition#model_bias_job_input}

---

##### `ModelBiasJobOutputConfig`<sup>Required</sup> <a name="ModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobOutputConfig"></a>

```go
ModelBiasJobOutputConfig SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_output_config SagemakerModelBiasJobDefinition#model_bias_job_output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#role_arn SagemakerModelBiasJobDefinition#role_arn}

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}

---

##### `JobDefinitionName`<sup>Optional</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobDefinitionName"></a>

```go
JobDefinitionName *string
```

- *Type:* *string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#job_definition_name SagemakerModelBiasJobDefinition#job_definition_name}

---

##### `ModelBiasBaselineConfig`<sup>Optional</sup> <a name="ModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasBaselineConfig"></a>

```go
ModelBiasBaselineConfig SagemakerModelBiasJobDefinitionModelBiasBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_baseline_config SagemakerModelBiasJobDefinition#model_bias_baseline_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.networkConfig"></a>

```go
NetworkConfig SagemakerModelBiasJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#network_config SagemakerModelBiasJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.stoppingCondition"></a>

```go
StoppingCondition SagemakerModelBiasJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#stopping_condition SagemakerModelBiasJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#tags SagemakerModelBiasJobDefinition#tags}

---

### SagemakerModelBiasJobDefinitionJobResources <a name="SagemakerModelBiasJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionJobResources {
	ClusterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.property.clusterConfig"></a>

```go
ClusterConfig SagemakerModelBiasJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#cluster_config SagemakerModelBiasJobDefinition#cluster_config}

---

### SagemakerModelBiasJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelBiasJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig {
	InstanceCount: *f64,
	InstanceType: *string,
	VolumeSizeInGb: *f64,
	VolumeKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#instance_count SagemakerModelBiasJobDefinition#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#instance_type SagemakerModelBiasJobDefinition#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#volume_size_in_gb SagemakerModelBiasJobDefinition#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#volume_kms_key_id SagemakerModelBiasJobDefinition#volume_kms_key_id}

---

### SagemakerModelBiasJobDefinitionModelBiasAppSpecification <a name="SagemakerModelBiasJobDefinitionModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification {
	ConfigUri: *string,
	ImageUri: *string,
	Environment: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.configUri">ConfigUri</a></code> | <code>*string</code> | The S3 URI to an analysis configuration file. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.imageUri">ImageUri</a></code> | <code>*string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Sets the environment variables in the Docker container. |

---

##### `ConfigUri`<sup>Required</sup> <a name="ConfigUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.configUri"></a>

```go
ConfigUri *string
```

- *Type:* *string

The S3 URI to an analysis configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#config_uri SagemakerModelBiasJobDefinition#config_uri}

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#image_uri SagemakerModelBiasJobDefinition#image_uri}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#environment SagemakerModelBiasJobDefinition#environment}

---

### SagemakerModelBiasJobDefinitionModelBiasBaselineConfig <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig {
	BaseliningJobName: *string,
	ConstraintsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `BaseliningJobName`<sup>Optional</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.baseliningJobName"></a>

```go
BaseliningJobName *string
```

- *Type:* *string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#baselining_job_name SagemakerModelBiasJobDefinition#baselining_job_name}

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.constraintsResource"></a>

```go
ConstraintsResource SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#constraints_resource SagemakerModelBiasJobDefinition#constraints_resource}

---

### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput {
	GroundTruthS3Input: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input,
	BatchTransformInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput,
	EndpointInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | Ground truth input provided in S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.groundTruthS3Input"></a>

```go
GroundTruthS3Input SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#ground_truth_s3_input SagemakerModelBiasJobDefinition#ground_truth_s3_input}

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.batchTransformInput"></a>

```go
BatchTransformInput SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#batch_transform_input SagemakerModelBiasJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.endpointInput"></a>

```go
EndpointInput SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_input SagemakerModelBiasJobDefinition#endpoint_input}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput {
	DataCapturedDestinationS3Uri: *string,
	DatasetFormat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat,
	EndTimeOffset: *string,
	FeaturesAttribute: *string,
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
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `DataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```go
DataCapturedDestinationS3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#data_captured_destination_s3_uri SagemakerModelBiasJobDefinition#data_captured_destination_s3_uri}

---

##### `DatasetFormat`<sup>Optional</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.datasetFormat"></a>

```go
DatasetFormat SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#dataset_format SagemakerModelBiasJobDefinition#dataset_format}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#end_time_offset SagemakerModelBiasJobDefinition#end_time_offset}

---

##### `FeaturesAttribute`<sup>Optional</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.featuresAttribute"></a>

```go
FeaturesAttribute *string
```

- *Type:* *string

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#features_attribute SagemakerModelBiasJobDefinition#features_attribute}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#inference_attribute SagemakerModelBiasJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_attribute SagemakerModelBiasJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityThresholdAttribute"></a>

```go
ProbabilityThresholdAttribute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_data_distribution_type SagemakerModelBiasJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_input_mode SagemakerModelBiasJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#start_time_offset SagemakerModelBiasJobDefinition#start_time_offset}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat {
	Csv: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv,
	Json: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson,
	Parquet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.parquet">Parquet</a></code> | <code>interface{}</code> | A flag indicate if the dataset format is Parquet. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```go
Csv SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#csv SagemakerModelBiasJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.json"></a>

```go
Json SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#json SagemakerModelBiasJobDefinition#json}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```go
Parquet interface{}
```

- *Type:* interface{}

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#parquet SagemakerModelBiasJobDefinition#parquet}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv {
	Header: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>interface{}</code> | A boolean flag indicating if given CSV has header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#header SagemakerModelBiasJobDefinition#header}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson {
	Line: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>interface{}</code> | A boolean flag indicating if it is JSON line format. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```go
Line interface{}
```

- *Type:* interface{}

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#line SagemakerModelBiasJobDefinition#line}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput {
	EndpointName: *string,
	EndTimeOffset: *string,
	FeaturesAttribute: *string,
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
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#end_time_offset SagemakerModelBiasJobDefinition#end_time_offset}

---

##### `FeaturesAttribute`<sup>Optional</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.featuresAttribute"></a>

```go
FeaturesAttribute *string
```

- *Type:* *string

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#features_attribute SagemakerModelBiasJobDefinition#features_attribute}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.inferenceAttribute"></a>

```go
InferenceAttribute *string
```

- *Type:* *string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#inference_attribute SagemakerModelBiasJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_attribute SagemakerModelBiasJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityThresholdAttribute"></a>

```go
ProbabilityThresholdAttribute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_data_distribution_type SagemakerModelBiasJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_input_mode SagemakerModelBiasJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#start_time_offset SagemakerModelBiasJobDefinition#start_time_offset}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig {
	MonitoringOutputs: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code>interface{}</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.monitoringOutputs"></a>

```go
MonitoringOutputs interface{}
```

- *Type:* interface{}

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#monitoring_outputs SagemakerModelBiasJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#kms_key_id SagemakerModelBiasJobDefinition#kms_key_id}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs {
	S3Output: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```go
S3Output SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_output SagemakerModelBiasJobDefinition#s3_output}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output {
	LocalPath: *string,
	S3Uri: *string,
	S3UploadMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>*string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>*string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```go
S3UploadMode *string
```

- *Type:* *string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#s3_upload_mode SagemakerModelBiasJobDefinition#s3_upload_mode}

---

### SagemakerModelBiasJobDefinitionNetworkConfig <a name="SagemakerModelBiasJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionNetworkConfig {
	EnableInterContainerTrafficEncryption: interface{},
	EnableNetworkIsolation: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```go
EnableInterContainerTrafficEncryption interface{}
```

- *Type:* interface{}

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#enable_inter_container_traffic_encryption SagemakerModelBiasJobDefinition#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#enable_network_isolation SagemakerModelBiasJobDefinition#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#vpc_config SagemakerModelBiasJobDefinition#vpc_config}

---

### SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#security_group_ids SagemakerModelBiasJobDefinition#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#subnets SagemakerModelBiasJobDefinition#subnets}

---

### SagemakerModelBiasJobDefinitionStoppingCondition <a name="SagemakerModelBiasJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionStoppingCondition {
	MaxRuntimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | The maximum runtime allowed in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```go
MaxRuntimeInSeconds *f64
```

- *Type:* *f64

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#max_runtime_in_seconds SagemakerModelBiasJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelBiasJobDefinitionTags <a name="SagemakerModelBiasJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

&sagemakermodelbiasjobdefinition.SagemakerModelBiasJobDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#key SagemakerModelBiasJobDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_bias_job_definition#value SagemakerModelBiasJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionJobResourcesOutputReference <a name="SagemakerModelBiasJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionJobResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionJobResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value SagemakerModelBiasJobDefinitionJobResourcesClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUriInput">ConfigUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri">ConfigUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigUriInput`<sup>Optional</sup> <a name="ConfigUriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUriInput"></a>

```go
func ConfigUriInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `ConfigUri`<sup>Required</sup> <a name="ConfigUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri"></a>

```go
func ConfigUri() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource">PutConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetBaseliningJobName">ResetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetConstraintsResource">ResetConstraintsResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource"></a>

```go
func PutConstraintsResource(value SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---

##### `ResetBaseliningJobName` <a name="ResetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetBaseliningJobName"></a>

```go
func ResetBaseliningJobName()
```

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetConstraintsResource"></a>

```go
func ResetConstraintsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobNameInput">BaseliningJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource"></a>

```go
func ConstraintsResource() SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a>

---

##### `BaseliningJobNameInput`<sup>Optional</sup> <a name="BaseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```go
func BaseliningJobNameInput() *string
```

- *Type:* *string

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```go
func ConstraintsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName"></a>

```go
func BaseliningJobName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">ResetLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```go
func ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```go
func LineInput() interface{}
```

- *Type:* interface{}

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```go
func Line() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">ResetParquet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```go
func PutCsv(value SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```go
func PutJson(value SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```go
func ResetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```go
func Csv() SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```go
func Json() SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```go
func ParquetInput() interface{}
```

- *Type:* interface{}

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```go
func Parquet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat">PutDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">ResetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDatasetFormat">ResetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetFeaturesAttribute">ResetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute">ResetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```go
func PutDatasetFormat(value SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetDataCapturedDestinationS3Uri` <a name="ResetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```go
func ResetDataCapturedDestinationS3Uri()
```

##### `ResetDatasetFormat` <a name="ResetDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```go
func ResetDatasetFormat()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetFeaturesAttribute` <a name="ResetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetFeaturesAttribute"></a>

```go
func ResetFeaturesAttribute()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute"></a>

```go
func ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttributeInput">FeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```go
func DatasetFormat() SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```go
func DataCapturedDestinationS3UriInput() *string
```

- *Type:* *string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```go
func DatasetFormatInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `FeaturesAttributeInput`<sup>Optional</sup> <a name="FeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttributeInput"></a>

```go
func FeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```go
func ProbabilityThresholdAttributeInput() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```go
func DataCapturedDestinationS3Uri() *string
```

- *Type:* *string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```go
func FeaturesAttribute() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```go
func ProbabilityThresholdAttribute() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetFeaturesAttribute">ResetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetInferenceAttribute">ResetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute">ResetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetFeaturesAttribute` <a name="ResetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetFeaturesAttribute"></a>

```go
func ResetFeaturesAttribute()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```go
func ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute"></a>

```go
func ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttributeInput">FeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `FeaturesAttributeInput`<sup>Optional</sup> <a name="FeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttributeInput"></a>

```go
func FeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```go
func InferenceAttributeInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```go
func ProbabilityThresholdAttributeInput() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```go
func FeaturesAttribute() *string
```

- *Type:* *string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```go
func InferenceAttribute() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```go
func ProbabilityThresholdAttribute() *f64
```

- *Type:* *f64

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput">PutBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput">PutEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input">PutGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetBatchTransformInput">ResetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetEndpointInput">ResetEndpointInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput"></a>

```go
func PutBatchTransformInput(value SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput"></a>

```go
func PutEndpointInput(value SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---

##### `PutGroundTruthS3Input` <a name="PutGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input"></a>

```go
func PutGroundTruthS3Input(value SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetBatchTransformInput"></a>

```go
func ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetEndpointInput"></a>

```go
func ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3InputInput">GroundTruthS3InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput"></a>

```go
func BatchTransformInput() SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput"></a>

```go
func EndpointInput() SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a>

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input"></a>

```go
func GroundTruthS3Input() SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInputInput"></a>

```go
func BatchTransformInputInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInputInput"></a>

```go
func EndpointInputInput() interface{}
```

- *Type:* interface{}

---

##### `GroundTruthS3InputInput`<sup>Optional</sup> <a name="GroundTruthS3InputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3InputInput"></a>

```go
func GroundTruthS3InputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get"></a>

```go
func Get(index *f64) SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```go
func PutS3Output(value SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```go
func S3OutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```go
func ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```go
func S3UploadModeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs">PutMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```go
func PutMonitoringOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```go
func MonitoringOutputs() SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```go
func MonitoringOutputsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelBiasJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```go
func ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```go
func EnableInterContainerTrafficEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelBiasJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelBiasJobDefinitionStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```go
func ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```go
func MaxRuntimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionTagsList <a name="SagemakerModelBiasJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelBiasJobDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get"></a>

```go
func Get(index *f64) SagemakerModelBiasJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelBiasJobDefinitionTagsOutputReference <a name="SagemakerModelBiasJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodelbiasjobdefinition"

sagemakermodelbiasjobdefinition.NewSagemakerModelBiasJobDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelBiasJobDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



