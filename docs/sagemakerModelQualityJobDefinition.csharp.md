# `sagemakerModelQualityJobDefinition` Submodule <a name="`sagemakerModelQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelQualityJobDefinition <a name="SagemakerModelQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinition(Construct Scope, string Id, SagemakerModelQualityJobDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig">SagemakerModelQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources"></a>

```csharp
private void PutJobResources(SagemakerModelQualityJobDefinitionJobResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---

##### `PutModelQualityAppSpecification` <a name="PutModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification"></a>

```csharp
private void PutModelQualityAppSpecification(SagemakerModelQualityJobDefinitionModelQualityAppSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---

##### `PutModelQualityBaselineConfig` <a name="PutModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig"></a>

```csharp
private void PutModelQualityBaselineConfig(SagemakerModelQualityJobDefinitionModelQualityBaselineConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---

##### `PutModelQualityJobInput` <a name="PutModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput"></a>

```csharp
private void PutModelQualityJobInput(SagemakerModelQualityJobDefinitionModelQualityJobInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---

##### `PutModelQualityJobOutputConfig` <a name="PutModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig"></a>

```csharp
private void PutModelQualityJobOutputConfig(SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(SagemakerModelQualityJobDefinitionNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition"></a>

```csharp
private void PutStoppingCondition(SagemakerModelQualityJobDefinitionStoppingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerModelQualityJobDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]

---

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetEndpointName"></a>

```csharp
private void ResetEndpointName()
```

##### `ResetJobDefinitionName` <a name="ResetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetJobDefinitionName"></a>

```csharp
private void ResetJobDefinitionName()
```

##### `ResetModelQualityBaselineConfig` <a name="ResetModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetModelQualityBaselineConfig"></a>

```csharp
private void ResetModelQualityBaselineConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetStoppingCondition"></a>

```csharp
private void ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetTags"></a>

```csharp
private void ResetTags()
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

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerModelQualityJobDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerModelQualityJobDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerModelQualityJobDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerModelQualityJobDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerModelQualityJobDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerModelQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification">ModelQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig">ModelQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput">ModelQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig">ModelQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput">JobDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput">ModelQualityAppSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput">ModelQualityBaselineConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput">ModelQualityJobInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput">ModelQualityJobOutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn"></a>

```csharp
public string JobDefinitionArn { get; }
```

- *Type:* string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources"></a>

```csharp
public SagemakerModelQualityJobDefinitionJobResourcesOutputReference JobResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `ModelQualityAppSpecification`<sup>Required</sup> <a name="ModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference ModelQualityAppSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a>

---

##### `ModelQualityBaselineConfig`<sup>Required</sup> <a name="ModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference ModelQualityBaselineConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a>

---

##### `ModelQualityJobInput`<sup>Required</sup> <a name="ModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference ModelQualityJobInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a>

---

##### `ModelQualityJobOutputConfig`<sup>Required</sup> <a name="ModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference ModelQualityJobOutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition"></a>

```csharp
public SagemakerModelQualityJobDefinitionStoppingConditionOutputReference StoppingCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags"></a>

```csharp
public SagemakerModelQualityJobDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `JobDefinitionNameInput`<sup>Optional</sup> <a name="JobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput"></a>

```csharp
public string JobDefinitionNameInput { get; }
```

- *Type:* string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionJobResources JobResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---

##### `ModelQualityAppSpecificationInput`<sup>Optional</sup> <a name="ModelQualityAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityAppSpecification ModelQualityAppSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---

##### `ModelQualityBaselineConfigInput`<sup>Optional</sup> <a name="ModelQualityBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityBaselineConfig ModelQualityBaselineConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---

##### `ModelQualityJobInputInput`<sup>Optional</sup> <a name="ModelQualityJobInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInput ModelQualityJobInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---

##### `ModelQualityJobOutputConfigInput`<sup>Optional</sup> <a name="ModelQualityJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig ModelQualityJobOutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionNetworkConfig NetworkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionStoppingCondition StoppingConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName"></a>

```csharp
public string JobDefinitionName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelQualityJobDefinitionConfig <a name="SagemakerModelQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SagemakerModelQualityJobDefinitionJobResources JobResources,
    SagemakerModelQualityJobDefinitionModelQualityAppSpecification ModelQualityAppSpecification,
    SagemakerModelQualityJobDefinitionModelQualityJobInput ModelQualityJobInput,
    SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig ModelQualityJobOutputConfig,
    string RoleArn,
    string EndpointName = null,
    string JobDefinitionName = null,
    SagemakerModelQualityJobDefinitionModelQualityBaselineConfig ModelQualityBaselineConfig = null,
    SagemakerModelQualityJobDefinitionNetworkConfig NetworkConfig = null,
    SagemakerModelQualityJobDefinitionStoppingCondition StoppingCondition = null,
    IResolvable|SagemakerModelQualityJobDefinitionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification">ModelQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput">ModelQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig">ModelQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName">JobDefinitionName</a></code> | <code>string</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig">ModelQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources"></a>

```csharp
public SagemakerModelQualityJobDefinitionJobResources JobResources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#job_resources SagemakerModelQualityJobDefinition#job_resources}

---

##### `ModelQualityAppSpecification`<sup>Required</sup> <a name="ModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityAppSpecification ModelQualityAppSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_app_specification SagemakerModelQualityJobDefinition#model_quality_app_specification}

---

##### `ModelQualityJobInput`<sup>Required</sup> <a name="ModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInput ModelQualityJobInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_input SagemakerModelQualityJobDefinition#model_quality_job_input}

---

##### `ModelQualityJobOutputConfig`<sup>Required</sup> <a name="ModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig ModelQualityJobOutputConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_output_config SagemakerModelQualityJobDefinition#model_quality_job_output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#role_arn SagemakerModelQualityJobDefinition#role_arn}

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `JobDefinitionName`<sup>Optional</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```csharp
public string JobDefinitionName { get; set; }
```

- *Type:* string

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#job_definition_name SagemakerModelQualityJobDefinition#job_definition_name}

---

##### `ModelQualityBaselineConfig`<sup>Optional</sup> <a name="ModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityBaselineConfig ModelQualityBaselineConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_baseline_config SagemakerModelQualityJobDefinition#model_quality_baseline_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#network_config SagemakerModelQualityJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition"></a>

```csharp
public SagemakerModelQualityJobDefinitionStoppingCondition StoppingCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#stopping_condition SagemakerModelQualityJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#tags SagemakerModelQualityJobDefinition#tags}

---

### SagemakerModelQualityJobDefinitionJobResources <a name="SagemakerModelQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionJobResources {
    SagemakerModelQualityJobDefinitionJobResourcesClusterConfig ClusterConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionJobResourcesClusterConfig ClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#cluster_config SagemakerModelQualityJobDefinition#cluster_config}

---

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionJobResourcesClusterConfig {
    double InstanceCount,
    string InstanceType,
    double VolumeSizeInGb,
    string VolumeKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#instance_count SagemakerModelQualityJobDefinition#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#instance_type SagemakerModelQualityJobDefinition#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#volume_size_in_gb SagemakerModelQualityJobDefinition#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#volume_kms_key_id SagemakerModelQualityJobDefinition#volume_kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityAppSpecification <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityAppSpecification {
    string ImageUri,
    string ProblemType,
    string[] ContainerArguments = null,
    string[] ContainerEntrypoint = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    string PostAnalyticsProcessorSourceUri = null,
    string RecordPreprocessorSourceUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri">ImageUri</a></code> | <code>string</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType">ProblemType</a></code> | <code>string</code> | The status of the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>string</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>string</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#image_uri SagemakerModelQualityJobDefinition#image_uri}

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType"></a>

```csharp
public string ProblemType { get; set; }
```

- *Type:* string

The status of the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#problem_type SagemakerModelQualityJobDefinition#problem_type}

---

##### `ContainerArguments`<sup>Optional</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; set; }
```

- *Type:* string[]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#container_arguments SagemakerModelQualityJobDefinition#container_arguments}

---

##### `ContainerEntrypoint`<sup>Optional</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; set; }
```

- *Type:* string[]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#container_entrypoint SagemakerModelQualityJobDefinition#container_entrypoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#environment SagemakerModelQualityJobDefinition#environment}

---

##### `PostAnalyticsProcessorSourceUri`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```csharp
public string PostAnalyticsProcessorSourceUri { get; set; }
```

- *Type:* string

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#post_analytics_processor_source_uri SagemakerModelQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `RecordPreprocessorSourceUri`<sup>Optional</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```csharp
public string RecordPreprocessorSourceUri { get; set; }
```

- *Type:* string

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#record_preprocessor_source_uri SagemakerModelQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfig <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityBaselineConfig {
    string BaseliningJobName = null,
    SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource ConstraintsResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName">BaseliningJobName</a></code> | <code>string</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `BaseliningJobName`<sup>Optional</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName"></a>

```csharp
public string BaseliningJobName { get; set; }
```

- *Type:* string

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#baselining_job_name SagemakerModelQualityJobDefinition#baselining_job_name}

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource ConstraintsResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#constraints_resource SagemakerModelQualityJobDefinition#constraints_resource}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource {
    string S3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>string</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInput {
    SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input GroundTruthS3Input,
    SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput BatchTransformInput = null,
    SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput EndpointInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | Ground truth input provided in S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input GroundTruthS3Input { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#ground_truth_s3_input SagemakerModelQualityJobDefinition#ground_truth_s3_input}

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput BatchTransformInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#batch_transform_input SagemakerModelQualityJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput EndpointInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_input SagemakerModelQualityJobDefinition#endpoint_input}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput {
    string DataCapturedDestinationS3Uri = null,
    SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat DatasetFormat = null,
    string EndTimeOffset = null,
    string InferenceAttribute = null,
    string LocalPath = null,
    string ProbabilityAttribute = null,
    double ProbabilityThresholdAttribute = null,
    string S3DataDistributionType = null,
    string S3InputMode = null,
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `DataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```csharp
public string DataCapturedDestinationS3Uri { get; set; }
```

- *Type:* string

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#data_captured_destination_s3_uri SagemakerModelQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `DatasetFormat`<sup>Optional</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat DatasetFormat { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#dataset_format SagemakerModelQualityJobDefinition#dataset_format}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; set; }
```

- *Type:* string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute"></a>

```csharp
public string InferenceAttribute { get; set; }
```

- *Type:* string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute"></a>

```csharp
public string ProbabilityAttribute { get; set; }
```

- *Type:* string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute"></a>

```csharp
public double ProbabilityThresholdAttribute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; set; }
```

- *Type:* string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; set; }
```

- *Type:* string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat {
    SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv Csv = null,
    SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson Json = null,
    bool|IResolvable Parquet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet">Parquet</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag indicating if the dataset format is Parquet. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv Csv { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#csv SagemakerModelQualityJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson Json { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#json SagemakerModelQualityJobDefinition#json}

---

##### `Parquet`<sup>Optional</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```csharp
public bool|IResolvable Parquet { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag indicating if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#parquet SagemakerModelQualityJobDefinition#parquet}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv {
    bool|IResolvable Header = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean flag indicating if given CSV has header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```csharp
public bool|IResolvable Header { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#header SagemakerModelQualityJobDefinition#header}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson {
    bool|IResolvable Line = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean flag indicating if it is JSON line format. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```csharp
public bool|IResolvable Line { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#line SagemakerModelQualityJobDefinition#line}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput {
    string EndpointName = null,
    string EndTimeOffset = null,
    string InferenceAttribute = null,
    string LocalPath = null,
    string ProbabilityAttribute = null,
    double ProbabilityThresholdAttribute = null,
    string S3DataDistributionType = null,
    string S3InputMode = null,
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>string</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute">InferenceAttribute</a></code> | <code>string</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>string</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>string</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; set; }
```

- *Type:* string

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `InferenceAttribute`<sup>Optional</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute"></a>

```csharp
public string InferenceAttribute { get; set; }
```

- *Type:* string

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute"></a>

```csharp
public string ProbabilityAttribute { get; set; }
```

- *Type:* string

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `ProbabilityThresholdAttribute`<sup>Optional</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute"></a>

```csharp
public double ProbabilityThresholdAttribute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; set; }
```

- *Type:* string

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; set; }
```

- *Type:* string

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input {
    string S3Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri">S3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig {
    IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[] MonitoringOutputs,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[] MonitoringOutputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#monitoring_outputs SagemakerModelQualityJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#kms_key_id SagemakerModelQualityJobDefinition#kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs {
    SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output S3Output
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output S3Output { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_output SagemakerModelQualityJobDefinition#s3_output}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output {
    string LocalPath,
    string S3Uri,
    string S3UploadMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>string</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>string</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```csharp
public string S3UploadMode { get; set; }
```

- *Type:* string

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#s3_upload_mode SagemakerModelQualityJobDefinition#s3_upload_mode}

---

### SagemakerModelQualityJobDefinitionNetworkConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionNetworkConfig {
    bool|IResolvable EnableInterContainerTrafficEncryption = null,
    bool|IResolvable EnableNetworkIsolation = null,
    SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#enable_inter_container_traffic_encryption SagemakerModelQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```csharp
public bool|IResolvable EnableNetworkIsolation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#enable_network_isolation SagemakerModelQualityJobDefinition#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#vpc_config SagemakerModelQualityJobDefinition#vpc_config}

---

### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#security_group_ids SagemakerModelQualityJobDefinition#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#subnets SagemakerModelQualityJobDefinition#subnets}

---

### SagemakerModelQualityJobDefinitionStoppingCondition <a name="SagemakerModelQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionStoppingCondition {
    double MaxRuntimeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>double</code> | The maximum runtime allowed in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```csharp
public double MaxRuntimeInSeconds { get; set; }
```

- *Type:* double

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelQualityJobDefinitionTags <a name="SagemakerModelQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#key SagemakerModelQualityJobDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_quality_job_definition#value SagemakerModelQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionJobResourcesClusterConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerModelQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionJobResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```csharp
private void PutClusterConfig(SagemakerModelQualityJobDefinitionJobResourcesClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionJobResourcesClusterConfig ClusterConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionJobResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---


### SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerArguments` <a name="ResetContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```csharp
private void ResetContainerArguments()
```

##### `ResetContainerEntrypoint` <a name="ResetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```csharp
private void ResetContainerEntrypoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetPostAnalyticsProcessorSourceUri` <a name="ResetPostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```csharp
private void ResetPostAnalyticsProcessorSourceUri()
```

##### `ResetRecordPreprocessorSourceUri` <a name="ResetRecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```csharp
private void ResetRecordPreprocessorSourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput">ContainerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput">ContainerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">PostAnalyticsProcessorSourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">RecordPreprocessorSourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType">ProblemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerArgumentsInput`<sup>Optional</sup> <a name="ContainerArgumentsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```csharp
public string[] ContainerArgumentsInput { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypointInput`<sup>Optional</sup> <a name="ContainerEntrypointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```csharp
public string[] ContainerEntrypointInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `PostAnalyticsProcessorSourceUriInput`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```csharp
public string PostAnalyticsProcessorSourceUriInput { get; }
```

- *Type:* string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput"></a>

```csharp
public string ProblemTypeInput { get; }
```

- *Type:* string

---

##### `RecordPreprocessorSourceUriInput`<sup>Optional</sup> <a name="RecordPreprocessorSourceUriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```csharp
public string RecordPreprocessorSourceUriInput { get; }
```

- *Type:* string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; }
```

- *Type:* string[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `PostAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```csharp
public string PostAnalyticsProcessorSourceUri { get; }
```

- *Type:* string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType"></a>

```csharp
public string ProblemType { get; }
```

- *Type:* string

---

##### `RecordPreprocessorSourceUri`<sup>Required</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```csharp
public string RecordPreprocessorSourceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityAppSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```csharp
private void PutConstraintsResource(SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---

##### `ResetBaseliningJobName` <a name="ResetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```csharp
private void ResetBaseliningJobName()
```

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```csharp
private void ResetConstraintsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput">BaseliningJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference ConstraintsResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `BaseliningJobNameInput`<sup>Optional</sup> <a name="BaseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```csharp
public string BaseliningJobNameInput { get; }
```

- *Type:* string

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource ConstraintsResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```csharp
public string BaseliningJobName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityBaselineConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```csharp
public bool|IResolvable HeaderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```csharp
public bool|IResolvable Header { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```csharp
private void ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```csharp
public bool|IResolvable LineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```csharp
public bool|IResolvable Line { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```csharp
private void PutCsv(SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```csharp
private void PutJson(SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```csharp
private void ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetParquet` <a name="ResetParquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```csharp
private void ResetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">ParquetInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv CsvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson JsonInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ParquetInput`<sup>Optional</sup> <a name="ParquetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```csharp
public bool|IResolvable ParquetInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```csharp
public bool|IResolvable Parquet { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```csharp
private void PutDatasetFormat(SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetDataCapturedDestinationS3Uri` <a name="ResetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```csharp
private void ResetDataCapturedDestinationS3Uri()
```

##### `ResetDatasetFormat` <a name="ResetDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```csharp
private void ResetDatasetFormat()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```csharp
private void ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```csharp
private void ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute"></a>

```csharp
private void ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```csharp
private void ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```csharp
private void ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference DatasetFormat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```csharp
public string DataCapturedDestinationS3UriInput { get; }
```

- *Type:* string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat DatasetFormatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput"></a>

```csharp
public string EndTimeOffsetInput { get; }
```

- *Type:* string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```csharp
public string InferenceAttributeInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```csharp
public string ProbabilityAttributeInput { get; }
```

- *Type:* string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```csharp
public double ProbabilityThresholdAttributeInput { get; }
```

- *Type:* double

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```csharp
public string S3DataDistributionTypeInput { get; }
```

- *Type:* string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```csharp
public string S3InputModeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```csharp
public string DataCapturedDestinationS3Uri { get; }
```

- *Type:* string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; }
```

- *Type:* string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```csharp
public string InferenceAttribute { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```csharp
public string ProbabilityAttribute { get; }
```

- *Type:* string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```csharp
public double ProbabilityThresholdAttribute { get; }
```

- *Type:* double

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; }
```

- *Type:* string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```csharp
private void ResetEndpointName()
```

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```

##### `ResetInferenceAttribute` <a name="ResetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```csharp
private void ResetInferenceAttribute()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```csharp
private void ResetProbabilityAttribute()
```

##### `ResetProbabilityThresholdAttribute` <a name="ResetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute"></a>

```csharp
private void ResetProbabilityThresholdAttribute()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```csharp
private void ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```csharp
private void ResetS3InputMode()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput">InferenceAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput">ProbabilityThresholdAttributeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute">InferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">ProbabilityThresholdAttribute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput"></a>

```csharp
public string EndTimeOffsetInput { get; }
```

- *Type:* string

---

##### `InferenceAttributeInput`<sup>Optional</sup> <a name="InferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```csharp
public string InferenceAttributeInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```csharp
public string ProbabilityAttributeInput { get; }
```

- *Type:* string

---

##### `ProbabilityThresholdAttributeInput`<sup>Optional</sup> <a name="ProbabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```csharp
public double ProbabilityThresholdAttributeInput { get; }
```

- *Type:* double

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```csharp
public string S3DataDistributionTypeInput { get; }
```

- *Type:* string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```csharp
public string S3InputModeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; }
```

- *Type:* string

---

##### `InferenceAttribute`<sup>Required</sup> <a name="InferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```csharp
public string InferenceAttribute { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```csharp
public string ProbabilityAttribute { get; }
```

- *Type:* string

---

##### `ProbabilityThresholdAttribute`<sup>Required</sup> <a name="ProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```csharp
public double ProbabilityThresholdAttribute { get; }
```

- *Type:* double

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; }
```

- *Type:* string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput"></a>

```csharp
private void PutBatchTransformInput(SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput"></a>

```csharp
private void PutEndpointInput(SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---

##### `PutGroundTruthS3Input` <a name="PutGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input"></a>

```csharp
private void PutGroundTruthS3Input(SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetBatchTransformInput"></a>

```csharp
private void ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetEndpointInput"></a>

```csharp
private void ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input">GroundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput">GroundTruthS3InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference BatchTransformInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference EndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a>

---

##### `GroundTruthS3Input`<sup>Required</sup> <a name="GroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference GroundTruthS3Input { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput BatchTransformInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput EndpointInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---

##### `GroundTruthS3InputInput`<sup>Optional</sup> <a name="GroundTruthS3InputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input GroundTruthS3InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get"></a>

```csharp
private SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```csharp
private void PutS3Output(SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference S3Output { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output S3OutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```csharp
private void ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```csharp
public string S3UploadModeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```csharp
public string S3UploadMode { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```csharp
private void PutMonitoringOutputs(IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```csharp
public SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList MonitoringOutputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[] MonitoringOutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---


### SagemakerModelQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```csharp
private void ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```csharp
private void ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```csharp
public SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```csharp
public bool|IResolvable EnableNetworkIsolationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```csharp
public bool|IResolvable EnableNetworkIsolation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionNetworkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---


### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerModelQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionStoppingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```csharp
private void ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```csharp
public double MaxRuntimeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```csharp
public double MaxRuntimeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionStoppingCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---


### SagemakerModelQualityJobDefinitionTagsList <a name="SagemakerModelQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get"></a>

```csharp
private SagemakerModelQualityJobDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>[]

---


### SagemakerModelQualityJobDefinitionTagsOutputReference <a name="SagemakerModelQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerModelQualityJobDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerModelQualityJobDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>

---



