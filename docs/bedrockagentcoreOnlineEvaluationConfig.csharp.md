# `bedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`bedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOnlineEvaluationConfig <a name="BedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfig(Construct Scope, string Id, BedrockagentcoreOnlineEvaluationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig">PutClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig">PutDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators">PutEvaluators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights">PutInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetClusteringConfig">ResetClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluators">ResetEvaluators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus">ResetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetInsights">ResetInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusteringConfig` <a name="PutClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig"></a>

```csharp
private void PutClusteringConfig(BedrockagentcoreOnlineEvaluationConfigClusteringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putClusteringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---

##### `PutDataSourceConfig` <a name="PutDataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig"></a>

```csharp
private void PutDataSourceConfig(BedrockagentcoreOnlineEvaluationConfigDataSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---

##### `PutEvaluators` <a name="PutEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators"></a>

```csharp
private void PutEvaluators(IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---

##### `PutInsights` <a name="PutInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights"></a>

```csharp
private void PutInsights(IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putInsights.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule"></a>

```csharp
private void PutRule(BedrockagentcoreOnlineEvaluationConfigRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockagentcoreOnlineEvaluationConfigTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---

##### `ResetClusteringConfig` <a name="ResetClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetClusteringConfig"></a>

```csharp
private void ResetClusteringConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEvaluators` <a name="ResetEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluators"></a>

```csharp
private void ResetEvaluators()
```

##### `ResetExecutionStatus` <a name="ResetExecutionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus"></a>

```csharp
private void ResetExecutionStatus()
```

##### `ResetInsights` <a name="ResetInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetInsights"></a>

```csharp
private void ResetInsights()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreOnlineEvaluationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreOnlineEvaluationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreOnlineEvaluationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreOnlineEvaluationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig">ClusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluators">Evaluators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList">BedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insights">Insights</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList">BedrockagentcoreOnlineEvaluationConfigInsightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">OnlineEvaluationConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">OnlineEvaluationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList">BedrockagentcoreOnlineEvaluationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfigInput">ClusteringConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput">DataSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput">EvaluationExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorsInput">EvaluatorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput">ExecutionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insightsInput">InsightsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput">OnlineEvaluationConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">EvaluationExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus">ExecutionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">OnlineEvaluationConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusteringConfig`<sup>Required</sup> <a name="ClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference ClusteringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference DataSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a>

---

##### `Evaluators`<sup>Required</sup> <a name="Evaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluators"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigEvaluatorsList Evaluators { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList">BedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Insights`<sup>Required</sup> <a name="Insights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insights"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigInsightsList Insights { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList">BedrockagentcoreOnlineEvaluationConfigInsightsList</a>

---

##### `OnlineEvaluationConfigArn`<sup>Required</sup> <a name="OnlineEvaluationConfigArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```csharp
public string OnlineEvaluationConfigArn { get; }
```

- *Type:* string

---

##### `OnlineEvaluationConfigId`<sup>Required</sup> <a name="OnlineEvaluationConfigId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```csharp
public string OnlineEvaluationConfigId { get; }
```

- *Type:* string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList">BedrockagentcoreOnlineEvaluationConfigTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ClusteringConfigInput`<sup>Optional</sup> <a name="ClusteringConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.clusteringConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigClusteringConfig ClusteringConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---

##### `DataSourceConfigInput`<sup>Optional</sup> <a name="DataSourceConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigDataSourceConfig DataSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EvaluationExecutionRoleArnInput`<sup>Optional</sup> <a name="EvaluationExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput"></a>

```csharp
public string EvaluationExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `EvaluatorsInput`<sup>Optional</sup> <a name="EvaluatorsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorsInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators[] EvaluatorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---

##### `ExecutionStatusInput`<sup>Optional</sup> <a name="ExecutionStatusInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput"></a>

```csharp
public string ExecutionStatusInput { get; }
```

- *Type:* string

---

##### `InsightsInput`<sup>Optional</sup> <a name="InsightsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.insightsInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights[] InsightsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---

##### `OnlineEvaluationConfigNameInput`<sup>Optional</sup> <a name="OnlineEvaluationConfigNameInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput"></a>

```csharp
public string OnlineEvaluationConfigNameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EvaluationExecutionRoleArn`<sup>Required</sup> <a name="EvaluationExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```csharp
public string EvaluationExecutionRoleArn { get; }
```

- *Type:* string

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```csharp
public string ExecutionStatus { get; }
```

- *Type:* string

---

##### `OnlineEvaluationConfigName`<sup>Required</sup> <a name="OnlineEvaluationConfigName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```csharp
public string OnlineEvaluationConfigName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOnlineEvaluationConfigClusteringConfig <a name="BedrockagentcoreOnlineEvaluationConfigClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigClusteringConfig {
    string[] Frequencies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.property.frequencies">Frequencies</a></code> | <code>string[]</code> | The list of frequencies at which clustering reports are generated. |

---

##### `Frequencies`<sup>Optional</sup> <a name="Frequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig.property.frequencies"></a>

```csharp
public string[] Frequencies { get; set; }
```

- *Type:* string[]

The list of frequencies at which clustering reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#frequencies BedrockagentcoreOnlineEvaluationConfig#frequencies}

---

### BedrockagentcoreOnlineEvaluationConfigConfig <a name="BedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BedrockagentcoreOnlineEvaluationConfigDataSourceConfig DataSourceConfig,
    string EvaluationExecutionRoleArn,
    string OnlineEvaluationConfigName,
    BedrockagentcoreOnlineEvaluationConfigRule Rule,
    BedrockagentcoreOnlineEvaluationConfigClusteringConfig ClusteringConfig = null,
    string Description = null,
    IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators[] Evaluators = null,
    string ExecutionStatus = null,
    IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights[] Insights = null,
    IResolvable|BedrockagentcoreOnlineEvaluationConfigTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | The data source configuration that specifies CloudWatch log groups and service names to monitor. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn">EvaluationExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName">OnlineEvaluationConfigName</a></code> | <code>string</code> | The name of the online evaluation configuration. Must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | The evaluation rule that defines sampling configuration, filters, and session detection settings. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.clusteringConfig">ClusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | The configuration for clustering analysis of evaluation results. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description">Description</a></code> | <code>string</code> | The description of the online evaluation configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluators">Evaluators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | The list of evaluators to apply during online evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus">ExecutionStatus</a></code> | <code>string</code> | The execution status indicating whether the online evaluation is currently running. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.insights">Insights</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | The list of insights to enable for failure analysis. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | A list of tags to assign to the online evaluation configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigDataSourceConfig DataSourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

The data source configuration that specifies CloudWatch log groups and service names to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `EvaluationExecutionRoleArn`<sup>Required</sup> <a name="EvaluationExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn"></a>

```csharp
public string EvaluationExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}

---

##### `OnlineEvaluationConfigName`<sup>Required</sup> <a name="OnlineEvaluationConfigName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName"></a>

```csharp
public string OnlineEvaluationConfigName { get; set; }
```

- *Type:* string

The name of the online evaluation configuration. Must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

The evaluation rule that defines sampling configuration, filters, and session detection settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `ClusteringConfig`<sup>Optional</sup> <a name="ClusteringConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.clusteringConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigClusteringConfig ClusteringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

The configuration for clustering analysis of evaluation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#clustering_config BedrockagentcoreOnlineEvaluationConfig#clustering_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the online evaluation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}

---

##### `Evaluators`<sup>Optional</sup> <a name="Evaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluators"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators[] Evaluators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

The list of evaluators to apply during online evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluators BedrockagentcoreOnlineEvaluationConfig#evaluators}

---

##### `ExecutionStatus`<sup>Optional</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus"></a>

```csharp
public string ExecutionStatus { get; set; }
```

- *Type:* string

The execution status indicating whether the online evaluation is currently running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}

---

##### `Insights`<sup>Optional</sup> <a name="Insights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.insights"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights[] Insights { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

The list of insights to enable for failure analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#insights BedrockagentcoreOnlineEvaluationConfig#insights}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

A list of tags to assign to the online evaluation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigDataSourceConfig {
    BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs CloudwatchLogs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | The configuration for reading agent traces from CloudWatch logs. |

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

The configuration for reading agent traces from CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs {
    string[] LogGroupNames,
    string[] ServiceNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames">LogGroupNames</a></code> | <code>string[]</code> | The list of CloudWatch log group names to monitor for agent traces. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames">ServiceNames</a></code> | <code>string[]</code> | The list of service names to filter traces within the specified log groups. |

---

##### `LogGroupNames`<sup>Required</sup> <a name="LogGroupNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames"></a>

```csharp
public string[] LogGroupNames { get; set; }
```

- *Type:* string[]

The list of CloudWatch log group names to monitor for agent traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}

---

##### `ServiceNames`<sup>Required</sup> <a name="ServiceNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames"></a>

```csharp
public string[] ServiceNames { get; set; }
```

- *Type:* string[]

The list of service names to filter traces within the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}

---

### BedrockagentcoreOnlineEvaluationConfigEvaluators <a name="BedrockagentcoreOnlineEvaluationConfigEvaluators" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigEvaluators {
    string EvaluatorId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.property.evaluatorId">EvaluatorId</a></code> | <code>string</code> | The unique identifier of the evaluator. |

---

##### `EvaluatorId`<sup>Optional</sup> <a name="EvaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators.property.evaluatorId"></a>

```csharp
public string EvaluatorId { get; set; }
```

- *Type:* string

The unique identifier of the evaluator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}

---

### BedrockagentcoreOnlineEvaluationConfigInsights <a name="BedrockagentcoreOnlineEvaluationConfigInsights" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigInsights {
    string InsightId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.property.insightId">InsightId</a></code> | <code>string</code> | The unique identifier of the insight. |

---

##### `InsightId`<sup>Optional</sup> <a name="InsightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights.property.insightId"></a>

```csharp
public string InsightId { get; set; }
```

- *Type:* string

The unique identifier of the insight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#insight_id BedrockagentcoreOnlineEvaluationConfig#insight_id}

---

### BedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigOutputConfig {

};
```


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig {

};
```


### BedrockagentcoreOnlineEvaluationConfigRule <a name="BedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRule {
    BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig SamplingConfig,
    IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters[] Filters = null,
    BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig SessionConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig">SamplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | The configuration that controls what percentage of agent traces are sampled for evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | The list of filters that determine which agent traces should be included in the evaluation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig">SessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | The configuration that defines how agent sessions are detected. |

---

##### `SamplingConfig`<sup>Required</sup> <a name="SamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig SamplingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

The configuration that controls what percentage of agent traces are sampled for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filters"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

The list of filters that determine which agent traces should be included in the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#filters BedrockagentcoreOnlineEvaluationConfig#filters}

---

##### `SessionConfig`<sup>Optional</sup> <a name="SessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig SessionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

The configuration that defines how agent sessions are detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilters <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleFilters {
    string Key = null,
    string Operator = null,
    BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.key">Key</a></code> | <code>string</code> | The key or field name to filter on within the agent trace data. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.operator">Operator</a></code> | <code>string</code> | The comparison operator to use for filtering. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | The value used in filter comparisons. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key or field name to filter on within the agent trace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The comparison operator to use for filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters.property.value"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

The value used in filter comparisons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue {
    bool|IResolvable BooleanValue = null,
    double DoubleValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The boolean value for true/false filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.doubleValue">DoubleValue</a></code> | <code>double</code> | The numeric value for numerical filtering. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.stringValue">StringValue</a></code> | <code>string</code> | The string value for text-based filtering. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The boolean value for true/false filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

The numeric value for numerical filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The string value for text-based filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig {
    double SamplingPercentage
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | The percentage of agent traces to sample for evaluation. |

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; set; }
```

- *Type:* double

The percentage of agent traces to sample for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}

---

### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig {
    double SessionTimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | The number of minutes of inactivity after which an agent session is considered complete. |

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; set; }
```

- *Type:* double

The number of minutes of inactivity after which an agent session is considered complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}

---

### BedrockagentcoreOnlineEvaluationConfigTags <a name="BedrockagentcoreOnlineEvaluationConfigTags" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resetFrequencies">ResetFrequencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequencies` <a name="ResetFrequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resetFrequencies"></a>

```csharp
private void ResetFrequencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequenciesInput">FrequenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies">Frequencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequenciesInput`<sup>Optional</sup> <a name="FrequenciesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequenciesInput"></a>

```csharp
public string[] FrequenciesInput { get; }
```

- *Type:* string[]

---

##### `Frequencies`<sup>Required</sup> <a name="Frequencies" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies"></a>

```csharp
public string[] Frequencies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigClusteringConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigClusteringConfig">BedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput">LogGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput">ServiceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">LogGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">ServiceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNamesInput`<sup>Optional</sup> <a name="LogGroupNamesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput"></a>

```csharp
public string[] LogGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `ServiceNamesInput`<sup>Optional</sup> <a name="ServiceNamesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput"></a>

```csharp
public string[] ServiceNamesInput { get; }
```

- *Type:* string[]

---

##### `LogGroupNames`<sup>Required</sup> <a name="LogGroupNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```csharp
public string[] LogGroupNames { get; }
```

- *Type:* string[]

---

##### `ServiceNames`<sup>Required</sup> <a name="ServiceNames" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```csharp
public string[] ServiceNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigDataSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorsList <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigEvaluatorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get"></a>

```csharp
private BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resetEvaluatorId">ResetEvaluatorId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluatorId` <a name="ResetEvaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resetEvaluatorId"></a>

```csharp
private void ResetEvaluatorId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorIdInput">EvaluatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId">EvaluatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluatorIdInput`<sup>Optional</sup> <a name="EvaluatorIdInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorIdInput"></a>

```csharp
public string EvaluatorIdInput { get; }
```

- *Type:* string

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId"></a>

```csharp
public string EvaluatorId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigEvaluators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluators">BedrockagentcoreOnlineEvaluationConfigEvaluators</a>

---


### BedrockagentcoreOnlineEvaluationConfigInsightsList <a name="BedrockagentcoreOnlineEvaluationConfigInsightsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigInsightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get"></a>

```csharp
private BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resetInsightId">ResetInsightId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInsightId` <a name="ResetInsightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resetInsightId"></a>

```csharp
private void ResetInsightId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightIdInput">InsightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId">InsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsightIdInput`<sup>Optional</sup> <a name="InsightIdInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightIdInput"></a>

```csharp
public string InsightIdInput { get; }
```

- *Type:* string

---

##### `InsightId`<sup>Required</sup> <a name="InsightId" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId"></a>

```csharp
public string InsightId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigInsights InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigInsights">BedrockagentcoreOnlineEvaluationConfigInsights</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchConfig`<sup>Required</sup> <a name="CloudwatchConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference CloudwatchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get"></a>

```csharp
private BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue"></a>

```csharp
private void PutValue(BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.valueInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">BedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig">PutSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig">PutSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig">ResetSessionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---

##### `PutSamplingConfig` <a name="PutSamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig"></a>

```csharp
private void PutSamplingConfig(BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---

##### `PutSessionConfig` <a name="PutSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig"></a>

```csharp
private void PutSessionConfig(BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetSessionConfig` <a name="ResetSessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig"></a>

```csharp
private void ResetSessionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList">BedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">SamplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">SessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput">SamplingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput">SessionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFiltersList">BedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a>

---

##### `SamplingConfig`<sup>Required</sup> <a name="SamplingConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference SamplingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a>

---

##### `SessionConfig`<sup>Required</sup> <a name="SessionConfig" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```csharp
public BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference SessionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilters">BedrockagentcoreOnlineEvaluationConfigRuleFilters</a>[]

---

##### `SamplingConfigInput`<sup>Optional</sup> <a name="SamplingConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig SamplingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---

##### `SessionConfigInput`<sup>Optional</sup> <a name="SessionConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig SessionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput"></a>

```csharp
public double SamplingPercentageInput { get; }
```

- *Type:* double

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resetSessionTimeoutMinutes"></a>

```csharp
private void ResetSessionTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput"></a>

```csharp
public double SessionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigTagsList <a name="BedrockagentcoreOnlineEvaluationConfigTagsList" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get"></a>

```csharp
private BedrockagentcoreOnlineEvaluationConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigTagsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreOnlineEvaluationConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOnlineEvaluationConfigTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTags">BedrockagentcoreOnlineEvaluationConfigTags</a>

---



